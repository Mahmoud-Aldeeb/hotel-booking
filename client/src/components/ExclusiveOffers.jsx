// import { assets, exclusiveOffers } from "../assets/assets";
// import Title from "./Title";

// const ExclusiveOffers = () => {
//   return (
//     <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">
//       <div className="flex flex-col md:flex-row items-center justify-between w-full">
//         <Title
//           title="Exclusive Offers"
//           subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
//           align="left"
//         />
//         <button className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12">
//           View All Offers
//           <img
//             src={assets.arrowIcon}
//             alt="arrow-icon"
//             className="group-hover:translate-x-1 transition-all"
//           />
//         </button>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
//         {exclusiveOffers.map((item) => (
//           <div
//             key={item._id}
//             className="group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center"
//             style={{ backgroundImage: `url(${item.image})` }}
//           >
//             <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
//               {item.priceOff}% OFF
//             </p>
//             <div>
//               <p className="text-2xl font-medium font-playfair">{item.title}</p>
//               <p>{item.description}</p>
//               <p className="text-xs text-white/70 mt-3">
//                 Expires {item.expiryDate}
//               </p>
//             </div>
//             <button className="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5">
//               View offers{" "}
//               <img
//                 src={assets.arrowIcon}
//                 alt="arrow-icon"
//                 className="invert group-hover:translate-x-1 transition-all"
//               />
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExclusiveOffers;

import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import Title from "./Title";

const discountTags = [20, 25, 30];

const ExclusiveOffers = () => {
  const { rooms, navigate } = useAppContext();

  const offerRooms = [];
  const seenHotels = new Set();

  for (const room of rooms) {
    if (room.hotel && !seenHotels.has(room.hotel._id)) {
      offerRooms.push(room);
      seenHotels.add(room.hotel._id);
    }
    if (offerRooms.length === 3) break;
  }

  if (offerRooms.length === 0) return null;

  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <Title
          title="Exclusive Offers"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
          align="left"
        />
        <button
          onClick={() => navigate("/rooms")}
          className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12"
        >
          View All Offers
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="group-hover:translate-x-1 transition-all"
          />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {offerRooms.map((room, index) => (
          <div
            key={room._id}
            onClick={() => {
              navigate(`/rooms/${room._id}`);
              scrollTo(0, 0);
            }}
            className="group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center min-h-72 cursor-pointer"
            style={{ backgroundImage: `url(${room.images[0]})` }}
          >
            <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
              {discountTags[index % discountTags.length]}% OFF
            </p>
            <div>
              <p className="text-2xl font-medium font-playfair">
                {room.hotel.name}
              </p>
              <p className="max-w-70">
                {room.roomType} in {room.hotel.city}
              </p>
              <p className="text-xs text-white/70 mt-3">Limited Time Offer</p>
            </div>
            <button className="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5">
              View offers{" "}
              <img
                src={assets.arrowIcon}
                alt="arrow-icon"
                className="invert group-hover:translate-x-1 transition-all"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
