'use client';
import { useEffect, useState } from "react";

type Heading = {
    id: string;
    text: string;
    level: number;
};

export default function Sidebar({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string | null>(headings[0]?.id || null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            // Sort entries by their position on the screen
            const visibleEntries = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

            if (visibleEntries.length > 0) {
                // Set the active heading to the first visible entry
                setActiveId(visibleEntries[0].target.id);
            }
        },
        {
            rootMargin: '0px 0px -80% 0px', // Trigger before the heading reaches the top
            threshold: 0.1, // Trigger when at least 10% of the heading is visible
        }
    );

    headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) observer.observe(element);
    });

    return () => {
        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) observer.unobserve(element);
        });
    };
  }, [headings]);

  return (
      <aside className="sidebar">
          <div className="table-of-contents">
              <h2 className="h4">On this page</h2>
              <ul>
                  {headings.map((heading) => (
                      <li key={heading.id} className={heading.id === activeId ? 'active' : ''} style={{ marginLeft: `${(heading.level - 1) * 20}px` }}>
                          <a href={`#${heading.id}`}>{heading.text}</a>
                      </li>
                  ))}
              </ul>
          </div>
      </aside>
  );
}