import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BiLogoReact, BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiRedux, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import Image from "next/image";
import photodp from "../public/photodp.jpg";
import projectpic from "../public/projectpic.png";
import portfolio from "../public/portfolio.png";

export default function Home() {
  return (
    <main className=" bg-white text-black ">
      <section className=" min-h-screen px-6 bg-gradient-to-b from-white to-gray-200  sm:px-44">
        <nav className=" py-10 mb-8 flex justify-between">
          <h1 className=" text-xl font-burtons items-center flex font-bold">
            Wasif Kareem
          </h1>
          <ul className=" flex items-center">
            <li className=" bg-gradient-to-r from-cyan-500 to-teal-500 py-2 rounded-md px-4 text-white ml-2">
              <a href="#project">Projects</a>
            </li>
          </ul>
        </nav>
        <div className=" sm:flex sm:flex-row justify-between sm:items-center">
          <div className=" pt-20">
            <h2 className=" text-3xl py-2 font-bold sm:text-5xl text-gray-800">
              About Me
            </h2>

            <p className=" py-5 leading-8 text-left  sm:text-xl text-gray-800 sm:max-w-md ">
              Hey, I am Wasif. I love building scalable and dynamic
              applications. Proficient in MongoDB, Express, React, and Node.js
            </p>
            <hr className=" h-1.5 bg-teal-600  mb-16 w-28" />
          </div>

          <div className=" relative mt-10 flex justify-center">
            <Image
              alt="wasif"
              src={photodp}
              className="  sm:max-w-sm sm:h-80 rounded-lg h-48 min-w-max  object-cover shadow-xl "
            />
          </div>
        </div>
      </section>

      <section className=" sm:px-10  px-6  bg-gradient-to-b from-gray-200 to-gray-300 ">
        <div>
          <div>
            <h2 id="project" className=" text-3xl py-2 font-bold mb-20">
              Projects
            </h2>
          </div>

          <div className="max-w-md  mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-5xl md:min-h-[22rem]">
            <div className="md:flex">
              <div className="md:shrink-0">
                <Image
                  className="h-48 w-full object-cover md:min-h-[22rem]  md:w-auto"
                  src={projectpic}
                  alt="Modern building architecture"
                />
              </div>
              <div className=" md:flex md:flex-col  md:justify-between ">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-md font-bold">
                    E-commerce webApp
                  </div>

                  <p className="mt-2 text-slate-500">
                    fully functional E-commerce app powered by MERN stack and
                    Redux.
                  </p>
                </div>
                <div className="flex gap-4  justify-start px-4 font-semibold py-2">
                  <a href="https://fabinatextiles.netlify.app/">
                    <span className=" bg-red-500 rounded p-1">Live demo</span>
                  </a>

                  <a href="https://github.com/wasifkareem/ecom-fullStack">
                    <span className="rounded p-1 bg-slate-900 text-white">
                      Project Repo
                    </span>
                  </a>
                </div>
                <div className=" text-3xl flex justify-between gap-2 px-8 py-4 bg-gray-400">
                  <BiLogoReact color="blue" />
                  <BiLogoMongodb color="green" />
                  <SiExpress color="" />
                  <FaNode />
                  <SiRedux color="purple" />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-md  mt-20 mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-5xl md:min-h-[22rem]">
            <div className="md:flex">
              <div className="md:shrink-0">
                <Image
                  className="h-48 w-full object-cover md:min-h-[22rem]  md:w-auto"
                  src={portfolio}
                  alt="Modern building architecture"
                />
              </div>
              <div className=" md:flex md:flex-col  md:justify-between ">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-md font-bold">
                    Portfolio
                  </div>

                  <p className="mt-2 text-slate-500">
                    my portfolio, meticulously designed to embody the essence of
                    minimalism while powered by the latest web technologies –
                    Next.js and Tailwind CSS.
                  </p>
                </div>
                <div className="flex gap-4  justify-start px-4 font-semibold py-2">
                  <a href="#">
                    <span className=" bg-red-500 rounded p-1">Live demo</span>
                  </a>

                  <a href="https://github.com/wasifkareem/portfolio">
                    <span className="rounded p-1 bg-slate-900 text-white">
                      Project Repo
                    </span>
                  </a>
                </div>
                <div className=" text-3xl flex  gap-12 px-8 py-4 bg-gray-400">
                  <BiLogoReact color="blue" />
                  <SiNextdotjs color="black" />
                  <SiTailwindcss
                    color="rgb(56, 189, 248)
"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 bg-gray-300 ">
        <div className="text-2xl py-2 font-bold pt-16">Contact Me</div>
        <hr className=" h-1.5 bg-teal-600  mb-16 w-24" />

        <div className=" text-5xl flex justify-center gap-16  text-gray-600 py-4">
          <a href="https://twitter.com/Wasif83794508">
            <AiFillTwitterCircle />
          </a>
          <a href="https://www.linkedin.com/in/wasifseo/">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/wasifkareem">
            <AiFillGithub />
          </a>
        </div>
      </section>
    </main>
  );
}
