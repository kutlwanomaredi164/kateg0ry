/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import PortfolioShowcase from './components/PortfolioShowcase';
import AboutSection from './components/AboutSection';
import StatisticsSection from './components/StatisticsSection';
import CinematicGallery from './components/CinematicGallery';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import BookingModal from './components/BookingModal';
import ShowreelModal from './components/ShowreelModal';
import MobileActionButtons from './components/MobileActionButtons';
import { Project } from './types';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [showreelModalOpen, setShowreelModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>('Events & Festivals');

  const handleOpenBooking = (service?: string) => {
    if (service) {
      setPreselectedService(service);
    }
    setBookingModalOpen(true);
  };

  const handleSelectServiceFromCard = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    // Smooth scroll to contact or open booking modal
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setBookingModalOpen(true);
    }
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCommissionProject = (category: string) => {
    setPreselectedService(category);
    setBookingModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#08080a] text-[#ededef] overflow-x-hidden selection:bg-white/20 selection:text-white">
      {/* Custom Precision Cursor */}
      <CustomCursor />

      {/* Main Luxury Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenShowreel={() => setShowreelModalOpen(true)}
      />

      {/* SECTION 1: HERO */}
      <Hero
        onOpenBooking={() => handleOpenBooking()}
        onOpenShowreel={() => setShowreelModalOpen(true)}
      />

      {/* SECTION 2: SERVICES */}
      <ServicesSection
        onSelectService={handleSelectServiceFromCard}
      />

      {/* SECTION 3: PORTFOLIO SHOWCASE */}
      <PortfolioShowcase
        onSelectProject={handleSelectProject}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* SECTION 4: ABOUT US */}
      <AboutSection
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* SECTION 5: STATISTICS */}
      <StatisticsSection />

      {/* SECTION 6: CINEMATIC GALLERY */}
      <CinematicGallery />

      {/* SECTION 7: TESTIMONIALS */}
      <TestimonialsSection />

      {/* SECTION 8: CONTACT */}
      <ContactSection
        preselectedService={preselectedService}
      />

      {/* LUXURY FOOTER */}
      <Footer />

      {/* Mobile Sticky CTA & Floating WhatsApp */}
      <MobileActionButtons
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onCommission={handleCommissionProject}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedService={preselectedService}
      />

      <ShowreelModal
        isOpen={showreelModalOpen}
        onClose={() => setShowreelModalOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
