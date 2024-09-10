export default function Contact() {
  return (
    <div className=" mt-[100px] container max-w-[895px] m-auto">
      <div className="flex items-center flex-col ">
        <div className="w-[624px]">
          <h1 className="w-[196px] font-semibold text-[36px] h-10 mb-5">
            Contact Us
          </h1>
          <p className="w-[624px] text-[#696A75] text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="flex gap-6 mt-[30px] ">
          <div className="w-[294px] h-[133px] bg-[#f4f4f6] rounded-xl text-center p-4">
            <h1 className="w-[96px] h-[40px]">Address</h1>
            <p className="w-[260px] h-[52px]">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="w-[294px] h-[133px] bg-[#f4f4f6] rounded-xl text-center p-4">
            <h1 className="w-[96px] h-[40px]">Contact</h1>
            <p className="w-[260px] h-[52px]">313-332-8662 info@email.com</p>
          </div>
        </div>
      </div>
      <div className="max-w-[643px] h-[440px] bg-[#F6F6F7] rounded-3xl mt-[40px] m-auto">
        <div className="pt-7 pl-[35px] pr-32 w-[478px] h-[385px]">
          <div>
            <h1 className="w-[149px] h-[26px] font-semibold text-[16px]">
              Leave a Message
            </h1>
          </div>
          <div className="flex flex-col mt-6">
            <div className="flex gap-4">
              <div>
                <input
                  className="bg-[#FFFFFF]  w-[225px] h-10 rounded-md py-2 px-2  ;
]"
                  type="text"
                  placeholder="Your Name "
                />
              </div>
              <div>
                <input
                  className="bg-[#FFFFFF] w-[225px] h-10 rounded-md py-2 px-2  ;
]"
                  type="text"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="mt-5">
              <input
                className="bg-[#FFFFFF] w-[478px] h-10 rounded-md py-2 px-2  ;
]"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="mt-5 ">
              <input
                className="bg-[#FFFFFF] w-[478px] h-[134px] rounded-md py-2 px-2 mt-2 ;"
                type="text"
                placeholder="Write a message"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
