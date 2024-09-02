import Header from "../Components/Header";
import BlogCard from "../Components/Trending";

export default function Home() {
  return (
    <div className="max-w-screen-2xl m-auto">
      <div>
        <Header></Header>
      </div>
      <div className="max-w-[1216px] m-auto">
        <h1 className="max-w-screen-xl text-[24px] font-bold mt-12">
          All Blog Post
        </h1>
        <BlogCard></BlogCard>
      </div>
    </div>
  );
}
