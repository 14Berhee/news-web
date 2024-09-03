import { useState } from "react";
import useSWR from "swr";
import moment from "moment";

const url = "https://dev.to/api/articles?state=rising";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Slider() {
  const { data: heros, error, isLoading } = useSWR(url, fetcher);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  if (isLoading) {
    return <p>isLoading</p>;
  }
  if (error) {
    return <p>Sorry we are connot fulfill this</p>;
  }

  const handleNextSlide = () => {
    setCurrentSlideIndex((next) => next + 1);
  };
  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => prev - 1);
  };

  return (
    <div>
      {heros.map((hero, index) => {
        if (index === currentSlideIndex) {
          return (
            <Hero
              key={hero.id}
              image={hero.cover_image}
              tags={hero.tag_list}
              title={hero.title}
            />
          );
        }
      })}
      <div className="flex gap-2">
        <button onClick={handlePrevSlide}>prev</button>
        <button onClick={handleNextSlide}>next</button>
      </div>
    </div>
  );
}

const Hero = (props) => {
  const { image, tags, title, date } = props;
  return (
    <div
      style={{
        height: 600,
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "12px",
      }}
    >
      <div className="w-[598px] h-[252px] bg-white rounded-xl mt-[335px] ">
        <div className="w-[518px] h-124px px-10 mt-10">
          <div>
            {tags.slice(3).map((tag) => {
              return (
                <p className="mb-4 bg-[#4B6BFB] text-cyan-50 rounded-lg mt-[172px]  w-fit py-1 px-[10px] ">
                  {tag}
                </p>
              );
            })}
          </div>
          <div>
            <h2>{title}</h2>
          </div>
          <div>{moment(date).format("ll")}</div>
        </div>
      </div>
    </div>
  );
};
