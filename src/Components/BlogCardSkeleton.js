export const BlogCardSkeleton = () => {
  return (
    <div className="px-4 py-2 border border-solid rounded-2xl h-[592px] w-[392px] p-4 m-auto">
      <div className="h-60 bg-gray-300 rounded-lg mt-4 animate-pulse"></div>
      <div className="flex flex-wrap gap-2">
        <div className="w-[80px] h-6 bg-gray-300 rounded-lg mt-7 animate-pulse"></div>
      </div>
      <div className="max-w-[344px] w-fit text-[24px] font-medium mt-4">
        <div className="w-[200px] h-6 bg-gray-300 rounded animate-pulse"></div>
      </div>
      <div className="flex items-center mt-5">
        <div className="w-[36px] h-[36px] bg-gray-300 rounded-full animate-pulse"></div>
        <div className="flex">
          <div className="w-[100px] h-4 bg-gray-300 rounded animate-pulse ml-3 mr-5"></div>
          <div className="w-[80px] h-4 bg-gray-300 rounded animate-pulse ml-5"></div>
        </div>
      </div>
    </div>
  );
};
