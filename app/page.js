import Image from 'next/image'
import img1 from "/public/images/sourav-2.png";
import img2 from "/public/images/hex-br.gif";

export default function Home() {
  return (
    <main className=" mainClass z-10 flex min-h-screen flex-col items-center justify-between m-5">

      <section className='md:grid grid-cols-2 mt-'>

        <div>
          <h1 className='text-4xl  md:text-6xl text-rose-600 font-bold mt-20 '>SOURAV MONDAL</h1>
          <p className='text-amber-500 text-2xl font-semibold'>Front end Web Developer</p>
          <p>Hey, I'm Sourav Mondal. A junior front-end MERN stack web developer. And this is my personal portfolio website</p>
        </div>
        <div className=' flex justify-center items-center w-fit relative'>
          <Image className=' opacity-40 mx-auto xs:min-w-[320px] sm:min-w-[600px]' src={img2}  height="auto" />
          <Image className=' absolute  mx-auto my-auto rotate-[30deg] xs:max-w-[200px] sm:max-w-[283px]' src={img1}  height="auto" alt="img" ></Image>
        </div>

      </section>


    </main>
  )
}
