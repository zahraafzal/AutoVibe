import { Link } from "react-router-dom";
import Seo from "../components/Seo";

function NotFound() {
  return (
    <section className="page-content not-found">
      <Seo
        title="Page Not Found | AutoVibe"
        description="The page you are looking for does not exist."
      />

      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="hero-btn">
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;
