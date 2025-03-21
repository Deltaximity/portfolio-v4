// import Header from '@/components/Header';
import Image from "next/image";
import Link from "next/link";
import About from "./about/page";
import Socials from "@/components/Socials";

export default function HomePage() {
  return (
    <>
      <header className="main-hero">
        <h1>Deltaximity</h1>
        <p className="subheading">Fullstack developer who loves solving human problems with tech.</p>
        <Socials size={34} strokeWidth={1.5} />
        <div className="hero-lambda">
          <svg className="animated-triangle" width="660" height="556" viewBox="0 0 660 556" xmlns="http://www.w3.org/2000/svg">
            <path id="Triangle" fill="none" stroke="currentColor" strokeWidth="2" d="M 0 556 L 330 0 L 660 556 L 531.570679 556 L 330 216.383942 L 128.429321 556 L 0 556 Z"/>
          </svg>
          <div className="gradient"></div>
        </div>
      </header>
      <section id="portfolio-section">
        <h2>Projects</h2>
        <div className="projects">
          <div className="project">
            <Image 
              className="cover"      
              src="/assets/img/mockup1.webp"
              alt="Mockup of an iPhone 16 Pro showcasing the Hotspot App"
              width={600}
              height={0}
              style={{objectFit: 'cover', height: 'auto', width: '100%'}}
            />
            <div className="content">
              <div>
                <h3>Hotspot App</h3>
                <p>My most ambitious project to date. Designed from the ground up. A PWA app that contributes to the technological advancement of <Link href="https://hotspot.kau.se/">Hotspot</Link> under <Link href="https://www.kau.se/">Karlstad University</Link>. Annually helping over 8000 students connect with employers at the Hotspot job fair.</p>
              </div>
              <div className="links">
                <Link href="/projects/hotspot-app" className="secondary-button">View project</Link>
                <Link href="https://app.hotspot.kau.se" className="primary-button">Visit website</Link>
              </div>
            </div>
          </div>
          {/* <div className="project">
            <Image 
              className="cover"      
              src="/assets/img/mockup3.webp"
              alt="Mockup of a MacBook Pro featuring my portfolio website"
              width={600}
              height={0}
              style={{objectFit: 'cover', height: 'auto', width: '100%'}}
            />
            <div className="content">
              <div>
                <h3>My Portfolio Website</h3>
                <p>Design revisions, complete overhauls, rethinking portfolio websites from the perspective of a creator and web developer. Dive deeper into the history and thought process behind my portfolio website.</p>
              </div>
              <div className="links">
                <Link href="/blog/my-portfolio-website" className="secondary-button">View project</Link>
              </div>
            </div>
          </div>
          <div className="project">
            <Image 
              className="cover"
              src="/assets/img/IMG_2887.webp"
              alt=""
              width={600}
              height={0}
              style={{objectFit: 'cover', height: 'auto', width: '100%'}}
            />
            <div className="content">
              <div>
                <h3>Temperature Sensor</h3>
                <p>Pursuing my electronics hobby. Making a temperature sensor with an Arduino R3 and various components including a 16x2 LCD screen to display info.</p>
              </div>
              <div className="links">
                <Link href="/blog/temperature-sensor" className="secondary-button">View project</Link>
              </div>
            </div>
          </div>
          <div className="project">
            <Image 
              className="cover"
              src="/assets/img/DSC01479.JPG"
              alt=""
              width={600}
              height={0}
              style={{objectFit: 'cover', height: 'auto', width: '100%'}}
            />
            <div className="content">
              <div>
                <h3>Designing an Efficient Desk Setup</h3>
                <p>Dive deeper into behind the scenes of my workspace, and what makes it so special.</p>
              </div>
              <div className="links">
                <Link href="/blog/designing-an-efficient-desk-setup" className="secondary-button">View project</Link>
              </div>
            </div>
          <Link href="/blog" className="primary-button">Browse projects</Link>
          </div> */}
          <div className="demo">
            <h3>Stay tuned for more...</h3>
            <div className="container">
              <Image 
                className="cover"
                src="/assets/img/mockup3.webp"
                alt=""
                width={600}
                height={0}
                style={{objectFit: 'cover', height: 'auto', width: '100%'}}
              />
              <Image 
                className="cover"
                src="/assets/img/IMG_2887.webp"
                alt=""
                width={600}
                height={0}
                style={{objectFit: 'cover', height: 'auto', width: '100%'}}
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <h2>About</h2>
      </section> */}
      <About />
    </>
  )
}