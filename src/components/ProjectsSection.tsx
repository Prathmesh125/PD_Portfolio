import { motion } from 'framer-motion';
import { Github, ExternalLink, Lock } from 'lucide-react';
import SectionBlock from './SectionBlock';
import { Badge } from './ui/badge';
import { playHover, playClick } from '@/hooks/useSoundEffects';

const projects = [
  {
    title: 'Jurium - AI Legal Intelligence Platform',
    isNew: true,
    description:
      'An AI-powered legal intelligence and case management platform that streamlines legal workflows through evidence-grounded RAG, semantic precedent search, intelligent document analysis, and context-aware AI assistance.',
    tags: [
      'Next.js',
      'TypeScript',
      'RAG',
      'LangChain',
      'Google Gemini',
      'PostgreSQL',
      'pgvector',
      'Cloud Flare',
    ],
    isPrivate: true,
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Trackate - Smart Expense Tracking App',
    isNew: false,
    description:
      'Built and launched a cross-platform fintech application featuring automatic expense detection, real-time spending insights, intelligent budgeting, and seamless group bill splitting; achieved 1,000+ downloads in Month 1.',
    tags: [
      'Flutter',
      'Dart',
      'Firebase',
      'Firestore',
      'Android',
      'iOS',
      'REST API',
    ],
    isPrivate: false,
    githubUrl: 'https://github.com/Prathmesh125/Trackate',
    liveUrl: 'https://trackate.svnate.com/',
  },
  {
    title: 'Smart Agentic Travel Orchestrator',
    isNew: false,
    description:
      'Developed a multi-agent AI travel planning system using LangGraph and Gemini, coordinating specialized agents for flight discovery, hotel research, and personalized itinerary generation.',
    tags: [
      'Python',
      'LangGraph',
      'LangChain',
      'Google Gemini',
      'Multi-Agent AI',
      'PostgreSQL',
      'Streamlit',
    ],
    isPrivate: false,
    githubUrl: 'https://github.com/Prathmesh125/AI-Travel-Planning-System-using-LangGraph',
    liveUrl: 'https://smart-agentic-travel-orchestration.streamlit.app/',
  },
  {
    title: 'AI Course Intelligent Engine',
    isNew: false,
    description:
      'Engineered an NLP-powered recommendation engine using TF-IDF and cosine similarity to understand natural-language learning requirements and deliver personalized course recommendations.',
    tags: [
      'Python',
      'NLP',
      'Scikit-learn',
      'TF-IDF',
      'NLTK',
      'Streamlit',
      'Generative AI',
    ],
    isPrivate: false,
    githubUrl: 'https://github.com/Prathmesh125/Intelligent-Course-Recommendation-System',
    liveUrl: 'https://intelligent-course-recommendation-system.streamlit.app/',
  },
  {
    title: 'LinkedIn Automation - AI Job Application Agent',
    isNew: false,
    description:
      'Built a local-first AI automation agent that discovers relevant LinkedIn jobs, parses resumes, dynamically handles application forms, and automates Easy Apply workflows using Gemini and Playwright.',
    tags: [
      'Python',
      'Playwright',
      'Google Gemini',
      'Flask',
      'PyWebview',
      'Automation',
      'AI Agents',
    ],
    isPrivate: false,
    githubUrl: 'https://github.com/Prathmesh125/Linkedin-Automation',
    liveUrl: '#',
  },
];

const ProjectsSection = () => (
  <SectionBlock id="projects" title="Projects">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-50px' }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: {},
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 pb-12"
    >
      {projects.map((project, index) => {
        return (
          <motion.div
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            onMouseEnter={playHover}
            className="w-full h-full"
          >
            <div className="w-full h-full group relative border-2 border-black p-8 flex flex-col justify-between shadow-brutal-3d hover:shadow-brutal-3d-hover transition-all duration-500 bg-white rounded-none">
              {project.isNew && (
                <div className="absolute -top-3 -right-3 bg-black text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest border-2 border-black z-10 rotate-3 group-hover:rotate-0 transition-transform">
                  LATEST WORK
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-black text-foreground leading-tight text-xl">
                    {project.title}
                  </h3>
                </div>

                <p className="body-text mb-6 font-normal leading-relaxed text-foreground/80 text-xs line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.slice(0, 6).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="font-mono text-[9px] font-bold border border-black/5 bg-black/5 px-2 py-0.5 rounded-none"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 6 && (
                    <span className="text-[9px] font-bold opacity-30">
                      +{project.tags.length - 6}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                {project.isPrivate ? (
                  <div className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border-2 border-black bg-gray-100 text-[9px] font-black uppercase tracking-widest text-black/50 cursor-not-allowed">
                    <Lock className="w-3.5 h-3.5" />
                    Private
                  </div>
                ) : (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border-2 border-black bg-white text-[9px] font-black uppercase tracking-widest transition-all duration-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-black hover:text-white"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Source
                  </a>
                )}
                {project.liveUrl && project.liveUrl !== '#' ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border-2 border-black bg-black text-white text-[9px] font-black uppercase tracking-widest transition-all duration-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-white hover:text-black"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live
                  </a>
                ) : (
                  <div className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border-2 border-black bg-gray-100 text-[9px] font-black uppercase tracking-widest text-black/50 cursor-not-allowed">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>

    <div className="mt-8">
      <a
        href="https://github.com/Prathmesh125"
        target="_blank"
        rel="noopener noreferrer"
        onClick={playClick}
        className="group flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] border-b-2 border-black pb-1 hover:gap-5 transition-all w-fit"
      >
        <Github className="w-4 h-4" />
        Explore Original Repositories
      </a>
    </div>
  </SectionBlock>
);

export default ProjectsSection;
