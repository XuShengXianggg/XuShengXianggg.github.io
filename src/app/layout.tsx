import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/ui/styles/global.css";
import  "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Shengxiang\'s Profiles',
    default: 'Shengxiang Xu',
  },
  description: "Just a test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="header">
          <ul>
            <li><Link key={"home"} href={"/"} className="link-style bold">Shengxiang Xu</Link></li>
            <li><Link key={"publications"} href={"/publications"} className="link-style">Publications</Link></li>
            <li><Link key={"blog"} href={"/contact"} className="link-style">CV</Link></li>
          </ul>
        </div>

        <div className="sidebar">
          <img src="https://multimodality.group/author/%E5%BE%90%E5%9C%A3%E7%BF%94/avatar_hud4756c5e94d1f77c26ea6b1a1ae1d141_108977_270x270_fill_q75_lanczos_center.jpg" 
              alt="Avatar" 
              className="avatar"/>

              <h3>Shengxiang Xu</h3>
              <p className="subtitle">Undergraduate student</p>
              <Link href={"https://www.hhu.edu.cn/"} className="school-link">
                <p>Hohai University (HHU)</p>
              </Link>

              <i id="location" className="bi bi-geo-alt-fill"> Nanjing Jiangsu</i>
              <Link key={"email"} href={"mailto:<EMAIL>"} className="sidebar-link">
                <i className="bi bi-envelope-fill"> Email</i>
              </Link>
              <Link key={"scholar"} href={"https://scholar.google.com.hk/citations?user=L-uWIQUAAAAJ&hl=zh-CN&oi=sra"} className="sidebar-link">
                <i className="bi bi-book"> Google Scholar</i>
              </Link>
              <Link key={"github"} href={"https://github.com/XuShengXianggg"} className="sidebar-link">
                <i className="bi bi-github"> Github</i>
              </Link>

              <Link key={"github"} href={"https://www.cnblogs.com/xushengxiang"} className="sidebar-link">
                <i className="bi bi-bootstrap-fill"> Blog</i>
              </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
