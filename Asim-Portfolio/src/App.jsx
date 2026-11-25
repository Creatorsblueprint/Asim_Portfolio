import { useState, useRef, useEffect } from 'react';
import Home from './Home/Home';
import Impact from './Impact/Impact';
import PaymentSuccess from './paymentPopups/PaymentSuccess.jsx';
import PaymentCancel from './paymentPopups/PaymentCancel.jsx';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Consultation from './Consultation/Consultation';

function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [paymentStatus, setPaymentStatus] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const payment = params.get('payment');
    if (payment === 'success' || payment === 'cancel') return payment;
    return null;
  });
  const [selectedTierId, setSelectedTierId] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const path = window.location.pathname.replace(/\/+$/, '').toLowerCase();
    const hash = window.location.hash.toLowerCase();
    const params = new URLSearchParams(window.location.search);

    const hasMessyCalendlyParams =
      params.has('assigned_to') ||
      params.has('event_type_uuid') ||
      params.has('invitee_uuid') ||
      params.has('invitee_email') ||
      params.has('event_start_time');

    if (hasMessyCalendlyParams || params.has('payment')) {
      const cleanPath = path === '/booking' || path === '/book' ? '/booking' : '/';
      const cleanHash = hash === '#consultation' ? '#Consultation' : '';
      window.history.replaceState(null, '', `${cleanPath}${cleanHash}`);
    }

    if (path === '/booking' || path === '/book' || hash === '#consultation') {
      setActiveNav('Consultation');
      const scrollToConsult = () => {
        const el = document.getElementById('Consultation');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      requestAnimationFrame(() => setTimeout(scrollToConsult, 80));
    }
  }, []);

  const handleSelectConsultation = (tierId) => {
    setSelectedTierId(tierId);
    setActiveNav('Consultation');
    const targetEl = document.getElementById(tierId ? `tier-${tierId}` : 'Consultation');
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="app" ref={containerRef}>
      <div className="header">
        <Nav
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          containerRef={containerRef}
          onSelectConsultation={handleSelectConsultation}
        />
      </div>

      <main className="main">
        <Home onSelectConsultation={handleSelectConsultation} />
        <Impact />
        <Consultation
          selectedTierId={selectedTierId}
          onSelectTier={setSelectedTierId}
        />

        {paymentStatus === 'success' && (
          <div className="activeSection">
            <PaymentSuccess setPaymentActive={() => setPaymentStatus(null)} />
          </div>
        )}
        {paymentStatus === 'cancel' && (
          <div className="activeSection">
            <PaymentCancel setPaymentActive={() => setPaymentStatus(null)} />
          </div>
        )}
      </main>

      <div className="footer">
        <Footer
          setActiveNav={setActiveNav}
          onSelectConsultation={handleSelectConsultation}
        />
      </div>
    </div>
  );
}

export default App;
