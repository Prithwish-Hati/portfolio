import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section 
    id="projects"
    className="margin-x py-10">
      <h1 className="text-xl font-bold md:text-4xl lg:text-6xl text-center">Projects</h1>
      {/* PROJECT 1 */}
      <div>
        <span className="project__counter">01</span>
        <span>
          <Image
            src="/line.svg"
            width={15}
            height={2}
            className="md:w-8 lg:w-12"
          />
        </span>
      </div>

      <div className="project__card-container">
        <div className="project__card">
          <h2 className="font-semibold text-lg md:text-xl lg:text-2xl">
            API Based Car Showcase Application
          </h2>

          <p className="mt-2 text-sm text-slate-600 md:text-base">
            CarZest offers a comprehensive platform for users to access detailed
            information, high-quality images, and dynamic specifications of
            various car models from different manufacturers.
            <br className="my-[5px] lg:my-3" />
            <span className="font-semibold">Tech Stack:</span> React.js |
            Next.js | Typescript | Tailwind CSS | Rapid API{" "}
          </p>

          {/* Project Links */}
          <div className="project__link-container">
            <Link
              href="https://car-showcase-application.vercel.app/"
              className="project__link"
            >
              Open App
            </Link>
            <span>||</span>
            <Link
              href="https://github.com/Prithwish-Hati/car_showcase_application"
              className="project__link"
            >
              Source Code
            </Link>
            <span>||</span>
            <Link href="/" className="project__link">
              More Details
            </Link>
          </div>
        </div>
        <Image
          src="/csa-img.jpg"
          width={364}
          height={240}
          className="project__card-image"
        />
      </div>

      {/* PROJECT 2 */}
      <div>
        <span className="project__counter mt-10">02</span>
        <span>
          <Image
            src="/line.svg"
            width={15}
            height={2}
            className="md:w-8 lg:w-12"
          />
        </span>
      </div>

      <div className="project__card-container">
        <div className="project__card">
          <h2 className="font-semibold text-lg md:text-xl lg:text-2xl">
            API Based Car Showcase Application
          </h2>

          <p className="mt-2 text-sm text-slate-600 md:text-base">
            CarZest offers a comprehensive platform for users to access detailed
            information, high-quality images, and dynamic specifications of
            various car models from different manufacturers.
            <br className="my-[5px] lg:my-3" />
            <span className="font-semibold">Tech Stack:</span> React.js |
            Next.js | Typescript | Tailwind CSS | Rapid API{" "}
          </p>

          {/* Project Links */}
          <div className="project__link-container">
            <Link
              href="https://car-showcase-application.vercel.app/"
              className="project__link"
            >
              Open App
            </Link>
            <span>||</span>
            <Link
              href="https://github.com/Prithwish-Hati/car_showcase_application"
              className="project__link"
            >
              Source Code
            </Link>
            <span>||</span>
            <Link href="/" className="project__link">
              More Details
            </Link>
          </div>
        </div>
        <Image
          src="/project-thumbnail.svg"
          width={364}
          height={240}
          className="project__card-image"
        />
      </div>

      {/* PROJECT 3 */}
      <div>
        <span className="project__counter mt-10">03</span>
        <span>
          <Image
            src="/line.svg"
            width={15}
            height={2}
            className="md:w-8 lg:w-12"
          />
        </span>
      </div>

      <div className="project__card-container">
        <div className="project__card">
          <h2 className="font-semibold text-lg md:text-xl lg:text-2xl">
            API Based Car Showcase Application
          </h2>

          <p className="mt-2 text-sm text-slate-600 md:text-base">
            CarZest offers a comprehensive platform for users to access detailed
            information, high-quality images, and dynamic specifications of
            various car models from different manufacturers.
            <br className="my-[5px] lg:my-3" />
            <span className="font-semibold">Tech Stack:</span> React.js |
            Next.js | Typescript | Tailwind CSS | Rapid API{" "}
          </p>

          {/* Project Links */}
          <div className="project__link-container">
            <Link
              href="https://car-showcase-application.vercel.app/"
              className="project__link"
            >
              Open App
            </Link>
            <span>||</span>
            <Link
              href="https://github.com/Prithwish-Hati/car_showcase_application"
              className="project__link"
            >
              Source Code
            </Link>
            <span>||</span>
            <Link href="/" className="project__link">
              More Details
            </Link>
          </div>
        </div>
        <Image
          src="/project-thumbnail.svg"
          width={364}
          height={240}
          className="project__card-image"
        />
      </div>
    </section>
  );
};

export default Projects;
