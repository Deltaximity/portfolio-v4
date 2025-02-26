import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Instagram, Youtube, Mail } from 'lucide-react';
import { navLinks } from "./navLinks";
import Socials from "./Socials";

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
                        <Socials size={24} strokeWidth={2} />
                    </div>
                    <div className="links-container">
                        <div className="links">
                            <h4>Pages</h4>
                            {navLinks.map((item) => (
                                <Link key={item.href} href={item.href}><p>{item.label}</p></Link>
                            ))}
                        </div>
                        <div className="links">
                            <h4>Projects</h4>
                            <Link href="/projects/hotspot-app"><p>Hotspot App</p></Link>
                            <Link href="/"><p>Automated Workflows in macOS</p></Link>
                            <Link href="/"><p>Designing an Efficient Desk Setup</p></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="credits">
                <div className="content-wrapper fineprint">
                    <p>Made with <Heart size={14} /> by <Link href="https://github.com/Deltaximity">Hasan Ali</Link></p>
                    <p>© Deltaximity - All rights reserved</p>
                    <p>Version: <code>4.0.0-beta.63</code></p>
                </div>
            </div>
        </footer>
    )
}