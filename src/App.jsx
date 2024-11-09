import Header from './components/Header/Header'
import TeachingSection from './components/TeachingSection'
import IntroSection from './components/IntroSection'
import DifferenceSection from './components/DifferencesSection'
import TabsSection from './components/TabsSection'
import { useState } from 'react'
import FeedbackSection from './components/FeedbackSection'
import EffectSection from './components/EffectSection'

export default function App() {
  const [tab,setTab] = useState('effect')
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current)=>setTab(current)}/>
        {tab === 'main' && (
          <>
          <TeachingSection />
          <DifferenceSection />
          </>
        )}
        {tab === 'feedback' && (
          <>
          <FeedbackSection />
          </>
        )}
        {tab === 'effect' && (
          <>
          <EffectSection />
          </>
        )}
      </main>
    </>
  )
}

