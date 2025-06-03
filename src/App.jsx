"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import MembershipsPage from "./pages/MembershipsPage";
import ContactPage from "./pages/ContactPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import ErrorPage from "./pages/ErrorPage";
import WhatsAppButton from "./components/WhatsAppButton";
import "./index.css";
import ErrorBoundary from "./components/ErrorBoundary";
import WeddingContentCreationPage from "./pages/WeddingContentCreationPage";
import PrivateJetsPage from "./pages/PrivateJetsPage";

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [location.pathname, navigationType]);

  return children;
};

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop>
          <ErrorBoundary>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/content-creation" element={<WeddingContentCreationPage />} />
                <Route path="/services/private-jets" element={<PrivateJetsPage />} />
                <Route path="/services/:id" element={<ServiceDetailPage />} />
                <Route path="/memberships" element={<MembershipsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/error" element={<ErrorPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </AnimatePresence>
          </ErrorBoundary>
        </ScrollToTop>
      </Layout>
      <WhatsAppButton />
    </Router>
  );
}

export default App;
