import { useRouter } from "next/router";
import useSWR from "swr";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import moment from "moment";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Huudas = () => {
  const router = useRouter();
  const blogId = router.query.blogId;
  const url = `https://dev.to/api/articles/${blogId}`;

  const { data: blogDetail = {}, isLoading } = useSWR(url, fetcher);

  if (isLoading) return <div>Loading</div>;

  const bodyMarkdown = blogDetail.body_markdown;

  return (
    <div className="mx-auto w-[655px] flex flex-col gap-10 justify-center mt-[100px]">
      <div className="text-2xl max-w-[800px] h-[80px] font-bold text-[36px]">
        {blogDetail.title}
      </div>
      <div className="flex items-center w-[266px] h-[28px]">
        <img>
          width={36}
          height={36}
          src={blogDetail.user.profile_image}
          className="rounded-full mt-5 flex mb-4 "
        </img>

        <div className="flex items-center  ">
          <div className="text-[#97989F] font-medium text-[16px] ml-2 py-1 ">
            {blogDetail.user.name}
          </div>
          <div className="text-[#97989F] ml-5">
            {moment(blogDetail.published_at).format("ll")}
          </div>
        </div>
      </div>
      <img src={blogDetail.cover_image} />
      <div class="prose">
        <Markdown rehypePlugins={[rehypeHighlight]}>{bodyMarkdown}</Markdown>
      </div>
    </div>
  );
};

export default Huudas;
