import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiHackerrank,
  SiCodechef,
} from "react-icons/si";

import "./App.css";
import { useState } from "react";
import profile from "./assets/photo.png.jpeg";
function App() {
  const [openCard, setOpenCard] = useState(null);
  return (
    <div style={styles.page}>

      {/* NAVBAR */}
      <div style={styles.nav}>
        <h2 style={styles.logo}>Pavana</h2>
        <div style={styles.navLinks}>
          <a href="#home" style={styles.link}>Home</a>
          <a href="#about" style={styles.link}>About</a>
          <a href="#skills" style={styles.link}>Skills</a>
          <a href="#projects" style={styles.link}>Projects</a>
          <a href="#education" style={styles.link}>Education</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>
      </div>

      {/* HERO */}
      <div id="home" style={styles.hero}>

        <img
          src={profile}
          alt="Pavana Lakshmi"
          style={styles.profile}
        />
<h1 style={styles.title}>Muddala Pavana Lakshmi</h1>

<p style={styles.subtitle}>Frontend Developer</p>
<div style={styles.heroButtons}>
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noreferrer"
    style={styles.profileBtn}
  >
    <FaFilePdf /> Resume
  </a>

  <a
    href="https://www.linkedin.com/in/pavanalakshmi-muddala-329755376/"
    target="_blank"
    rel="noreferrer"
    style={styles.profileBtn}
  >
    <FaLinkedin />   LinkedIn
  </a>

  <a
    href="https://github.com/muddalapavanalakshmi"
    target="_blank"
    rel="noreferrer"
    style={styles.profileBtn}
  >
    <FaGithub />   GitHub
  </a>
</div>
</div>

      {/* ABOUT */}
      <div id="about" style={styles.section}>
        <h2>About Me</h2>
        <p>
         I am a passionate Frontend Developer who enjoys building modern, responsive, and user-friendly web applications.  
I specialize in React.js, Node.js, and MongoDB for developing scalable and efficient applications.  
I have a strong interest in frontend development and UI/UX design to create clean and interactive user experiences.  
I love solving real-world problems through code and continuously improving my problem-solving skills.  
I am also interested in Data Structures and Algorithms to write optimized solutions.  
Currently, I am focusing on building full-stack projects and enhancing my development skills.  
My goal is to become a skilled software engineer and contribute to impactful tech solutions.
        </p>
      </div>

      {/* SKILLS */}
      <div id="skills" style={styles.section}>
  <h2>Skills</h2>

  <div style={styles.grid}>

    {/* Frontend */}
    <div
      style={{
        ...styles.card,
        border: "2px solid #38bdf8",
        boxShadow: "0 0 20px #38bdf8",
      }}
    >
      <h3>🌐 Frontend</h3>
      <p>HTML</p>
      <p>CSS</p>
      <p>JavaScript</p>
    </div>

    {/* Programming */}
    <div
      style={{
        ...styles.card,
        border: "2px solid #22c55e",
        boxShadow: "0 0 20px #22c55e",
      }}
    >
      <h3>💻 Programming</h3>
      <p>c</p>
      <p>Java</p>
      <p>Python</p>
      
    </div>

    {/* Core Concepts */}
    <div
      style={{
        ...styles.card,
        border: "2px solid #a855f7",
        boxShadow: "0 0 20px #a855f7",
      }}
    >
      <h3>🧠 Core Concepts</h3>
      <p>DSA</p>
      <p>Algorithms</p>
      <p>Problem Solving</p>
    </div>

  </div>
  <div style={styles.section}>
  <h2>💻 Coding Profiles</h2>

  <div style={styles.grid}>
    <a href="https://leetcode.com/u/Pavana_Lakshmi/" target="_blank" rel="noreferrer" style={styles.profileBtn}>
        <SiLeetcode /> LeetCode
    </a>

    <a href="https://www.hackerrank.com/profile/pavanimuddala37" target="_blank" rel="noreferrer" style={styles.profileBtn}>
      <SiHackerrank /> HackerRank
    </a>

    <a href="https://www.codechef.com/users/pavana_lakshmi" target="_blank" rel="noreferrer" style={styles.profileBtn}>
      <SiCodechef /> CodeChef
    </a>

    <a href="https://www.geeksforgeeks.org/profile/pavanimunlw3" target="_blank" rel="noreferrer" style={styles.profileBtn}>
      <SiGeeksforgeeks /> GeeksforGeeks
    </a>
  </div>
</div>
</div>
      {/* PROJECTS */}
   <div id="projects" style={styles.section}>
  <h2>Projects</h2>

  <div style={styles.grid}>

    {/* PROJECT CARD */}
    <div style={styles.projectCard}>
      <h3 style={styles.projectTitle}> <span style={styles.projectIcon}>🏥</span> Healthcare Appointment Booking & Chatbot System </h3>

      <p style={styles.projectDesc}>
        A web application that allows users to book doctor appointments easily without manual process.
        Users can check doctor availability and schedule appointments online.
        The chatbot helps users with basic health-related queries and guidance.
        It improves patient convenience and reduces waiting time.
      </p>

      <p><b>Tech Stack:</b> React, Node.js, MongoDB</p>

      <div style={styles.projectBtns}>
       
      </div>
    </div>

  </div>
</div>
      {/* EDUCATION */}
      <div id="education" style={styles.section}>
        <h2>Education</h2>
        <div
          style={{
            ...styles.card,
            transform: openCard === "ssc" ? "scale(1.05)" : "scale(1)",
            boxShadow:
              openCard === "ssc"
                ? "0 0 25px #38bdf8"
                : "0 0 10px rgba(255,255,255,0.1)",
            cursor: "pointer",
          }}
          onClick={() =>
            setOpenCard(openCard === "ssc" ? null : "ssc")
          }
        >
          <h3 style={styles.eduTitle}>🎓 SSC</h3>

          <p>Dr KKR's Gowtham EM School</p>

         

          {openCard === "ssc" && (
            <div style={styles.details}>
              <hr />
              <p><b>School:</b> Dr KKR's Gowtham EM School</p>
              <p><b>Percentage:</b> 68%</p>
              <p><b>Year:</b> 2020</p>
              <p><b>Location:</b> Hukumpeta,Rajahmundry</p>
            </div>
          )}
        </div>

       <div
 style={{
  ...styles.card,
  border: "2px solid transparent",
  background:
    "linear-gradient(#111827, #111827) padding-box, linear-gradient(135deg, #22c55e, #38bdf8) border-box",
  transform: openCard === "inter" ? "scale(1.05)" : "scale(1)",
  boxShadow:
  openCard === "inter"
    ? "0 0 30px #22c55e, 0 0 50px #38bdf8"
    : "0 0 10px rgba(255,255,255,0.1)",
  cursor: "pointer",
}}
  onClick={() =>
    setOpenCard(openCard === "inter" ? null : "inter")
  }
>
  <h3 style={styles.eduTitle}>🏫 Intermediate</h3>

  <p>Tirumala Junior College</p>

  

  {openCard === "inter" && (
    <div style={styles.details}>
      <hr />
      <p><b>College:</b> Tirumala Junior College</p>
      <p><b>Percentage:</b> 89.9%</p>
      <p><b>Stream:</b> MPC</p>
      <p><b>Duration:2022-2024</b></p>
      <p><b>Location:</b> Katheru</p>
    </div>
  )}
</div>

      <div
  className="float-card"
  style={{
    ...styles.card,
    transform: openCard === "btech"
      ? "translateY(-10px) scale(1.05)"
      : "translateY(0) scale(1)",
    boxShadow:
      openCard === "btech"
        ? "0 0 25px #a855f7"
        : "0 0 10px rgba(255,255,255,0.1)",
    border: "2px solid transparent",
background:
  "linear-gradient(#111827, #111827) padding-box, linear-gradient(135deg, #38bdf8, #a855f7) border-box",
    cursor: "pointer",
    position: "relative",
overflow: "visible",
  }}
  onClick={() =>
    setOpenCard(openCard === "btech" ? null : "btech")
  }
>
<div
  style={{
    position: "absolute",
    top: "-10px",
    right: "-10px",
    background: "#a855f7",
    color: "white",
    padding: "5px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "bold",
  }}
>
  Current
</div>
  <h3 style={styles.eduTitle}>
    {openCard === "btech" ? "▼" : "▶"} 💻 B.Tech
  </h3>

  <p>Aditya College of Engineering and Technology</p>

  
  {openCard === "btech" && (
    <div style={styles.details}>
      <hr />
      <p><b>College:</b> Aditya College of Engineering and Technology</p>
      <p><b>CGPA:</b> 7.75</p>
      
      <p><b>Degree:</b> B.Tech</p>
      <p><b>Duration:</b>2024-2028</p>
      <p><b>Field:</b> Computer Science</p>
      <p><b>Location:</b>Surempalem</p>
    </div>
  )}
</div>
      </div>


      {/* CONTACT */}

       <div id="contact" style={styles.section}>
  <h2>Contact Me</h2>


  <br />

  <p>📧 Email</p>
  <p>pavanimuddala37@gmail.com</p>

  <br />

  <p>📍 Location</p>
  <p>Andhra Pradesh, India</p>

  <br />

 
  <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
 <a
  href="https://www.linkedin.com/in/pavanalakshmi-muddala-329755376/"
  target="_blank"
  rel="noreferrer"
  style={styles.socialBtn}
>
  <FaLinkedin />
  <span>LinkedIn</span>
</a>
</div>
   <form style={styles.form} onSubmit={(e) => {
    e.preventDefault();
    alert("Message sent successfully 🚀");
  }}>

    <input
      type="text"
      placeholder="Enter your name"
      style={styles.input}
      required
    />

    <input
      type="email"
      placeholder="Enter your email"
      style={styles.input}
      required
    />

    <input
      type="text"
      placeholder="Subject"
      style={styles.input}
    />

    <textarea
      placeholder="Enter your message"
      style={styles.textarea}
      required
    />

    <button type="submit" style={styles.button}>
      Send Message
    </button>
  </form>
</div>

      </div>

  
  );
}

