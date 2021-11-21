import ContactPage from "../components/ContactPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Contact() {
  return (
    <div className="contact-page">
      <Header currPage="contact" />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default Contact;
