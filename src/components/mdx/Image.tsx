import NextImage from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function Image({ src, alt, caption }: ImageProps) {
  return (
    <figure className="post-image">
      <NextImage 
        src={src} 
        alt={alt || "Image not found"} 
        title={caption} 
        width={0} 
        height={0} 
        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 80vw, 60vw"
        style={{ objectFit: "cover" }}
      />
      {caption && <figcaption className="image-caption">{caption}</figcaption>}
    </figure>
  );
}