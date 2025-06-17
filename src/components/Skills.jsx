import { skills } from "../data";
import { SectionTitle } from "./SectionTitle";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
  return (
    <section className="py-20 mx-auto max-w-7xl px-8" id="skills">
      <SectionTitle text="tech stack" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
