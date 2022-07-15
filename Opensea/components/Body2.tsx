import CategoryDropdown from "./buttons/CategoryDropdown";
import CollectionData from "./CollectionData";

const Body2 = ({}) => {
  const onClick = (e) => {
    console.log("Clicked!" + JSON.stringify(link)); // Implement linking to each page later
  };

  return (
    <div className="mt-8 lg:flex justify-center">
      <div className="flex flex-col mx-auto relative w-full max-w-[440px] max-h-screen h-fit">
        {CollectionData.map((collection, index) => {
          return (
            <div
              className={
                index < 5 ? "hover:border-2 hover:shadow-2xl border-b-2 relative h-[88px] w-pull p-[16px]" : "hidden"
              }
              key={index}
            >
              <a href={collection.link} className=" flex rounded-lg w-full h-full relative">
                <b className="flex mr-[8px] justify-center items-center ">{index + 1}</b>
                <div className="relative flex w-full">
                  <div className="mx-[8px] border-1 flex relative">
                    <div
                      className="overflow-hidden rounded-full items-center justify-center flex max-h-full max-w-full relative h-[50px] w-[50px] bg-cover"
                      style={{
                        backgroundImage: `url(${collection.collectorImg})`,
                      }}
                    />
                    {collection.isNew ? (
                      <div className="w-[14px] h-[14px] absolute top-0 right-0 bg-lime-400 rounded-full"></div>
                    ) : null}
                    {collection.isVerified ? (
                      <div className="w-[14px] h-[14px] absolute bottom-0 right-0 bg-cyan-400 rounded-full" />
                    ) : null}
                  </div>
                  <div className="flex-col mr-[16px] w-full min-w-1/2 justify-center items-start overflow-hidden">
                    <b className="block w-full overflow-hidden text-ellipsis">{collection.collectorName}</b>
                    <span className="block w-full overflow-hidden text-ellipsis">
                      Floor Price : {collection.floorPrice}
                    </span>
                  </div>
                  <div className="flex-col justify-center w-1/2 items-end overflow-hidden">
                    {collection.percentage < 0 ? <span className="block w-full text-rose-700 text-end overflow-hidden text-ellipsis">{collection.percentage}%</span> : <span className="block w-full text-end text-green-500 overflow-hidden text-ellipsis">{collection.percentage}%</span>}
                    <span className="block w-full text-end overflow-hidden text-ellipsis">
                      {collection.totalVolume}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col mx-auto relative w-full max-w-[440px] max-h-screen h-fit">
        {CollectionData.map((collection, index) => {
          return (
            <div
              className={
                index > 4 && index < 10 ? "hover:border-2 hover:shadow-2xl border-b-2 relative h-[88px] w-pull p-[16px]" : "hidden"
              }
              key={index}
            >
              <a href={collection.link} className=" flex rounded-lg w-full h-full relative">
                <b className="flex mr-[8px] justify-center items-center ">{index + 1}</b>
                <div className="relative flex w-full">
                  <div className="mx-[8px] border-1 flex relative">
                    <div
                      className="overflow-hidden rounded-full items-center justify-center flex max-h-full max-w-full relative h-[50px] w-[50px] bg-cover"
                      style={{
                        backgroundImage: `url(${collection.collectorImg})`,
                      }}
                    />
                    {collection.isNew ? (
                      <div className="w-[14px] h-[14px] absolute top-0 right-0 bg-lime-400 rounded-full"></div>
                    ) : null}
                    {collection.isVerified ? (
                      <div className="w-[14px] h-[14px] absolute bottom-0 right-0 bg-cyan-400 rounded-full" />
                    ) : null}
                  </div>
                  <div className="flex-col mr-[16px] w-full min-w-1/2 justify-center items-start overflow-hidden">
                    <b className="block w-full overflow-hidden text-ellipsis">{collection.collectorName}</b>
                    <span className="block w-full overflow-hidden text-ellipsis">
                      Floor Price : {collection.floorPrice}
                    </span>
                  </div>
                  <div className="flex-col justify-center w-1/2 items-end overflow-hidden">
                    {collection.percentage < 0 ? <span className="block w-full text-rose-700 text-end overflow-hidden text-ellipsis">{collection.percentage}%</span> : <span className="block w-full text-end text-green-500 overflow-hidden text-ellipsis">{collection.percentage}%</span>}
                    <span className="block w-full text-end overflow-hidden text-ellipsis">
                      {collection.totalVolume}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div><div className="flex flex-col mx-auto relative w-full max-w-[440px] max-h-screen h-fit">
        {CollectionData.map((collection, index) => {
          return (
            <div
              className={
                index > 9 ? "hover:border-2 hover:shadow-2xl border-b-2 relative h-[88px] w-pull p-[16px]" : "hidden"
              }
              key={index}
            >
              <a href={collection.link} className=" flex rounded-lg w-full h-full relative">
                <b className="flex mr-[8px] justify-center items-center ">{index + 1}</b>
                <div className="relative flex w-full">
                  <div className="mx-[8px] border-1 flex relative">
                    <div
                      className="overflow-hidden rounded-full items-center justify-center flex max-h-full max-w-full relative h-[50px] w-[50px] bg-cover"
                      style={{
                        backgroundImage: `url(${collection.collectorImg})`,
                      }}
                    />
                    {collection.isNew ? (
                      <div className="w-[14px] h-[14px] absolute top-0 right-0 bg-lime-400 rounded-full"></div>
                    ) : null}
                    {collection.isVerified ? (
                      <div className="w-[14px] h-[14px] absolute bottom-0 right-0 bg-cyan-400 rounded-full" />
                    ) : null}
                  </div>
                  <div className="flex-col mr-[16px] w-full min-w-1/2 justify-center items-start overflow-hidden">
                    <b className="block w-full overflow-hidden text-ellipsis">{collection.collectorName}</b>
                    <span className="block w-full overflow-hidden text-ellipsis">
                      Floor Price : {collection.floorPrice}
                    </span>
                  </div>
                  <div className="flex-col justify-center w-1/2 items-end overflow-hidden">
                    {collection.percentage < 0 ? <span className="block w-full text-rose-700 text-end overflow-hidden text-ellipsis">{collection.percentage}%</span> : <span className="block w-full text-end text-green-500 overflow-hidden text-ellipsis">{collection.percentage}%</span>}
                    <span className="block w-full text-end overflow-hidden text-ellipsis">
                      {collection.totalVolume}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body2;
