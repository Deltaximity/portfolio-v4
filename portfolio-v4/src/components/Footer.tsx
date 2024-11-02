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
                            <Linkedin />
                            <Instagram />
                            <Youtube />
                            <Github />
                        </div>
                    </div>
                    <div className="links">
                        <h4>Pages</h4>
                        {navLinks.map((item) => (
                            <Link key={item.href} href={item.href}><p>{item.label}</p></Link>
                        ))}
                    </div>
                    <div className="links">
                        <h4>Links</h4>
                        <p>link</p>
                        <p>link</p>
                        <p>link</p>
                    </div>
                </div>
            </div>
            <div className="credits">
                <div className="content-wrapper">
                    <p>Made with <Heart size={16} /> by Hasan Ali</p>
                    <p>© Deltaximity - All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}