import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import articles, { categories } from "../data/articles";

const categoryText = {
  "Car Reviews": "Honest reviews of new and popular cars.",
  Maintenance: "Simple tips to keep your car in good shape.",
  "Electric Vehicles": "Everything about EVs and charging.",
  "Buying Guides": "Helpful advice before you buy a car.",
};

function Home() {
  const latestArticles = articles.slice(0, 3);

  return (
    <>
      <Seo
        title="AutoVibe | Car Reviews, Maintenance Guides & Automotive Technology"
        description="AutoVibe shares car reviews, maintenance guides, electric vehicle news and car buying tips for every driver."
      />

      <section className="hero">
        <div className="hero-content">
          <p className="subtitle">WELCOME TO AUTOVIBE</p>
          <h1>
            EXPLORE THE WORLD
            <br />
            OF <span>AUTOMOBILES.</span>
          </h1>
          <p className="hero-text">
            Discover car reviews, expert maintenance tips, electric vehicles and
            automotive technology.
          </p>
          <Link to="/blog" className="hero-btn">
            Explore Articles →
          </Link>
        </div>
      </section>

      <section className="articles-section">
        <div className="section-heading">
          <p className="subtitle">LATEST UPDATES</p>
          <h2>
            Featured <span>Articles</span>
          </h2>
          <p>Explore the latest automotive news and guides.</p>
        </div>

        <div className="article-container">
          {latestArticles.map((article) => (
            <div className="article-card" key={article.id}>
              <img
                src={article.image + "?w=600"}
                alt={article.imageAlt}
                loading="lazy"
              />
              <div className="article-info">
                <span>{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <Link to={"/article/" + article.id}>Read More →</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="center-btn">
          <Link to="/blog" className="hero-btn">
            View All Articles
          </Link>
        </div>
      </section>

      <section className="categories-section">
        <div className="section-heading">
          <p className="subtitle">CATEGORIES</p>
          <h2>
            What We <span>Cover</span>
          </h2>
          <p>Choose a topic and start reading.</p>
        </div>

        <div className="category-container">
          {categories.map((category) => (
            <div className="category-card home-category" key={category}>
              <h3>{category}</h3>
              <p>{categoryText[category]}</p>
              <Link to={"/blog?category=" + category}>Explore →</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
