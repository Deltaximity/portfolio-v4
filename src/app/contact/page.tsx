import Link from "next/link";
import Image from "next/image";
import { Github, Instagram, Youtube, Linkedin } from "lucide-react";
import SayHello from "@/components/SayHello";

export const metadata = {
    title: 'Contact',
    description: 'Get in touch with Hasan Ali, a fullstack developer based in Sweden. Explore his social media profiles and reach out for collaborations or inquiries.',
}

export default function Contact() {
    const iconProps = {
        size: 50,
        strokeWidth: 1.5
    }

    return (
        <>
            <header className="blog-header">
                <h1>Contact</h1>
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
            <SayHello />
        </>
    )
}