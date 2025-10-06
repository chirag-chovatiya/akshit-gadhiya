import React from 'react';
import BreadCrumb from '../components/breadcrumb/BreadCrumb';
import AboutSection from './AboutSection';
import CallToActionSection from './CallToActionSection';

const AboutUsPage = () => {
  return (
    <>
      <BreadCrumb title="About Us" />
      <AboutSection />
      <CallToActionSection />
    </>
  );
};

export default AboutUsPage;
