import Header from "../components/Header";
import NewsPage from "../components/NewsPage";
import Footer from "../components/Footer";
function News() {
  return (
    <div className="news-page">
      <Header currPage="news" />
      <NewsPage />
      <Footer />
    </div>
  );
}

export default News;
