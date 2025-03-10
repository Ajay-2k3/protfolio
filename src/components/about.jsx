import React from "react";

const About = () => {
    return (
        <section
            id="about"
            className="py-20 w-full flex h-screen items-center  text-white"
        >
            <div className=" flex w-full h-fit flex-col ">
                <img src="" alt="My Photo" />
            </div>
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    I'm a web developer specializing in crafting intuitive user
                    interfaces and dynamic applications. With experience in
                    <span className="text-[#4a90e2]"> React, Next.js, Express.js,</span> and
                    MongoDB, I thrive on building performance-driven web solutions.
                </p>
            </div>
        </section>
    );
};

export default About;
