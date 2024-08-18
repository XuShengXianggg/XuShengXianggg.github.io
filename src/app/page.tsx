import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="content">
        <h1>About Me</h1>
        <p>Shengxiang Xu（徐圣翔）is a senior undergraduate student 
          majoring in software engineering at the School of Computer and Software of Hohai University 
          under the supervision of <Link href="https://multimodality.group/" className="inline-link">Prof. Fan Liu</Link>.</p>


        <h2>Educations</h2>
        <div className="underline"></div>  
        <ul>
          <li>Sep. 2021 - Jun. 2025 Bachelor of Software Engineering, Hohai University.</li>
        </ul>

        <h2>Recent News</h2>
        <div className="underline"></div> 
        <ul>
          <li>NULL</li>
        </ul>

        <h2>Awards</h2>
        <div className="underline"></div>
        <ul>
          <li>2024-06. 2024年度河海大学”海韵风华百佳大学生“荣誉称号</li>
          <li>2024-04. 河海大学2023年度”优秀共青团干部“荣誉称号</li>
          <li>2024-04. 2024年美国大学生数学建模竞赛F奖（特等奖提名）</li>
          <li>2024-01. 第48届国际大学生程序设计竞赛亚洲区决赛铜奖</li>
          <li>2023-12. 2023年第五届全球校园人工智能算法精英大赛全国总决赛一等奖</li>
          <li>2023-12. 第48届国际大学生程序设计竞赛亚洲区域赛济南站银奖</li>
          <li>2023-11. 2023年第十一届全国大学生数字媒体科技作品及创意竞赛江苏省三等奖</li>
          <li>2023-10. 2023年中国大学生程序设计竞赛国赛秦皇岛站铜奖</li>
          <li>2023-10. 第48届国际大学生程序设计竞赛亚洲区域赛西安站银奖</li>
          <li>2023-08. 2023年江苏省大学生程序设计竞赛银奖</li>
          <li>2023-04. 2023年美国大学生数学建模竞赛H奖（二等奖）</li>
          <li>2023-04. 第十四届蓝桥杯全国软件和信息技术专业人才大赛江苏赛区C/C++程序设计大学A组二等奖</li>
          <li>2022-11. 2021年度河海大学”优秀学生干部“荣誉称号</li>
          <li>2022-10. 2022年度河海大学大学生暑期”三下乡“社会实践活动先进个人</li>
          <li>2022-05. 2021年度”如东县优秀共青团员“荣誉称号</li>
          <li>2022-05. 河海大学2021年度”优秀共青团员“荣誉称号</li>
          <li>2022-04. 2022年度教育部—华为”智能基座“未来之星荣誉称号</li>
          <li>2022-04. 2021年度河海大学信息学部”优秀志愿者“荣誉称号</li>
          <li>2022-04. 2022年美国大学生数学建模竞赛H奖（二等奖）</li>
        </ul>

        <h2>Technical Skills</h2>
        <div className="underline"></div> 
        <ul></ul>

        <h2>Organizational Experience</h2>
        <div className="underline"></div> 
      </div>

      <div className="footer">
        <p>Powered by Jekyll & AcademicPages, a fork of Minimal Mistakes.</p>
        <p>Hosted on GitHub Pages &mdash; Theme by <Link href="https://github.com/orderedlist">orderedlist</Link></p>
      </div>
    </div>
  );
}
