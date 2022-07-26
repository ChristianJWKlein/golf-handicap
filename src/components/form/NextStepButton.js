export default function NextStepButton({ nextStep }) {
  return (
    <button
      onClick={nextStep}
      className='bg-lime-500 h-12 w-full rounded-md font-bold hover:opacity-80 active:scale-105 transition-all'
    >
      Next
    </button>
  )
}
