import { useMemo } from "react";
import { facilityIcons } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import Title from "../components/Title";
import heroImage from "/src/assets/heroImage.png";

const experienceHighlights = [
  {
    title: "Fine Dining",
    description:
      "Savor world-class cuisine crafted by award-winning chefs, from intimate breakfasts to lavish dinners.",
  },
  {
    title: "Spa & Wellness",
    description:
      "Unwind with rejuvenating spa treatments, sauna sessions, and wellness programs designed for total relaxation.",
  },
  {
    title: "Scenic Views",
    description:
      "Wake up to breathtaking mountain, city, or ocean views from the comfort of your private room.",
  },
  {
    title: "Local Adventures",
    description:
      "Discover the destination with curated tours, cultural experiences, and outdoor activities nearby.",
  },
];

const Experience = () => {
  const { rooms, navigate } = useAppContext();

  const amenities = useMemo(() => {
    const set = new Set();
    rooms.forEach((room) => room.amenities?.forEach((a) => set.add(a)));
    return [...set];
  }, [rooms]);

  return (
    <div className="pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 pb-20">
      {/* Hero */}
      <div
        className="rounded-2xl overflow-hidden h-80 md:h-96 flex flex-col items-start justify-center px-8 md:px-16 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <p className="bg-[#49B9FF]/50 px-3.5 py-1 rounded-full">
          More Than Just a Stay
        </p>
        <h1 className="font-playfair text-3xl md:text-5xl font-bold mt-4 max-w-xl">
          Experiences That Stay With You
        </h1>
        <p className="max-w-130 mt-2 text-sm md:text-base">
          Every property on our platform is chosen not just for its rooms, but
          for the experiences it brings to your trip.
        </p>
      </div>

      {/* Highlights */}
      <div className="mt-20">
        <Title
          title="What Awaits You"
          subTitle="From relaxing spa days to unforgettable local adventures, every stay comes with something extra."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {experienceHighlights.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-playfair text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {amenities.length > 0 && (
        <div className="mt-20">
          <Title
            title="Amenities You'll Find"
            subTitle="A look at the facilities available across our partner hotels."
            align="center"
          />
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[#F5F5FF]/70"
              >
                {facilityIcons[amenity] && (
                  <img
                    src={facilityIcons[amenity]}
                    alt={amenity}
                    className="w-5 h-5"
                  />
                )}
                <p className="text-sm text-gray-700">{amenity}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="flex flex-col items-center text-center mt-20 bg-[#F5F5FF]/70 rounded-xl py-14 px-6">
        <h2 className="text-3xl font-playfair text-gray-800">
          Start Your Next Experience
        </h2>
        <p className="text-gray-500 mt-2 max-w-md">
          Browse our hotels and find the stay that matches the experience you're
          looking for.
        </p>
        <button
          onClick={() => {
            navigate("/rooms");
            scrollTo(0, 0);
          }}
          className="mt-6 bg-primary hover:bg-primary-dull text-white px-8 py-3 rounded-md transition-all cursor-pointer"
        >
          Explore Hotels
        </button>
      </div>
    </div>
  );
};

export default Experience;
