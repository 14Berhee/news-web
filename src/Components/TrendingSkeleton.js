import React from "react";
import { BlogTrendingSkeleton } from "./BlogTrendingSkeleton";

export const TrendingSkeleton = () => {
  return (
    <div className="m-auto justify-center grid-cols-4 md:flex max-w-[1231px]">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="w-[293px] h-[320px] mx-2">
          <BlogTrendingSkeleton />
        </div>
      ))}
    </div>
  );
};
