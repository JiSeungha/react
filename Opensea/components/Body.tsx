import Body1 from "./Body1";
import Body2 from "./Body2";
import Carousel from "./Carousel";
import background from "../images/background.jpg";

const Body = ({}) => {
  return (
    <div className="relative">
      <div className="block bg-[url('../images/background.jpg')] bg-no-repeat bg-cover">
        <Body1 bg={background} link={"https://google.com"} title={"Dooplicator"} author={"Doodles"} />
      </div>

      <b className="flex text-2xl justify-center">Notable Drops</b>

      <div className="block w-full h-screen max-h-[1000px]">
        <Carousel />
      </div>

      <div>
        <Body2/>
      </div>

    </div>
  );
};

export default Body;
