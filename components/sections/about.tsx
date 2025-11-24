"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Globe, Award, FileCheck } from "lucide-react";
import Image from "next/image";

const highlights = [
    {
        icon: Award,
        title: "40+ Years",
        subtitle: "Combined Experience",
    },
    {
        icon: Globe,
        title: "100+ Countries",
        subtitle: "Clients Served Worldwide",
    },
    {
        icon: Star,
        title: "Award-Winning",
        subtitle: "Legal Team",
    },
    {
        icon: FileCheck,
        title: "Thousands",
        subtitle: "Applications Processed",
    },
];

const values = [
    "Professional excellence",
    "Integrity in every decision",
    "Respect & empathy",
    "Client success above all",
];

export function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-neutral-950">
            <div className="container px-4 md:px-6 mx-auto">
                {/* Section 1 - About Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white"
                    >
                        About Our Firm
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-300"
                    >
                        Trusted, award-winning legal professionals helping clients across Canada and around the world.
                    </motion.p>
                </div>

                {/* Section 2 - Firm Overview (2-column layout) */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-24 items-center">
                    {/* Left Column - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Who We Are */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Who We Are
                            </h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                A dedicated Canadian law firm specializing in immigration and legal advisory services. Our team supports clients worldwide with guidance rooted in integrity, professionalism, and decades of combined experience.
                            </p>
                        </div>

                        {/* What We Stand For */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                What We Stand For
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Delivering clear, reliable legal support
                                </li>
                                <li className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Simplifying complex processes
                                </li>
                                <li className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Personalized, client-focused solutions
                                </li>
                                <li className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Commitment to transparency and trust
                                </li>
                            </ul>
                        </div>

                        {/* Global Reach */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Global Reach
                            </h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                No matter where you live, our team is equipped to handle immigration matters for individuals, families, and businesses across the globe.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/image_three.webp"
                            alt="Professional Law Office"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </motion.div>
                </div>

                {/* Section 3 - Key Highlights (stats/badges) */}
                <div className="mb-24">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={highlight.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="text-center border-2 border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-950">
                                    <CardContent className="pt-8 pb-8">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 flex items-center justify-center">
                                            <highlight.icon className="w-8 h-8 text-white dark:text-black" strokeWidth={1.5} />
                                        </div>
                                        <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                            {highlight.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                            {highlight.subtitle}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Section 4 - Mission Statement / Values */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-24 text-center"
                >
                    {/* Mission */}
                    <div className="mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Our Mission
                        </h3>
                        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                            To make Canadian immigration clear, accessible, and stress-free by offering expert legal support backed by compassion and professionalism.
                        </p>
                    </div>

                    {/* Values */}
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                            Our Values
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-neutral-900 px-6 py-4 rounded-lg border border-gray-200 dark:border-gray-800"
                                >
                                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    {value}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Section 5 - CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-100 dark:to-gray-200 rounded-2xl p-12 shadow-2xl text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-white dark:text-black mb-4">
                            Need Guidance With Your Immigration Journey?
                        </h3>
                        <p className="text-lg text-gray-200 dark:text-gray-800 mb-8 max-w-2xl mx-auto">
                            Our team is ready to help you move forward with confidence.
                        </p>
                        <Button
                            size="lg"
                            className="bg-white text-black hover:bg-gray-100 dark:bg-black dark:text-white dark:hover:bg-gray-900 text-lg h-14 px-10 font-bold shadow-xl hover:scale-105 transition-transform"
                        >
                            Book a Consultation
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
