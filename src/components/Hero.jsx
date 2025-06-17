import { FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa";
import img from "../assets/hero.svg";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Hero = () => {
  return (
    <section className="bg-emerald-100 sm:py-24 py-28">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Vivek</h1>
          <p className="mt-4 text-3xl text-slate-600 capitalize tracking-wide">
            Software Engineer
          </p>
          <p className="mt-2 text-lg text-slate-600 capitalize tracking-wide">
            turning problems into solutions
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/Sai-Vivek-Varma" target="_blank">
              <FaGithub className="h-8 w-8 text-slate-black hover:text-slate-700 duration-300" />
            </a>
            <a href="https://linkedin.com/in/sai-vivek-varma" target="_blank">
              <FaLinkedin className="h-8 w-8 text-slate-black hover:text-slate-700 duration-300" />
            </a>
            <a
              href="https://www.hackerrank.com/profile/saivivek_varma01"
              target="_blank"
            >
              <FaHackerrank className="h-8 w-8 text-slate-black hover:text-slate-700 duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={img} alt="hero" className="h-80 lg:h-96" />
        </article>
      </div>
    </section>
  );
};
