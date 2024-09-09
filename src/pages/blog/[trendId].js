import Router, { useRouter } from "next/router";
import useSWR from "swr";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import moment from "moment";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const TrendPage = () => {
  const router = useRouter;
  const trendId = router.query.trendId;
  const url = `https://dev.to/api/articles/${trendId}`;
  const { data: trendDetail = {}, isLoading } = useSWR(url, fetcher);

  if (isLoading) return <div>Loading</div>;
  const bodyMarkdown = trendDetail.body_markdown;

  return (
    <div className="mx-auto w-[655px] flex flex-col gap-10 justify-center mt-[100px]">
      <div className="text-2xl max-w-[800px] h-[80px] font-bold text-[36px]">
        {trendDetail.title}
      </div>
      <div className="flex items-center w-[266px] h-[28px]">
        <img
          width={36}
          height={36}
          src={trendDetail.user.profile_image}
          className="rounded-full mt-5 flex mb-4 "
        />

        <div className="flex items-center  ">
          <div className="text-[#97989F] font-medium text-[16px] ml-2 py-1 ">
            {trendDetail.user.name}
          </div>
          <div className="text-[#97989F] ml-5">
            {moment(trendDetail.published_at).format("ll")}
          </div>
        </div>
      </div>
      <img src={trendDetail.cover_image} />
      <div class="prose">
        <Markdown rehypePlugins={[rehypeHighlight]}>{bodyMarkdown}</Markdown>
      </div>
    </div>
  );
};

export default TrendPage;
