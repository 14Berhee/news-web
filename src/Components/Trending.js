import Link from "next/link";
import useSWR from "swr";

const url = "  https://dev.to/api/articles";
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
    <div className="flex max-w-[1231px] m-auto justify-center ">
      {data.slice(0, 4).map((blog2) => {
        return (
          <Link href={`blog/${blog2.id}`}>
            <BlogTrending
              key={blog2.id}
              image={blog2.cover_image}
              title={blog2.title}
              tags={blog2.tag_list}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Trending;

const BlogTrending = (props) => {
  const { image, title, tags } = props;

  return (
    <div
      className="border border-solid w-[293px] h-[320px] rounded-xl overflow-hidden pb-7 mx-2 "
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="p-5 h-full w-full flex items-end bg-[rgba(0,0,0,.3)] ">
        <div className="h-[100px] w-full text-white">
          <div>
            {tags.slice(0, 1).map((tag, index) => {
              return (
                <p
                  key={index}
                  className="mb-4 bg-[#4B6BFB] text-[#FFFFFF] rounded-lg mt-7  w-fit py-1 px-[10px] "
                >
                  {tag}
                </p>
              );
            })}
          </div>
          <div>
            <h2 className="font-medium text-[16px] ">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
