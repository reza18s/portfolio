import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ArticleHeader from "./ArticleHeader";
import { projects } from "../data/projects";

function Portfolio() {
  const navigate = useNavigate();
  return (
    <article className="portfolio active" data-page="portfolio">
      <ArticleHeader
        className="flex flex-row justify-between"
        title="Portfolio"
      />

      <section className="projects">
        <ul className="project-list">
          {projects.map((p) => (
            <li
              className={`project-item active cursor-pointer`}
              data-filter-item
              data-category={p.category}
              key={p.title}
              onClick={() => navigate(`/portfolio/${p.slug}`)}
            >
              <div>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <Eye size={16} aria-hidden="true" focusable={false} />
                  </div>
                  <img
                    className="lg:h-40"
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-category">
                  {p.category.charAt(0).toUpperCase() + p.category.slice(1)}
                </p>
                <div className="mt-2 ml-2 flex flex-wrap gap-1">
                  {p.Technologies.map((tech) => (
                    <span
                      key={tech}
                      className="service-item flex h-fit w-fit items-center rounded-md py-1 pr-2 pl-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Portfolio;
