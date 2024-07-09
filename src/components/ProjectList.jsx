import ProjectCard from "./ProjectCard";
import Experience from "../_data/Experience.json";

/**
 * Represents a list of project cards.
 *
 * This component maps over the projects data and generates
 * a ProjectCard component for each project.
 *
 * @component
 */

const ProjectList = () =>
  // projects.map((project) => (
  //   <ProjectCard key={project.id} title={project.title} image={project.image} color={project.bgcolor} />
  // ));
  //  projects.map((project) => (
  //   <ProjectCard key={project.id} title={project.title} image={project.image} color={project.bgcolor} />
  // ));
  Experience.map((project) => (
    <ProjectCard key={project.id} title={project.title} image={project.image} color={project.bgcolor} />
  ));

export default ProjectList;
