import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Instagram, Youtube } from 'lucide-react';
import { navLinks } from "./navLinks";
import { Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="content-wrapper">
                    <div className="logo-container">
                        <Image 
                            src="/assets/img/Logotype.png"
                            alt="Logo"
                            width={200}
                            height={0}
                            style={{objectFit: 'contain', height: '100%', width: 'auto'}}
                        />
                        <div className="socials">
                            <Link href="/"><Linkedin /></Link>
                            <Link href="/"><Instagram /></Link>
                            <Link href="/"><Youtube /></Link>
                            <Link href="https://github.com/Deltaximity"><Github /></Link>
                        </div>
                    </div>
                    <div className="links-container">
                        <div className="links">
                            <h4>Pages</h4>
                            {navLinks.map((item) => (
                                <Link key={item.href} href={item.href}><p>{item.label}</p></Link>
                            ))}
                        </div>
                        <div className="links">
                            <h4>Blogs</h4>
                            <Link href="/blog/hotspot-app"><p>Hotspot App</p></Link>
                            <Link href="/blog/automated-workflows-in-macos"><p>Automated Workflows in macOS</p></Link>
                            <Link href="/blog/designing-an-efficient-desk-setup"><p>Designing an Efficient Desk Setup</p></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="credits">
                <div className="content-wrapper fineprint">
                    <p>Made with <Heart size={14} /> by <Link href="https://github.com/Deltaximity">Hasan Ali</Link></p>
                    <p>© Deltaximity - All rights reserved</p>
                    <p>Version: <code>4.0.0-beta.62</code></p>
                </div>
            </div>
        </footer>
    )
}