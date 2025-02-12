'use client'

import Image from 'next/image'
import styles from './sidebar.module.css'
import { Mail, Linkedin, Github, BookOpen, GraduationCap, FileText } from 'lucide-react'
import { createContext, Dispatch, SetStateAction,useState } from 'react'
import EmailDisplay from '@/app/component/emailDisplay/EmailDisplay'

interface EmailContextType {
  display: string;
  setDisplay: Dispatch<SetStateAction<string>>;
}
//Dispatch<SetStateAction<string>>
//React 的useState返回的setter函数的精确类型

export const EmailThemeContext = createContext<EmailContextType | undefined>(undefined);
// 在使用context之前，需要先检查它是否已经被提供

export default function Sidebar() {
  const [display, setDisplay] = useState('none')

  const handleEmailClick = () => {
    setDisplay('flex')
  }

  return (
    <>
      <EmailThemeContext.Provider value={{display, setDisplay}}>
        <EmailDisplay />
      </EmailThemeContext.Provider>
      <aside className={styles.sidebar}>
        <div className={styles.profile}>
          <Image
            src="/head2.jpg"
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
          <a onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
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
    </>
  )
}