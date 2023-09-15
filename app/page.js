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
import course from "../public/course.png";

export default function Home() {
  return (
    <main className=" bg-white text-black ">
      <section className=" min-h-screen px-6 bg-gradient-to-b from-white to-gray-200  sm:px-36">
        <nav className=" py-10 mb-8 flex justify-between ">
          <h1 className=" text-lg font-burtons items-center flex font-bold">
            Wasif Kareem
          </h1>
          <ul className=" flex items-center ">
            <li className=" sm:mr-4 animate-pulse hover:animate-none hover:scale-105 duration-200">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1e6az0eo6rdrbFIg53SRHK1vp9llTkLTj/view?usp=sharing"
              >
                Resume
              </a>{" "}
              <hr className="  mt-1 bg-teal-500 sm:h-1 h-1  " />
            </li>

            <li className="  transition-all scale-95 hover:scale-100  hover:bg-gradient-to-r hover:from-purple-500 hover:to-yellow-500 bg-gradient-to-r from-cyan-500 to-teal-500 py-2 rounded-md sm:px-4 px-2 text-white ml-2">
              <a href="#project">Projects</a>
            </li>
          </ul>
        </nav>
        <div className=" sm:flex sm:flex-row justify-between sm:items-center">
          <div className=" sm:pt-20">
            <h2 className=" text-3xl py-2 font-bold sm:text-5xl text-gray-800">
              About Me
            </h2>

            <p className=" py-5 leading-8 text-left  sm:text-xl text-gray-800 sm:max-w-md ">
              Hey, I am Wasif. I love building scalable and dynamic
              applications. Proficient in MongoDB, Express, React, and Node.js.
              I document my learnings on{" "}
              <a
                className=" text-teal-500"
                target="_blank"
                href="https://www.linkedin.com/in/wasifdev2762/"
              >
                LinkedIn.
              </a>
            </p>
            <hr className=" h-1.5 bg-teal-600  mb-16 w-28" />
          </div>

          <div className="  relative mt-10 flex justify-center">
            <Image
              alt="wasif"
              src={photodp}
              className="  sm:duration-300  sm:max-w-xs sm:h-80 rounded-lg h-48 min-w-max  object-cover shadow-xl "
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

          <div className="max-w-md  mt-20 mb-20 mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-5xl md:min-h-[22rem]">
            <div className="md:flex">
              <div className="md:shrink-0">
                {" "}
                <Image
                  className="h-48 w-full object-cover md:min-h-[22rem]  md:w-auto"
                  src={course}
                  alt="Modern building architecture"
                />
              </div>
              <div className=" md:flex md:flex-col  md:justify-between ">
                <div className=" p-8">
                  <div className="uppercase tracking-wide text-md font-bold">
                    Course selling website
                  </div>

                  <p className="mt-2 text-slate-500">
                    Fully functional Course selling website powered by MERN
                    stack, Redux & Tailwind.
                  </p>
                </div>
                <div className="flex gap-4  justify-start px-4 font-semibold py-2">
                  <a target="_blank" href="https://fabina-school.vercel.app/">
                    <span className=" bg-red-500 rounded p-1">Live demo</span>
                  </a>

                  <a
                    target="_blank"
                    href="https://github.com/wasifkareem/Fabina_school"
                  >
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
                  <SiTailwindcss color="cyan" />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-md  mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-5xl md:min-h-[22rem]">
            <div className="md:flex">
              <div className="md:shrink-0 ">
                <iframe
                  className="h-48 w-full object-cover md:min-h-[22rem]  md:w-[620px] "
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/lLqI4LwTjxk?si=7NH0IK4FBvrC2Szc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className=" md:flex md:flex-col  md:justify-between ">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-md font-bold">
                    Social Media App
                  </div>

                  <p className="mt-2 text-slate-500">
                    Functional and clean implementation of a Facebook like
                    social media clone.
                  </p>
                </div>
                <div className="flex gap-4  justify-start px-4 font-semibold py-2">
                  <a target="_blank" href="https://fabinahut.netlify.app/">
                    <span className=" bg-red-500 rounded p-1">Live demo</span>
                  </a>

                  <a
                    target="_blank"
                    href="https://github.com/wasifkareem/fabinaHut-MERN"
                  >
                    <span className="rounded p-1 bg-slate-900 text-white">
                      Project Repo
                    </span>
                  </a>
                </div>
                <div className=" text-3xl flex justify-between gap-2 px-4 py-4 bg-gray-400">
                  <BiLogoReact color="blue" />
                  <BiLogoMongodb color="green" />
                  <SiExpress color="" />
                  <FaNode />
                  <SiRedux color="purple" />
                  <div className=" flex  ml-2">
                    <SiExpress color="" />
                    <p className=" text-sm  text-green-700 font-semibold ">
                      multer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-md  mt-20 mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-5xl md:min-h-[22rem]">
            <div className="md:flex">
              <div className="md:shrink-0">
                <iframe
                  className="h-48 w-full object-cover md:min-h-[22rem]  md:w-[620px] "
                  width="560"
                  height="353"
                  src="https://www.youtube.com/embed/ObcKob7fJHg?si=PPNNrp94tXoICeDA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
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
                  <a target="_blank" href="https://fabinatextiles.netlify.app/">
                    <span className=" bg-red-500 rounded p-1">Live demo</span>
                  </a>

                  <a
                    target="_blank"
                    href="https://github.com/wasifkareem/ecom-fullStack"
                  >
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

                  <a
                    target="_blank"
                    href="https://github.com/wasifkareem/portfolio"
                  >
                    <span className="rounded p-1 bg-slate-900 text-white">
                      Project Repo
                    </span>
                  </a>
                </div>
                <div className=" text-3xl flex  gap-12 px-8 py-4 bg-gray-400">
                  <BiLogoReact color="blue" />
                  <SiNextdotjs color="black" />
                  <SiTailwindcss color="cyan" />
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
          <a target="_blank" href="https://twitter.com/Wasif83794508">
            <AiFillTwitterCircle />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/wasifseo/">
            <AiFillLinkedin />
          </a>
          <a target="_blank" href="https://github.com/wasifkareem">
            <AiFillGithub />
          </a>
        </div>
      </section>
    </main>
  );
}
