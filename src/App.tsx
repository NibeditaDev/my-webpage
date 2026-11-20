import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./PAGES/Home";
import Team from "./PAGES/Team";
import Services from "./PAGES/Services";
import Expertise from "./PAGES/Expertise";
import ExpertiseDetail from "./PAGES/ExpertiseDetail";
import TemporarySolutions from "./PAGES/TemporarySolutions";
import News from "./PAGES/News";
import Jobs from "./PAGES/Jobs";
import Testimonials from "./PAGES/Testimonials";
import JoinOurTeam from "./PAGES/JoinOurTeam";
import Diversity from "./PAGES/Diversity";
import SalaryInsights from "./PAGES/SalaryInsights";
import Contact from "./PAGES/Contact";
import SubPage from "./PAGES/SubPages";

// Automatically scroll to the top whenever switching pages
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/expertise/:slug" element={<ExpertiseDetail />} />
        <Route path="/temporary-solutions" element={<TemporarySolutions />} />
        <Route path="/news-insights" element={<News />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route
          path="/jobs/:slug"
          element={
            <SubPage
              title="Role Details"
              subtitle="Contact our recruitment consultants to apply or request the full job specification."
            />
          }
        />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/careers" element={<JoinOurTeam />} />
        <Route path="/diversity" element={<Diversity />} />
        <Route path="/salary-insights" element={<SalaryInsights />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/candidates"
          element={
            <SubPage
              title="For Candidates"
              subtitle="Confidential career guidance and exclusive opportunities."
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
