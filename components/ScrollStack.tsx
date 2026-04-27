import React, { useLayoutEffect, useRef, useCallback } from 'react';
import type { ReactNode } from 'react';
import Lenis from 'lenis';

export interface ScrollStackItemProps {
    itemClassName?: string;
    children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
    <div
        className={`scroll-stack-card relative w-full min-h-[350px] md:h-[400px] my-8 p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-2xl bg-white/5 box-border origin-top will-change-transform ${itemClassName}`.trim()}
        style={{
            backfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d'
        }}
    >
        {children}
    </div>
);

interface ScrollStackProps {
    className?: string;
    children: ReactNode;
    itemDistance?: number;
    itemScale?: number;
    itemStackDistance?: number;
    stackPosition?: string;
    scaleEndPosition?: string;
    baseScale?: number;
    scaleDuration?: number;
    rotationAmount?: number;
    blurAmount?: number;
    useWindowScroll?: boolean;
    onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
    children,
    className = '',
    itemDistance = 60,
    itemScale = 0.03,
    itemStackDistance = 20,
    stackPosition = '35%', // Lowered to avoid overlapping navbar and better alignment
    scaleEndPosition = '25%', // Adjusted accordingly
    baseScale = 0.85,
    scaleDuration = 0.5,
    rotationAmount = 0,
    blurAmount = 0,
    useWindowScroll = true,
    onStackComplete
}) => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const stackCompletedRef = useRef(false);
    const animationFrameRef = useRef<number | null>(null);
    const lenisRef = useRef<Lenis | null>(null);
    const cardsRef = useRef<HTMLElement[]>([]);
    const lastTransformsRef = useRef(new Map<number, any>());
    const isUpdatingRef = useRef(false);
    const cardOffsetsRef = useRef<number[]>([]);

    const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
        if (scrollTop < start) return 0;
        if (scrollTop > end) return 1;
        return (scrollTop - start) / (end - start);
    }, []);

    const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
        if (typeof value === 'string' && value.includes('%')) {
            return (parseFloat(value) / 100) * containerHeight;
        }
        return parseFloat(value as string);
    }, []);

    const getScrollData = useCallback(() => {
        if (useWindowScroll) {
            return {
                scrollTop: window.scrollY,
                containerHeight: window.innerHeight,
            };
        } else {
            const scroller = scrollerRef.current;
            return {
                scrollTop: scroller ? scroller.scrollTop : 0,
                containerHeight: scroller ? scroller.clientHeight : 0,
            };
        }
    }, [useWindowScroll]);

    const updateCardTransforms = useCallback(() => {
        if (!cardsRef.current.length || isUpdatingRef.current) return;

        isUpdatingRef.current = true;

        const { scrollTop, containerHeight } = getScrollData();
        const stackPositionPx = parsePercentage(stackPosition, containerHeight);
        const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

        const scroller = useWindowScroll ? document.documentElement : scrollerRef.current;
        if (!scroller) {
            isUpdatingRef.current = false;
            return;
        }

        const endElement = scroller.querySelector('.scroll-stack-end') as HTMLElement | null;
        let endElementTop = 0;
        if (endElement) {
            if (useWindowScroll) {
                const rect = endElement.getBoundingClientRect();
                endElementTop = rect.top + window.scrollY;
            } else {
                endElementTop = endElement.offsetTop;
            }
        }

        cardsRef.current.forEach((card, i) => {
            if (!card) return;

            const cardTop = cardOffsetsRef.current[i] || 0;
            if (cardTop === 0) return;

            const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
            const pinEnd = endElementTop - containerHeight / 2;

            const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
            const triggerEnd = cardTop - scaleEndPositionPx;

            const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
            const targetScale = baseScale + i * itemScale;
            const scale = 1 - scaleProgress * (1 - targetScale);
            const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

            let blur = 0;
            if (blurAmount) {
                let topCardIndex = 0;
                for (let j = 0; j < cardsRef.current.length; j++) {
                    const jCardTop = cardOffsetsRef.current[j] || 0;
                    const jPinStart = jCardTop - stackPositionPx - itemStackDistance * j;
                    if (scrollTop >= jPinStart) {
                        topCardIndex = j;
                    }
                }
                if (i < topCardIndex) {
                    blur = (topCardIndex - i) * blurAmount;
                }
            }

            let translateY = 0;
            if (scrollTop >= pinStart && scrollTop <= pinEnd) {
                translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
            } else if (scrollTop > pinEnd) {
                translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
            }

            const transform = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(4)}) rotate(${rotation.toFixed(2)}deg)`;
            const filter = blur > 0 ? `blur(${blur.toFixed(2)}px)` : '';

            if (card.style.transform !== transform) card.style.transform = transform;
            if (card.style.filter !== filter) card.style.filter = filter;

            if (i === cardsRef.current.length - 1) {
                const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
                if (isInView && !stackCompletedRef.current) {
                    stackCompletedRef.current = true;
                    onStackComplete?.();
                } else if (!isInView && stackCompletedRef.current) {
                    stackCompletedRef.current = false;
                }
            }
        });

        isUpdatingRef.current = false;
    }, [
        itemScale,
        itemStackDistance,
        stackPosition,
        scaleEndPosition,
        baseScale,
        rotationAmount,
        blurAmount,
        useWindowScroll,
        onStackComplete,
        calculateProgress,
        parsePercentage,
        getScrollData,
    ]);

    const handleScroll = useCallback(() => {
        updateCardTransforms();
    }, [updateCardTransforms]);

    const setupLenis = useCallback(() => {
        const lenis = new Lenis({
            wrapper: useWindowScroll ? undefined : scrollerRef.current || undefined,
            content: useWindowScroll ? undefined : (scrollerRef.current?.querySelector('.scroll-stack-inner') as HTMLElement),
            lerp: 0.1,
            syncTouch: true,
        });

        lenis.on('scroll', handleScroll);

        const raf = (time: number) => {
            lenis.raf(time);
            animationFrameRef.current = requestAnimationFrame(raf);
        };
        animationFrameRef.current = requestAnimationFrame(raf);

        lenisRef.current = lenis;
        return lenis;
    }, [handleScroll, useWindowScroll]);

    useLayoutEffect(() => {
        const cards = Array.from(
            useWindowScroll
                ? document.querySelectorAll('.scroll-stack-card')
                : (scrollerRef.current?.querySelectorAll('.scroll-stack-card') ?? [])
        ) as HTMLElement[];
        cardsRef.current = cards;
        
        cards.forEach((card, i) => {
            if (i < cards.length - 1) {
                card.style.marginBottom = `${itemDistance}px`;
            }
            card.style.willChange = 'transform, filter';
            card.style.transformOrigin = 'top center';
            card.style.backfaceVisibility = 'hidden';
            card.style.webkitBackfaceVisibility = 'hidden';
            card.style.transform = 'translate3d(0,0,0)';
            card.style.zIndex = (i + 1).toString(); // Ensure correct stacking order
        });

        const updateOffsets = () => {
            cardOffsetsRef.current = cards.map(card => {
                if (useWindowScroll) {
                    const rect = card.getBoundingClientRect();
                    return rect.top + window.scrollY;
                }
                return card.offsetTop;
            });
            updateCardTransforms();
        };

        const timer = setTimeout(updateOffsets, 200);
        window.addEventListener('resize', updateOffsets);

        setupLenis();

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', updateOffsets);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (lenisRef.current) {
                lenisRef.current.destroy();
            }
            stackCompletedRef.current = false;
            cardsRef.current = [];
            cardOffsetsRef.current = [];
            isUpdatingRef.current = false;
        };
    }, [
        itemDistance,
        itemScale,
        itemStackDistance,
        stackPosition,
        scaleEndPosition,
        baseScale,
        scaleDuration,
        rotationAmount,
        blurAmount,
        useWindowScroll,
        onStackComplete,
        setupLenis,
        updateCardTransforms
    ]);

    return (
        <div
            className={`scroll-stack-container relative w-full ${useWindowScroll ? 'h-auto overflow-visible' : 'h-full overflow-y-auto'} ${className}`.trim()}
            ref={scrollerRef}
            style={!useWindowScroll ? {
                overscrollBehavior: 'contain',
                WebkitOverflowScrolling: 'touch',
                scrollBehavior: 'smooth'
            } : {}}
        >
            <div className={`scroll-stack-inner ${useWindowScroll ? 'pt-0 pb-[30vh]' : 'pt-[20vh] pb-[50rem] min-h-screen'}`}>
                {children}
                <div className="scroll-stack-end w-full h-px" />
            </div>
        </div>
    );
};

export default ScrollStack;
