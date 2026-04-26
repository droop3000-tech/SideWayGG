import { useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CockpitsSection from './components/CockpitsSection';
import AboutSection from './components/AboutSection';
import ContactsSection from './components/ContactsSection';
import MessengerButton from './components/MessengerButton';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-navy-950">
      <AnimatedBackground />
      <Navbar onBookingClick={() => setBookingOpen(true)} />
      <main>
        <HeroSection onBookingClick={() => setBookingOpen(true)} />
        <CockpitsSection />
        <AboutSection />
        <ContactsSection />
      </main>
      <Footer />
      <MessengerButton />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
