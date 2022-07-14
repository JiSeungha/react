import Image from "next/image";
const Body1 = ({ bg, link, title, author }) => {
  const onClick = (e) => {
    console.log("Clicked!" + JSON.stringify(link)); // Implement linking to each page later
  };

  const TextMessage = ({ classname }) => {
    return (
      <div className={classname}>
        <div className="text-2xl md:text-3xl lg:text-4xl mr-4">
          <b>Discover, collect, and sell extraordinary NFTs! </b>
        </div>
        <div>OpenSea is the world's first and largest NFT marketplace</div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-t from-white backdrop-blur-md w-full min-h-screen block py-10 relative">
      <div className="min-h-screen block md:flex relative">
        <div className="flex flex-col pt-10 flex-1 w-full md:w-1/2 h-screen justify-center items-center content-center">
          <TextMessage
            classname={
              "flex-shrink-1 text-left break-normal text-black text-base md:text-lg lg:text-2xl leading-loose tracking-wider block px-10 z-20 relative select-text mb-8"
            }
          />
          <div className="flex w-full justify-around relative z-20 mb-8">
            <button
              className="border-2 rounded-lg bg-blue-500 text-white text-sm py-1 px-2 lg:text-base font-bold lg:py-2 lg:px-4 rounded"
              onClick={onClick}
            >
              Explore
            </button>
            <button
              className="border-2 rounded-lg bg-white text-blue-700 text-sm py-1 px-2 lg:text-base font-bold lg:py-2 lg:px-4 rounded"
              onClick={onClick}
            >
              Create
            </button>
          </div>
          <div className="block flex justify-start px-10">
            <button className="text-blue-700 font-bold py-2 px-4 rounded text-xl z-20 relative" onClick={onClick}>
              ▶ Learn more about OpenSea
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center w-full md:w-1/2 min-h-screen">
          <div className="flex flex-col h-4/6 w-4/6 min-h-[400px] relative z-20 justify-center items-center drop-shadow-2xl hover:shadow-2xl">
            <div className="w-full h-full" onClick={onClick}>
              <Image
                className="object-fill h-full min-w-full flex rounded-lg"
                layout="fill"
                src={bg}
                alt="nft-sample-image"
              />
            </div>
            <div className="bg-white w-full min-h-1/6 h-1/6 pl-4 flex absolute bottom-0  rounded-b-lg items-center">
              <div className="w-1/6">
                <Image className="fill-current rounded-full" src={bg} alt="icon" />
              </div>
              <div className="flex flex-col justify-center h-full w-full text-lg pl-4 text-left">
                <b>{title}</b>  
                <div>by {author}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body1;
