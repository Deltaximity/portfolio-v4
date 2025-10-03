import { MonitorCheck, Lightbulb, ChartSpline } from "lucide-react";
import Link from "next/link";

export default function GetInTouch() {
  return (
    <section id="get-in-touch">
      <h2>Get in touch</h2>
      <p>I'm a fullstack developer who's passionate about transforming complex challenges into clean intuitive digital experiences. I thrive on solving real human problems with tech, whether it's crafting intuitive UIs or building cohesive systems from scratch.</p>
      <h3>Why Reach Out?</h3>
      <div className="container">
        <div className="item">
          <MonitorCheck className="icon" size={36} strokeWidth={1.5} />
          <h3>Innovative Solutions</h3>
          <p>I love turning ideas into impactful, user-friendly applications (like the <Link href="https://app.hotspot.kau.se/">Hotspot App</Link>).</p>
        </div>
        <div className="item">
          <Lightbulb className="icon" size={36} strokeWidth={1.5} />
          <h3>Creative Problem-Solving</h3>
          <p>My diverse background, from teaching to photography and design, means I bring a unique perspective to every project.</p>
        </div>
        <div className="item">
          <ChartSpline className="icon" size={36} strokeWidth={1.5} />
          <h3>Continuous Growth</h3>
          <p>I’m always learning, experimenting with new technologies (Next.js, Framer Motion, Notion scripting), and refining my craft.</p>
        </div>
      </div>
      <p>If you’re looking for someone who not only writes clean code but also understands how to make technology work for people, I’d love to chat about how I can contribute to your team.</p>
      <p><b>Reach me at:</b> <Link href="mailto:hello@deltaximity.com">hello@deltaximity.com</Link> or connect with me on <Link href="https://www.linkedin.com/in/deltaximity/">LinkedIn</Link></p>
    </section>
  );
}
