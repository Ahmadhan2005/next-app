// pages/index.tsx
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap, faCode, faUser, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { faReact, faNode, faFigma, faGithub,faTiktok } from "@fortawesome/free-brands-svg-icons";

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <header className="text-center">
        <img
          src="ahmadhan.jpg"
          alt="Ahmadhan"
          className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-600"
        />
        <h1 className="text-4xl font-bold text-blue-600 mt-4">Ahmadhan Syafiere</h1>
        <p className="text-xl text-gray-600 flex justify-center items-center gap-2">
          UI/UX Designer
        </p>
      </header>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <FontAwesomeIcon icon={faUser} className="text-blue-600 w-10 h-10" />
          About Me
        </h2>
        <p className="mt-4 text-gray-700">
          I am a passionate web developer with 3+ years of experience in building web applications.
          I enjoy working with modern web technologies and creating efficient, scalable applications.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <FontAwesomeIcon icon={faCode} className="text-blue-600 w-10 h-10" />
          Skills
        </h2>
        <div className="mt-4 list-disc pl-5 text-gray-700 flex justify-center flex-wrap">
  <div className="border rounded-md text-center p-10 m-4 shadow flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faReact} className="text-blue-600 w-10 h-10 mb-4" />
    React
  </div>
  <div className="border rounded-md text-center p-10 m-4 shadow flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faNode} className="text-green-600 w-10 h-10 mb-4" />
    Next.js
  </div>
  <div className="border rounded-md text-center p-10 m-4 shadow flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faCode} className="text-gray-600 w-10 h-10 mb-4" />
    TypeScript
  </div>
  <div className="border rounded-md text-center p-10 m-4 shadow flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faCode} className="text-blue-400 w-10 h-10 mb-4" />
    Tailwind CSS
  </div>
  <div className="border rounded-md text-center p-10 m-4 shadow flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={faFigma} className="text-purple-500 w-10 h-10 mb-4" />
    Figma
  </div>
</div>

      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <FontAwesomeIcon icon={faBriefcase} className="text-blue-600 w-10 h-10" />
          Experience
        </h2>
        <div className="mt-4">
          <h3 className="text-xl font-bold text-gray-800">UI/UX | ABC Corp</h3>
          <p className="text-gray-600">Jan 2022 - Present</p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Developed full-stack applications using Next.js and Tailwind CSS.</li>
            <li>Improved the performance of web applications by optimizing React components.</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold text-gray-800">Junior Developer | XYZ Ltd</h3>
          <p className="text-gray-600">Jan 2020 - Dec 2021</p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Assisted in developing responsive UI using Tailwind CSS and React.</li>
            <li>Worked on API integrations using Node.js and Express.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <FontAwesomeIcon icon={faProjectDiagram} className="text-blue-600 w-10 h-10" />
          Projects
        </h2>
        <ul className="list-disc pl-5 mt-2 text-gray-700">
          <li>
            <Link href={`/table/`}>Tabel</Link>
          </li>
          <li>
            <Link href={`/navbar/`}>Navbar</Link>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <FontAwesomeIcon icon={faGraduationCap} className="text-blue-600 w-10 h-10" />
          Education
        </h2>
        <div className="mt-4">
          <h3 className="text-xl font-bold text-gray-800">B.Sc. Computer Science | University of Example</h3>
          <p className="text-gray-600">2016 - 2020</p>
        </div>
      </section>

      <footer className="mt-8 text-center text-gray-500">
        <div className="flex justify-center gap-6">
          <Link href="https://github.com/Ahmadhan2005" target="_blank" className="text-gray-700 hover:underline flex items-center gap-2">
            <FontAwesomeIcon icon={faGithub} className="text-gray-700 w-10 h-10" />
            GitHub
          </Link>
          <Link href="https://www.tiktok.com/@tzbronz" target="_blank" className="text-black hover:underline flex items-center gap-2">
            <FontAwesomeIcon icon={faTiktok} className="text-black-700 w-10 h-10" />
            Tiktok
          </Link>
        </div>
        <p className="mt-2">&copy; 2025 Ahmadhan Syafiere. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
