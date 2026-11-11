import { useParams, Link } from "react-router-dom";
import Seo from "../components/Seo";
import articles from "../data/articles";

function Article() {
  const { id } = useParams();
  const article = articles.find((item) => item.id === Number(id));

  if (!article) {
    return (
      <div className="page-content">
        <Seo
          title="Article Not Found | AutoVibe"
          description="The article you are looking for does not exist."
        />
        <h1>Article Not Found</h1>
        <p>The article you are looking for does not exist.</p>
        <Link to="/blog" className="back-link">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  // related articles to show at the bottom
  const relatedArticles = articles.filter((item) =>
    article.related.includes(item.id),
  );

  return (
    <section className="article-page">
      <Seo title={article.title + " | AutoVibe"} description={article.description} />

      <Link to="/blog" className="back-link">
        ← Back to Blog
      </Link>

      <div className="article-header">
        <Link to={"/blog?category=" + article.category}>{article.category}</Link>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <p className="article-date">
          {article.date} · By AutoVibe Team
        </p>
      </div>

      <img
        className="article-banner"
        src={article.image + "?w=1200"}
        alt={article.imageAlt}
      />

      <div className="article-content">
        {article.content.map((part) => (
          <div key={part.heading}>
            <h2>{part.heading}</h2>
            <p>{part.text}</p>
            {part.link && (
              <p className="read-also">
                Read also: <Link to={part.link.to}>{part.link.text} →</Link>
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="more-articles">
        <h2>Related Articles</h2>
        <div className="article-container">
          {relatedArticles.map((item) => (
            <div className="article-card" key={item.id}>
              <img src={item.image + "?w=600"} alt={item.imageAlt} loading="lazy" />
              <div className="article-info">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <Link to={"/article/" + item.id}>Read More →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Article;
