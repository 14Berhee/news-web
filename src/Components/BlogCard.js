import Link from "next/link";
import moment from "moment";
import { useState } from "react";

const Blog = (props) => {
  const { blogs, tagList = [] } = props;

  const [visibleItems, setVisibleItems] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);

  const loadMore = () => {
    setVisibleItems((prevItems) => prevItems + 6);
    setIsExpanded(true);
  };

  const hasMoreItems = blogs.length > visibleItems;

  console.log(tagList[0].name);

  return (
    <div className="mt-8 ">
      <div className="flex gap-5">
        <p>All</p>
        <div className="gap-5 flex">
          {tagList.map((tag, index) => {
            return (
              <p className="text-black " key={index}>
                {tag.name}
              </p>
            );
          })}
        </div>
      </div>
      <div className="mb-8"></div>
      <div className="flex flex-wrap gap-[20px]  ">
        {blogs.slice(0, visibleItems).map((blog) => {
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
        {hasMoreItems && (
          <div className="m-auto">
            <button
              className="w-[123px] h-[48px] bg-slate-200 rounded-lg text-[#696A75] mt-11 hover:text-slate-200 hover:bg-[#696A75] "
              onClick={isExpanded ? loadMore : loadMore}
            >
              {" "}
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;

const BlogCard = (props) => {
  const { image, title, date, tags, user, name } = props;

  return (
    <div className="px-4 py-2 border border-solid rounded-2xl  h-[592px] w-[392px] p-4 m-auto  ">
      <img src={image} className="h-60 rounded-lg mt-4 " alt="blog" />
      <div className="flex flex-wrap gap-2  ">
        {tags.slice(0, 1).map((tag, index) => (
          <p
            key={index}
            className="mb-4 bg-[#4B6BFB0D] text-[#4B6BFB] rounded-lg mt-7  w-fit py-1 px-[10px] hover:text-white hover:bg-[#4B6BFB]"
          >
            {tag}
          </p>
        ))}
      </div>

      <h2 className="max-w-[344px] w-fit text-[24px] font-medium">{title}</h2>

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
