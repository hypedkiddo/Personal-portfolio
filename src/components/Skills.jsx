import React,{useState} from "react";
import { cn } from "../lib/utils";

const skills = [
  //Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "React js", level: 60, category: "frontend" },
  { name: "Javascript", level: 65, category: "frontend" },
 
  //Backend
  { name: "Express js", level: 60, category: "backend" },
  { name: "Node js", level: 70, category: "backend" },
 
  //Tools
  { name: "Git/Github", level: 70, category: "tools" },
  { name: "Postman", level: 80, category: "tools" },
  
  //Database
  { name: "MongoDb", level: 70, category: "Database" },
  { name: "My Sql", level: 80, category: "Database" },
];

const category=["all","frontend","backend" ,"tools"]

function Skills() {
    const [activeCategory,setactiveCategory]=useState("all")

    const filteredSkills=skills.filter((skill)=>activeCategory ==="all" || skill.category === activeCategory);

  return <section id="skills" className="py-24 px-24 relative bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {category.map((category,key)=>(
                <button key={key} onClick={()=>setactiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colours duration-300 capitalize",activeCategory ===category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary")}>{category}</button>
            ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-3 gap-6">
            {filteredSkills.map((skill,key)=>(
                <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{width:skill.level + "%"}}></div>
                </div>
                <div className="text-right mt-1">
                    <span>{skill.level}%</span>
                </div>
                </div>
            )
            )}
        </div>
    </div>
  </section>
}

export default Skills;
