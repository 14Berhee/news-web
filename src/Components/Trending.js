import useSWR from "swr";
const url = " https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Trending = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>isLoading</p>;
  }
  if (error) {
    return <p>Sorry we are connot filfill this</p>;
  }

  return (
    <div className="grid grid-cols-3 mt-36">
      {data.map((blog) => {
        return (
          <BlogCard
            key={blog.id}
            image={blog.cover_image}
            title={blog.title}
            date={blog.published_at}
          />
        );
      })}
    </div>
  );
};

export default Trending;

const BlogCard = (props) => {
  const { image, title, date } = props;
  return (
    <div className="px-4 py-2 border border-solid rounded w-fit">
      <img width={300} src={image} alt={title} />
      <h2>{title}</h2>
      <p>{date}</p>
    </div>
  );
};
