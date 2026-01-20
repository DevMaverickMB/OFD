import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import ServiceDetail from './pages/ServiceDetail';
import Industries from './pages/Industries';
import DrillingContractors from './pages/industries/DrillingContractors';
import EquipmentRentals from './pages/industries/EquipmentRentals';
import MidUpstreamOperations from './pages/industries/MidUpstreamOperations';
import OilfieldServices from './pages/industries/OilfieldServices';
import WellTestingFlowback from './pages/industries/WellTestingFlowback';
import WirelineCoilTubing from './pages/industries/WirelineCoilTubing';
import AssetManagement from './pages/solutions/AssetManagement';
import FieldTicketing from './pages/solutions/FieldTicketing';
import JobScheduling from './pages/solutions/JobScheduling';
import InventoryManagement from './pages/solutions/InventoryManagement';
import IoTPredictive from './pages/solutions/IoTPredictive';
import ComplianceSafety from './pages/solutions/ComplianceSafety';
import RealtimeReporting from './pages/solutions/RealtimeReporting';
import MobileApp from './pages/solutions/MobileApp';
import Integrations from './pages/Integrations';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import CaseStudies from './pages/CaseStudies';
import EquipmentRentalCS from './pages/case-studies/EquipmentRentalCS';
import PipelineIntegrityCS from './pages/case-studies/PipelineIntegrityCS';
import SmartSchedulingCS from './pages/case-studies/SmartSchedulingCS';
import FieldServiceCS from './pages/case-studies/FieldServiceCS';
import Blog from './pages/Blog';
import Privacy from './pages/Privacy';
import FAQ from './pages/FAQ';
// import ComponentLibrary from './pages/ComponentLibrary';
import './App.css';
import 'lenis/dist/lenis.css';

// Admin & Blog Imports
import BlogDetail from './pages/BlogDetail';
import AdminLayout from './pages/admin/AdminLayout';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import BlogEditor from './pages/admin/BlogEditor';

// Component to handle scroll to top and scroll animations on route change
function ScrollHandler() {
  const { pathname } = useLocation();
  const observerRef = useRef(null);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Small delay to ensure DOM is updated after route change
    const timeoutId = setTimeout(() => {
      // Disconnect previous observer if exists
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      // Set up new observer for scroll animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -10px 0px'
      };

      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
              entry.target.classList.add('animated');
            }, delay);
            observerRef.current.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Observe all elements with scroll-animate class
      const animatedElements = document.querySelectorAll('.scroll-animate:not(.animated)');
      animatedElements.forEach(el => observerRef.current.observe(el));
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  // Cleanup observer on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return null;
}

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Request animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollHandler />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/drilling-contractors" element={<DrillingContractors />} />
            <Route path="/industries/equipment-rentals" element={<EquipmentRentals />} />
            <Route path="/industries/mid-upstream-operations" element={<MidUpstreamOperations />} />
            <Route path="/industries/oilfield-services" element={<OilfieldServices />} />
            <Route path="/industries/well-testing-flowback" element={<WellTestingFlowback />} />
            <Route path="/industries/wireline-coil-tubing" element={<WirelineCoilTubing />} />
            <Route path="/solutions/asset-management" element={<AssetManagement />} />
            <Route path="/solutions/field-ticketing" element={<FieldTicketing />} />
            <Route path="/solutions/job-scheduling" element={<JobScheduling />} />
            <Route path="/solutions/inventory-management" element={<InventoryManagement />} />
            <Route path="/solutions/iot-predictive" element={<IoTPredictive />} />
            <Route path="/solutions/compliance-safety" element={<ComplianceSafety />} />
            <Route path="/solutions/realtime-reporting" element={<RealtimeReporting />} />
            <Route path="/solutions/mobile-app" element={<MobileApp />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/equipment-rental-management" element={<EquipmentRentalCS />} />
            <Route path="/case-studies/pipeline-integrity" element={<PipelineIntegrityCS />} />
            <Route path="/case-studies/smart-scheduling" element={<SmartSchedulingCS />} />
            <Route path="/case-studies/field-service-management" element={<FieldServiceCS />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />

            {/* Admin Routes */}
            <Route path="/bloginternal/login" element={<Login />} />
            <Route path="/bloginternal" element={<AdminLayout />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="new" element={<BlogEditor />} />
              <Route path="edit/:id" element={<BlogEditor />} />
            </Route>
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
