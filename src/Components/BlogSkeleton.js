export const BlogSkeleton = () => {
  return (
    <div className="mx-auto w-[655px] flex flex-col gap-10 justify-center mt-[100px]">
      <div className="w-[300px] h-[40px] bg-gray-300 rounded animate-pulse"></div>
      <div className="flex items-center w-[300px] h-[28px] gap-4">
        <div className="w-[36px] h-[36px] bg-gray-300 rounded-full animate-pulse"></div>
        <div className="flex flex-col gap-2">
          <div className="w-[150px] h-[20px] bg-gray-300 rounded animate-pulse"></div>
          <div className="w-[80px] h-[14px] bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
      <div className="w-full h-[200px] bg-gray-300 rounded-lg animate-pulse"></div>
      <div className="prose space-y-4">
        <div className="w-full h-[20px] bg-gray-300 rounded animate-pulse"></div>
        <div className="w-full h-[20px] bg-gray-300 rounded animate-pulse"></div>
        <div className="w-full h-[20px] bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
};
