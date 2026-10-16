import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { AccountDetails } from "./components/AccountDetails";
import { Contact } from "./components/Contact";
import { Privacy } from "./components/Privacy";
import { Terms } from "./components/Terms";
import imgLanding from "../assets/9c8972844f0e811c448d184ca2d7dc97cbe073a5.png";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-[#0d0d0d] text-white selection:bg-[#efab18] selection:text-black font-['Outfit'] overflow-x-hidden">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0d0d0d]/90 z-1" />
        <img 
          src={imgLanding} 
          alt="" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
          style={{ 
            animationDuration: '10s'
          }}
        />
        <div className="absolute inset-0 bg-[#0d0d0d]/40 mix-blend-multiply" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </div>

      <Toaster 
        position="bottom-center" 
        richColors 
        toastOptions={{
          style: {
            background: 'rgba(26, 26, 26, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#fff',
            borderRadius: '16px'
          }
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Hero /></MainLayout>} />
        <Route path="/account-details" element={<MainLayout><div className="py-12 md:py-24"><AccountDetails /></div></MainLayout>} />
        <Route path="/contact" element={<MainLayout><div className="pt-12 md:pt-24"><Contact /></div></MainLayout>} />
        <Route path="/privacy" element={<MainLayout><Privacy /></MainLayout>} />
        <Route path="/terms" element={<MainLayout><div className="py-12 md:py-24"><Terms /></div></MainLayout>} />
      </Routes>
    </Router>
  );
}
