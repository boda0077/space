import { Link } from "react-router-dom"
 import { useGSAP } from "@gsap/react"
 import gsap from "gsap"
function Home() {

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.fromTo(".circle", {x: 520}, {x: 0, duration: 2 , ease: "elastic.out(1, 0.3)"})
    gsap.fromTo(".fade", {opacity: 0}, {opacity: 2, duration: 1 })
  })

  return (
    <div className=" fade grid overflow-hidden grid-cols-2 justify-between items-center mt-20 max-md:grid-cols-1 max-md:gap-20 max-md:mt-30">
        <div className="grid justify-center items-center max-md:text-center">
            <h3 className="uppercase text-white font-sans max-sm:text-[14px] ">so, you want to travle to</h3>
            <h1 className="uppercase text-white text-[9.5rem] font-sans max-sm:text-[7rem]">space</h1>
            <p className="text-white w-101 text-justify max-md:text-center font-sans max-sm:w-75">let's face it: if you want to go to space. you might as well genuinely go to outer space and not hover kind of on the edge of it. well sit back and relax because we'll give you a truly out of this world experience! </p>
        </div>

        <div className="">

            <Link to="/destination" className=" circle h-60 w-60 rounded-full bg-white flex items-center justify-center  m-auto cursor-pointer hover:bg-gray-300 hover:scale-105 transition-all ">
               <span  className="uppercase text-4xl font-sans  font-light">explore</span>
            </Link>
            
        </div>
    </div>
  )
}
export default Home