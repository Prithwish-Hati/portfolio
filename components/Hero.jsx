import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero margin-x">
      {/* Tablet & PC Layout  */}
      <div className="hero__layout mt-16">
        <div>
          <h3 className="hero__subtitle">Hi, Hati Here! I'm a</h3>
          <h1 className="hero__title">
            FULL&nbsp;
            <br className="block lg:hidden" />
            STACK
            <br />
            DEVELOPER
          </h1>

          <p className="hero__subtitle mt-6 md:mt-8 hidden md:block">
            I build CRUD&nbsp;
            <br className="block md:hidden" />
            applications <br className="hidden md:block" />
            with <br className="block md:hidden" />
            MERN stack and <br className="block md:hidden" />
            Next.js 13
          </p>
          {/* Can do better formatting in above <p> */}

          <button className="hero__button hidden md:block">CONTACT ME</button>
        </div>

        <div>
          <Image
            src="/hero-img.svg"
            height={1120}
            width={1508}
            alt="hero image"
            className="hero__image hidden md:block"
          />
        </div>
      </div>

      {/* Mob layout */}
      <div className="hero__layout-mobile">
        <div className="flex-1">
          <p className="hero__subtitle mt-6 md:mt-8">
            I build CRUD&nbsp;
            <br className="block md:hidden" />
            applications <br className="hidden md:block" />
            with <br className="block md:hidden" />
            MERN stack and <br className="block md:hidden" />
            Next.js 13
          </p>

          <button className="hero__button">CONTACT ME</button>
        </div>

        <div>
          <Image
            src="/hero-img.svg"
            height={1120}
            width={1508}
            alt="hero image"
            className="hero__image"
          />
        </div>
      </div>

      {/* Background Image */}
      <Image
        src="/hero-bg.svg"
        width={455}
        height={580}
        alt="Hero bg image"
        className="hero__section-overlay"
      />
    </section>
  );
};

export default Hero;

{
  /* <div className=" social__icons md:centered-y">
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
        </div> */
}
