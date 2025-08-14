import AnimatedPage from "../../AnimatedPage";
import "./Home.css";
export default function Home() {
  return (
    <AnimatedPage>
      <section className="home-container active">
        <h2>About Me</h2>
        <div className="content-container">
          <div className="img-skill-container">
            <div className="skills-resume-container">
              <h3>Experience in</h3>
              <ul className="skills">
                <li>DSA</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>NextJS</li>
                <li>REST API</li>
                <li>GSAP</li>
                <li>ExpressJS</li>
                <li>ML</li>
                <li>Python</li>
                <li>PostgreSQL</li>
                <li>DNN</li>
              </ul>
              <button onClick={() => window.open("/myResume.pdf", "_blank")}>
                My Resume
              </button>
            </div>
            <div className="img-container">
              <img
                src="images/GraduationPhotoNobackground-black.webp"
                alt="Graduation Photo of Yosef"
                loading="eager"
                fetchpriority="high"
              />
            </div>
          </div>
          <div className="about-me">
            <h3>What I do</h3>
            <div className="important-text">
              <p>
                I enjoy building optimized, responsive, user-friendly, dope
                websites with accessible interfaces that feel intuitive and work
                seamlessly across devices. Currently, I’m diving into Three.js &
                GSAP to bring interactive 3D experiences into the browser and
                push the boundaries of what the web can do.
              </p>
              <p>
                I'm also passionate about Artificial Intelligence and enjoy
                exploring how machine learning can enhance the user experience,
                automate tasks, and solve real-world problem.
              </p>
            </div>
            <p>
              I’m at the start of my career and open to new opportunities where
              I can contribute to meaningful projects and grow as a developer.
              If you’re hiring or have a collaboration in mind, feel free to
              reach out...
              <span className="please">please</span>.
            </p>
            <p>
              Outside of coding, I love staying active, reading about a variety
              of intriguing topics, and experimenting with 3D graphics, web
              animations to keep pushing my creative and technical limits.
            </p>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
