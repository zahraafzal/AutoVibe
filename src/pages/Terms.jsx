import Seo from "../components/Seo";

function Terms() {
  return (
    <section className="legal-page">
      <Seo
        title="Terms & Conditions | AutoVibe"
        description="Read the terms and conditions for using the AutoVibe website."
      />

      <h1>Terms & Conditions</h1>
      <p className="legal-date">Last updated: November 2026</p>

      <h2>Using This Website</h2>
      <p>
        By using AutoVibe you agree to these terms. If you do not agree, please
        do not use the website.
      </p>

      <h2>Our Content</h2>
      <p>
        All articles on AutoVibe are for general information only. You can share
        links to our articles, but please do not copy the full content without
        permission.
      </p>

      <h2>No Professional Advice</h2>
      <p>
        Our maintenance and buying tips are general advice. Always ask a
        qualified mechanic or dealer before making important decisions about
        your car.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these terms from time to time. The latest version will
        always be on this page.
      </p>
    </section>
  );
}

export default Terms;
