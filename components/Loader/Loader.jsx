import Image from 'next/image';
import ani3 from "../../public/animation/a3.gif"
function Loader() {
  return (
    <div className=" flex flex-col items-center justify-center h-screen w-screen sticky top-0 z-10 bg-black">
      <Image className="" src={ani3} alt="animation" />
    </div>
  );
}

export default Loader;
