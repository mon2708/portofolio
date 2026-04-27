"use client";

import AnimatedContent from "@/components/AnimatedContent";

const items = ["Next.js", "Tailwind", "React"];

export default function Skills() {
  return (
    <section className="py-16 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">
        Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <AnimatedContent
            key={i}
            distance={60}
            direction="vertical"
            duration={0.6}
            delay={i * 0.1}
            initialOpacity={0}
            animateOpacity
            threshold={0.1}
          >
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl text-center">
              {item}
            </div>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
}