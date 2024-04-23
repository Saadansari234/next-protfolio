import Header from "@/components/Header";
import Aboutme from "@/components/Aboutme";
import Projects from "@/components/Projects";
import Stacks from "@/components/Stacks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
     <Header/>
    <Aboutme/>
    <Stacks/>
    <Projects/>
    <Contact/>
    
    </main>
  );
}
