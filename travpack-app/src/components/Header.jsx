
import holidayImg from "../assets/holidayImg-lg.jpg"
export default function Header () {
  return (
    <header className="">
      <img
        src={holidayImg}
        alt="Holiday image"
        className="w-full h-40 object-cover lg:h-48 object-bottom lg:object-center"
      />
      <div className="px-2">
        <h1 className="heading tracking-normal mt-5 text-4xl font-bold text-center uppercase md:text-5xl xl:text-6xl">
          TravPack App
        </h1>
        <p className="px-2 italic text-md text-center md:text-lg">
          Travel light, but never forget to carry the essentials that light your
          way.
        </p>
      </div>
    </header>
  );
}