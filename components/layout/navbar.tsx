"use client";

import { useState } from "react";
import {
    Navbar as ResizableNavbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";

const navLinks = [
    { name: "Home", link: "/" },
    { name: "Services", link: "#services" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <ResizableNavbar>
            {/* Desktop Navigation */}
            <NavBody>
                <NavbarLogo />
                <NavItems items={navLinks} />
                <div className="flex items-center gap-4">
                    <NavbarButton variant="primary" href="#consultation">
                        Book Consultation
                    </NavbarButton>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>

                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                >
                    {navLinks.map((item, idx) => (
                        <a
                            key={`mobile-link-${idx}`}
                            href={item.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="relative text-neutral-600 dark:text-neutral-300 text-lg font-medium"
                        >
                            <span className="block">{item.name}</span>
                        </a>
                    ))}
                    <div className="flex w-full flex-col gap-4 mt-4">
                        <NavbarButton
                            onClick={() => setIsMobileMenuOpen(false)}
                            variant="secondary"
                            className="w-full"
                            href="#contact"
                        >
                            Contact Us
                        </NavbarButton>
                        <NavbarButton
                            onClick={() => setIsMobileMenuOpen(false)}
                            variant="primary"
                            className="w-full"
                            href="#consultation"
                        >
                            Book Consultation
                        </NavbarButton>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </ResizableNavbar>
    );
}
