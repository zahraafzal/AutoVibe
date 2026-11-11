import Seo from "../components/Seo";

function Privacy() {
  return (
    <section className="legal-page">
      <Seo
        title="Privacy Policy | AutoVibe"
        description="Read how AutoVibe collects and uses your information."
      />

      <h1>Privacy Policy</h1>
      <p className="legal-date">Last updated: November 2026</p>

      <h2>Information We Collect</h2>
      <p>
        When you send us a message using the contact form, we receive your name,
        email address and message. We only use this information to reply to you.
      </p>

      <h2>Cookies</h2>
      <p>
        AutoVibe may use basic cookies and analytics to understand which articles
        our readers like. You can turn off cookies in your browser settings.
      </p>

      <h2>Sharing Your Information</h2>
      <p>
        We do not sell or share your personal information with other companies.
      </p>

      <h2>Links to Other Websites</h2>
      <p>
        Some articles may link to other websites. We are not responsible for the
        content or privacy policies of those websites.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this policy, please use our contact page.
      </p>
    </section>
  );
}

export default Privacy;
