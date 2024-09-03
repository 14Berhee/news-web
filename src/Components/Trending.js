import useSWR from "swr";
const url = "https://dev.to/api/articles?state=rising";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Trending = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>isLoading</p>;
  }
  if (error) {
    return <p>Sorry we are connot fulfill this</p>;
  }

  return (
    <div className="flex max-w-[1231px] m-auto ">
      {data.slice(0, 4).map((blog2) => {
        return (
          <BlogTrending
            key={blog2.id}
            image={blog2.cover_image}
            title={blog2.title}
            tags={blog2.tag_list}
          />
        );
      })}
    </div>
  );
};

export default Trending;

const BlogTrending = (props) => {
  const { image, title, tags } = props;

  return (
    <div className="m-auto ">
      <div>
        <img
          className="w-[289px] h-[320px] rounded-xl absolute "
          src={image}
        ></img>
      </div>
      <div className="ml-7 mb-7">
        <div>
          {tags.slice(0, 1).map((tag, index) => {
            return (
              <p
                key={index}
                className="relative mb-4 bg-[#4B6BFB] text-cyan-50 rounded-lg mt-[172px]  w-fit py-1 px-[10px]  "
              >
                {tag}
              </p>
            );
          })}
        </div>
        <div>
          <h2 className="relative text-fuchsia-50 w-[230px] h-[76px] mt-4">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};
