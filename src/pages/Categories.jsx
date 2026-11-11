import { Link } from "react-router-dom";
import Seo from "../components/Seo";

function Categories() {
  const categories = [
    {
      title: "Car Reviews",
      imageAlt: "Sports car on the road",
      description:
        "Explore detailed reviews, performance and features of modern cars.",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700",
    },
    {
      title: "Maintenance",
      imageAlt: "Car engine being checked",
      description:
        "Learn useful tips to keep your vehicle safe and in excellent condition.",
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=700",
    },
    {
      title: "Electric Vehicles",
      imageAlt: "Electric car charging",
      description:
        "Discover electric cars and the future of automotive technology.",
      image:
        "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=700",
    },
    {
      title: "Buying Guides",
      imageAlt: "Car parked on the street",
      description:
        "Get helpful advice before choosing and purchasing your next car.",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=700",
    },
  ];

  return (
    <section className="categories-page">
      <Seo
        title="Categories | AutoVibe"
        description="Browse AutoVibe categories: Car Reviews, Maintenance, Electric Vehicles and Buying Guides."
      />

      <div className="categories-heading">
        <span>EXPLORE AUTOVIBE</span>
        <h1>
          Our <span>Categories</span>
        </h1>
        <p>Everything you need to know about cars, technology and driving.</p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <div className="category-card" key={category.title}>
            <img src={category.image} alt={category.imageAlt} loading="lazy" />
            <div className="category-info">
              <h2>{category.title}</h2>
              <p>{category.description}</p>
              <Link to={"/blog?category=" + category.title}>
                Explore Articles →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
