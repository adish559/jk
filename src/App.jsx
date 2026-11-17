import Navbar from "./components/Navbar";
import profileImage from "./assets/profile.jpeg";
import "./App.css";

const roles = [
  {
    dates: "2026 — NOW",
    title: "Product Designer",
    company: "Northstar Studio",
    location: "Remote · San Francisco, CA",
    description:
      "Leading product design for a small team building tools that make complex work feel simple. I partner with product and engineering from the first sketch through launch.",
    tags: ["Product strategy", "Design systems", "Prototyping"],
  },
  {
    dates: "2021 — 2023",
    title: "Digital Designer",
    company: "Goodkind Creative",
    location: "Brooklyn, NY",
    description:
      "Created thoughtful digital experiences for early-stage teams and established brands, bringing a clear point of view to every screen and interaction.",
    tags: ["Web design", "Visual identity", "Art direction"],
  },
  {
    dates: "2019 — 2021",
    title: "Design Intern",
    company: "Fieldwork Co.",
    location: "New York, NY",
    description:
      "Learned the craft alongside a curious team, supporting research, early concepts, and the small details that make products feel considered.",
    tags: ["Research", "UI design", "Collaboration"],
  },
];

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="intro page-wrap" id="top" aria-labelledby="intro-title">
          <div className="intro-copy">
            <p className="eyebrow"><span className="availability-dot" /> INDEPENDENT DESIGNER · Trivandrum,Kerala</p>
            <h1 id="intro-title">Making things make <em>sense.</em></h1>
            <p className="intro-summary">
              I’m Adish, a product designer who brings clarity and character to
              the everyday tools we use. I turn big, fuzzy ideas into useful,
              thoughtful experiences.
            </p>
            <a className="text-link" href="#experience">A little about my work <span aria-hidden="true">↓</span></a>
          </div>
          <div className="intro-note" aria-label="Design philosophy">
            <span className="note-mark">✳</span>
            <p>Good design is<br />clear, considered,<br />and a little bit<br /><em>unexpected.</em></p>
            <span className="note-caption">A NOTE TO SELF, ALWAYS</span>
          </div>
          <div className="intro-index"><span>01</span><span>SCROLL TO EXPLORE</span><span>↓</span></div>
        </section>

        <section className="experience section-wrap" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <div><p className="eyebrow">THE SHORT VERSION</p><h2 id="experience-title">Where I’ve been</h2></div>
            <p className="section-aside">A few chapters, good people,<br />and plenty of things learned.</p>
          </div>
          <div className="timeline">
            {roles.map((role, index) => (
              <article className="role" key={role.company}>
                <div className="role-date"><span className="timeline-dot" />{role.dates}</div>
                <div className="role-content">
                  <div className="role-heading"><div><h3>{role.title}</h3><p className="role-company">{role.company} <span>·</span> {role.location}</p></div><span className="role-number">0{index + 1}</span></div>
                  <p className="role-description">{role.description}</p>
                  <ul className="tag-list" aria-label="Areas of work">{role.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
          <div className="experience-foot"><span>ALWAYS LEARNING, ALWAYS MAKING</span><span>2019 — TODAY</span></div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="about-topline"><span>02 / A BIT MORE HUMAN</span><span>BROOKLYN, NY · OPEN TO GOOD THINGS</span></div>
          <div className="about-layout">
            <div className="about-image-wrap">
              <img src={profileImage} alt="Athish, product designer" className="about-image" />
              <span className="image-caption">A rare moment away from the screen ↗</span>
            </div>
            <div className="about-copy">
              <p className="eyebrow">SO, WHO’S ATHIS?</p>
              <h2 id="about-title">Designer by trade.<br /><em>Curious by nature.</em></h2>
              <p className="about-lede">I care about the small details, the big questions, and the people on the other side of the screen.</p>
              <p>I’m a Brooklyn-based designer drawn to work that makes everyday life feel a little easier. Over the last few years, I’ve helped teams find the useful thread in a messy idea, and turned it into products people can understand and enjoy.</p>
              <p>When I’m not moving pixels around, I’m probably looking for a new coffee spot, taking the long way home with my camera, or trying to keep my houseplants alive. I believe good work comes from staying curious, being kind, and making room to play.</p>
              <div className="about-details">
                <div><span>BASED IN</span><strong>Brooklyn, New York</strong></div>
                <div><span>IN MY FREE TIME</span><strong>Film photos, long walks &amp; good coffee</strong></div>
                <div><span>MY KIND OF PROJECT</span><strong>Useful things with a point of view</strong></div>
              </div>
              <a className="contact-link" id="contact" href="mailto:hello@athish.design"><span>Have something good in mind?</span><strong>Let’s talk <span aria-hidden="true">↗</span></strong></a>
            </div>
          </div>
          <footer className="about-footer"><a href="#top">ATHISH<span>.</span></a><span>MADE WITH CARE · 2025</span><a href="#top">BACK TO TOP ↑</a></footer>
        </section>
      </main>
    </>
  );
}

export default App;
