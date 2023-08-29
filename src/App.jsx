import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("work");
  const [scrolled, setScrolled] = useState(0);
  const sections = useRef([]);

  const handleScroll = () => {
    const pageYOffset = window.scrollY;

    if (pageYOffset > 0) {
      setScrolled(2);
    } else {
      setScrolled(1);
    }

    const scrollHeight = window.innerHeight;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      console.log("page Y offset: " + pageYOffset);
      console.log("scroll height: " + scrollHeight);
      console.log("section offset top: " + sectionOffsetTop);
      console.log("section height: " + sectionHeight);

      if (pageYOffset + scrollHeight >= sectionOffsetTop) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
    // console.log(activeSection);
  };
  
  const horizontalPhotos = [
    { url: "/horizontal-1.jpg", location: "Catbalogan, Samar", id: 1 },
    { url: "/horizontal-2.jpg", location: "Tacloban, Leyte", id: 2 },
    { url: "/horizontal-3.jpg", location: "BGC, NCR", id: 3 },
    { url: "/horizontal-4.jpg", location: "Metro Manila, NCR", id: 4 },
    { url: "/horizontal-5.jpg", location: "Quezon City, NCR", id: 5 },
    { url: "/horizontal-6.jpg", location: "Mandaluyong City, NCR", id: 6 },
    { url: "/horizontal-7.jpg", location: "Catbalogan, Samar", id: 7 },
    { url: "/horizontal-8.jpg", location: "Catbalogan, Samar", id: 8 },
    { url: "/horizontal-9.jpg", location: "Catbalogan, Samar", id: 9 }
  ];
  
  const verticalPhotos = [
    { url: "/vertical-1.jpg", location: "Palo, Leyte", id: 1 },
    { url: "/vertical-2.jpg", location: "Catbalogan, Samar", id: 2 },
    { url: "/vertical-3.jpg", location: "Tacloban, Leyte", id: 3 },
    { url: "/vertical-4.jpg", location: "Pasay, NCR", id: 4 },
    { url: "/vertical-5.jpg", location: "Tacloban, Leyte", id: 5 },
    { url: "/vertical-6.jpg", location: "Palo, Leyte", id: 6 },
    { url: "/vertical-7.jpg", location: "Makati, NCR", id: 7 },
    { url: "/vertical-8.jpg", location: "Catbalogan, Samar", id: 8 },
    { url: "/vertical-9.jpg", location: "Makati, NCR", id: 9 },
  ];

  const [randomHorizontal, setRandomHorizontal] = useState(null);
  const [randomVertical, setRandomVertical] = useState(null);

  const getRandomHorizontal = () => {
    const randomIndex = Math.floor(Math.random() * horizontalPhotos.length);
    const selectedRandomItem = horizontalPhotos[randomIndex];
    setRandomHorizontal(selectedRandomItem);
  };

  const getRandomVertical = () => {
    const randomIndex = Math.floor(Math.random() * verticalPhotos.length);
    const selectedRandomItem = verticalPhotos[randomIndex];
    setRandomVertical(selectedRandomItem);
  };

  useEffect(() => {
    getRandomHorizontal();
    getRandomVertical();
    sections.current = document.querySelectorAll("section");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (text) => {
    setActiveSection(text);
  };

  const accentureSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "C#",
    "ASP.NET Core",
    "Azure Services",
    "Microsoft Power Platform",
    "Azure Data Factory",
  ];

  const navItems = [
    { href: "#work", text: "Work" },
    { href: "#about", text: "About" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <>
      <div className="w-full flex justify-center fixed lg:mt-10 md:mt-6 mt-4 z-50 ">
        <div
          className={
            "bg-white sm:px-4 sm:py-4 px-2 py-3 rounded-full" +
            (scrolled == 2
              ? " nav-fade-in"
              : scrolled == 1
              ? " nav-fade-out"
              : "")
          }
        >
          {navItems.map((x) => (
            <a
              href={x.href}
              className={
                "transition-all ease-in-out lg:text-base md:text-sm text-xs lg:px-6 md:px-4 px-4 py-2 " +
                (x.text.toLowerCase() == activeSection
                  ? "bg-black rounded-full text-white"
                  : "text-black")
              }
              onClick={(e) => handleNavClick(x.text.toLowerCase())}
            >
              {x.text}
            </a>
          ))}
        </div>
      </div>
      <div className="container max-w-screen-lg mx-auto flex flex-col justify-center">
        <section id="work" className="lg:px-16 md:px-8 px-6">
          <h1 className="lg:text-8xl md:text-6xl sm:text-5xl text-3xl font-poppins font-bold text-black tracking-tighter text-center lg:mt-48 md:mt-32 sm:mt-28 mt-24 leading-tight">
            Hi, I’m Juan Carlos!
          </h1>
          <p className="text-body lg:text-xl md:text-lg sm:text-base text-sm text-center opacity-80 lg:mt-5 md:mt-3 mt-1">
            Check out my work experience and projects below (👇ﾟヮﾟ)👇
          </p>
          <div className="flex justify-center">
            <div className="bg-slate-200 lg:my-24 md:my-12 sm:my-10 my-10 w-14 h-1"></div>
          </div>
          {/*  */}
          <div className="rounded-3xl md:px-5 md:py-5 sm:px-5 sm:py-3 px-0 py-0 sm:hover:bg-slate-50 hover:bg-white sm:bg-white bg-white transition ease-in-out">
            <div
              href="#"
              className="flex flex-row sm:hover:scale-[0.99] hover:scale-1 transition ease-in-out"
            >
              <div className="sm:basis-2/12 basis-20 gradient-background sm:rounded-3xl rounded-lg bg-cover"></div>
              <div className="sm:basis-10/12 basis-auto sm:pt-2 pt-0 sm:ps-5 ps-5">
                <div className="flex content-center flex-wrap">
                  <h4 className="lg:text-xl md:text-lg sm:text-base text-sm font-rubik font-bold text-header md:leading-normal leading-loose">
                    Accenture Inc - Avanade
                  </h4>
                  <div className="border border-solid border-black border-opacity-30 rounded-xl ms-2 mb-0 pb-0">
                    <p className="lg:text-sm md:text-cs text-xs font-rubik text-black align-middle text-opacity-80 flex px-2 py-1 tracking-tighter">
                      2020 — PRESENT
                    </p>
                  </div>
                </div>
                <p className="lg:text-base md:text-sm text-sm font-rubik text-header mt-2 opacity-60">
                  Application Development Senior Analyst
                </p>
                <ul class="list-inside ps-0 list-[square] lg:mt-5 md:mt-4 mt-4">
                  <li className="text-body lg:text-base md:text-sm text-sm opacity-80 lg:mt-5 md:mt-4 mt-4">
                    Developed web applications using mainly React and ASP.NET
                    Web API with C#. Although I worked as a full-stack
                    developer, I spent most of my time in these projects working
                    on the front-end. Most of these web applications utilized
                    Microsoft Azure services such as: Azure SQL DB, Azure Cosmos
                    DB, Azure Functions, Azure Logic Apps, Azure Storage, and
                    etc. Also provided guidance and mentored my juniors,
                    especially when it comes to styling with CSS.
                  </li>
                  <li className="text-body lg:text-base md:text-sm text-sm opacity-80 lg:mt-5 md:mt-4 mt-4">
                    Involved in multiple projects utilizing Microsoft Power
                    Platform, a set of low-code tools. Developed applications
                    from scratch using Power Apps, created workflows and
                    processes using Power Automate, and built dynamic dashboards
                    and data reports using Power BI. Also has experience
                    creating chat bots using Power Virtual Agents and Microsoft
                    Bot Framework.
                  </li>
                  <li className="text-body lg:text-base md:text-sm text-sm opacity-80 lg:mt-5 md:mt-4 mt-4">
                    Worked as a Data Engineer on a project for a Microsoft video
                    gaming brand. Created daily automated pipelines in Azure
                    Data Factory to obtain raw data from Azure SQL Server, Azure
                    Cosmos DB, and Azure Data Explorer. These pipelines also
                    cleaned and transformed the collected raw data using scripts
                    written in C# to create multiple sets of facts, which were
                    used for reporting and marketing purposes. I also worked on
                    redesigning all their Power Apps to create a universal
                    theme, taking inspiration from the Microsoft Fluent UI
                    framework.
                  </li>
                </ul>
                <div className="flex flex-row flex-wrap lg:mt-6 md:mt-5 mt-5">
                  {accentureSkills.map((x) => (
                    <div className="bg-black rounded-full mb-2 me-1">
                      <p className="text-xs font-rubik text-white align-middle flex px-4 py-2 pt-2 leading-none">
                        {x}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-slate-200 sm:my-10 my-8 sm:w-8 w-12 h-1"></div>
          </div>
          <div className="sm:rounded-3xl rounded-lg md:px-5 md:py-5 px-5 py-3 hover:bg-slate-50 sm:bg-white bg-slate-50 transition ease-in-out">
            <a
              href="#"
              className="flex flex-row hover:scale-[0.99] transition ease-in-out"
            >
              <div className="sm:basis-2/12 basis-0 bg-[url('/vasquez.png')] sm:rounded-3xl rounded-lg bg-cover bg-right"></div>
              <div className="sm:basis-10/12 basis-full pt-2 sm:ps-8 ps-0">
                <div className="flex content-bottom">
                <h4 className="lg:text-xl md:text-lg sm:text-base text-sm font-rubik font-bold text-header md:leading-normal leading-loose">
                    Vasquez BPO
                  </h4>
                  <div className="border border-solid border-black border-opacity-30 rounded-xl ms-2 mb-0 pb-0">
                  <p className="lg:text-sm md:text-cs text-xs font-rubik text-black align-middle text-opacity-80 flex px-2 py-1 tracking-tighter">
                      2020
                    </p>
                  </div>
                </div>
                <p className="lg:text-base md:text-sm text-sm font-rubik text-header mt-2 opacity-60">
                  Freelance Web Developer
                </p>
                <p className="text-body lg:text-base md:text-sm text-sm opacity-80 lg:mt-5 md:mt-4 mt-4">
                  Developed using only HTML, CSS, and vanilla JavaScript. Sadly,
                  the mobile view for this site was not a priority.
                </p>
                <div className="flex flex-row flex-wrap lg:mt-6 md:mt-5 mt-5">
                  {accentureSkills.splice(0, 3).map((x) => (
                    <div className="bg-black rounded-full mb-2 me-1">
                      <p className="text-xs font-rubik text-white align-middle flex px-4 py-2 pt-2 leading-none">
                        {x}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          </div>
          <div className="sm:rounded-3xl rounded-lg md:px-5 md:py-5 px-5 py-3 hover:bg-slate-50 sm:bg-white bg-slate-50 transition ease-in-out mt-10">
            <a
              href="#"
              className="flex flex-row hover:scale-[0.99] transition ease-in-out"
            >
              <div className="sm:basis-2/12 basis-0 bg-[url('/cathy.png')] sm:rounded-3xl rounded-lg bg-cover bg-left"></div>
              <div className="sm:basis-10/12 basis-full pt-2 sm:ps-8 ps-0">
                <div className="flex content-bottom">
                <h4 className="lg:text-xl md:text-lg sm:text-base text-sm font-rubik font-bold text-header md:leading-normal leading-loose">
                    Catherine Tan
                  </h4>
                  <div className="border border-solid border-black border-opacity-30 rounded-xl ms-2 mb-0 pb-0">
                    <p className="lg:text-sm md:text-cs text-xs font-rubik text-black align-middle text-opacity-80 flex px-2 py-1 tracking-tighter">
                      2023 - IN PROGRESS
                    </p>
                  </div>
                </div>
                <p className="lg:text-base md:text-sm text-sm font-rubik text-header mt-2 opacity-60">
                  Freelance Web Developer
                </p>
                <p className="text-body lg:text-base md:text-sm text-sm opacity-80 lg:mt-5 md:mt-4 mt-4">
                  A personal web site created with Webflow. This project is
                  still a work in progress.
                </p>
                <div className="flex flex-row flex-wrap lg:mt-6 md:mt-5 mt-5">
                  {accentureSkills.splice(0, 3).map((x) => (
                    <div className="bg-black rounded-full mb-2 me-1">
                      <p className="text-xs font-rubik text-white align-middle flex px-4 py-2 leading-none">
                        {x}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          </div>
        </section>
        <section id="about" className="lg:px-16 md:px-8 px-6">
          <h1 className="lg:text-8xl md:text-6xl sm:text-5xl text-3xl font-poppins font-bold text-black tracking-tighter text-center lg:mt-48 md:mt-32 sm:mt-28 mt-24 leading-tight">
            Hi again, I’m Chino.
          </h1>
          <p className="text-body lg:text-xl md:text-lg sm:text-base text-sm text-center opacity-80 lg:mt-5 md:mt-3 mt-1 leading-normal">
            Don't ask, I also can't remember how I got this nickname ¯\_(ツ)_/¯
          </p>
          <div className="flex justify-center">
            <div className="bg-slate-200 lg:my-24 md:my-12 sm:my-10 my-10 w-14 h-1"></div>
          </div>
          <div className="flex sm:flex-row flex-col">
            <div className="sm:basis-4/12 basis-12/12 bg-[url('/chino-3.jpg')] sm:rounded-3xl rounded-lg bg-cover bg-center sm:h-auto h-72"></div>
            <div className="basis-8/12 pt-2 lg:ms-14 md:ms-8 sm:ms-5 ms-0">
              <div className="flex content-center">
                <h4 className="lg:text-4xl md:text-2xl sm:text-xl text-xl font-poppins font-bold text-header pt-1 tracking-tight">
                  I’m a full-stack developer with a bit of a bias towards
                  front-end web development.
                </h4>
              </div>
              <div className="text-body lg:text-lg md:text-base text-sm opacity-80 sm:mt-5 mt-3">
                I'm most passionate about solving problems, bringing designs to
                life, and crafting awesome user experiences.
                <br></br>
                <br></br>I have worn many hats because of various projects
                within Accenture. I worked as a Microsoft Power Platform
                developer, a Data Engineer, but these days I work as a
                full-stack developer specializing in React and ASP.NET Core with
                C#.
                <br></br>
                <br></br>
                <a href="#">
                  <p className="underline">Download my resume</p>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row sm:mt-8 mt-4">
            {
              randomHorizontal && 
              <div className="basis-8/12 sm:rounded-3xl rounded-lg bg-black w-full relative">
                <img
                  src={randomHorizontal.url}
                  className="sm:rounded-3xl rounded-lg"
                  alt=""
                  srcset=""
                />
                <div className="absolute w-full h-full top-0 flex flex-col justify-end content-start opacity-0 hover:opacity-100 translate-y-1 hover:translate-y-0 transition ease-in-out">
                  <div className="bg-slate-50 font-inter text-sm font-medium text-black flex-initial w-fit mx-5 my-5 px-3 py-2 rounded-xl">
                    {randomHorizontal.location}
                  </div>
                </div>
              </div>
            }
            {
              randomVertical &&
              <div className={"basis-4/12 sm:rounded-3xl rounded-lg bg-contain bg-center sm:ms-5 ms-2 relative"} style={{backgroundImage: `url(${randomVertical.url})`}}>
                <div className="absolute w-full h-full top-0 flex flex-col justify-end content-start opacity-0 hover:opacity-100 translate-y-1 hover:translate-y-0 transition ease-in-out">
                  <div className="bg-slate-50 font-inter text-sm font-medium text-black flex-initial w-fit mx-5 my-5 px-3 py-2 rounded-xl">
                    {randomVertical.location}
                  </div>
                </div>
              </div>
            }
          </div>
          {/* <p className='text-body text-lg opacity-80 mt-8 pb-12'>
            There used to be this website called Friendster, a now defunct social media platform that was famous back in the mid-2000s. All my friends had crazy profiles and mine looked... basic. I forced myself to understand HTML and CSS and by the end of it all, I had the most kick-ass looking profile in all of Friendster. Except no one else saw it because everyone already moved to Facebook. 
            <br></br><br></br>
            I understood how HTML and CSS play together because of Friendster, and I've since carried that skill set with me wherever I went. While I have worked with multiple technologies over the past few years, including game development, I'm always at my happiest when I'm doing front-end web development.
            <br></br><br></br>
            Outside work, I enjoy listening and playing music, failing ability checks in Baldur's Gate 3, exploring Leyte with my partner, and taking photographs.
          </p> */}
          <div className="border border-solid border-black border-opacity-30 sm:rounded-3xl rounded-lg sm:mt-8 mt-5 md:px-10 md:py-16 sm:px-8 sm:py-10 px-5 py-5">
            <h5 className="font-poppins font-semibold text-header lg:text-lg md:text-base text-sm mt-0">
              A bit more about me.
            </h5>
            <p className="text-body lg:text-lg md:text-base text-sm opacity-80 mt-5">
              There used to be this website called Friendster, a now defunct
              social media platform that was famous back in the mid-2000s. All
              my friends had crazy profiles and mine looked... basic. I forced
              myself to understand HTML and CSS and by the end of it all, I had
              the most kick-ass looking profile in all of Friendster. Except no
              one else saw it because everyone already moved to Facebook.
              <br></br>
              <br></br>I understood how HTML and CSS play together because of
              Friendster, and I've since carried that skill set with me wherever
              I went. While I have worked with multiple technologies over the
              past few years, including game development, I'm always at my
              happiest when I'm doing front-end web development.
              <br></br>
              <br></br>
              Outside work, I enjoy playing and listening to music, failing
              ability checks in Baldur's Gate 3, exploring Samar and Leyte with
              my partner, and taking pictures.
            </p>
          </div>
        </section>
        <section id="contact" className="lg:px-16 md:px-8 sm:px-6 px-0">
          <h1 className="lg:text-8xl md:text-6xl sm:text-5xl text-3xl font-poppins font-bold text-black tracking-tighter text-center lg:mt-48 md:mt-32 sm:mt-28 mt-24 leading-tight">
            Get in touch.
          </h1>
          <p className="text-body lg:text-xl md:text-lg sm:text-base text-sm text-center opacity-80 lg:mt-5 md:mt-3 mt-1">
            Holla at me (*￣０￣)ノ
          </p>
          <div className="flex justify-center">
            <div className="bg-slate-200 lg:my-24 md:my-12 sm:my-10 my-10 w-14 h-1"></div>
          </div>
          <div className="flex sm:flex-row flex-col md:mb-20 sm:mb-14 mb-0">
            <div className="sm:basis-6/12 basis-12/12 sm:rounded-l-3xl rounded-l-0 bg-black w-full md:px-10 md:py-16 sm:px-8 sm:py-10 ps-5 py-10">
              <h2 className="lg:text-7xl md:text-4xl sm:text-3xl text-2xl font-poppins font-semibold text-white sm:mb-20 mb-10 tracking-tight">
                say hi!
              </h2>
              <a
                className="md:text-2xl sm:text-xl text-base font-rubik text-white tracking-tight hover:underline"
                href="mailto:onecarlosmunoz@gmail.com"
              >
                onecarlosmunoz@gmail.com
              </a>
              <p className="md:text-2xl sm:text-xl text-base font-rubik text-white tracking-tight">
                +63 977 428 7477
              </p>
              <div className="bg-white mt-6 mb-10 w-14 h-1"></div>
              <p className="md:text-base sm:text-sm text-sm text-white">Juan Carlos T. Muñoz</p>
              <p className="md:text-base sm:text-sm text-sm text-white sm:mb-20 mb-10">
                Makati City, Philippines
              </p>
              <a href="https://www.linkedin.com/in/munozjuancarlos/">
                <img src="/linkedin.svg" alt="" srcset="" title="test" className='sm:h-fit h-6'/>
              </a>
              {/* © 2023 Juan Carlos Muñoz */}
            </div>
            <div className="sm:basis-6/12 basis-auto bg-[url('/chino-1.jpg')] sm:rounded-r-3xl rounded-r-0 bg-cover bg-center sm:h-auto h-64"></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
