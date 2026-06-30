import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatOpraleDoes } from './components/WhatOpraleDoes';
import { WhoItsFor } from './components/WhoItsFor';
import { WhyOpraleWorks } from './components/WhyOpraleWorks';
import { HowTheSystemWorks } from './components/HowTheSystemWorks';
import { OfferLadder } from './components/OfferLadder';
import { OutputSimulator } from './components/OutputSimulator';
import { OutcomeSection } from './components/OutcomeSection';
import { MidPageCta } from './components/MidPageCta';
import { FinalCta } from './components/FinalCta';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F0F0F0] selection:bg-[#7C6CFF] selection:text-[#0D0D0D] font-sans">
      {/* Top Operator Navigation */}
      <Navbar onOpenContact={openContact} />

      {/* 1. Hero Section */}
      <Hero onOpenContact={openContact} />

      {/* 2. What OPRALE does */}
      <WhatOpraleDoes onOpenContact={openContact} />

      {/* 3. Who it's for */}
      <WhoItsFor onOpenContact={openContact} />

      {/* 4. Why OPRALE works */}
      <WhyOpraleWorks />

      {/* 5. How the system works */}
      <HowTheSystemWorks onOpenContact={openContact} />

      {/* 6. Offer Ladder */}
      <OfferLadder onOpenContact={openContact} />

      {/* Operator Tool: Interactive Output & Revenue Velocity Simulator */}
      <OutputSimulator onOpenContact={openContact} />

      {/* 7. Outcome section */}
      <OutcomeSection />

      {/* 8. Mid-page CTA block */}
      <MidPageCta onOpenContact={openContact} />

      {/* 9. Final CTA section */}
      <FinalCta onOpenContact={openContact} />

      {/* Dispatch Terminal / Inquiry Modal */}
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
}