import Header from "@/components/Header";
import Aboutme from "@/components/Aboutme";
import Projects from "@/components/Projects";
import Stacks from "@/components/Stacks";
import Contact from "@/components/Contact";
import ProjectDetails from "@/common/ProjectDetails";

export default function Home() {
  return (
    <main>
     <Header/>
    <Aboutme/>
    <Stacks/>
    {/* <Projects/> */}
    <ProjectDetails/>
    <Contact/>
    
    </main>
  );
}
