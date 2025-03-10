import React from "react";

const Project = () => {
    const projects = [
        { name: "Portfolio Website", tech: "React + TailwindCSS" },
        { name: "E-commerce App", tech: "Next.js + MongoDB" },
        { name: "Dashboard UI", tech: "React + Framer Motion" },
    ];

    return (
        <section
            id="project"
            className="py-20 text-white"
        >
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6">Projects</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#4a90e2] py-4 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold">{project.name}</h3>
                            <p className="text-gray-200">{project.tech}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
