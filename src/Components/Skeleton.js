export function Skeleton() {
  return (
    <div className="flex mt-8 h-[100px] items-center max-w-[1920px] justify-center gap-[350px]">
      <div className="w-[36px] h-[36px] bg-gray-200 rounded-full"></div>

      <div className="hidden md:flex space-x-10">
        <div className="w-12 h-6 bg-gray-200"></div>
        <div className="w-12 h-6 bg-gray-200"></div>
        <div className="w-12 h-6 bg-gray-200"></div>
      </div>

      <div className="hidden md:block w-[166px] h-9 bg-gray-200 rounded-md"></div>

      <div className="md:hidden w-8 h-8 bg-gray-200"></div>
    </div>
  );
}
