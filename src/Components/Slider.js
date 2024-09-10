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
    if (currentSlideIndex < heros.length - 1) {
      setCurrentSlideIndex((next) => next + 1);
    } else {
      setCurrentSlideIndex(0);
    }
  };
  const handlePrevSlide = () => {
    if (currentSlideIndex < 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    } else {
      handleNextSlide(currentSlideIndex);
    }
  };

  const hero = heros[currentSlideIndex];

  return (
    <div>
      <Hero
        key={hero.id}
        image={hero.cover_image}
        tags={hero.tag_list}
        title={hero.title}
      />

      <div className="flex gap-2 mt-3 justify-end">
        <img
          className="w-10 h-10"
          src="back.png"
          onClick={handlePrevSlide}
        ></img>
        <img
          className="w-10 h-10"
          src="forward.png"
          onClick={handleNextSlide}
        ></img>
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
      <div className="w-[598px] h-[252px] bg-[#E8E8EA] rounded-xl mt-[335px] absolute ml-3 opacity-80   ">
        <div className="w-[518px] h-124px px-10  ">
          <div>
            {tags.slice(3).map((tag) => {
              return (
                <p
                  key={tag}
                  className="mb-4 bg-[#4B6BFB] text-cyan-50 rounded-lg mt-10  w-fit py-1 px-[10px] "
                >
                  {tag}
                </p>
              );
            })}
          </div>
          <div>
            <h2>{title}</h2>
          </div>
          <div className="mt-6">{moment(date).format("ll")}</div>
        </div>
      </div>
    </div>
  );
};
