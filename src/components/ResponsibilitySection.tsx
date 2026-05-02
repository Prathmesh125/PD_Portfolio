import SectionBlock from './SectionBlock';

const responsibilities = [
  {
    role: 'Managing Team Lead',
    organization: "'Next Gen Expo 2024' @ AISSMS IOIT",
    description:
      'Orchestrated 40–50 member event team across logistics, tech, and operations at AISSMS IOIT.',
  },
  {
    role: 'Vice President',
    organization: 'MLSA Club' + ' (Aug 2024–2025)',
    description:
      'Led 2–3 large-scale technical & community events (100–150 participants); managed speakers, volunteers, and mentored junior members.',
  },
  {
    role: 'Vice President',
    organization: 'ITSA (IT Student Association)' + ' (Aug 2025–Present)',
    description:
      'Spearheading student community initiatives, technical workshops, and industry-academia collaboration programs.',
  },
];

const ResponsibilitySection = () => (
  <SectionBlock id="responsibility" title="Positions of Responsibility">
    <div className="space-y-8">
      {responsibilities.map((resp) => (
        <div
          key={resp.organization}
          className="border-2 border-black p-6 md:p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 rounded-none"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 border-b-2 border-black/10 pb-4">
            <div>
              <h3 className="font-black text-xl md:text-2xl uppercase tracking-tight text-foreground">
                {resp.role}
              </h3>
              <p className="font-mono text-sm tracking-widest text-foreground/60 uppercase mt-1">
                {resp.organization}
              </p>
            </div>
          </div>
          <p className="body-text text-sm md:text-base leading-relaxed">
            {resp.description}
          </p>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ResponsibilitySection;
