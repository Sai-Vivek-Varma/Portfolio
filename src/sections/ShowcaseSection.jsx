import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project-1.png" />
            </div>
            <div className="text-content">
              <h2>
                Surplus Food redistribution application, aimed to reduce food
                waste and promote zero hunger.
              </h2>
              <p className="text-white-50 md:text-xl">
                Built with React.js, TailwindCSS for a fast and user friendly
                experiences.
              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#c197d2]">
                <img src="/images/project-2.png" alt="" />
              </div>
              <h2>Personalized AI Learning Companions</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#c2f6ff]">
                <img src="/images/project-3.png" alt="" />
              </div>
              <h2>AI Powered Blogging Website</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
