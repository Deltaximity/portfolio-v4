import Link from 'next/link';

export default function NotFound() {
  return (
    <section id='404'>
      <h1 className='h1'>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/" className='primary-button'>Take me back home</Link>
    </section>
  )
}