import useSWR from "swr";
import Link from "next/link";
import moment from "moment";
import { useState } from "react";

const url = "https://dev.to/api/articles/";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Blog = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>isLoading</p>;
  }
  if (error) {
    return <p>Sorry we are connot fulfill this</p>;
  }

  return (
    // <div className="grid grid-cols-3 mt-36 ">
    <div className="flex flex-wrap">
      {data.map((blog) => {
        return (
          <Link href={`blog/${blog.id}`} key={blog.id}>
            <BlogCard
              key={blog.id}
              tags={blog.tag_list}
              image={blog.cover_image}
              title={blog.title}
              date={blog.published_at}
              user={blog.user.profile_image}
              name={blog.user.name}
            />
          </Link>
        );
      })}
    </div>
    // </div>
  );
};

export default Blog;

const BlogCard = (props) => {
  const { image, title, date, tags, user, name } = props;
  const [visibleItems, setVisibleItems] = useState(3);
  const loadMore = () => {
    setVisibleItems((prevItems) => prevItems + 3);
  };

  return (
    <div className="px-4 py-2 border border-solid rounded-2xl  h-[592px] w-[392px] p-4 m-auto mt-5 ">
      <img src={image} className="h-60 rounded-lg mt-4 " alt="blog" />
      <div className="flex flex-wrap gap-2  ">
        {tags.slice(0, visibleItems).map((tag, index) => (
          <p
            key={index}
            className="mb-4 bg-[#4B6BFB0D] text-[#4B6BFB] rounded-lg mt-7  w-fit py-1 px-[10px]  "
          >
            {tag}
          </p>
        ))}
      </div>

      <h2 className="max-w=[344px] w-fit text-[24px] font-medium">{title}</h2>

      <div className="flex items-center mt-5 ">
        <img
          width={36}
          height={36}
          src={user}
          className="rounded-full  flex "
        />
        <div className="flex  ">
          <p className="text-[#97989F] font-medium text-[16px] ml-3 mr-5 ">
            {name}
          </p>
          <div className="text-[#97989F] ml-5">{moment(date).format("ll")}</div>
        </div>
      </div>
    </div>
  );
};
