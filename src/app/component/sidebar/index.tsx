import Image from 'next/image'
import styles from './sidebar.module.css'
import { Mail, Linkedin, Github, BookOpen, GraduationCap, FileText } from 'lucide-react'

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.profile}>
                <Image
                    src="https://multimodality.group/author/%E5%BE%90%E5%9C%A3%E7%BF%94/avatar_hud4756c5e94d1f77c26ea6b1a1ae1d141_108977_270x270_fill_q75_lanczos_center.jpg"
                    alt="Profile"
                    width={200}
                    height={200}
                    className={styles.avatar}
                />
                <h1 className={styles.name}>Shengxiang Xu</h1>
                <p className={styles.name}>(徐圣翔)</p>
            </div>

            <div className={styles.bio}>
                <p>Undergraduate student</p>
            </div>
            <a className={styles.school} href="https://www.hhu.edu.cn/">Hohai University (HHU)</a>

            <div className={styles.location}>
                <span>📍 Nanjing Jiangsu</span>
            </div>

            <div className={styles.links}>
                <a href="mailto:xushengxianghhu@163.com">
                    <Mail size={20} /> Email
                </a>
                <a href="https://github.com/XuShengXianggg">
                    <Github size={20} /> Github
                </a>
                <a href="https://scholar.google.com.hk/citations?user=L-uWIQUAAAAJ&hl=zh-CN&oi=sra">
                    <GraduationCap size={20} /> Google Scholar
                </a>
                <a href="https://www.cnblogs.com/xushengxiang">
                    <FileText size={20} /> Blog
                </a>
            </div>
        </aside >
    )
}