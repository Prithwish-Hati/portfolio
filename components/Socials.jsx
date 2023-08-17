import Image from "next/image";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="padding-x flex flex-col gap-5 centered-y">
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
  )
}

export default Socials