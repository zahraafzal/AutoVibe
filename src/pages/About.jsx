import { Link } from "react-router-dom";
import Seo from "../components/Seo";

function About() {
  return (
    <section className="about-page">
      <Seo
        title="About Us | AutoVibe"
        description="Learn about AutoVibe, an automotive blog sharing car reviews, maintenance advice and buying guides."
      />

      <div className="about-hero">
        <span>WHO WE ARE</span>
        <h1>
          About <span>AutoVibe</span>
        </h1>
        <p>
          Your destination for everything automotive. Discover cars, explore
          technology and make smarter decisions with AutoVibe.
        </p>
        <Link to="/blog" className="about-btn">
          Explore Our Blog
        </Link>
      </div>

      <div className="about-intro">
        <div>
          <span className="about-label">OUR STORY</span>
          <h2>Driving Your Passion for Cars</h2>
          <p>
            AutoVibe is an automotive platform created for people who love cars
            and want to learn more about them. We bring together car reviews,
            maintenance advice, electric vehicle updates and buying guides.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900"
          alt="Modern silver car parked on a street"
          loading="lazy"
        />
      </div>

      <div className="about-values">
        <div>
          <h2>Our Mission</h2>
          <p>
            To provide useful and easy-to-understand automotive information that
            helps readers make informed decisions.
          </p>
        </div>

        <div>
          <h2>Our Vision</h2>
          <p>
            To become a trusted destination for automotive knowledge, innovation
            and inspiration.
          </p>
        </div>
      </div>

      <div className="why-autovibe">
        <span className="about-label">WHY AUTOVIBE?</span>
        <h2>Everything About Cars, In One Place</h2>

        <div className="why-grid">
          <div>
            <h3>Car Reviews</h3>
            <p>Explore car features, designs and performance.</p>
          </div>

          <div>
            <h3>Expert Tips</h3>
            <p>Learn practical vehicle care and maintenance tips.</p>
          </div>

          <div>
            <h3>Latest Technology</h3>
            <p>Stay informed about electric vehicles and innovation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
