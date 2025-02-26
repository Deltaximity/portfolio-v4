import Link from "next/link";
import { Linkedin, Mail, Github } from "lucide-react";

interface SocialsProps {
  size: number;
  strokeWidth: number;
}

export default function Socials({ size, strokeWidth }: SocialsProps) {
  return (
    <div className="socials">
      <Link href="https://www.linkedin.com/in/deltaximity/"><Linkedin size={size} strokeWidth={strokeWidth} /></Link>
      <Link href="mailto:hello@deltaximity.com"><Mail size={size} strokeWidth={strokeWidth} /></Link>
      <Link href="https://github.com/Deltaximity"><Github size={size} strokeWidth={strokeWidth} /></Link>
    </div>
  )
}