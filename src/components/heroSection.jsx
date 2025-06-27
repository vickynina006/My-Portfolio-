import HeroSideDivs from "./heroSideDivs";
import doubleLine from "../assets/double-line-icon.svg";
import tripleLine from "../assets/triple-line-icon.svg";
import sparkle from "../assets/sparkle-icon.svg";
import hand from "../assets/hand-icon.svg";
import pencil from "../assets/pencil-icon.svg";
import spiral from "../assets/spiral-icon.svg";
import profilepic from "../assets/profilepic1.png";
import WaveMobile, { WaveDesktop } from "./waveSvg";
// import { HeroAboutdata } from "../heroAboutdata.js";
import HeroAbout from "./heroAbout";
import cvIcon from "../assets/cv-icon.svg";
import aboutIcon from "../assets/about-icon.svg";
import contactIcon from "../assets/contact-icon.svg";

export default function HeroSection() {
  const h1Styles =
    "text-blacky text-4xl sm:text-[2.7rem] md:text-6xl  lgx:text-[5.18rem]  font-medium text-center";

  return (
    <section className="flex flex-col">
      <div className="flex bg-backgroundpurple px-2 pb-48 md:px-5 lg:py-16 ">
        <HeroSideDivs
          title="Web Development"
          src={sparkle}
          src2={doubleLine}
          img={pencil}
        />

        <div className="w-full px-2  lg:w-[70%] ">
          <div className="flex flex-col flex-wrap space-y-2 justify-center items-center pt-2 sm:space-y-0 sm:flex-row">
            <div className="flex flex-col-reverse  items-center sm:flex-row">
              <h1 className={h1Styles}>Hello!</h1>
              <div className="flex overflow-hidden mx-auto my-4 w-16 h-16 outline outline-1 bg-slate-500 rounded-full outline-blacky sm:m-3 lg:w-24 lg:h-24">
                <img
                  src={profilepic}
                  alt=""
                  className="w-16 h-16 object-cover  lg:w-24 lg:h-24"
                />
              </div>
            </div>

            <h1 className={h1Styles}> I'm Victoria,</h1>
          </div>
          <h1 className={`${h1Styles} leading-normal`}>
            a Frontend Developer.
          </h1>

          <p className="pt-7 text-blacky text-2xl text-center leading-relaxed">
            I strive to create meaningful and engaging web experiences that
            foster a positive culture through thoughtful frontend development
            and design.
          </p>
        </div>

        <HeroSideDivs
          title="Responsive Design"
          bgColor="bg-customPink"
          rotate="rotate-12"
          // justify="justify-center"
          tl=" -top-[1.1rem] left-[0.8rem]"
          br=" -top-[1rem] -right-[1.5rem]"
          size2="w-8 h-8"
          size1="w-7 h-7"
          src={hand}
          src2={tripleLine}
          img={spiral}
          flexCol="flex-col-reverse"
          imgSize="w-[5.5rem] h-[5.5rem]"
        />
      </div>
      <div className="relative flex flex-col">
        <div>
          <WaveMobile classname=" text-backgroundpurple w-full h-max lg:hidden" />
          <WaveDesktop classname="hidden text-backgroundpurple w-full  h-44  lg:flex" />
        </div>
        <div className=" flex px-7 pb-24 -mt-36  gap-10 flex-col md:flex-row md:-mt-44 lg:-mt-48 lgx:px-24 ">
          {/* {HeroAboutdata.map((heroAboutItem) => (
            <HeroAbout {...heroAboutItem} />
          ))} */}
          <HeroAbout
            src={cvIcon}
            title="My CV"
            description="Check out some professional details about me "
          />
          <HeroAbout
            src={aboutIcon}
            title="My Toolbox"
            description="Discover some interesting facts about me! "
            bg="bg-buttonYellow"
          />
          <HeroAbout
            src={contactIcon}
            title="Contact Me"
            description="If you like my work, I am here to bring your ideas to life."
          />
        </div>
      </div>
    </section>
  );
}
