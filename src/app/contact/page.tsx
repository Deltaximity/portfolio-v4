import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import SayHello from "@/components/SayHello";
import GetInTouch from "@/components/GetInTouch";

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
            <GetInTouch />
            <section className="socials-section">
                <h2>Socials</h2>
                <div className="container">
                    <Link href="https://github.com/Deltaximity"><Github {...iconProps} /></Link>
                    <Link href="mailto:hasali02@outlook.com"><Mail {...iconProps} /></Link>
                    <Link href="https://www.linkedin.com/in/deltaximity/"><Linkedin {...iconProps} /></Link>
                </div>
            </section>
            <SayHello />
        </>
    )
}