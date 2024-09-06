import BlogCard from "../Components/BlogCard";
import Trending from "../Components/Trending";
import Slider from "../Components/Slider";
import FooterContent from "../Components/Footer-Content";
import FooterCopyright from "../Components/Footer-Copyright";
import Header from "../Components/Header";

export default function Home() {
  return (
    <div className="max-w-[1920px] m-auto">
      <div className="max-w-6xl m-auto">
        <Header></Header>
      </div>
      <div className="max-w-[1216px] m-auto">
        <Slider />
      </div>

      <div className="max-w-[1216px] m-auto mb-28">
        <h1 className="max-w-screen-[1200px] text-[24px] font-bold mb-8 mt-28">
          Trending
        </h1>
        <Trending></Trending>
      </div>
      <div className="max-w-[1216px] m-auto">
        <h1 className="max-w-screen-[1200px] text-[24px] font-bold mt-12">
          All Blog Post
        </h1>
        <BlogCard></BlogCard>
        <div className="flex justify-center ">
          <button className="w-[123px] h-[48px] bg-slate-200 rounded-lg text-[#696A75] mt-11  ">
            Load More
          </button>
        </div>
      </div>
      <div className="bg-[#E8E8EA] h-[495px]  ">
        <div className="w-[1215px] m-auto relative top-16">
          <div>
            <FooterContent />
          </div>
          <div className="w-[1215px] m-auto">
            <FooterCopyright />
          </div>
        </div>
      </div>
    </div>
  );
}
