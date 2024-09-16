import { useState } from "react";

import moment from "moment";

export default function Slider(props) {
  const { data: heros } = props;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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

      <div className="flex gap-2 mt-3 justify-end max-w-[1216px] m-auto">
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
      className="max-w-[413px] h-[320px] md:max-w-[1216px]"
      style={{
        height: 600,
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "12px",
        margin: "auto",
      }}
    >
      <div className=" max-w-[380px] bg-[#E8E8EA] rounded-xl mt-[335px] absolute ml-3 opacity-80  md:max-w-[598px] h-[252px] ">
        <div className="w-[518px] h-124px px-10  ">
          <div>
            {tags.slice(0, 1).map((tag) => {
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
