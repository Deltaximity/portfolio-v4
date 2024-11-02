import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { navLinks } from "./navLinks";

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
                            <Twitter />
                            <Instagram />
                            <Youtube />
                        </div>
                    </div>
                    <div className="links">
                        <h3>Pages</h3>
                        {navLinks.map((item) => (
                            <Link key={item.href} href={item.href}><p>{item.label}</p></Link>
                        ))}
                    </div>
                    <div className="links">
                        <h3>Recent</h3>
                        <p>link</p>
                        <p>link</p>
                        <p>link</p>
                    </div>
                </div>
            </div>
            <div className="credits">
                <div className="content-wrapper">
                    <p>Made by DELTA</p>
                    <p>© Deltaximity - All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}