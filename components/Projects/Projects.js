import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <section>
      <h1>My Web Project</h1>
      <div class="md:grid grid-cols-2 gap-12">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </section>
  );
}
