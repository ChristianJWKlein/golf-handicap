export default function PrevStepButton({ prevStep }) {
  return (
    <button
      onClick={prevStep}
      className='bg-lime-900 text-white w-full h-12 rounded-md font-bold hover:opacity-80 active:scale-105 transition-all'
    >
      Back
    </button>
  )
}
