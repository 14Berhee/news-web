import Blog from "../Components/BlogCard";
import Trending from "../Components/Trending";
import Slider from "../Components/Slider";

export default function Home(props) {
  const { articles, tagList } = props;

  return (
    <div className="max-w-[1920px] m-auto">
      <div className="max-w-[1216px] m-auto">
        <Slider data={articles} />
      </div>

      <div className="max-w-[1216px] m-auto mb-28">
        <h1 className="max-w-screen-[1200px] text-[24px] font-bold mb-8 mt-28">
          Trending
        </h1>
        <Trending data={articles} />
      </div>
      <div className="max-w-[1216px] m-auto mt-[100px]">
        <h1 className="max-w-screen-[1200px] text-[24px] font-bold ">
          All Blog Post
        </h1>

        <Blog blogs={articles} tagList={tagList} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch(`https://dev.to/api/articles`);
    const tags = await fetch(`https://dev.to/api/tags`);
    const articles = await response.json();
    const tagList = await tags.json();
    console.log(tagList);
    return {
      props: {
        articles,
        tagList,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
