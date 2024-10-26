
import Image from 'next/image';

export default function Home() {
  return(
    <>
    <h1 className="text-3xl font-bold text-center  mt-10">
    𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸 𝓒𝓻𝓪𝓯𝓽𝓲𝓷𝓰 𝓒𝓸𝓭𝓮</h1>

    <Image
          src="/home.jpeg"
          alt="Logo"
          width={400}
          height={400}
          className="mx-auto lg:ml-96 mt-5  flex-row rounded-2xl border-2 border-blue-500 "
        />
        
    <p className=" sm:ml-16 sm:mr-16 sm:mt-4 sm:p-8   lg:ml-48 lg:mt-4 lg:mr-48 lg:text-lg  lg:border-2 lg:p-3 border-blue-500 ">At Crafting Code, I showcase my passion for developing dynamic and responsive web applications using cutting-edge technologies like TypeScript, Java, HTML, and CSS. My portfolio reflects my journey as a developer, highlighting a range of projects that demonstrate my skills and dedication to building clean, efficient, and user-friendly code. Whether it's interactive web designs or complex software solutions, you'll find all my projects meticulously crafted with precision and creativity. Explore my work and discover how I transform ideas into reality through code!</p>


    </>
  )

}
