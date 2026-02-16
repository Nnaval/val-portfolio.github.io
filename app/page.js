import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  // console.log("Hello mbuze");
  
  return (
    <>
      <Navbar />
      <main>
        
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="   border-t border-border">
         <div className="h-20 flex text-white justify-center py-9 items-end text-sm ">
      <p>&copy; Copyright {new Date().getFullYear()} Valentine</p>
    </div>
  
      </footer>
    </>

);
}
