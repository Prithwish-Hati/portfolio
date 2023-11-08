import Image from "next/image";

const Skills = () => {
  return (
    <section className="margin-x my-10">
      <h1 className="text-xl font-bold md:text-4xl lg:text-6xl text-center">
        Skills
      </h1>

      <div className="my-8 flex justify-center gap-2 flex-wrap">
        <Image src="/html5.svg" width={80} height={80} alt="html5"/>
        <Image src="/css3.svg" width={80} height={80} alt="css3"/>
        <Image src="/JavaScript.svg" width={80} height={80} alt="JavaScript"/>
        <Image src="/TailwindCSS.svg" width={80} height={80} alt="TailwindCSS"/>
        <Image src="/Reactjs.svg" width={80} height={80} alt="Reactjs"/>
        <Image
          src="/Next.js.png"
          width={80}
          height={80}
          className="object-contain"
          alt="Nextjs"
        />
        <Image src="/Figma.svg" width={80} height={80} alt="figma"/>
      </div>
    </section>
  );
};

export default Skills;
