import React from 'react';
import BreadCrumb from '../components/breadcrumb/BreadCrumb';
import CallToActionSection from './CallToActionSection';
import TeamSection from '../components/teams/teamsSection';

const AboutUsPage = () => {
  return (
    <>
      <BreadCrumb title="Meet Our Team" />
      <TeamSection />
      <CallToActionSection />
    </>
  );
};

export default AboutUsPage;
