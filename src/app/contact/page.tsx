import Link from "next/link";
import Image from "next/image";
import { Github, Instagram, Youtube, Linkedin, Mail } from "lucide-react";

export default function Contact() {
    const iconProps = {
        size: 50,
        strokeWidth: 1.5
    }

    return (
        <>
            <header className="blog-header">
                <h1 className="h1">Contact</h1>
            </header>
            <section className="socials-section">
                <h2>Socials</h2>
                <div className="container">
                    <Link href="https://github.com/Deltaximity"><Github {...iconProps} /></Link>
                    <Link href="/"><Instagram {...iconProps} /></Link>
                    <Link href="/"><Youtube {...iconProps} /></Link>
                    <Link href="/"><Linkedin {...iconProps} /></Link>
                </div>
            </section>
            <section className="say-hello-section">
                <h2>Say Hello</h2>
                <div className="image-container">
                    <p className="h3">Leaves</p>
                    <Image 
                        src="/assets/img/DSC00402.jpg"
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 50vw"
                        style={{ objectFit: "cover" }}
                        />
                    <p className="h3">XXIII</p>
                </div>
                <Link href="mailto:hello@deltaximity.com" className="primary-button"><Mail size={20} />hello@deltaximity.com</Link>
            </section>
        </>
    )
}