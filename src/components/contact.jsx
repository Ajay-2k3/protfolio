import React from "react";

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-20  text-white"
        >
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
                    Feel free to reach out! I'm always open to new opportunities and
                    collaborations.
                </p>

                <a
                    href="mailto:ajays.dev@gmail.com"
                    className="bg-[#4a90e2] text-white py-2 px-5 rounded-md shadow-md hover:scale-105 transition-all duration-300"
                >
                    Email Me
                </a>
            </div>
        </section>
    );
};

export default Contact;
