import "@/styles/globals.css";
import Header from "../Components/Header";
import FooterCopyright from "../Components/Footer-Copyright";
import FooterContent from "../Components/Footer-Content";
import { ThemeContextProvider } from "../Components/ThemeContext";
// import Aldaa from "./[404error]";

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <div>
        <div className="m-auto ">
          <Header></Header>
        </div>
        <div>{/* <Aldaa></Aldaa> */}</div>
        <Component {...pageProps} />;
        <div className="bg-[#E8E8EA] h-[495px]  ">
          <div className=" m-auto relative top-16">
            <div>
              <FooterContent />
            </div>
            <div className=" m-auto">
              <FooterCopyright />
            </div>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}
