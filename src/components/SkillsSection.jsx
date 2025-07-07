import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Backend
  { name: "Node.js", level: 40, category: "backend" },
  { name: "Express", level: 45, category: "backend" },
  { name: "MongoDB", level: 30, category: "backend" },
  { name: "PostgreSQL", level: 30, category: "backend" },
  //full stack
  { name: "Mobile App (AppSheet)", level: 95, category: "fullstack" },  

  // Frontend
  { name: "HTML/CSS", level: 55, category: "frontend" },
  { name: "JavaScript", level: 50, category: "frontend" },
  { name: "React", level: 45, category: "frontend" },

  { name: "TypeScript", level: 45, category: "frontend" },
  { name: "Tailwind CSS", level: 55, category: "frontend" },
  { name: "Next.js", level: 35, category: "frontend" },

  // Google Workspace
  { name: "Google Apps Script", level: 50, category: "Google Workspaace" },
  { name: "Google Sheets", level: 85, category: "Google Workspaace" },
  { name: "Google Forms", level: 70, category: "Google Workspaace" },
  { name: "Google Slides", level: 60, category: "Google Workspaace" },
  { name: "Google Drive", level: 80, category: "Google Workspaace" },
  { name: "Google Calendar", level: 75, category: "Google Workspaace" },


  
  

  // Tools
  { name: "Git/GitHub", level: 35, category: "tools" },
  { name: "Figma", level: 65, category: "tools" },
  { name: "VS Code", level: 65, category: "tools" },
];

const categories = ["all", "Google Workspaace",  "fullstack","frontend","backend", "tools" ];



export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <p className="text-gray-500 ">{skill.category}</p>
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
