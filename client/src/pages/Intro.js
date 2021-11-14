import Header from "../components/Header";
import IntroPage from "../components/IntroPage";
import Footer from "../components/Footer";
function Intro() {
  return (
    <div className="intro-page">
      <Header currPage="intro" />
      <IntroPage />
      <Footer />
    </div>
  );
}

export default Intro;
