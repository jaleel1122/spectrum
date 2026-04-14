/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import logoImage from '../WhatsApp Image 2026-04-15 at 12.06.36 AM.jpeg'

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  BookOpen, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  Menu, 
  X,
  ChevronUp,
  Award,
  Clock,
  GraduationCap,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-red-100 selection:text-red-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="rounded-lg">
                 <img src={logoImage} alt="Logo" className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-gray-900 block leading-none">SPECTRUM</span>
                <span className="text-xs font-medium text-red-600 tracking-widest uppercase">High School</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">
                  {link.name}
                </a>
              ))}
              <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6">
                Admissions
              </Button>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600 p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-white border-b border-gray-100 px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-base font-medium text-gray-600 hover:text-red-600">
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full">Admissions</Button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section - Campus Image */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="bg-red-100 text-red-600 hover:bg-red-100 border-none mb-6 px-4 py-1 rounded-full text-sm font-semibold">
                Established in 2001
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                A School of <span className="text-red-600">Excellence</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Providing quality English Medium education from Nursery to Grade X. Recognised by the Govt. of T.G.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 h-14 text-lg">
                  Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 ml-2">
                  <Badge variant="outline" className="text-[10px] border-gray-200 text-gray-400">RC NO. HYD-GLC-011-0021</Badge>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipPgO0-7t1_t1FW2enw5934xDNaScrMvTdGcJtHq=s1360-w1360-h1020-rw"
                  alt="Spectrum High School Campus"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Sign Image */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] group">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipN2CgduT8P4Zp0kiNbeT9MQnvntFM7OUataGq4b=s1360-w1360-h1020-rw"
                  alt="Spectrum High School Signage"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold text-red-600 uppercase tracking-[0.2em] mb-4">Our Legacy</h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Quality Education for Every Child</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Spectrum High School has been dedicated to academic excellence for over 20 years. We focus on holistic development, ensuring our students are prepared for future challenges.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "English Medium",
                  "Nursery to Grade X",
                  "Qualified Faculty",
                  "Govt. Recognized",
                  "Co-curricular Activities",
                  "Character Building"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-red-600 shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Programs */}
      <section id="programs" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-red-600 uppercase tracking-[0.2em] mb-4">Programs</h2>
            <p className="text-4xl font-bold text-gray-900">Academic Excellence</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Nursery & Primary", icon: Heart, desc: "A warm, nurturing start for our youngest learners." },
              { title: "Middle School", icon: GraduationCap, desc: "Building strong foundations in core academic subjects." },
              { title: "High School (X)", icon: Award, desc: "Preparing students for board exams and future success." }
            ].map((item) => (
              <Card key={item.title} className="border-none bg-gray-50 shadow-none hover:bg-red-50 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <item.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-red-600 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight">SPECTRUM HIGH SCHOOL</span>
              </div>
              <p className="text-gray-400">A School of Excellence since 2001. Hyderabad, Telangana.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex gap-3"><MapPin className="h-5 w-5 text-red-500" /> <span>9-4-131/1/B/22/1, 7 Tombs Rd, Raghava Colony, Nadeem Colony, BalReddy Nagar, Toli Chowki, Hyderabad, Telangana 500008</span></div>
                <div className="flex gap-3"><Phone className="h-5 w-5 text-red-500" /> <span>88864 39103</span></div>
                <div className="flex gap-3"><Mail className="h-5 w-5 text-red-500" /> <span>spectrumschooltombsroad@gmail.com</span></div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-bold">School Hours</h4>
              <div className="flex gap-3 text-gray-400">
                <Clock className="h-5 w-5 text-red-500" />
                <div>
                  <p>Mon - Fri: 8:30 AM - 4:00 PM</p>
                  <p>Sat: 8:30 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <Separator className="bg-gray-800 mb-8" />
          <p className="text-center text-gray-500 text-sm">© 2024 Spectrum High School. All rights reserved.</p>
        </div>
      </footer>

      {showScrollTop && (
        <Button onClick={scrollToTop} className="fixed bottom-8 right-8 h-12 w-12 rounded-full shadow-lg bg-red-600 hover:bg-red-700 text-white z-50 transition-all animate-in fade-in slide-in-from-bottom-4" size="icon">
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
