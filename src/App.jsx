import { useState } from "react";
import "./App.css";

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Fixed casing here
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-slate-800">
      {/* nav bar here */}
      <nav className="w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-4 items-center">
        <div className="text-2xl text-indigo-700 font-bold">PW Skills</div>
        <ul className="md:flex font-semibold hidden">
          <li className="mx-[10px] cursor-pointer">Home</li>
          <li className="mx-[10px] cursor-pointer">About Us</li>
          <li className="mx-[10px] cursor-pointer">Contact Us</li>
        </ul>
        <div className="hidden md:block font-semibold bg-indigo-700 text-white rounded-lg p-2 cursor-pointer ">
          Login/Signup
        </div>
        <div className="md:hidden">
          <a
            href="#"
            className="text-3xl cursor-pointer"
            onClick={toggleDropdown}
          >
            &#8801;
          </a>
          {isDropdownOpen && (
            <ul className="absolute p-3 text-xl right-4 mt-2 bg-indigo-200 shadow-lg rounded-lg overflow-hidden">
              <li className="px-4 py-2 cursor-pointer hover:text-gray-500 hover:bg-indigo-300">
                Home
              </li>
              <li className="px-4 py-2 cursor-pointer hover:text-gray-500 hover:bg-indigo-300">
                About Us
              </li>
              <li className="px-4 py-2 cursor-pointer hover:text-gray-500 hover:bg-indigo-300">
                Contact Us
              </li>
              <li className="px-4 py-2 cursor-pointer hover:text-gray-500 hover:bg-indigo-300">
                Login/Signup
              </li>
            </ul>
          )}
        </div>
      </nav>
      {/* navbar ends here */}

      {/* header starts here image section */}
      <header className="w-full h-auto">
        <img
          src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg"
          alt=""
          className="w-full md:block hidden"
        />
        <img
          src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg"
          alt=""
          className="w-full md:hidden"
        />
      </header>
      {/* header ends here image section */}

      {/* Pure Hardwork Starts Here */}
      <div className="w-full h-auto flex flex-wrap flex-col items-center text-center md:p-10 p-4">
        <div className="w-full h-auto flex flex-wrap flex-col items-center">
          <p className="text-2xl md:text-4xl font-bold text-indigo-500 text-center">
            "Pure Hardwork, No Shortcuts!"
          </p>
          {/* Line under the text is given in this way */}
          <div className="w-36 h-1 border-b-8 border-yellow-400 mt-2 md:mt-4 mb-10 rounded-2xl"></div>
        </div>

        {/* Items Wrapping different courses,stud enroll,stud guided etc */}
        <div className="w-full h-auto flex flex-wrap justify-evenly">
          <div className="md:w-46 flex flex-col items-center md:mb-6">
            <img
              src="https://www.svgrepo.com/show/190386/open-book-book.svg"
              alt=""
              className="md:w-40 w-24 mb-3 h-auto"
            />
            <p className="md:text-2xl text-xl font-bold text-white">600+</p>
            <p className="md:text-2xl text-xl font-bold text-slate-400">
              Different Courses
            </p>
          </div>
          <div className="md:w-46 flex flex-col items-center md:mb-6">
            <img
              src="https://www.svgrepo.com/show/228215/graduation-mortarboard.svg"
              alt=""
              className="md:w-40 w-24 mb-3 h-auto"
            />
            <p className="md:text-2xl text-xl font-bold text-white">800,000+</p>
            <p className="md:text-2xl text-xl font-bold text-slate-400">
              Students Enrolled
            </p>
          </div>
          <div className="md:w-46 flex flex-col items-center md:mb-6">
            <img
              src="https://www.svgrepo.com/show/228231/compass.svg"
              alt=""
              className="md:w-40 w-24 mb-3 h-auto"
            />
            <p className="md:text-2xl text-xl font-bold text-white">
              1,000,000+
            </p>
            <p className="md:text-2xl text-xl font-bold text-slate-400">
              Student Guided
            </p>
          </div>
        </div>
        {/* Item wrapping ends here different courses,stud enroll,stud guided etc */}
      </div>
      {/* Pure Hardwork Ends Here */}

      {/* Our Products Section Starts Here */}
      <div className="w-full h-auto flex flex-wrap flex-col items-center text-center ">
        <div className="w-full h-auto flex flex-col items-center">
          <p className="text-2xl md:text-4xl font-bold text-center text-indigo-500">
            Our Products
          </p>
          <div className="w-36 h-1 border-b-8 border-yellow-400 mt-2 md:mt-4 mb-10 rounded-2xl"></div>
        </div>
        {/* Job portals and all under our products */}
        <div className="w-full h-auto flex flex-wrap justify-evenly ">
          {/* containers */}
          <div className="md:w-60 w-44 h-auto flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/228220/blackboard-classroom.svg"
              alt=""
              className="md:w-24 w-20 mb-3 h-auto"
            />
            <p className="md:text-2xl text-lg font-bold text-white text-center">
              PW SKills Lab
            </p>
            <p className="text-slate-500 md:text-lg text-base">
              Supercharge your project development with our robust lab.
            </p>
          </div>

          <div className="md:w-60 w-44 h-auto flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/228210/notepad.svg"
              alt=""
              className="md:w-24 w-20 mb-3 h-auto"
            />
            <p className="md:text-2xl text-lg font-bold text-white text-center">
              Job Portal
            </p>
            <p className="text-slate-500 md:text-lg text-base">
              Use exceptional templates for a stand-out resume minus the sign up
              process.
            </p>
          </div>

          <div className="md:w-60 w-44 h-auto flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/228253/target.svg"
              alt=""
              className="md:w-24 w-20 mb-3 h-auto"
            />
            <p className="md:text-2xl text-lg font-bold text-white text-center">
              Experience Portal
            </p>
            <p className="text-slate-500 md:text-lg text-base">
              PW Skill's self-paced experience portal prioritizes hands-on
              training with 570+ internship projects.
            </p>
          </div>

          <div className="md:w-60 w-44 h-auto flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/228229/bell-alert.svg"
              alt=""
              className="md:w-24 w-20 mb-3 h-auto"
            />
            <p className="md:text-2xl text-lg font-bold text-white text-center">
              Become an Affiliate
            </p>
            <p className="text-slate-500 md:text-lg text-base w-full">
              Explore affiliate marketing opportunities with PW Skills and
              attain financial freedom.
            </p>
          </div>

          <div className="md:w-60 w-44 h-auto flex flex-col items-center mb-8">
            <img
              src="https://www.svgrepo.com/show/228252/file-document.svg"
              alt=""
              className="md:w-24 w-20 mb-3 h-auto"
            />
            <p className="md:text-2xl text-lg font-bold text-white text-center">
              Hall of Fame
            </p>
            <p className="text-slate-500 md:text-lg text-base">
              Our Student Placements and 100K+ career transitions speak volumes
              about our courses.
            </p>
          </div>
        </div>
        {/* job portal ends here */}
        {/* Our Products Section Ends Here */}

        {/* Footer Section Starts Here */}
        <footer className="w-full h-auto bg-gray-900 text-white px-4 flex flex-col md:items-start items-center flex-wrap md:flex-row justify-between md:px-12 text-left">
          <div className="flex flex-col flex-wrap md:items-start items-center mb-10">
            <img
              className="w-40 h-auto"
              src="https://pwskills.com/images/PWSkills-white.png"
              alt=""
            />
            <p className="my-3 md:block hidden font-medium">
              Email us: ssarthakxd@gmail.com
            </p>
            <p className="md:hidden text-lg font-medium">Email us</p>
            <p className="md:hidden mb-4 font-medium">ssarthakxd@gmail.com</p>
            <img
              className="w-16 h-auto"
              src="https://www.svgrepo.com/show/241785/badge-reward.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col flex-wrap">
            <h2 className="font-bold text-xl mt-4">PW Skills</h2>
            <div className="w-32 h-1 border-b-4 border-yellow-400 my-2 rounded-lg"></div>
            <div>
              <p>About Us</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="flex flex-col flex-wrap ">
            <h2 className="font-bold text-xl mt-4">Products</h2>
            <div className="w-32 h-1 border-b-4 border-yellow-400 my-2 rounded-lg"></div>
            <div>
              <p>PW SKills Lab</p>
              <p>Job Portal</p>
              <p>Experience Portal</p>
              <p>Become an Affiliate</p>
              <p>Hall of Fame</p>
            </div>
          </div>
          <div className="flex flex-col flex-wrap">
            <h2 className="font-bold text-xl mt-4">Links</h2>
            <div className="w-32 h-1 border-b-4 border-yellow-400 my-2 rounded-lg"></div>
            <div>
              <p>Discord Channel</p>
              <p>PW Youtube</p>
              <p>Careers</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
