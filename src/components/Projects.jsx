import { projects } from "../data";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";

export const Projects = () => {
  return (
    <section className="py-20 mx-auto max-w-7xl px-8" id="projects">
      <SectionTitle text="Projects" />
      <div
        className="py-16 grid lg:grid-cols-2
    xl:grid-cols-3 gap-8"
      >
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
