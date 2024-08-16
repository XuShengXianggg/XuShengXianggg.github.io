import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Publications",
};

export default function PublicationsPage() {

  return (
    <div className="content">
      <h1>Publications</h1>
      <div>You can find my articles on my<span> </span>
        <a href={"https://scholar.google.com.hk/citations?user=L-uWIQUAAAAJ&hl=zh-CN&oi=sra"} className="link-style">
          Google Scholar profile.
        </a>
      </div>
    </div>
  );
}