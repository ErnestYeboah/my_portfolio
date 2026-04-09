import Navbar from "../../components/Navbar";
import SocialLinks from "../../components/SocialLinks";
import "./about.css";
import "../Home/home.css";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="about_page">
        <section className="about_intro">
          <div className=" grid max-[992px]:pr-(--padding) pl-(--padding) gap-5">
            <p data-aos="fade-up" className="about_intro__eyebrow">
              About Me
            </p>
            <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl ">
              Building thoughtful digital products for{" "}
              <span className="text-(--accent-color)">web and mobile</span>.
            </h1>
            <p data-aos="fade-up" data-aos-delay="200">
              I am Ernest Yeboah, a fullstack and web developer who also builds
              mobile experiences with Flutter. I enjoy turning ideas into clean,
              usable, and scalable products with modern frontend tools like
              React, Vue, and Tailwind, backed by Django and Python on the
              server side.
            </p>
            <p data-aos="fade-up" data-aos-delay="300">
              My focus is on creating interfaces that feel intuitive, systems
              that remain maintainable as they grow, and products that balance
              performance with strong visual polish.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-wrap gap-2"
            >
              <p className="about_chip">Fullstack Developer</p>
              <p className="about_chip">Mobile Developer</p>
              <p className="about_chip">React & Vue</p>
              <p className="about_chip">Flutter</p>
              <p className="about_chip">Django & Python</p>
            </div>
          </div>

          <div>
            <figure>
              <img
                src="/public/images/profile.png"
                className="h-[inherit] object-top"
                alt=""
              />
            </figure>
          </div>
        </section>

        <section className="about_section  shapedividers_com-9634 bg-(--alt-primary-color)">
          <div className="about_section__heading">
            <div>
              <p className="about_section__eyebrow mb-5">What I Do</p>
              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className="about_section__title"
              >
                A balanced mix of product thinking and hands-on development.
              </h2>
            </div>
            <p className="about_section__summary">
              I like working across the full product journey, from shaping the
              user experience to delivering the technical foundation needed to
              keep everything reliable and scalable.
            </p>
          </div>

          <div className="about_grid about_grid--three">
            <article data-aos="fade-up" className="about_card">
              <p className="about_card__eyebrow">Web Interfaces</p>
              <h3 className="about_card__title">Modern frontend experiences</h3>
              <p className="about_card__text">
                I build responsive, user-focused websites and applications with
                React, Vue, and Tailwind, aiming for clarity, speed, and visual
                consistency.
              </p>
            </article>

            <article
              data-aos="fade-up"
              data-aos-delay="100"
              className="about_card"
            >
              <p className="about_card__eyebrow">Backend Systems</p>
              <h3 className="about_card__title">
                Practical, maintainable logic
              </h3>
              <p className="about_card__text">
                On the backend, I use Django and Python to create clean
                architecture, structured APIs, and workflows that support
                real-world product needs.
              </p>
            </article>

            <article
              data-aos="fade-up"
              data-aos-delay="200"
              className="about_card"
            >
              <p className="about_card__eyebrow">Mobile Development</p>
              <h3 className="about_card__title">
                Cross-platform apps with Flutter
              </h3>
              <p className="about_card__text">
                I enjoy bringing the same care for usability and polish into
                mobile, building Flutter apps that feel smooth, intuitive, and
                production-ready.
              </p>
            </article>
          </div>
        </section>

        <section className="about_section  bg-(--alt-primary-color) pb-(--padding)">
          <div className="about_section__heading">
            <div>
              <p data-aos="fade-up" className="about_section__eyebrow">
                Toolbox
              </p>
              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className="about_section__title"
              >
                Technologies I use to bring ideas to life.
              </h2>
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="about_section__summary"
            >
              I like working with tools that help me move from concept to
              product efficiently while still leaving room for quality,
              experimentation, and refinement.
            </p>
          </div>

          <div className="about_grid about_grid--three ">
            <div data-aos="fade-up" className="about_card  about_stack_group">
              <h3 className="about_stack_group__label">Frontend Stack</h3>
              <div className="about_stack_group__chips">
                <span className="about_chip">React</span>
                <span className="about_chip">Vue</span>
                <span className="about_chip">Tailwind CSS</span>
                <span className="about_chip">JavaScript</span>
                <span className="about_chip">TypeScript</span>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="about_card about_stack_group"
            >
              <h3 className="about_stack_group__label">Backend Stack</h3>
              <div className="about_stack_group__chips">
                <span className="about_chip">Django</span>
                <span className="about_chip">Python</span>
                <span className="about_chip">REST APIs</span>
                <span className="about_chip">Authentication</span>
                <span className="about_chip">Database Design</span>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="about_card about_stack_group"
            >
              <h3 className="about_stack_group__label">Mobile & Workflow</h3>
              <div className="about_stack_group__chips">
                <span className="about_chip">Flutter</span>
                <span className="about_chip">Responsive Design</span>
                <span className="about_chip">UI/UX Thinking</span>
                <span className="about_chip">Performance</span>
                <span className="about_chip">Problem Solving</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about_section">
          <div className="about_section__heading">
            <div>
              <p data-aos="fade-up" className="about_section__eyebrow">
                How I Work
              </p>
              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className="about_section__title"
              >
                The principles that guide my development process.
              </h2>
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="about_section__summary"
            >
              I care about writing code that not only works today, but is also
              understandable, scalable, and pleasant to build on tomorrow.
            </p>
          </div>

          <div className="about_grid about_grid--two">
            <article data-aos="fade-up" className="about_card">
              <p className="about_card__eyebrow">Development Approach</p>
              <h3 className="about_card__title">
                Clean structure with user-first thinking
              </h3>
              <ul className="about_list">
                <li>I prioritize clear interfaces and intuitive user flows.</li>
                <li>
                  I aim for maintainable code structure instead of short-term
                  shortcuts.
                </li>
                <li>
                  I pay attention to performance, responsiveness, and
                  consistency.
                </li>
              </ul>
            </article>

            <article
              data-aos="fade-up"
              data-aos-delay="100"
              className="about_card"
            >
              <p className="about_card__eyebrow">Collaboration Style</p>
              <h3 className="about_card__title">
                Reliable, curious, and detail-oriented
              </h3>
              <ul className="about_list">
                <li>
                  I enjoy translating ideas into practical implementation plans.
                </li>
                <li>
                  I like refining both technical details and the final user
                  experience.
                </li>
                <li>
                  I value learning continuously and improving with each project.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="about_section">
          <div className="about_section__heading">
            <div>
              <p data-aos="fade-up" className="about_section__eyebrow">
                Beyond Code
              </p>
              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className="about_section__title"
              >
                Interests that keep my creativity sharp.
              </h2>
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="about_section__summary"
            >
              Outside development, I enjoy creative and reflective hobbies that
              keep me curious, observant, and inspired.
            </p>
          </div>

          <div className="about_grid about_grid--three">
            <article
              data-aos="zoom-in-up"
              className="about_card about_interest"
            >
              <p className="about_interest__label">Entertainment</p>
              <h3 className="about_interest__title">Video games and movies</h3>
              <p className="about_interest__text">
                I enjoy interactive storytelling, cinematic experiences, and the
                design choices that make digital worlds memorable.
              </p>
            </article>

            <article
              data-aos="zoom-in-up"
              data-aos-delay="100"
              className="about_card about_interest"
            >
              <p className="about_interest__label">Learning</p>
              <h3 className="about_interest__title">Podcasts and reading</h3>
              <p className="about_interest__text">
                I like ideas that expand perspective, whether through tech,
                creativity, productivity, or thoughtful conversations.
              </p>
            </article>

            <article
              data-aos="zoom-in-up"
              data-aos-delay="200"
              className="about_card about_interest"
            >
              <p className="about_interest__label">Creativity</p>
              <h3 className="about_interest__title">
                Drawing and visual exploration
              </h3>
              <p className="about_interest__text">
                Drawing helps me stay connected to composition, observation, and
                the visual side of design that also influences my UI work.
              </p>
            </article>
          </div>
        </section>

        <section data-aos="fade-up" className="about_cta">
          <h2 className="about_cta__title">
            Let&apos;s create something meaningful.
          </h2>
          <p className="about_cta__text">
            I enjoy working on products that combine useful functionality with a
            strong user experience. If you are building something on the web or
            mobile, I would love to connect.
          </p>
          <div className="about_cta__actions">
            <a
              className="about_cta__button about_cta__button--primary"
              href="mailto:yeboahernest246@gmail.com"
            >
              Send a message
            </a>
            <a
              className="about_cta__button about_cta__button--secondary"
              href="/images/Ernest Yeboah Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>
          <SocialLinks />
        </section>
      </main>
    </>
  );
};

export default About;
