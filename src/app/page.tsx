// pages/index.tsx
import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <header className="text-center">
        {/* Foto Profil */}
        <img
          src="https://www.example.com/path-to-your-profile-picture.jpg" // Ganti dengan URL gambar profil
          alt="John Doe"
          className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-600"
        />
        <h1 className="text-4xl font-bold text-blue-600 mt-4">John Doe</h1>
        <p className="text-xl text-gray-600">Web Developer</p>
      </header>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
        <p className="mt-4 text-gray-700">
          I am a passionate web developer with 3+ years of experience in building web applications.
          I enjoy working with modern web technologies and creating efficient, scalable applications.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
        <ul className="mt-4 list-disc pl-5 text-gray-700">
          <li>React</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Experience</h2>
        <div className="mt-4">
          <h3 className="text-xl font-bold text-gray-800">Software Engineer | ABC Corp</h3>
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
        <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
        <div className="mt-4">
          <h3 className="text-xl font-bold text-gray-800">B.Sc. Computer Science | University of Example</h3>
          <p className="text-gray-600">2016 - 2020</p>
        </div>
      </section>

      <footer className="mt-8 text-center text-gray-500">
        <p>&copy; 2025 John Doe. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home
