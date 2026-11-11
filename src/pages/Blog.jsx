import { Link, useSearchParams } from "react-router-dom";
import Seo from "../components/Seo";
import articles, { categories } from "../data/articles";

function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "All";

  function updateFilters(newSearch, newCategory) {
    const params = {};
    if (newSearch) params.search = newSearch;
    if (newCategory !== "All") params.category = newCategory;
    setSearchParams(params, { replace: true });
  }

  const filteredArticles = articles.filter((article) => {
    const text = (article.title + " " + article.description).toLowerCase();
    const matchSearch = text.includes(search.toLowerCase());
    const matchCategory = category === "All" || article.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <section className="blog-page">
      <Seo
        title="Blog | AutoVibe"
        description="Read car reviews, maintenance tips, electric vehicle guides and car buying advice on the AutoVibe blog."
      />

      <div className="blog-heading">
        <p className="subtitle">AUTOMOTIVE INSIGHTS</p>
        <h1>
          Our <span>Blog</span>
        </h1>
        <p>Explore car reviews, maintenance tips and automotive technology.</p>
      </div>

      <div className="blog-search">
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(event) => updateFilters(event.target.value, category)}
        />
      </div>

      <div className="blog-filters">
        {["All", ...categories].map((item) => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => updateFilters(search, item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="blog-grid">
        {filteredArticles.map((article) => (
          <div className="blog-card" key={article.id}>
            <img
              src={article.image + "?w=700"}
              alt={article.imageAlt}
              loading="lazy"
            />

            <div className="blog-info">
              <span>{article.category}</span>
              <h2>{article.title}</h2>
              <p>{article.description}</p>

              <Link to={"/article/" + article.id}>Read Article →</Link>
            </div>
          </div>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <p className="no-results">No articles found. Try another word.</p>
      )}
    </section>
  );
}

export default Blog;
