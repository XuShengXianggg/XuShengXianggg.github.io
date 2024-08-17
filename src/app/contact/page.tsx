import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "contract",
};

export default function ContactPage() {
  return (
    <div className="content">
        <h1>CV</h1>
        <Link href="/" className='link-style'>Download CV (updated on August 2024)</Link>
    </div>
  );
}