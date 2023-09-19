const Search = ({ handleSearch, searchQuery, setSearchQuery }) => {
  return (
    <div className='my-5'>
      <div className='max-w-md mx-auto'>
        <div className='relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-none overflow-hidden border border-[#535353]'>
          <input
            className='peer h-full w-[50rem] outline-none text-sm text-[#535353] px-2 bg-transparent '
            type='text'
            value={searchQuery || ""}
            placeholder='Search Images'
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={handleSearch}
          />
          <button className='grid place-items-center h-full w-12 text-[#535353]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
