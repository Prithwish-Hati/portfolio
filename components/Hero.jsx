import Image from "next/image";
import Link from "next/link";

import { CustomButton } from ".";

const Hero = () => {
  return (
    <section className="hero">
      <div className="padding-x md:flex hidden flex-col gap-5 centered-y ">
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
      <div className="flex-1 md:pt-32 pt-20 md:pl-40 px-16 h-[100vh]">
        <h3 className="hero__subtitle mt-6 md:text-2xl text-lg">
          Hi, Hati Here! I'm a
        </h3>
        <h1 className="hero__title">
          FULL STACK
          <br />
          DEVELOPER
        </h1>
        <p className="hero__subtitle mt-3 md:mt-5 md:text-xl text-base ">
          I build CRUD applications with&ensp;
          <br />
          MERN stack and Next.js 13
        </p>

        <CustomButton title="CONTACT ME" />
      </div>

      <div className="flex justify-end items-end md:padding-x -mt-32 -mr-7 md:mt-20 md:mr-36 ">
        <Image
          src="/hero-img.svg"
          height={677}
          width={403}
          alt="hero image"
          className="object-contain z-10 h-[450px] md:h-[667px] md:w-[403px]"
        />
      </div>

      <div className="hero__section-overlay" />
    </section>
  );
};

export default Hero;
