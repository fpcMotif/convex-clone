
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AITools from './components/AITools';
import ProductDiagram from './components/ProductDiagram';
import Testimonials from './components/Testimonials';
import Integrations from './components/Integrations';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#FAF6ED] flex min-h-screen flex-col overflow-x-hidden text-neutral-800 antialiased">
      <Header />
      <main className="flex flex-col gap-9 md:gap-16 lg:gap-20">
        <Hero />
        <AITools />
        <ProductDiagram />
        <Testimonials />
        <Integrations />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
