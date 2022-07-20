export default function Handedness({ handedness, setHandedness }) {
  return (
    <>
      <div className='flex flex-col font-cabinet'>
        <p className='font-bold text-2xl mb-8'>What is your handedness?</p>
        <input
          className='h-2 rounded-xl bg-green-200 text-green-400 appearance-none'
          type='input'
          onChange={(e) => {
            setHandedness(e.target.value)
          }}
        />
        <span className='block text-center text-2xl my-4'>
          ${parseInt(handedness).toLocaleString()}
        </span>
      </div>
    </>
  )
}
