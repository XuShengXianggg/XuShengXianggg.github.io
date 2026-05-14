---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I received my Bachelor's degree in Software Engineering from the College of Computer Science and Software Engineering, Hohai University, where I conducted research training under the guidance of Professor <a href='https://multimodality.group/author/%E5%88%98%E5%87%A1/'>Fan Liu (刘凡)</a> and Ph.D. student <a href='https://1e12leon.top/'>Liang Yao (姚亮)</a> in the <a href='https://multimodality.group/'>AIM Group</a>. I am currently pursuing my Master's degree at the <a href='https://sdiaa.tech/'>DEFENSE Group</a>, PALM Lab, the School of Computer Science and Engineering, Southeast University, under the supervision of Professor <a href='https://palm.seu.edu.cn/zhangml/'>Min-ling Zhang (张敏灵)</a> and Professor <a href='https://sdiaa.github.io/'>Shimin Di (邸世民)</a>. My current research interests include <strong>LLM Agent</strong> and <strong>Remote Sensing</strong>.


# 🔥 News
- *2025.11*: &nbsp;🎉🎉 One paper is accepted by AAAI2026

# 📝 Publications 

## LLM Agents

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2025</div><img src='images/robustflow.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Robustflow: Towards robust agentic workflow generation](https://arxiv.org/abs/2509.21834) \\
**Shengxiang Xu**, Jiayi Zhang, Shimin Di, Yuyu Luo, Liang Yao, Hanmo Liu, Jia Zhu, Fan Liu, Min-Ling Zhang

