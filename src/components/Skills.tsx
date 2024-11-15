import SkillCard from "./SkillCard";

const skillItems = [
  {
    imgSrc: "/images/csharp.svg",
    label: "C# and .NET",
    desc: "Backend Programming",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/python.svg",
    label: "Python",
    desc: "Scripting",
  },
  {
    imgSrc: "/images/microsoft-azure.svg",
    label: "Azure",
    desc: "Cloud Services",
  },
  {
    imgSrc: "/images/sql.svg",
    label: "SQL",
    desc: "Relational Database",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/typescript.svg",
    label: "TypeScript",
    desc: "Web Interaction",
  },
  {
    imgSrc: "/images/power-apps.svg",
    label: "Power Apps",
    desc: "Applications",
  },
  {
    imgSrc: "/images/power-bi.svg",
    label: "Power BI",
    desc: "Analytics & Reporting",
  },
  {
    imgSrc: "/images/azure-functions.svg",
    label: "Azure Functions",
    desc: "Cloud APIs",
  },
  {
    imgSrc: "/images/power-automate.svg",
    label: "Power Automate",
    desc: "Automation",
  },
];

function Skills() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential tools I use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites, automation, and applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItems.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
