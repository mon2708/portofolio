"use client"
import { use } from 'react';
import LogoLoop from './LogoLoop';
import AnimatedContent from './AnimatedContent';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import styles from './Section.module.css';


type Props = {
  title: string
  content: string
}

export default function Section({ title, content }: Props) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        {title}
      </h2>
      <p className={styles.content}>
        {content}
      </p>
    </section>
  )
}