[**Project**](https://github.com/DEFENSE-SEU/RobustFlow) ![Github stars](https://img.shields.io/github/stars/DEFENSE-SEU/RobustFlow.svg)
</div>
</div>

---

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2026</div><img src='images/capflow.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Learning to compose for cross-domain agentic workflow generation](https://arxiv.org/abs/2602.11114) \\
Jialiang Wang, **Shengxiang Xu**, Hanmo Liu, Jiachuan Wang, Yuyu Luo, Shimin Di, Min-Ling Zhang, Lei Chen
</div>
</div>

---

- `arXiv 2026` [Learning to compose for cross-domain agentic workflow generation](https://arxiv.org/abs/2602.11114), Jialiang Wang, **Shengxiang Xu**, Hanmo Liu, Jiachuan Wang, Yuyu Luo, Shimin Di, Min-Ling Zhang, Lei Chen

- `arXiv 2026` [PeroMAS: A Multi-agent System of Perovskite Material Discovery](https://arxiv.org/abs/2602.13312), Yishu Wang, Wei Liu, Yifan Li, **Shengxiang Xu**, Xujie Yuan, Ran Li, Yuyu Luo, Jia Zhu, Shimin Di, Min-Ling Zhang, Guixiang Li

- `PrePrint 2026` [FlowEvo: Self-Evolving Agents through the Co-Evolution of Workflows and Executable Skills](https://www.researchgate.net/profile/Zeyu-Ren-9/publication/404123514_FlowEvo_Self-Evolving_Agents_through_the_Co-Evolution_of_Workflows_and_Executable_Skills/links/69ea1484db00ec75d02ce04a/FlowEvo-Self-Evolving-Agents-through-the-Co-Evolution-of-Workflows-and-Executable-Skills.pdf), Zeyu Ren, Ling Yue, Ran Li, Yishu Wang, **Shengxiang Xu**, Hanmo Liu, Shaowu Pan, Shimin Di

- `arXiv 2026` [Sci-VLA: Agentic VLA Inference Plugin for Long-Horizon Tasks in Scientific Experiments](https://arxiv.org/abs/2602.09430), Yiwen Pang, Bo Zhou, Changjin Li, Xuanhao Wang, **Shengxiang Xu**, Deng-Bao Wang, Min-Ling Zhang, Shimin Di

---

## Remote Sensing Vision-Language Model

- `arXiv 2026` [RemoteZero: Geospatial Reasoning with Zero Human Annotations](https://arxiv.org/abs/2605.04451), Liang Yao, Fan Liu, **Shengxiang Xu**, Chuanyi Zhang, Rui Min, Shimin Di, Yuhui Zheng

- `arXiv 2026` [RemoteShield: Enable Robust Multimodal Large Language Models for Earth Observation](https://arxiv.org/abs/2604.17243), Rui Min, Liang Yao, Shiyu Miao, **Shengxiang Xu**, Yuxuan Liu, Chuanyi Zhang, Shimin Di, Fan Liu

- `arXiv 2026` [Remoteagent: Bridging vague human intents and earth observation with rl-based agentic mllms](https://arxiv.org/abs/2604.07765), Liang Yao, **Shengxiang Xu**, Fan Liu, Chuanyi Zhang, Bishun Yao, Rui Min, Yongjun Li, Chaoqian Ouyang, Shimin Di, Min-Ling Zhang

- `AAAI 2026` [Remotereasoner: Towards unifying geospatial reasoning workflow](https://ojs.aaai.org/index.php/AAAI/article/view/38175), Liang Yao, Fan Liu, Hongbo Lu, Chuanyi Zhang, Rui Min, **Shengxiang Xu**, Shimin Di, Pai Peng

- `ICASSP 2025` [Remotetrimmer: Adaptive structural pruning for remote sensing image classification](https://ieeexplore.ieee.org/abstract/document/10890085/), Guangwenjie Zou, Liang Yao, Fan Liu, Chuanyi Zhang, Xin Li, Ning Chen, **Shengxiang Xu**, Jun Zhou

---

## UAV-based Multi-modal Perception

- `ACM MM 2025` <span style="color:red">(Oral)</span> [UEMM-Air: Enable UAVs to Undertake More Multi-modal Tasks](https://dl.acm.org/doi/abs/10.1145/3746027.3758220), Liang Yao, Fan Liu, **Shengxiang Xu**, Chuanyi Zhang, Shimin Di, Xing Ma, Jianyu Jiang, Zequan Wang, Jun Zhou

- `AAAI 2026 Demo` [AirNavigation: Let UAV Navigation Tell Its Own Story](https://ojs.aaai.org/index.php/AAAI/article/view/42356), Jianyu Jiang, Zequan Wang, Liang Yao, **Shengxiang Xu**, Fan Liu

---

## Others

- `PAA` [Multi-stage Bayesian Prototype Refinement with feature weighting for few-shot classification](https://link.springer.com/article/10.1007/s10044-025-01520-y), Wei Xu, Xiaocong Zhou, **Shengxiang Xu**, Fan Liu, Chuanyi Zhang, Feifan Li, Wenwen Cai, Jun Zhou

- `CCBR 2024` [Unifying Large Language Models and Knowledge Graphs for Poultry Diseases Diagnosis](https://link.springer.com/chapter/10.1007/978-981-96-1071-6_25), **Shengxiang Xu**, Liang Yao, Chenyu Huang, Guoxin Jiang, Fan Liu


# 🎖 Honors and Awards
- *2025.07* <a href='https://cdn.acwing.com/media/article/image/2025/09/06/543035_591c571a8a-JSIACS.png'>First Prize</a>, Undergraduate Thesis Encouragement Program of JSIACS
- *2025.06* <a href='https://cdn.acwing.com/media/article/image/2025/08/01/543035_878928ee6e-hhu_bestThesis.png'>Outstanding Undergraduate Thesis of Hohai University</a>
- *2025.06* Silver Medal, Jiangsu Collegiate Programming Contest
- *2024.06* <a href='https://cdn.acwing.com/media/article/image/2024/12/26/181746_fbe047dbc3-haiyun.png'>Top 100 Outstanding Students of Hohai University</a>
- *2024.04* <a href='https://cdn.acwing.com/media/article/image/2024/12/26/181746_c0f895e6c3-mcm.png'>Finalist Award</a>, Mathematical Contest in Modeling (MCM/ICM)
- *2024.01* <a href='https://cdn.acwing.com/media/article/image/2024/12/26/181746_71b95cf3c3-ec.png'>Bronze Medal</a>, ICPC Asia-East Continent Final Contest (EC-Final)
- *2023.12* <a href='https://cdn.acwing.com/media/article/image/2024/12/26/181746_17c69130c3-sfjy.png'>First Prize</a>, Global Campus AI Algorithm Elite Competition National Finals
- *2023.12* <a href='https://cdn.acwing.com/media/article/image/2024/12/26/181746_c9191a45c3-jinan.png'>Silver Medal</a>, ICPC Asia Regional Contest Jinan Site
- *2023.10* <a href='https://cdn.acwing.com/media/article/image/2024/12/26/181746_a2f34024c3-qhd.png'>Bronze Medal</a>, CCPC Qinhuangdao Site
- *2023.10* <a href='https://cdn.acwing.com/media/article/image/2024/12/26/181746_fe0a9950c3-xian.png'>Silver Medal</a>, ICPC Asia Regional Contest Xi'an Site
- *2023.08* <a href='https://cdn.acwing.com/media/article/image/2024/12/26/181746_bca5ee82c3-JSCPC.png'>Silver Medal</a>, Jiangsu Collegiate Programming Contest
- *2022.04* <a href='https://cdn.acwing.com/media/article/image/2024/12/26/181746_7dd448f8c3-Huawei.png'>Huawei Intelligent Base Scholarship</a>


# 📖 Educations
- *2026.06-2026.08*, Visiting Student, The Hong Kong University of Science and Technology (Guangzhou).
- *2025.09-2028.06*, Master, Southeast University, Nanjing.
- *2021.09-2025.06*, Bachelor, Hohai University, Nanjing.

# 💻 Internships
<!-- - *2019.05 - 2020.02*, [Lorem](https://github.com/), China. -->