import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.content}>
      <section id="home" className={styles.section}>
        <p>
          I am a senior undergraduate student majoring in Software Engineering at the <a href="https://cies.hhu.edu.cn/" target="_blank">College of Computer and Software Engineering</a>, Hohai University. Currently, I am conducting research training under the guidance of Professor <a href="https://multimodality.group/author/刘凡/" target="_blank">Fan Liu (刘凡)</a> in the <a href="https://multimodality.group/" target="_blank">AIM Group</a>. I have been admitted to the <a href="https://palm.seu.edu.cn/" target="_blank">PALM Lab</a> at the <a href="https://cse.seu.edu.cn/" target="_blank">College of Computer Science and Engineering</a>, Southeast University, for my master&apos;s degree, where I will carry out research under the supervision of Professor <a href="https://palm.seu.edu.cn/zhangml/" target="_blank">Minling Zhang (张敏灵)</a> and Professor <a href="https://sdiaa.github.io/" target="_blank">Shimin Di (邸世民)</a>.
        </p>
      </section>

      <section id="news" className={styles.section}>
        <h2>News</h2>
        <ul className={styles.newsList}>
          <li>
            <strong>2024.12:</strong> One paper is accepted by ICASSP 2025
          </li>
          <li>
            <strong>2024.09:</strong> One paper is accepted by CCBR 2024
          </li>
        </ul>
      </section>

      <section id="publications" className={styles.section}>
        <h2>Publications</h2>
        <h3>Computer Vision</h3>
        <div className={styles.publication}>
          <h4>RemoteTrimmer: Adaptive Structural Pruning for Remote Sensing Image Classification <a className={styles.inside_link} href="https://ieeexplore.ieee.org/document/10890085">[paper]</a></h4>
          <p>Guangwenjie Zou, Liang Yao, Fan Liu, Chuanyi Zhang, Xin Li, Ning Chen, <span style={{ fontWeight: "bold" }}>Shengxiang Xu</span>, Jun Zhou</p>
          <p>IEEE International Conference on Acoustics, Speech, and Signal Processing (<span style={{ fontWeight: "bold" }}>ICASSP 2025</span>)</p>
        </div>
        <div className={styles.publication}>
          <h4>UEMM-Air: A Synthetic Multi-modal Dataset for Unmanned Aerial Vehicle Object Detection <a className={styles.inside_link} href="https://arxiv.org/abs/2406.06230">[paper]</a></h4>
          <p>Fan Liu, Liang Yao, <span style={{ fontWeight: "bold" }}>Shengxiang Xu</span>, Chuanyi Zhang, Xinlei Zhang, Ting Wu</p>
          <p>Preprint</p>
        </div>
        <div className={styles.publication}>
          <h4>Multi-stage Bayesian Prototype Refinement with feature weighting for few-shot classification <a className={styles.inside_link} href="https://link.springer.com/article/10.1007/s10044-025-01520-y">[paper]</a></h4>
          <p>Wei Xu, Xiaocong Zhou, <span style={{ fontWeight: "bold" }}>Shengxiang Xu</span>, Fan Liu, Chuanyi Zhang, Feifan Li, Wenwen Cai, Jun Zhou</p>
          <p>Pattern Analysis and Applications (<span style={{ fontWeight: "bold" }}>PAA</span>)</p>
        </div>

        <h3>AI for Science</h3>
        <div className={styles.publication}>
          <h4>Unifying Large Language Models and Knowledge Graphs for Poultry Diseases Diagnosis <a className={styles.inside_link} href="https://link.springer.com/chapter/10.1007/978-981-96-1071-6_25">[paper]</a></h4>
          <p><span style={{ fontWeight: "bold" }}>Shengxiang Xu</span>, Liang Yao, Chenyu Huang, Guoxin Jiang,  Fan Liu</p>
          <p>Chinese Conference on Biometric Recognition (<span style={{ fontWeight: "bold" }}>CCBR 2024</span>)</p>
        </div>
      </section>

      <section id="honors" className={styles.section}>
        <h2>Honors and Awards</h2>
        <ul className={styles.honorsList} style={{ marginLeft: "20px" }}>
          <li>
            <span className={styles.honorText}>2024.06 Top 100 Outstanding Students of Hohai University</span>
            <a href="https://cdn.acwing.com/media/article/image/2024/12/26/181746_fbe047dbc3-haiyun.png" target="_blank">[Certificate]</a>
          </li>
          <li>
            <span className={styles.honorText}>2024.04 Finalist Award, Mathematical Contest in Modeling(MCM/ICM)</span>
            <a href="https://cdn.acwing.com/media/article/image/2024/12/26/181746_c0f895e6c3-mcm.png" target="_blank">[Certificate]</a>
          </li>
          <li>
            <span className={styles.honorText}>2024.01 Bronze Medal, ICPC Asia-East Continent Final Contest(EC-Final)</span>
            <a href="https://cdn.acwing.com/media/article/image/2024/12/26/181746_71b95cf3c3-ec.png" target="_blank">[Certificate]</a>
          </li>
          <li>
            <span className={styles.honorText}>2023.12 First Prize, Global Campus AI Algorithm Elite Competition National Finals</span>
            <a href="https://cdn.acwing.com/media/article/image/2024/12/26/181746_17c69130c3-sfjy.png" target="_blank">[Certificate]</a>
          </li>
          <li>
            <span className={styles.honorText}>2023.12 Silver Medal, ICPC Asia Regional Contest Jinan Site</span>
            <a href="https://cdn.acwing.com/media/article/image/2024/12/26/181746_c9191a45c3-jinan.png" target="_blank">[Certificate]</a>
          </li>
          <li>
            <span className={styles.honorText}>2023.10 Bronze Medal, CCPC Qinhuangdao Site</span>
            <a href="https://cdn.acwing.com/media/article/image/2024/12/26/181746_a2f34024c3-qhd.png" target="_blank">[Certificate]</a>
          </li>
          <li>
            <span className={styles.honorText}>2023.10 Silver Medal, ICPC Asia Regional Contest Xi&apos;an Site</span>
            <a href="https://cdn.acwing.com/media/article/image/2024/12/26/181746_fe0a9950c3-xian.png" target="_blank">[Certificate]</a>
          </li>
          <li>
            <span className={styles.honorText}>2023.08 Silver Medal, Jiangsu Collegiate Programming Contest</span>
            <a href="https://cdn.acwing.com/media/article/image/2024/12/26/181746_bca5ee82c3-JSCPC.png" target="_blank">[Certificate]</a>
          </li>
          <li>
            <span className={styles.honorText}>2022.04 Huawei Intelligent Base Scholarship</span>
            <a href="https://cdn.acwing.com/media/article/image/2024/12/26/181746_7dd448f8c3-Huawei.png" target="_blank">[Certificate]</a>
          </li>
        </ul>
      </section>

      <section id="education" className={styles.section}>
        <h2>Education</h2>
        <ul className={styles.educationList}>
          <li>2025.09 - 2028.06, Master, Southeast University, Nanjing.</li>
          <li>2021.09 - 2025.06, Bachelor, Hohai Univeristy, Nanjing.</li>
        </ul>
      </section>

      {/* <section id="talks" className={styles.section}>
                <h2>Invited Talks</h2>
            </section>

            <section id="internships" className={styles.section}>
                <h2>Internships</h2>
            </section> */}
    </div>
  )
}

