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
                            <p>This is an example blog title</p>
                            <p>This is another example blog <title></title></p>
                            <p>And this is a really long example blog title</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="credits">
                <div className="content-wrapper fineprint">
                    <p>Made with <Heart size={14} /> by <Link href="https://github.com/Deltaximity">Hasan Ali</Link></p>
                    <p>© Deltaximity - All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}