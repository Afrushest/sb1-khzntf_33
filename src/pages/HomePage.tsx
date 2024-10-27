import React from 'react';
import Hero from '../components/Hero';
import CompanyOverview from '../components/home/CompanyOverview';
import PartnerLogos from '../components/home/PartnerLogos';
import Services from '../components/Services';
import LearningCenter from '../components/home/LearningCenter';
import Awards from '../components/home/Awards';
import LatestEvents from '../components/home/LatestEvents';
import LatestNews from '../components/home/LatestNews';
import Testimonials from '../components/resources/Testimonials';
import ClientLogos from '../components/home/ClientLogos';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <Hero />

      {/* Company Overview with Video */}
      <CompanyOverview />

      {/* Partner Alliance Logos */}
      <PartnerLogos />

      {/* Services Overview */}
      <Services />

      {/* Learning Center */}
      <LearningCenter />

      {/* Awards Section */}
      <Awards />

      {/* Latest Events & Webinars */}
      <LatestEvents />

      {/* Latest News & Blogs */}
      <LatestNews />

      {/* Client Testimonials */}
      <Testimonials limit={3} showViewMore={true} />

      {/* Client Logos */}
      <ClientLogos />

      {/* Contact Form */}
      <Contact />
    </div>
  );
};

export default HomePage;