import Navbar from "./Navbar";
import Search from "./Search";

export const Header = () => {
  return (
    <div className='bg-header-bg h-96 place-items-center flex flex-col mb-5 text-white opacity-1 border rounded-b-lg'>
      <Navbar />
      <h1 className='mt-10 head_text text-center'>
        The best free stock photos, royalty <br />
        free images & videos shared by creators.
      </h1>
      <Search />
    </div>
  );
};