export default App;


const styles = {
  page: {
    fontFamily: "Arial",
    background: "#0f172a",
    color: "white",
    minHeight: "100vh"
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 50px",
    background: "#111827",
    position: "sticky",
    top: 0
  },

  logo: {
    color: "#38bdf8"
  },

  navLinks: {
    display: "flex",
    gap: "20px",
    cursor: "pointer"
  },

  link: {
    color: "white",
    textDecoration: "none"
  },
  hero: {
    textAlign: "center",
    padding: "80px 20px"
  },
profile: {
  width: "180px",
  height: "180px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "4px solid #38bdf8",
  marginBottom: "20px",
  boxShadow: "0 0 30px #38bdf8"
},
  subtitle: {
    color: "#94a3b8"
  },

heroButtons: {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginTop: "20px",
  flexWrap: "wrap"
},

profileBtn: {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  background: "#111827",
  color: "white",
  padding: "10px 16px",
  borderRadius: "10px",
  textDecoration: "none",
  border: "1px solid #38bdf8",
  fontSize: "14px",
  fontWeight: "bold"
},


  button: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "#38bdf8",
    border: "none",
    color: "black",
    borderRadius: "8px",
    cursor: "pointer"
  },

  section: {
    padding: "50px",
    textAlign: "center"
  },

  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap"
  },
  card: {
    background: "#111827",
    padding: "25px",
    borderRadius: "15px",
    minWidth: "250px",
    border: "1px solid #38bdf8",
    transition: "0.3s"
  },
  eduTitle: {
    color: "#38bdf8",
    marginBottom: "15px"
  },

  details: {
    marginTop: "15px",
    textAlign: "left",
    lineHeight: "1.8"
  },
  form: {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  maxWidth: "500px",
  margin: "auto"
},

input: {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #38bdf8",
  background: "#111827",
  color: "white"
},

textarea: {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #38bdf8",
  background: "#111827",
  color: "white",
  minHeight: "120px"
},
title: {
  fontSize: "3rem",
  margin: "10px 0",
  lineHeight: "1.2",
  color: "white"
},
projectCard: {
  background: "#111827",
  padding: "25px",
  borderRadius: "12px",
  border: "1px solid #38bdf8",
  width: "320px",
  minHeight: "220px",
  boxShadow: "0 0 15px rgba(56,189,248,0.2)",
  transition: "0.3s",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
}
};
  