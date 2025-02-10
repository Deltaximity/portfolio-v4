import Image from "next/image";
import Link from "next/link";
import { Camera, ChartSpline, KeyboardMusic, MessageCircleQuestion, Microchip, MonitorCheck } from "lucide-react";
import SayHello from "@/components/SayHello";

export default function About() {
    return (
        <>
            <section id="about-me">
                <h2 className="h1">About me</h2>
                <div className="container">
                    <div className="image-container">
                        <Image 
                            src="/assets/img/DSC00402.jpg"
                            alt="Leaves"
                            fill
                            sizes="50vw"
                            style={{ objectFit: "cover" }}
                            />
                    </div>
                    <div className="content">
                        <h2 className="h2">Hej! 🥹</h2>
                        <p>I'm a web developer based in Sweden 🇸🇪. I have a knack for clean code, a passion for open-source software, and an eye for detail. When I'm not coding, you'll find me making music, capturing life through photography, or working on my next project—whether it's electronics, design, or solving human problems (we all have those right?).</p>
                        <p>— Hasan Ali</p>
                    </div>
                </div>
            </section>
            <section id="at-work">
                <h2 className="h2">Me at Work</h2>
                <div className="container">
                    <div className="item">
                        <h3>Problem-Solving is ❤️</h3>
                        <p>I thrive on problem-solving. Whether it's debugging code, crafting interactive experiences, or figuring out how to make a noise overlay pixel-perfect in Next.js (yes, really). I believe in creating things that are not only functional but also meaningful, intuitive, and a joy to use.</p>
                    </div>
                    <div className="item">
                        <h3>Reducing Friction</h3>
                        <p><i>When you're working on a task, and you find it <strong>difficult</strong> to do... do you wonder if it's something to do with you, or something to do with the tool you're using?</i></p>
                        <p>My job is to minimize friction of using the tools, so that you can work on what really matters.</p>
                    </div>
                    <div className="item">
                        <h3>Thinking in Systems</h3>
                        <p>The bigger picture, connecting the dots. How does one very specific feature work and interact with other features in the system?</p>
                        <p>I like to build things that evolve into one cohesive system. A system that not only works seamlessly but also feels intuitive and meaningful to those who use it.</p>
                    </div>
                </div>
            </section>
            <section>
                <h2 className="h2">Background</h2>
                <div className="container">
                    <p>I come from a diverse background, both culturally and technically. Over the years I've learned and adopted different viewpoints and approaches to human problems and design, and I'm constantly improving and adapting my approaches. <strong>Forever a learner</strong>.</p>
                    <p>I have a background in <b>teaching</b> and <b>tutoring</b>. How do you teach—let alone communicate with—someone who doesn't speak the language? This is like a developer talking in technical terms to regular people. It's all about breaking down complex concepts into simple, relatable, human terms that even a 5 year-old can understand.</p>
                </div>
            </section>
            <section>
                <h2 className="h2">Right Now</h2>
                <p>Right now, I'm refining my portfolio, experimenting with Framer Motion animations, and exploring Notion scripting to automate workflows. I'm also on a journey to balance creativity and productivity, one step at a time.</p>
            </section>
            <section id="more-about-me">
                <h2>More about me</h2>
                <div className="container">
                    <div className="item">
                        <KeyboardMusic className="icon" size={36} strokeWidth={1.5} />
                        <h3>Music</h3>
                        <p>I play guitar and piano, I also record and create a lot of music on GarageBand, Logic X, and Ableton Live. Est. 2016.</p>
                        <h4>Gear</h4>
                        <ul>
                            <li>Guitars: Yamaha Pacifica 112, Epiphone Acoustic Guitar, Amada Classical Guitar</li>
                            <li>Piano: M-audio Keystation 61 mk3</li>
                            <li>Guitar amp: Marshall GX30</li>
                            <li>Audio unit: Focusrite Scarlett Solo 3rd Gen</li>
                            <li>Mic: Fifine T669</li>
                        </ul>
                        <p></p>
                    </div>
                    <div className="item">
                        <Camera className="icon" size={36} strokeWidth={1.5} />
                        <h3>Photography</h3>
                        <p>I love photography, especially capturing nature and cityscapes 🌿.</p>
                        <h4>Gear</h4>
                        <ul>
                            <li>Cameras: Sony α7ii, Sony α3000</li>
                            <li>Lenses:
                                <ul>
                                    <li>Samyang AF 24mm f/1.8</li>
                                    <li>Sony FE 28-70mm f/3.5-5.6</li>
                                    <li>Viltrox AF 85mm f/1.8 STM</li>
                                    <li>Panagor Auto Tele 200mm f/1-3.5</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="item">
                        <Microchip className="icon" size={36} strokeWidth={1.5} />
                        <h3>Electronics</h3>
                        <p>I enjoy working with electronics, from soldering items to coding automated scripts. Yes, if a <i>very specific</i> problem needs a <i>very specific</i> solution, I'll go out of my way to make my own.</p>
                    </div>
                </div>
            </section>
            <section id="get-in-touch">
                <h2>Get in touch</h2>
                <p>I'm a front-end developer who's passionate about transforming complex challenges into clean intuitive digital experiences. I thrive on solving real human problems with tech, whether it's crafting pixel-perfect UIs or building cohesive systems from scratch.</p>
                <h3>Why Reach Out?</h3>
                <div className="container">
                    <div className="item">
                        <MonitorCheck className="icon" size={36} strokeWidth={1.5} />
                        <h3>Innovative Solutions</h3>
                        <p>I love turning ideas into impactful, user-friendly applications (like the Hotspot App).</p>
                    </div>
                    <div className="item">
                        <MessageCircleQuestion className="icon" size={36} strokeWidth={1.5} />
                        <h3>Creative Problem-Solving</h3>
                        <p>My diverse background—from teaching to electronics—means I bring a unique perspective to every project.</p>
                    </div>
                    <div className="item">
                        <ChartSpline className="icon" size={36} strokeWidth={1.5} />
                        <h3>Continuous Growth</h3>
                        <p>I’m always learning, experimenting with new technologies (Next.js, Framer Motion, Notion scripting), and refining my craft.</p>
                    </div>
                </div>
                <p>If you’re looking for someone who not only writes clean code but also understands how to make technology work for people, I’d love to chat about how I can contribute to your team.</p>
                <p><b>Reach me at:</b> <Link href="mailto:hello@deltaximity.com">hello@deltaximity.com</Link> or connect with me on <Link href="https://www.linkedin.com/in/hasan-ali-955aaa295/">LinkedIn</Link></p>
            </section>
            <SayHello />
        </>
    )
}