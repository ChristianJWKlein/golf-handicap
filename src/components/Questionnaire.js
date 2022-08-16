import { useState, useEffect } from 'react'
import NextStepButton from './form/NextStepButton'
import PrevStepButton from './form/PrevStepButton'
import SubmitFormButton from './form/SubmitFormButton'
import EnterScores from './form/EnterScores'
import Nickname from './form/Nickname'
import Handedness from './form/Handedness'

export default function Questionnaire() {
  const [step, setStep] = useState(1)
  const [scores, setScores] = useState([
    { id: 1, score: 90 },
    { id: 2, score: 90 },
    { id: 3, score: 100 },
    { id: 4, score: 90 },
    { id: 5, score: 90 },
    { id: 6, score: 90 },
    { id: 7, score: 90 },
    { id: 8, score: 90 },
    { id: 9, score: 90 },
  ])
  const [nickname, setNickname] = useState('')
  const [handedness, setHandedness] = useState('')

  const prevStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setStep(step - 1)
  }

  const nextStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setStep(step + 1)
  }
  //
  const handleFormSubmit = () => {
    //   fetch("https://jobify-fk.uk.r.appspot.com/jobs/filtered", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(userInput),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => setQuizResults(data))
    //     .then(() => navigate("/your-results"))
    //     .catch((err) => console.error(err));
  }

  return (
    <section className='bg-slate-100 py-12 px-4 font-cabinet min-h-screen'>
      <div className='bg-white sm:max-w-2xl mx-auto p-6 sm:p-10 rounded-xl'>
        {step === 1 && (
          <>
            <EnterScores scores={scores} setScores={setScores} />
            <div className='flex gap-4 mt-8'>
              <NextStepButton nextStep={nextStep} />
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <Nickname
              nickname={nickname}
              setNickname={setNickname}
              prevStep={prevStep}
              nextStep={nextStep}
            />
            <div className='flex gap-4 mt-8'>
              <PrevStepButton prevStep={prevStep} />
              <NextStepButton nextStep={nextStep} />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <Handedness handedness={handedness} setHandedness={setHandedness} />
            <div className='flex gap-4 mt-8'>
              <PrevStepButton prevStep={prevStep} />
              <SubmitFormButton handleFormSubmit={handleFormSubmit} />
            </div>
          </>
        )}
      </div>
    </section>
  )
}
