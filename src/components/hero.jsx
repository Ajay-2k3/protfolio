/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div
            id="home"
            className="relative m-0 p-0 h-screen w-full bg-cover bg-center text-white flex items-center justify-center px-6"
            style={{
                backgroundImage: "url('/img1.jpg')",
            }}
        >
            {/* Black Transparent Overlay */}
            <div className="absolute inset-0  bg-black opacity-40"></div>

            {/* Hero Content */}
            <div className="relative z-10 text-center">
                <motion.h1
                    className="text-5xl font-extrabold mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    👋 Hi, I'm <span className="text-[#4a90e2]">Ajay S.</span>
                </motion.h1>

                <motion.p
                    className="text-lg text-gray-300 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    I'm a passionate Frontend / Full-Stack Developer dedicated to
                    building dynamic and responsive web applications. Specializing in
                    <span className="text-[#4a90e2]"> React, Next.js, and JavaScript</span>.
                </motion.p>

                {/* Call to Action Button */}
                <motion.a
                    href="#contact"
                    className="inline-block mt-6 px-6 py-3 bg-[#4a90e2] text-white rounded-xl shadow-lg shadow-cyan-500/50 hover:bg-[#357abd] transition duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Contact Me
                </motion.a>
            </div>
        </div>
    );
};

export default Hero;
