import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "contract",
};

export default function ContactPage() {
  return (
    <div className="content">
        <h1>blog</h1>
        <Link href="https://www.cnblogs.com/xushengxiang" className='link-style'>This is a link to my blog.</Link>
    </div>
  );
}