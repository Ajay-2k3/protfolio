import React from "react";

const Skill = () => {
    const skills = ["React", "Next.js", "JavaScript", "MongoDB", "Express.js", "TailwindCSS"];

    return (
        <section
            id="skill"
            className="py-20 ] text-white"
        >
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-[#4a90e2] text-white py-3 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
