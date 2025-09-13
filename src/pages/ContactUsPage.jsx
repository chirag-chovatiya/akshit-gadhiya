import React from 'react';
import ContactForm from '../components/comman/ContactForm';
import Navbar from '../components/comman/Navbar';
import Footer from '../components/comman/Footer';

const ContactUsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
