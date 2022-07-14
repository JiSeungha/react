import Body1 from "./Body1";
import background from "../images/background.jpg";
import Carousel from "./Carousel";
import CategoryDropdown from "./buttons/CategoryDropdown";

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
      </div>

    </div>
  );
};

export default Body;
