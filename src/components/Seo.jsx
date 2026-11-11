import { useEffect } from "react";

function Seo({ title, description }) {
  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", description);
  }, [title, description]);

  return null;
}

export default Seo;
