
"use client";
import About from "./Components/About";
import BlackHole from "./Components/BlackHole";
import Contacts from "./Components/Contacts";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <BlackHole/>
      <About/>
      <div className="bg-black">
        <div className="flex justify-center text-white text-5xl">Projects</div>
        <div className="flex justify-evenly my-4">
          <Projects/>
          <Projects/>
        </div>
        <div className="flex justify-evenly">
          <Projects/>
          <Projects/>
        </div>
        <div className="flex justify-center">
          <button className="bg-red-500 p-2 rounded-md my-8">See More</button>
        </div>
      </div>
      <Contacts/>
    </div>
  );
}
