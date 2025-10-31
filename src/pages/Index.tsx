import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import News from "@/components/News";
import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Statistics />
      <CaseStudy />
      <News />
      <Footer />
    </div>
  );
};

export default Index;
