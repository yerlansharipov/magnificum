import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartSidebar from './components/layout/CartSidebar';
import HeroSection from './components/hero/HeroSection';
import GallerySection from './components/gallery/GallerySection';
import ArtistStatement from './components/statement/ArtistStatement';
import StoreSection from './components/store/StoreSection';
import DonateSection from './components/donate/DonateSection';
import LiveFeedSection from './components/feed/LiveFeedSection';

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <HeroSection />
        <GallerySection />
        <ArtistStatement />
        <StoreSection />
        <DonateSection />
        <LiveFeedSection />
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
}
