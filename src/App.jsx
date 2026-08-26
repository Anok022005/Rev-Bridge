import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PartnerMarquee from './components/PartnerMarquee'
import PartnerShowcase from './components/PartnerShowcase'
import DualPerspective from './components/DualPerspective'
import BentoGrid from './components/BentoGrid'
import HowItWorks from './components/HowItWorks'
import PerformanceMetrics from './components/PerformanceMetrics'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import ConsultationModal from './components/ConsultationModal'
import AmbientCanvas from './components/AmbientCanvas'
import Preloader from './components/Preloader'

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
      <AmbientCanvas />
      <Navbar onOpenModal={handleOpenModal} />
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <PartnerMarquee />
        <PartnerShowcase onOpenModal={handleOpenModal} />
        <DualPerspective onOpenModal={handleOpenModal} />
        <BentoGrid onOpenModal={handleOpenModal} />
        <HowItWorks onOpenModal={handleOpenModal} />
        <PerformanceMetrics onOpenModal={handleOpenModal} />
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
