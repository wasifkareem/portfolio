import Image from "next/image";
import photodp from "../public/was.jpg";


import { cn } from "@/lib/utils";
import { Tabs } from "./comp/tab";
import Accordion from "./comp/exp-acc";
import pw_logo from "../public/pocketworks_mobile_ltd_logo.jpeg"
import innerloop from "../public/innerloop.jpeg"
import starbook from "../public/starbook.svg"
import ProjectCard from "./comp/project-card";
import perplex from "../public/perplex.png"
import { Github, Linkedin, Mail, Twitter } from "lucide-react";


export default function Home() {

  const tabs = [
    {
      title: "Worked",
      value: "product",
      content: (
        <div className=" overflow-hidden relative  p-2 md:p-4  flex flex-col  text-sm ">

          <h2 className=" text-lg font-quicksand">Work Experience</h2>
          <Accordion company={"Pocketworks"} role={"Web & CMS developer"} companyLogo={pw_logo} tenure={"Dec 2024 - May 2025"} skills={"<ul class='custom-disc'><li>Worked with Pocketworks team to build a CMS-driven UI that powers the pocketworks main marketing <a target='_blank' href='https://www.pocketworks.co.uk'>website</a></li><li>Developed a fully editable website where all pages and sections can be managed via the CMS, enabling the marketing team to update content easily and frequently to support their campaigns.</li></ul>"}/>
          <hr className=" mx-1 md:mx-5"/>
          <Accordion company={"Innerloop"} role={"Web developer"} companyLogo={innerloop} tenure={"Jan 2024 - Jul 2024"} skills={"<ul class='custom-disc'><li>Developed a responsive, SEO-optimized landing page for Innerloop using Next.js, React.js, and Bootstrap, creating reusable UI components for various screen sizes.</li><li>Contributed to the Innerloop application by resolving bugs on the login and showcase pages, enhancing overall user experience.</li></ul>"}/>
          
        </div>
      ),
    },
    {
      title: "Built",
      value: "services",
      content: (
        <div className=" overflow-hidden relative flex flex-col gap-2 md:p-4   text-sm ">
          <ProjectCard title={"CMS driven UI : Pocketworks"} description={"Developed a fully editable website Frontend and CMS where all pages and sections can be managed via the CMS, enabling the marketing team to update content easily and frequently to support their marketing campaigns."} image={pw_logo} link={"https://www.pocketworks.co.uk"}/>
        <hr className=' mx-4' />

         <ProjectCard title="StarBook" image={starbook} description="Full-stack app that helps SaaS owners collect testimonials and Tips" link={"https://github.com/wasifkareem/StarBook"}  />
        <hr className=' mx-4' />

         <ProjectCard title="Perplexity Blogs" description="Pixel perfect replica of perplexity AI blog pages" image={perplex} link={"https://github.com/wasifkareem/perplexity-UI"}   />
       
         
        </div>
      ),
    },
    {
      title: "Published",
      value: "playground",
      content: (
        <div className=" font-quicksand overflow-hidden relative  p-4   text-sm">
          <p>Stellar coding Videos coming soon</p>
         
        </div>
      ),
    },
   
  ];
const tech=["Javascript", "Reactjs","Nextjs","TailwindCss","Nodejs","Zod","Redux","MongoDB"]
  return (
    <div
      className="relative flex  md:h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
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
          
          <div className=" relative md:w-80 bg-white flex flex-col  p-block-padding mx-4 md:mx-2 border border-gray-300">
      
          <Image src={photodp}
            className="  w-36 rounded-full border-1 border-gray-300 self-center opacity-95 mb-5 "
            />
            <h1 className=" font-quicksand text-3xl font-semibold  text-center mb-4 text-pri">Hi, I'm Wasif.</h1>
            <p className=" text-gray-500 font-quicksand text-center">I'm a UI centric full-stack developer. I love building intuitive interfaces and scalable applications</p>
            
          </div>
          <div className=" bg-white p-block-padding border border-gray-300  mx-4 md:mx-2">
           <div className=" flex justify-center items-center gap-7">
            <a target="_blank" href="https://github.com/wasifkareem"><Github className="" /></a>
            <a target="_blank" href="https://x.com/was_if__"><Twitter className="" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/wasifdev2762/"><Linkedin className="" /></a>
            <a href="mailto:wasifkareem2762@gmail.com"><Mail/></a>
           </div>
          </div>
          <div className=" bg-white justify-center md:max-w-[320px] p-block-padding border flex  border-gray-300  mx-4 md:mx-2">
            <p className=" flex flex-wrap gap-2 ">{tech.map((t)=><span className=" bg-gray-200 text-gray-900 px-3 p-1 rounded-md font-quicksand ">{t}</span>)}</p>
          </div>
          
            </div>
          <div className=" bg-white overflow-hidden  p-block-padding text-5xl mx-4 md:mx-2 min-h-[400px]  lg:min-w-[700px] border border-gray-300">
          <Tabs tabs={tabs} />
          </div>
          <div>

          </div>
        </div>
    </div>
  );
}
