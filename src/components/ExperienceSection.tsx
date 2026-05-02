import SectionBlock from './SectionBlock';

const experiences = [
  {
    role: 'Freelance Software Developer',
    company: 'Independent Contractor (Remote)',
    period: '2023 - Present',
    description:
      'Secured international client from Europe; managed end-to-end SDLC including requirements gathering, sprint planning, stakeholder communication, and cross-functional team coordination. Established agile task allocation framework enabling efficient remote project delivery, on-time milestones, and iterative product improvement.',
  },
  {
    role: 'Growth & Tech Intern',
    company: 'SaptaSwad Foods Private Limited',
    period: 'Feb - Apr 2025',
    description:
      "Drove brand growth through digital content creation, social media advertising, and Canva-based product packaging design, boosting online reach and engagement metrics. Architected and launched the company's e-commerce website with product listings, improving digital presence, conversion funnel, and customer accessibility.",
  },
];

const ExperienceSection = () => (
  <SectionBlock id="experience" title="Experience">
    <div className="space-y-12">
      {experiences.map((exp) => (
        <div
          key={exp.role}
          className="relative pl-8 md:pl-0 border-l md:border-l-0 border-black/20 md:grid md:grid-cols-[1fr_2fr] md:gap-8 pb-12 last:pb-0"
        >
          <div className="md:text-right md:pr-8 md:border-r border-black/20 relative">
            <div className="hidden md:block absolute top-1 -right-[5px] w-[9px] h-[9px] rounded-none bg-black"></div>
            <div className="md:hidden absolute top-1 -left-[5px] w-[9px] h-[9px] rounded-none bg-black"></div>

            <h4 className="font-mono text-xs tracking-widest text-foreground/60 uppercase mb-1">
              {exp.period}
            </h4>
            <h3 className="font-bold text-base md:text-lg">{exp.company}</h3>
          </div>

          <div className="mt-2 md:mt-0">
            <h3 className="text-base font-bold text-foreground md:hidden mb-2">
              {exp.role}
            </h3>
            <h3 className="text-lg font-bold text-foreground hidden md:block mb-3">
              {exp.role}
            </h3>
            <p className="body-text text-sm">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ExperienceSection;
