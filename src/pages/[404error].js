// import useSWR from "swr";
// import { useRouter } from "next/router";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// const Aldaa = () => {
//   const router = useRouter();
//   const AldaaId = router.query.AldaaId;
//   const url = `https://dev.to/api/articles/${AldaaId}`;

//   const { error } = useSWR(url, fetcher);

//   if (error)
//     return (
//       <div>
//         <div>
//           <p>404</p>
//           <h1>Page Not Found</h1>
//           <p>
//             We're sorry & This page is unknown or does not exist the page you
//             are looking for.
//           </p>
//         </div>
//         <div>
//           <div>
//             <button className="w-[130px] h-[40px] bg-[#4B6BFB] text-[#FFFFFF] rounded-md text-base mb-11 ml-[35px] ">
//               Back to Home
//             </button>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default Aldaa;
