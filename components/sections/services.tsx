"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2, FileText, Briefcase, GraduationCap, Plane, Users, Shield, Scale, Award } from "lucide-react";

const services = [
  {
    title: "Permanent Residency (PR)",
    description: "Secure your future in Canada with expert guidance on permanent residency pathways, including Express Entry and provincial programs.",
    icon: Globe2,
  },
  {
    title: "Express Entry",
    description: "We assist you through profile creation, eligibility checks, documentation, and application submission for Canada's fastest PR system.",
    icon: FileText,
  },
  {
    title: "Work Permits",
    description: "From employer-specific to open work permits, we help you navigate every requirement to work legally in Canada.",
    icon: Briefcase,
  },
  {
    title: "Study Permits",
    description: "Get support with school admissions, visa documents, and staying compliant with Canadian study permit rules.",
    icon: GraduationCap,
  },
  {
    title: "Visitor Visas",
    description: "Whether visiting family, attending events, or traveling, we simplify the visa process for smooth entry to Canada.",
    icon: Plane,
  },
  {
    title: "Family Sponsorship",
    description: "Reunite with your loved ones. We assist with spousal, child, and parent sponsorship applications.",
    icon: Users,
  },
  {
    title: "Refugee & Asylum Claims",
    description: "Compassionate legal support for individuals seeking protection in Canada.",
    icon: Shield,
  },
  {
    title: "Appeals & Judicial Reviews",
    description: "If your application was refused, we help you pursue appeals and challenge unfair decisions.",
    icon: Scale,
  },
  {
    title: "Citizenship Applications",
    description: "Guidance through eligibility requirements, tests, and application filing to become a Canadian citizen.",
    icon: Award,
  },
];

const trustBadges = [
  "Award-Winning Team",
  "Serving Clients Worldwide",
  "Transparent, Step-by-Step Legal Guidance",
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-neutral-950 dark:to-neutral-900">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Section 1 - Title + Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white"
          >
            Our Immigration Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            We offer trusted, expert legal support across a full range of Canadian immigration pathways.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 text-sm"
          >
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300"
              >
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Section 2 - Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-2xl hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-950">
                <CardHeader className="space-y-4">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white dark:text-black" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </CardTitle>

                  {/* Description */}
                  <CardDescription className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Learn More CTA */}
                  <Button
                    variant="ghost"
                    className="group/btn p-0 h-auto font-semibold text-gray-900 dark:text-white hover:bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Section 3 - CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-100 dark:to-gray-200 rounded-2xl p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white dark:text-black mb-4">
              Need Help With an Immigration Matter?
            </h3>
            <p className="text-lg text-gray-200 dark:text-gray-800 mb-8 max-w-2xl mx-auto">
              Book a consultation and get personalized legal support from our award-winning team.
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
