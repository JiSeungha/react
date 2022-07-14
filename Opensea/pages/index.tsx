import type { GetServerSideProps, NextPage } from "next";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <div className="fixed top-0 z-50 bg-white w-full">
        <Header />
      </div>
      <div className="h-[102px]">
        <div className="whitespace-normal"></div>
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
