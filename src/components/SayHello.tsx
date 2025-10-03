import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function SayHello() {
  return (
    <section className="say-hello-section">
      <h2>Say Hello</h2>
      <div className="image-container">
        <p className="h3">Hasan</p>
        <Image 
          src="/assets/img/DSC00402.jpg"
          alt="Leaves"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          />
        <p className="h3">Ali</p>
      </div>
      <Link href="mailto:hello@deltaximity.com" className="primary-button"><Mail size={20} />hello@deltaximity.com</Link>
      <p>Let's create something <strong>impactful</strong> together.</p>
    </section>
  )
}