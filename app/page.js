import Image from 'next/image'
import img1 from "/public/images/sourav-2.png";
import img2 from "/public/images/hex-br.gif";

export default function Home() {
  return (
    <main className=" mainClass z-10 flex min-h-screen flex-col items-center justify-between m-5">

      <section className='md:grid grid-cols-2 md:-mt-20'>

        <div className='mx-2 md:ml-24 my-auto'>
          <div className="nameText mx-auto md:ml-0 w-fit ">
            <h2>SOURAV</h2>
            <h2>SOURAV</h2>
          <p className=' text-sky-400 font-semibold text-3xl absolute right-0 bottom-1'>MONDAL</p>
          </div>
          {/* <div className="nameText ">
            <h2 className=''>MONDAL</h2>
            <h2 className=''>MONDAL</h2>
          </div> */}
          {/* <h1 className='text-4xl  md:text-6xl text-[#05fc64] font-bold '>SOURAV <br></br> MONDAL</h1> */}
          <p className='text-amber-500 text-2xl font-semibold'>Front end Web Developer</p>
          <p className='text-white'>Hey, I'm Sourav Mondal. A junior front-end MERN stack web developer. And this is my personal portfolio website</p>
        </div>
        <div className=' flex justify-center items-center mx-auto w-fit relative'>
          <Image className=' opacity-20 mx-auto xs:max-w-[320px] sm:min-w-[600px]' src={img2}  height="auto" />
          <Image className=' absolute  mx-auto my-auto rotate-[30deg] xs:max-w-[200px] sm:max-w-[283px]' src={img1} height="auto" alt="img" ></Image>
        </div>

      </section>

      <div className='m-10 text-white'>fhDJFHAUFHUADGUADHFAUDS</div>
      <div className='m-10 text-white'>fhDJFHAUFHUADGUADHFAUDS</div>
      <div className='m-10 text-white'>fhDJFHAUFHUADGUADHFAUDS</div>
      <div className='m-10 text-white'>fhDJFHAUFHUADGUADHFAUDS</div>
      <div className='m-10 text-white'>fhDJFHAUFHUADGUADHFAUDS</div>
      <div className='m-10 text-white'>fhDJFHAUFHUADGUADHFAUDS</div>


    </main>
  )
}
