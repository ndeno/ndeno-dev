import CardList from "./components/Cardlist";

export default function () {
  return (
    <div className="container">
      <div id="hero" className="h-64 m-16 flex">
        <div className="flex-1 bg-gradient-to-r from-[#FF7466] to-[#FFAA66] rounded-lg">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl text-white text-center">
              Generic Category Section
            </h1>
            <span className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>
        </div>
      </div>
      <CardList />
    </div>
  );
}
