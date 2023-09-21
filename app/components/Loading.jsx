export default function Loading() {
  return (
    <div className='flex justify-center'>
      <svg class='spinner text-rose-700' viewBox='0 0 50 50'>
        <circle
          class='path'
          cx='25'
          cy='25'
          r='20'
          fill='none'
          stroke-width='5'
        ></circle>
      </svg>
    </div>
  );
}
