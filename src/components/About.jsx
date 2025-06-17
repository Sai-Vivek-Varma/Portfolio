import img from "../assets/hero.svg";
import { SectionTitle } from "./SectionTitle";
export const About = () => {
  return (
    <section className="py-20" id="about">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-16">
        <img src={img} alt="about me" />
        <article>
          <SectionTitle text="About me" />
          <p className="text-slate-600 mt-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            excepturi vel quibusdam natus modi laboriosam exercitationem,
            quaerat in ducimus architecto, libero ratione sunt. Ipsa cupiditate
            voluptas quod esse et dolore!
          </p>
        </article>
      </div>
    </section>
  );
};
