import SectionBlock from './SectionBlock';
import AnimatedAvatar from './AnimatedAvatar';
import { Github } from 'lucide-react';
import { PROFILE } from '../data/constants';

const AboutSection = () => (
  <SectionBlock id="about" title="About me">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      <AnimatedAvatar />
      <div className="flex-1">
        <p className="body-text max-w-2xl">
          I'm an innovative Full-Stack and Mobile Developer currently pursuing my Bachelor of Technology in Information Technology from AISSMS Institute Of Information Technology, Pune.
        </p>
        <p className="body-text max-w-2xl mt-6">
          I specialize in building scalable web and mobile applications using modern technologies like React.js, Next.js, and Flutter. I have a strong passion for integrating Generative AI and NLP into real-world applications to drive automation and intelligence.
        </p>
        <p className="body-text max-w-2xl mt-6 mb-8">
          With experience as a Freelance Software Developer and a Growth & Tech intern, I thrive in managing end-to-end SDLC, collaborating cross-functionally, and delivering high-quality, user-centric solutions. From architecting e-commerce platforms to developing real-time FinTech and EdTech systems, I am driven by solving complex problems with clean, performant code.
        </p>
        <a
          href={`https://${PROFILE.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-6 py-3 border-2 border-black bg-white text-black text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white rounded-none"
        >
          <Github className="w-4 h-4" />
          <span>View My GitHub</span>
        </a>
      </div>
    </div>
  </SectionBlock>
);

export default AboutSection;
