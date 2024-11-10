// import Header from '@/components/Header';
import Image from "next/image";
import Link from "next/link";
import { Badge } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <header className="main-hero">
        <h1 className="h1">Deltaximity</h1>
        <p className="subheading">Developer, photographer, designer, musician</p>
        <Image 
          className="hero-lambda"
          src="/assets/img/Lambda.png"
          alt=""
          width={600}
          height={600}
          style={{objectFit: 'contain', height: 'auto', width: '660px'}}
        />
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
                <Link href="/" className="secondary-button">View project</Link>
                <Link href="https://hotspot.kau.se/app" className="primary-button">Visit website</Link>
              </div>
            </div>
          </div>
          <div className="project">
            <Image 
              className="cover"      
              src="/assets/img/DSC00402.jpg"
              alt=""
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
                <Link href="/" className="secondary-button">View project</Link>
              </div>
            </div>
          </div>
          <div className="project">
            <Image 
              className="cover"
              src="/assets/img/mockup2.webp"
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
                <Link href="/" className="secondary-button">View project</Link>
              </div>
            </div>
          </div>
          <div className="project">
            <Image 
              className="cover"
              src="/assets/img/mockup2.webp"
              alt=""
              width={600}
              height={0}
              style={{objectFit: 'cover', height: 'auto', width: '100%'}}
            />
            <div className="content">
              <div>
                <h3>My Desk Setup</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, hic? Amet inventore rerum dolores ad autem. Nobis natus exercitationem dolorum molestias quod aspernatur, accusamus, tempore sit in rem placeat beatae fuga! Dolor quibusdam dicta nobis, magnam maiores eveniet suscipit ea!</p>
              </div>
              <div className="links">
                <Link href="/" className="secondary-button">View project</Link>
              </div>
            </div>
          </div>
          <Link href="/" className="primary-button">Browse projects</Link>
        </div>
      </section>
      <section>
        <h2>About</h2>
      </section>
      <section>
        <h2>Heading 1</h2>
        <h3>Heading 2</h3>
        <h4>Heading 3</h4>
        <p>Explore my work and journey as a developer.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nulla nemo voluptatibus ab iure consequatur quidem, delectus, in vel recusandae ipsa qui ducimus autem illum aut cumque laborum obcaecati! Voluptatibus, ad nulla. Amet dolores eveniet odio earum molestiae sint velit ipsam soluta cum vitae, sequi perferendis in? Soluta, voluptatibus pariatur. Fugiat nisi minus, aperiam nobis voluptatibus aliquam? Nesciunt reiciendis voluptatem fugit debitis accusamus odit facilis aliquid ipsam iste eaque? Omnis expedita iure modi eveniet doloribus natus perspiciatis dignissimos corrupti, officia dicta qui inventore dolore odit officiis, quisquam nobis maxime fuga a in aliquam distinctio consequatur! Commodi eveniet pariatur provident cumque?</p>
        <Link href="/" className="primary-button">Button 1</Link>
        <Link href="/" className="secondary-button">Button 2</Link>
      </section>
    </>
  )
}