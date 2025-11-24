"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/image_two.webp"
                    alt="Immigration Law Firm Office"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl space-y-6"
                >
                    {/* Trust Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-block"
                    >
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                            ⭐ Award-Winning Calgary Law Firm
                        </span>
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
                        Navigate Canadian{" "}
                        <span className="text-primary-foreground bg-primary/20 px-2 rounded-md backdrop-blur-sm">
                            Immigration
                        </span>{" "}
                        with Confidence
                    </h1>

                    <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
                        Our award-winning team supports clients across Canada and worldwide, simplifying complex immigration procedures so you can enter or stay in Canada with confidence.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-col items-center gap-6 pt-4"
                    >
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto text-lg h-12 px-8 font-semibold shadow-md hover:scale-105 transition-transform"
                            >
                                Book a Consultation
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto text-lg h-12 px-8 bg-transparent text-white border-white hover:bg-white hover:text-black transition-all"
                            >
                                Explore Immigration Services
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>

                        {/* Trust Signals */}
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
                            <span className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Free Initial Consultation
                            </span>
                            <span className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Trusted by 1000+ Clients
                            </span>
                            <span className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                95% Success Rate
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
