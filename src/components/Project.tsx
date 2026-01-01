import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ArticleHeader from "./ArticleHeader";

function ProjectPage() {
  const { projectTitle } = useParams<{ projectTitle: string }>();
  const project = projects.find((p) => p.slug === projectTitle);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <article className="project-page">
      <ArticleHeader title={project.title} />
      <img
        src={project.image}
        alt={project.title}
        className="mb-4 w-full rounded-lg border"
      />
      <div className="flex flex-col items-start">
        <h2 className="h3 mb-2 text-3xl">Project Overview</h2>
        <p className="mb-4">{project.description}</p>
        <div className="mb-4">
          <span className="text-xl font-semibold">Category:</span>{" "}
          {project.category}
        </div>
        <div className="mb-4">
          <span className="text-xl font-semibold">Role:</span> {project.role}
        </div>
        <div className="mb-4">
          <span className="text-xl font-semibold">Technologies:</span>
          <ul className="ml-6 list-disc">
            {project.Technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <span className="text-xl font-semibold">Key Features:</span>
          <ul className="ml-6 list-disc">
            {project.KeyFeatures.map((feature, i) => (
              <li key={i}>- {feature}</li>
            ))}
          </ul>
        </div>
        <a
          href={project.source}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-crayola hover:bg-yellow-crayola/60 mt-4 inline-block w-full rounded px-4 py-2 text-center font-semibold text-black transition"
        >
          Visit Project
        </a>
      </div>
    </article>
  );
}

export default ProjectPage;
