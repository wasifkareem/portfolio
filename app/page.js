import Image from "next/image";
import photodp from "../public/photodp.jpg";


import { cn } from "@/lib/utils";
import { Tabs } from "./comp/tab";
import Accordion from "./comp/exp-acc";
import pw_logo from "../public/pocketworks_mobile_ltd_logo.jpeg"
import innerloop from "../public/innerloop.jpeg"


export default function Home() {

  const tabs = [
    {
      title: "Experience",
      value: "product",
      content: (
        <div className=" overflow-hidden relative  p-4  flex flex-col  text-sm ">

          <h2 className=" text-lg font-quicksand">Work Experience</h2>
          <Accordion company={"Pocketworks"} role={"Web & CMS developer"} companyLogo={pw_logo} tenure={"2024 - 2025"} skills={['this is first onethis is first onethis is first onethis is first onethis is first onethis is first one is first onethis is first one is first onethis is first one', 'this is first onethis is first onethis is first onethis is first onethis is first onethis is first one is first onethis is first one is first onethis is first one']}/>
          <Accordion company={"Innerloop"} role={"Web developer"} companyLogo={innerloop} tenure={"2024 - 2025"} skills={['this is first onethis is first onethis is first onethis is first onethis is fs is first onethis is first onethis is fs is first onethis is first onethis is fs is first onethis is first onethis is fs is first onethis is first onethis is first onethis is first one is first onethis is first one is first onethis is first one', 'this is first onethis is first onethis is first onethis is first onethis is first onethis is first one is first onethis is first one is first onethis is first one']}/>
          
        </div>
      ),
    },
    {
      title: "Personal Projects",
      value: "services",
      content: (
        <div className=" overflow-hidden relative bg-red-200 p-4   text-sm ">
          <p>Services tab</p>
         
        </div>
      ),
    },
    {
      title: "Vlog",
      value: "playground",
      content: (
        <div className=" overflow-hidden relative bg-red-200 p-4   text-sm">
          <p>Playground tab</p>
         
        </div>
      ),
    },
   
  ];

  return (
    <div
      className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )} />
      {/* Radial gradient for the container to give a faded look */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white hover:bg-gradient-to-br hover:from-green-300 hover:to-blue-300  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
              <div className=" z-10  flex flex-col mt-10 gap-3 md:gap-0 md:flex-row ">
          <div className=" flex flex-col gap-3">
          
          <div className=" md:w-60 bg-white rounded-lg p-block-padding mx-4 md:mx-2 border border-gray-300">
          <Image src={photodp}
            className="  w-36 rounded-xl mb-5 "
            />
            <h1 className=" font-quicksand text-3xl font-semibold  text-pri">Hi, I'm Wasif.</h1>
            <p className=" text-gray-700">I'm a UI centric full-stack developer. I love building intuitive interfaces and scalable applications</p>
            
          </div>
          <div className=" bg-white p-block-padding border border-gray-300 rounded-lg mx-4 md:mx-2">
            all socials here
          </div>
          <div className=" bg-white p-block-padding border border-gray-300 rounded-lg mx-4 md:mx-2">
           CV here
          </div>
          
            </div>
          <div className=" bg-white overflow-hidden rounded-lg p-block-padding text-5xl mx-4 md:mx-2 lg:min-w-[700px] border border-gray-300">
          <Tabs tabs={tabs} />
          </div>
          <div>

          </div>
        </div>
    </div>
  );
}
