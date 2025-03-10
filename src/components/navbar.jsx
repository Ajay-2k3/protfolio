import React, { useState, useEffect } from "react";
import { Link } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-[#000000] backdrop-blur-lg shadow-lg shadow-gray-900"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto flex items-center justify-between h-[70px] px-6">
                {/* Logo */}
                <div className="text-3xl font-extrabold text-white cursor-pointer tracking-wider">
                    Ajay
                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex gap-8 text-lg text-white">
                    {["Home", "About", "Projects", "Skills", "Contact"].map(
                        (item) => (
                            <li
                                key={item}
                                className="hover:text-[#4a90e2] transition-all duration-300 cursor-pointer"
                            >
                                <Link
                                    href={`#${item.toLowerCase()}`}
                                    underline="none"
                                    color="white"
                                >
                                    {item}
                                </Link>
                            </li>
                        )
                    )}
                </ul>

                {/* Hamburger Menu (Mobile) */}
                <div
                    className="md:hidden text-white cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </div>

                {/* Mobile Menu */}
                <ul
                    className={`absolute top-[70px] left-0 w-full bg-[#222831] text-white text-center  py-5 space-y-4 transition-all duration-300 ${
                        isOpen ? "block" : "hidden"
                    }`}
                >
                    {["Home", "About", "Projects", "Skills", "Contact"].map(
                        (item) => (
                            <li
                                key={item}
                                className="hover:text-[#4abee2] transition-all duration-300 cursor-pointer text-white"
                            >
                                <Link
                                    href={`#${item.toLowerCase()}`}
                                    underline="none"
                                    color="white"
          
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </nav>
    );
};
