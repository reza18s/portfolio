import ArticleHeader from "./ArticleHeader";
import IcExpress from "./icons/IcExpress";
import IcGraphql from "./icons/IcGraphql";
import IcMongo from "./icons/IcMongo";
import IcMysql from "./icons/IcMysql";
import IcNext from "./icons/IcNext";
import IcNode from "./icons/IcNode";
import IcPrisma from "./icons/IcPrisma";
import IcReact from "./icons/IcReact";
import IcTailwind from "./icons/IcTailwind";

function About() {
  return (
    <article className="about active" data-page="about">
      <ArticleHeader title="About me" />
      <section className="about-text">
        <p>
          Hi, I'm Reza Saeidavi — a freelance web and Android developer with 4+
          years of hands-on experience across front-end and back-end
          development.
        </p>
        <p>
          I use React and Next.js to build fast, interactive web applications,
          Node.js and Express for scalable backend APIs, Tailwind CSS for
          responsive styling, and React Native to create cross-platform mobile
          apps all with a focus on clean, maintainable code.
        </p>
      </section>{" "}
      <section className="service">
        <h3 className="h3 service-title">Technologies i uses</h3>
        <ul className="flex flex-wrap items-center justify-center gap-2">
          {[
            {
              label: "React",
              icon: <IcReact />,
            },
            {
              label: "Tailwind CSS",
              icon: <IcTailwind />,
            },
            { label: "Express.js", icon: <IcExpress></IcExpress> },
            { label: "GraphQL", icon: <IcGraphql></IcGraphql> },
            {
              label: "React Native",
              icon: <IcReact />,
            },
            {
              label: "Node.js",
              icon: <IcNode />,
            },
            {
              label: "Next.js",
              icon: <IcNext></IcNext>,
            },
            { label: "MySQL", icon: <IcMysql></IcMysql> },
            { label: "MongoDB", icon: <IcMongo /> },

            { label: "Prisma", icon: <IcPrisma></IcPrisma> },
          ].map((tech) => (
            <li
              key={tech.label}
              className="service-item flex h-fit w-fit items-center gap-2 rounded-lg py-1 pr-2 pl-1 lg:gap-4 lg:py-2 lg:pr-4 lg:pl-3"
            >
              <div className="rounded-md" aria-hidden="true">
                {tech.icon}
              </div>
              <p className="service-item-text text-xs md:text-base lg:text-lg">
                {tech.label}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          <li className="service-item flex flex-col gap-2 p-5">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-dev.svg"
                alt="Web development icon"
                width={40}
              />
            </div>
            <div className="service-content-box flex flex-col gap-2">
              <h4 className="h4 service-item-title text-center">
                Web development
              </h4>
              <p className="service-item-text text-center">
                High-quality development of sites at the professional level with
                react / Next.js for the frontend and node.js for the backend.
              </p>
            </div>
          </li>
          <li className="service-item flex flex-col gap-2 p-5">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-app.svg"
                alt="mobile app icon"
                width={40}
              />
            </div>
            <div className="service-content-box flex flex-col gap-2">
              <h4 className="h4 service-item-title text-center">Mobile apps</h4>
              <p className="service-item-text text-center">
                Professional development of applications for Android using React
                Native / Ionic.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default About;
