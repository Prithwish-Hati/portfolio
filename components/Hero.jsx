import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero margin-x">
      <div className="hero__text-container">
        <h3 className="hero__subtitle mt-6">
          Hi, Hati Here! I'm a
        </h3>

        <h1 className="hero__title">
          FULL&nbsp;<br className="block lg:hidden" />STACK
          <br />
          DEVELOPER
        </h1>

        <p className="hero__subtitle mt-4 md:mt-6 lg:mt-8 z-20">
          I build CRUD applications
          <br />
          with MERN stack and Next.js 13
        </p>

        <button className="hero__button">CONTACT ME</button>

        <div className=" social__icons md:centered-y">
          <Link href="https://www.linkedin.com/in/prithwishhati/">
            <Image
              src="/linkedin.svg"
              width={50}
              height={50}
              className="object-contain"
            />
          </Link>

          <Link href="https://github.com/Prithwish-Hati">
            <Image
              src="/GitHub.svg"
              width={50}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div >
        <Image
          src="/hero-img.svg"
          height={1120}
          width={1508}
          alt="hero image"
          className="hero__image"
        />
      </div>

      <div className="hero__section-overlay" />
    </section>
  );
};

export default Hero;
