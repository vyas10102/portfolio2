import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Publications from "../components/Publications";
import Certifications from "../components/Certifications";
import Leadership from "../components/Leadership";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <TechStack />
      <Projects />
      <Experience />
      <Education />
      <Publications />
      <Certifications />
      <Leadership />
      <Contact />
    </>
  );
}

export default Home;