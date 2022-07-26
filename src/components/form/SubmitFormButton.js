export default function SubmitFormButton({ handleFormSubmit }) {
  return (
    <button
      onClick={handleFormSubmit}
      className='bg-lime-300 h-12 w-full rounded-md font-bold hover:opacity-80 active:scale-105 transition-all'
    >
      Submit
    </button>
  )
}
