export function SliderSkeleton() {
  return (
    <div>
      <HeroSkeleton />

      <div className="flex gap-2 mt-3 justify-end max-w-[1216px] m-auto">
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
}

function HeroSkeleton() {
  return (
    <div
      className="max-w-[413px] h-[320px] md:max-w-[1216px] bg-gray-200"
      style={{
        height: 600,
        borderRadius: "12px",
        margin: "auto",
      }}
    >
      <div className="max-w-[380px] bg-gray-300 rounded-xl mt-[335px] absolute ml-3 opacity-80 md:max-w-[598px] h-[252px]">
        <div className="w-[518px] h-[124px] px-10">
          <div className="mb-4 bg-gray-400 rounded-lg mt-10 w-24 h-6"></div>
          <div className="w-full h-8 bg-gray-400 mt-4"></div>
          <div className="mt-6 w-32 h-6 bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
}
