const scoreValues = [
  { id: 1, score: 90 },
  { id: 2, score: 90 },
  { id: 3, score: 90 },
  { id: 4, score: 90 },
  { id: 5, score: 90 },
  { id: 6, score: 90 },
  { id: 7, score: 90 },
  { id: 8, score: 90 },
  { id: 9, score: 90 },
]
//consider storing all form values in a form values object
export default function EnterScores({ scores, setScores }) {
  //set scores to scoreValues, but change scoreValues to an object only. maybe.
  //
  // console.log(scoreValues)

  //console.log(scores)
  //let fakeScores = scores

  //This works to update score values.
  // const handleSliderChange = (e) => {
  //   const { id, value } = e.target
  //   setScores([
  //     {
  //       ...scores,
  //       [id]: value,
  //     },
  //   ])
  // }

  const handleSliderChange = (e) => {
    scores.score = e.target.value
  }

  return (
    <div className='flex flex-col font-cabinet'>
      <p className='font-bold text-2xl mb-8'>
        Enter your last 10 scores of golf
      </p>
      {scores.map((sliderVal) => {
        return (
          <label
            key={sliderVal.id}
            className='flex items-center bg-slate-100 px-4 py-2 rounded-md mb-4'
          >
            <input
              className='slider w-full h-2 rounded-xl bg-green-200 text-green-400 appearance-none'
              type='range'
              value={scores.score}
              //value={sliderVal.score}
              step={1}
              min={50}
              max={130}
              onChange={handleSliderChange}
            />
            {/* <span className='block text-center text-2xl my-4'>{sliderVal}</span> */}
            {/* {sliderVal.score} */}

            <span className='block text-center text-2xl my-4'>
              {/* {parseInt(scores?.score).toLocaleString()} */}
              {/* {scores?.score} */}
              {/* {sliderVal.score} */}
            </span>
            {scores?.score}
          </label>
        )
      })}

      {/* {scoreValues.map((sliderVal) => {
        return (
          <label
            key={sliderVal.id}
            className='flex items-center bg-slate-100 px-4 py-2 rounded-md mb-4'
          >
            <input
              className='slider w-full h-2 rounded-xl bg-green-200 text-green-400 appearance-none'
              type='range'
              value={scores}
              //value={scores}
              step={1}
              min={50}
              max={130}
              onChange={handleSliderChange}
            /> */}
      {/* <span className='block text-center text-2xl my-4'>{sliderVal}</span> */}
      {/* {sliderVal.score} */}
      {/* {scores.score} */}
      {/* </label>
        )
      })} */}

      {/* {scoreValues.map((choice) => {
        return (
          <label
            key={choice.id}
            className={
              scores.includes(choice.score)
                ? 'flex items-center px-4 py-2 bg-lime-200 rounded-md mb-4'
                : 'flex items-center bg-slate-100 px-4 py-2 rounded-md mb-4'
            }
          >
            {scores.includes(choice.score) ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2 13l4 4L19 4'
                />
              </svg>
            ) : (
              <svg
                className='h-4 w-4'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z'
                  stroke='black'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            )}
            <input
              key={choice.id}
              type='checkbox'
              className='mr-4 appearance-none'
              value={choice.score}
              checked={scores.includes(choice.score)}
              name={choice.score}
              onChange={() => {
                if (scores.includes(choice.score)) {
                  scores.splice(scores.indexOf(choice.score), 1)
                  setScores([...scores])
                } else {
                  scores.push(choice.score)
                  setScores([...scores])
                }
              }}
            />
            {choice.score}
          </label>
        )
      })} */}
    </div>
  )
}
