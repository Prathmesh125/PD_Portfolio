import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import SectionBlock from './SectionBlock';
import { Badge } from './ui/badge';
import { playHover, playClick } from '@/hooks/useSoundEffects';

interface Certification {
  title: string;
  issuer: string;
  badgeCode?: string;
  credentialUrl: string;
  image: string;
  description: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    badgeCode: 'AIF-C01',
    credentialUrl:
      'https://www.credly.com/badges/7d05623b-d737-4a4a-ab1d-6f49f6c4a3de',
    image: '/images/certifications/aws-ai-practitioner.jpg',
    description:
      'Validates foundational proficiency in Artificial Intelligence, Machine Learning concepts, Generative AI capabilities, and Foundation Models across the AWS ecosystem.',
    skills: [
      'Artificial Intelligence',
      'Generative AI',
      'Machine Learning',
      'Foundation Models',
      'Prompt Engineering',
      'AWS Cloud',
    ],
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    badgeCode: 'CLF-C02',
    credentialUrl:
      'https://www.credly.com/badges/0437538a-90a6-4ada-a5a7-c6fd7a93efe8',
    image: '/images/certifications/aws-cloud-practitioner.jpg',
    description:
      'Validates foundational knowledge of AWS Cloud infrastructure, core services, cloud security, architecture principles, and pricing models.',
    skills: [
      'AWS Cloud',
      'Cloud Computing',
      'Core Services',
      'Cloud Security',
      'Pricing Models',
    ],
  },
  {
    title: 'Oracle OCI Agentic AI Foundations',
    issuer: 'Oracle Cloud Infrastructure',
    badgeCode: 'OCI Associate',
    credentialUrl:
      'https://drive.google.com/file/d/1KeDzLcJodTqq86RBXyuQ0Hl-j0nZqMUZ/view?usp=sharing',
    image: '/images/certifications/oracle-agentic-ai.jpg',
    description:
      'Validates core expertise in Agentic AI paradigms, autonomous multi-agent workflows, LLM orchestration, LangChain integrations, and Model Context Protocol (MCP).',
    skills: [
      'Agentic AI',
      'AI Agents',
      'LLMs',
      'LangChain',
      'MCP',
      'Autonomous Systems',
    ],
  },
];

const CertificationsSection = () => {
  return (
    <SectionBlock id="certifications" title="Certifications">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: '-50px' }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        className="flex flex-col gap-6 pt-2 pb-12"
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            onMouseEnter={playHover}
            className="w-full"
          >
            <div className="group relative border-2 border-black p-5 md:p-6 bg-white shadow-brutal-3d hover:shadow-brutal-3d-hover transition-all duration-300 rounded-none flex flex-col sm:flex-row items-center sm:items-stretch gap-6">
              {/* Left: Clickable Badge Thumbnail */}
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="group/badge relative w-32 h-32 md:w-36 md:h-36 shrink-0 border-2 border-black bg-[#fafafa] p-3 flex items-center justify-center overflow-hidden transition-colors hover:bg-neutral-100"
                title={`View and verify ${cert.title}`}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover/badge:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-1.5 right-1.5 p-1 bg-black text-white opacity-0 group-hover/badge:opacity-100 transition-opacity">
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>

              {/* Right: Details & Action */}
              <div className="flex-1 flex flex-col justify-between w-full">
                <div>
                  {/* Top row: Issuer, Verified tag, and Badge Code */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-foreground/60">
                        {cert.issuer}
                      </span>
                      <span className="text-foreground/30">•</span>
                      <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-green-700 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    </div>
                    {cert.badgeCode && (
                      <span className="font-mono text-[9px] font-black uppercase tracking-widest bg-black text-white px-2.5 py-0.5 border border-black">
                        {cert.badgeCode}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    className="inline-block group-hover:underline"
                  >
                    <h3 className="font-black text-foreground text-lg md:text-xl leading-snug">
                      {cert.title}
                    </h3>
                  </a>

                  {/* Description */}
                  <p className="body-text text-xs text-foreground/80 mt-1.5 mb-4 line-clamp-2">
                    {cert.description}
                  </p>
                </div>

                {/* Bottom row: Skill badges + Action button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-black/10">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="font-mono text-[9px] font-bold border border-black/5 bg-black/5 px-2 py-0.5 rounded-none"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-black text-white text-[9px] font-black uppercase tracking-widest transition-all duration-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-white hover:text-black w-full sm:w-auto"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Verify Credential
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionBlock>
  );
};

export default CertificationsSection;
