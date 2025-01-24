export const BlogTrendingSkeleton = () => {
  return (
    <div className="border border-solid w-[293px] h-[320px] rounded-xl overflow-hidden pb-7 mx-2 bg-gray-300 animate-pulse">
      <div className="p-5 h-full w-full flex items-end bg-[rgba(0,0,0,.3)]">
        <div className="h-[100px] w-full text-white">
          <div className="mb-4 bg-gray-400 rounded-lg mt-7 w-24 h-6"></div>
          <div className="mt-4 w-32 h-6 bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};
