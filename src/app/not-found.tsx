import Link from 'next/link';

export default function NotFound() {
  return (
    <section id='404'>
      <h1 className='h1'>404 - Null Pointer Exception</h1>
      <p>Our system tried to reference a page, but it pointed to nothing. This memory address is empty—just like the page you’re seeking. How about navigating back to a valid destination?</p>
      <Link href="/" className='primary-button'>Go back home</Link>
    </section>
  )
}