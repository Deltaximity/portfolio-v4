import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function parseMarkdownToComponents(markdownText: string): JSX.Element[] {
  const lines = markdownText.split('\n');
  const elements: JSX.Element[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Headings
    if (/^# /.test(line)) {
      elements.push(<h2 className="h2" key={i}>{line.replace(/^# /, '')}</h2>);
      continue;
    }
    if (/^## /.test(line)) {
      elements.push(<h3 className="h3" key={i}>{line.replace(/^## /, '')}</h3>);
      continue;
    }
    if (/^### /.test(line)) {
      elements.push(<h4 className="h4" key={i}>{line.replace(/^### /, '')}</h4>);
      continue;
    }

    // Images
    if (/!\[(.*?)\]\((.*?)\)/.test(line)) {
      const match = line.match(/!\[(.*?)\]\((.*?)\)/);
      const alt = match ? match[1] : '';
      const src = match ? match[2] : '';
      elements.push(
        <div key={i} style={{ position: 'relative', width: '100%', height: 'auto', maxWidth: '100%' }}>
          <Image src={src} alt={alt} layout="responsive" width={800} height={600} />
        </div>
      );
      continue;
    }

    // Lists
    if (/^-\s/.test(line) || /^\d+\.\s/.test(line)) {
      const listItems: JSX.Element[] = [];
      const isOrderedList = /^\d+\.\s/.test(line);
      while (i < lines.length && (/^-\s/.test(lines[i]) || /^\d+\.\s/.test(lines[i]))) {
        const itemContent = lines[i].replace(isOrderedList ? /^\d+\.\s/ : /^-\s/, '');
        listItems.push(<li key={i}>{itemContent}</li>);
        i++;
      }
      i--; // Adjust for the loop increment

      elements.push(
        isOrderedList ? <ol key={`list-${i}`}>{listItems}</ol> : <ul key={`list-${i}`}>{listItems}</ul>
      );
      continue;
    }

    // Paragraphs with Inline Formatting
    const inlineElements = [];
    let remainingText = line;

    while (remainingText) {
      // Bold + Italic
      const boldItalicMatch = remainingText.match(/\*\*\*(.*?)\*\*\*/);
      if (boldItalicMatch) {
        if (boldItalicMatch.index! > 0) {
          inlineElements.push(remainingText.slice(0, boldItalicMatch.index));
        }
        inlineElements.push(<strong key={inlineElements.length}><em>{boldItalicMatch[1]}</em></strong>);
        remainingText = remainingText.slice(boldItalicMatch.index! + boldItalicMatch[0].length);
        continue;
      }

      // Bold
      const boldMatch = remainingText.match(/\*\*(.*?)\*\*/);
      if (boldMatch) {
        if (boldMatch.index! > 0) {
          inlineElements.push(remainingText.slice(0, boldMatch.index));
        }
        inlineElements.push(<strong key={inlineElements.length}>{boldMatch[1]}</strong>);
        remainingText = remainingText.slice(boldMatch.index! + boldMatch[0].length);
        continue;
      }

      // Italic
      const italicMatch = remainingText.match(/\*(.*?)\*/);
      if (italicMatch) {
        if (italicMatch.index! > 0) {
          inlineElements.push(remainingText.slice(0, italicMatch.index));
        }
        inlineElements.push(<em key={inlineElements.length}>{italicMatch[1]}</em>);
        remainingText = remainingText.slice(italicMatch.index! + italicMatch[0].length);
        continue;
      }

      // Links
      const linkMatch = remainingText.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        if (linkMatch.index! > 0) {
          inlineElements.push(remainingText.slice(0, linkMatch.index));
        }
        const text = linkMatch[1];
        const href = linkMatch[2];
        inlineElements.push(
          href.startsWith('/')
            ? <Link key={inlineElements.length} href={href} passHref>{text}</Link>
            : <a key={inlineElements.length} href={href} target="_blank" rel="noopener noreferrer">{text}</a>
        );
        remainingText = remainingText.slice(linkMatch.index! + linkMatch[0].length);
        continue;
      }

      // If no matches are found, add the remaining text and break the loop
      inlineElements.push(remainingText);
      remainingText = '';
    }

    elements.push(<p key={i}>{inlineElements}</p>);
  }

  return elements;
}

// Main Markdown Renderer Component
interface MarkdownRendererProps {
  markdownText: string;
}

export default function MarkdownRenderer({ markdownText }: MarkdownRendererProps) {
  return <div>{parseMarkdownToComponents(markdownText)}</div>;
}