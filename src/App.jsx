import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/ui/Navbar';
import Hero from './components/leadgen/LeadHero';
import HowItWorks from './components/leadgen/LeadHowItWorks';
import Countries from './components/leadgen/LeadCoverage';
import Testimonials from './components/leadgen/LeadTestimonials';
import JoinCTA from './components/leadgen/LeadCTA';
import Footer from './components/ui/Footer';
import BackToTop from './components/ui/BackToTop';
import Preloader from './components/ui/Preloader';
import About from './components/leadgen/LeadAbout';
import Contact from './components/leadgen/LeadContact';
import GetStarted from './components/leadgen/LeadGetStarted';
import PrivacyPolicy from './components/leadgen/LeadPrivacyPolicy';
import TermsAndConditions from './components/leadgen/LeadTermsAndConditions';
import Business from './components/leadgen/LeadBusiness';
import FAQ from './components/leadgen/LeadFAQ';
import WhySellingify from './components/leadgen/LeadWhySellingify';
import NotFound from './components/ui/NotFound';
import Cookies from './components/leadgen/LeadCookies';
import ScrollToTop from './components/ui/ScrollToTop';
import ChatBot from './components/chatbot/ChatBot';
import Feature from './components/leadgen/LeadFeatures';
import AmbientBubbles from './components/ui/AmbientBubbles';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative isolate min-h-screen bg-white text-black dark:bg-dark-bg dark:text-dark-text">
        <AmbientBubbles />
        <Preloader isLoading={isLoading} />
        {!isLoading && (
          <div className="relative z-10 min-h-screen">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <main>
                    <Hero />
                    <WhySellingify />
                    <HowItWorks />
                    <Countries />
                    <Testimonials />
                    <JoinCTA />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/about"
                element={
                  <main>
                    <About />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/contact"
                element={
                  <main>
                    <Contact />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/get-started"
                element={
                  <main>
                    <GetStarted />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route path="/pricing" element={<Navigate to="/contact" replace />} />
              <Route
                path="/privacy-policy"
                element={
                  <main>
                    <PrivacyPolicy />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/terms-and-conditions"
                element={
                  <main>
                    <TermsAndConditions />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route path="/freelancer" element={<Navigate to="/business" replace />} />
              <Route
                path="/business"
                element={
                  <main>
                    <Business />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/faq"
                element={
                  <main>
                    <FAQ />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/cookies"
                element={
                  <main>
                    <Cookies />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route
                path="/features"
                element={
                  <main>
                    <Feature />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
              <Route path="/login" element={<Navigate to="/contact" replace />} />
              <Route
                path="*"
                element={
                  <main>
                    <NotFound />
                    <Footer />
                    <BackToTop />
                  </main>
                }
              />
            </Routes>
          </div>
        )}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#0a0a0a',
              color: '#EDEDED',
              border: '1px solid rgba(139, 92, 246, 0.25)',
              borderRadius: '12px',
            },
          }}
        />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
