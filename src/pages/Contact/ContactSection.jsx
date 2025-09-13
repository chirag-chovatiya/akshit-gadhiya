import Breadcrumb from "../../components/breadcrumb/BreadCrumb";
import ContactSection from "../../components/contact/ConatactSection";

function ContactPage() {
  return (
    <>
      <Breadcrumb
        title="Contact Us"
        path={[{ label: "Contact" }]}
      />
      <ContactSection />;
    </>
  );
}

export default ContactPage;
