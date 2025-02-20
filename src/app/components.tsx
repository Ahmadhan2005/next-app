// components/Hero.tsx
'use client'
import Image from 'next/image';
import React from 'react';
// components/Navbar.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import profile from '@/../public/ahmadhan.jpg'
import coding from '@/../public/coding.avif'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full px-10 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-primary"
          >
            Portfolio
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Service', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              {['Home', 'About', 'Service', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block py-2 text-gray-700 hover:text-primary transition-colors"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// components/Hero.tsx

const Hero = () => {
  return (
    <section id="home" className="min-h-screen max-w-7xl justify-center mx-auto flex items-center bg-hero-pattern">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.h1
              className="text-5xl md:text-6xl text-black font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, Im Ahmadhan Syafiere
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              UI/UX Designer & Web Developer
            </motion.p>
            <motion.div className="flex gap-4 justify-center md:justify-start mb-8">
              {[
                { icon: faGithub, link: "#" },
                { icon: faLinkedin, link: "#" },
                { icon: faTwitter, link: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  className="text-gray-600 hover:text-primary text-2xl social-icon"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </motion.a>
              ))}
            </motion.div>
            <motion.button
              className="bg-yellow-300 text-white font-bold px-8 py-3 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-8/12 aspect-square max-w-md mx-auto">
              <Image
                src={profile}
                alt="Profile"
                layout="fill"
                className="rounded-full object-cover shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// components/About.tsx
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-gray-600 text-lg">
            Passionate about creating beautiful and functional digital experiences
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src={coding}
                alt="About Me"
                layout="fill"
                className="rounded-2xl object-cover shadow-xl"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Pengalamanku di Dunia Programming</h3>
            <p className="text-gray-600">
              Dengan 5 tahun pengalaman di bidang Pembuatan web beserta UI/Ux, saya biasa membuat tampilan responsive dan juga beberapa tampilan lainnya
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-semibold">Nama:</p>
                <p className="text-gray-600">Ahmadhan Syafiere</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p className="text-gray-600">ahmadhan@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold">Location:</p>
                <p className="text-gray-600">Bandung, Indonesia</p>
              </div>
              <div>
                <p className="font-semibold">Kesediaan:</p>
                <p className="text-gray-600">Mahasiswa</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// [... Continued in next message due to length ...]
// components/Services.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faCode, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const services = [
      {
      icon: faPencilRuler,
      title: "UI/UX Design",
      description: "Create beautiful and functional user interfaces with focus on user experience"
    },
    {
        icon: faCode,
        title: "Web Development",
        description: "Build responsive and modern websites using latest technologies"
    },
    {
        icon: faMobileScreen,
        title: "Mobile Design",
        description: "Design mobile-first experiences that work across all devices"
    }
];

return (
    <section className="py-20 px-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
              <div key={index} className="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition">
              <FontAwesomeIcon 
                icon={service.icon} 
                className="text-2xl text-yellow-300 mb-4"
                />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// [Previous Skills component remains the same]
// components/Skills.tsx
const Skills = () => {
  const skills = [
    { name: "Figma", percentage: 80 },
    { name: "HTML/CSS", percentage: 80 },
    { name: "JavaScript", percentage: 60 },
    { name: "PHP", percentage: 70 },
    { name: "SQL", percentage: 50 }
  ];

  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">My Skills</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-yellow-300 h-2.5 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



// components/Contact.tsx
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <section className="py-20 px-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Contact Me</h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-300 text-white py-3 rounded-lg hover:bg-yellow-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="flex-1 space-y-6">
            {[
              { icon: faEnvelope, title: "Email", content: "contact@example.com" },
              { icon: faPhone, title: "Phone", content: "+1 234 567 890" },
              { icon: faLocationDot, title: "Address", content: "123 Street, City, Country" }
            ].map((item, index) => (
              <div key={index} className="flex items-start p-6 bg-gray-50 rounded-lg">
                <FontAwesomeIcon icon={item.icon} className="text-lg text-yellow-300 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// components/Footer.tsx
import { faFacebookF, faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const socialLinks = [
    { icon: faFacebookF, url: "#" },
    { icon: faTwitter, url: "#" },
    { icon: faLinkedinIn, url: "#" },
    { icon: faGithub, url: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ahmadhan Syafiere</h3>
          <p className="text-gray-400 mb-6">UI/UX Designer & Web Developer</p>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FontAwesomeIcon icon={social.icon} className="text-sm" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-gray-400">© 2025 Copyright</p>
        </div>
      </div>
    </footer>
  );
};

export { Navbar, Hero, About, Services, Skills, Contact, Footer };