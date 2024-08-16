import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="content">
        <h1>About Me</h1>
        <p>I am a second-year undergraduate student at Hong Kong University of Science and Technology (HKUST). 
          I am majoring in Computer Science and Engineering. 
          My research interests are in the field of multimodal learning, computer vision, and natural language processing. 
          I am currently working on a project about multimodal learning for sign language recognition.</p>
          <p>1</p>
          <p>2</p>
          <p>2</p>
          <p>3</p>
          <p>2</p>
          <p>2</p>
          <p>2</p>
          <p>2</p>
          <p>2</p>
          <p>2</p>
          <p>2</p>

        <h2>Educations</h2>
        <div className="underline"></div>  
        <ul>
          <li>2018-2022 (expected) Hong Kong University of Science and Technology (HKUST), Computer Science and Engineering</li>
          <li>2014-2018 Hong Kong Polytechnic University (HKPU), Electronic Engineering</li>
        </ul>

        <h2>Recent News</h2>
        <div className="underline"></div> 
        <ul>
          <li>2021-2022 HKUST Outstanding Graduate (top 1%)</li>
          <li>2018-2019 HKUST Excellent Graduate (top 1%)</li>
          <li>2018-2019 HKUST Excellent Undergraduate (top 1%)</li>
        </ul>

        <h2>Awards</h2>
        <div className="underline"></div> 
        <ul></ul>

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
