import NextImage from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  title?: string;
}

export default function Image({ src, alt, title }: ImageProps) {
  return (
    <figure className="post-image">
      <NextImage 
        src={src} 
        alt={alt || "Image not found"} 
        title={title} 
        width={0} 
        height={0} 
        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 80vw, 60vw"
        style={{ objectFit: "cover" }}
      />
      {title && <figcaption className="image-title">{title}</figcaption>}
    </figure>
  );
}