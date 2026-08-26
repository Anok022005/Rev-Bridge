import React, { useState } from 'react'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import FloatingActions from './components/FloatingActions'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PartnerMarquee from './components/PartnerMarquee'
import AboutSection from './components/AboutSection'
import PartnerShowcase from './components/PartnerShowcase'
import DualPerspective from './components/DualPerspective'
import BentoGrid from './components/BentoGrid'
import HowItWorks from './components/HowItWorks'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import ConsultationModal from './components/ConsultationModal'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTrack, setModalTrack] = useState('hotel') // 'hotel' or 'booking'

  const handleOpenModal = (track = 'hotel') => {
    setModalTrack(track)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <div className="app-layout" id="top">
      <Preloader />
      <CustomCursor />
      <FloatingActions onOpenModal={handleOpenModal} />
      <Navbar onOpenModal={handleOpenModal} />

      <main>
        <Hero onOpenModal={handleOpenModal} />
        <PartnerMarquee />
        <AboutSection onOpenModal={handleOpenModal} />
        <PartnerShowcase onOpenModal={handleOpenModal} />
        <DualPerspective onOpenModal={handleOpenModal} />
        <BentoGrid onOpenModal={handleOpenModal} />
        <HowItWorks onOpenModal={handleOpenModal} />
        <CTASection onOpenModal={handleOpenModal} />
      </main>

      <Footer onOpenModal={handleOpenModal} />

      <ConsultationModal
        isOpen={modalOpen}
        initialTrack={modalTrack}
        onClose={handleCloseModal}
      />
    </div>
  )
}
