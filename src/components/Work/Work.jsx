// Work.jsx
import AnimatedPage from "../../AnimatedPage";
import "./Work.css";

export default function Work() {
  const projects = [
    {
      title: "Space Firm",
      description:
        "A fictional company homepage designed with attention to layout balance, modern aesthetics, and responsive behavior across devices.",
      image: "images/space-firm-site.webp",
      link: "https://space-station-topaz.vercel.app/home",
      load: "eager",
    },
    {
      title: "DishDiscover",
      description:
        "A recipe browsing app built with React and data from TheMealDB API. Includes dynamic search and recipe detail pages with a clean UI.",
      image: "images/dishdiscover.webp",
      link: "https://dish-discover-rust.vercel.app/",
      load: "lazy",
    },
    {
      title: "Rock, Paper & Scissors! Game",
      description:
        "An interactive browser game built with JavaScript and styled components. Focused on user interaction, game logic, and responsive UI.",
      image: "images/game-2-front.webp",
      link: "https://yosity.github.io/rock-paper-scissors/",
      load: "lazy",
    },
    {
      title: "Touch Typing UI",
      description:
        "A minimalist touch typing interface built to improve frontend form handling and visual feedback. Focus on animations and responsiveness.",
      image: "images/touch-typing-UI.webp",
      link: "https://yosity.github.io/touch-typing-UI/",
      load: "lazy",
    },
    {
      title: "Clipboard Page",
      description:
        "A responsive landing page built to practice layout techniques and mobile-first design. Focused on clean UI and CSS flexbox/grid structure.",
      image: "images/clip-board-page.webp",
      link: "https://yosity.github.io/Clipboard-landing-page/",
      load: "eager",
    },
  ];

  return (
    <AnimatedPage>
      <section className="work-container">
        <h2 className="work-title">Projects</h2>
        <ul className="projects-grid">
          {projects.map((item) => (
            <li>
              <div className="project-img">
                <img src={item.image} alt={item.title} loading={item.load} />
              </div>
              <div className="project-info">
                <div>
                  <h3>{item.title}</h3>
                  {/* <p>{item.description}</p> */}
                </div>
                <a href={item.link} target="_blank">
                  View
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </AnimatedPage>
  );
}
