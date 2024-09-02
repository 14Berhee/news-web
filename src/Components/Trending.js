import useSWR from "swr";
import moment from "moment";
const url = " https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Trending = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>isLoading</p>;
  }
  if (error) {
    return <p>Sorry we are connot fulfill this</p>;
  }

  const trendingBlogs = data.slice(0, 4);

  return (
    <div className="grid grid-cols-3 mt-36 ">
      {data.map((blog) => {
        return (
          <BlogCard
            key={blog.id}
            tags={blog.tag_list}
            image={blog.cover_image}
            title={blog.title}
            date={blog.published_at}
            user={blog.user.profile_image}
            name={blog.user.name}
          />
        );
      })}
    </div>
  );
};

export default Trending;

const BlogCard = (props) => {
  const { image, title, date, tags, user, name } = props;
  console.log(tags);
  return (
    <div className="px-4 py-2 border border-solid rounded-2xl  h-[592px] w-[392px] p-4 m-auto mt-5 ">
      <img src={image} className="h-60 rounded-lg mt-4 " />
      <div className="flex flex-wrap gap-2  ">
        {tags.map((tag) => (
          <p className="mb-4 bg-[#4B6BFB0D] text-[#4B6BFB] rounded-lg mt-7  w-fit py-1 px-[10px]  ">
            {tag}
          </p>
        ))}
      </div>

      <h2 className="max-w=[344px] w-fit text-[24px] font-medium">{title}</h2>

      <div className="flex items-center ">
        <img width={36} height={36} src={user} className="rounded-full mt-5" />
        <div className="flex">
          <p className="text-[#97989F] font-medium text-[16px] ml-3 mr-5 ">
            {name}
          </p>
          <div>{moment(date).format("ll")}</div>
        </div>
      </div>
    </div>
  );
};
