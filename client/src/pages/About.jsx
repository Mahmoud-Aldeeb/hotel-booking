import { assets } from "../assets/assets";
import Title from "../components/Title";

const stats = [
  { label: "Hotels Worldwide", value: "1,200+" },
  { label: "Happy Guests", value: "850K+" },
  { label: "Cities Covered", value: "60+" },
  { label: "Years of Experience", value: "12+" },
];

const values = [
  {
    title: "Comfort First",
    description:
      "Every property on our platform is carefully selected to ensure the highest standards of comfort and cleanliness.",
  },
  {
    title: "Trusted Partners",
    description:
      "We work only with verified hotel owners and properties, so you can book with complete confidence.",
  },
  {
    title: "Best Price Guarantee",
    description:
      "We negotiate directly with our partner hotels to bring you the most competitive rates available.",
  },
  {
    title: "24/7 Support",
    description:
      "Our support team is available around the clock to help with bookings, changes, or any questions you have.",
  },
];

const About = () => {
  return (
    <div className="pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 pb-20">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <Title
          title="About Us"
          subTitle="We connect travelers with exceptional hotels around the world, making every journey comfortable, memorable, and stress-free."
          align="center"
        />
      </div>

      {/* Story Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mt-16">
        <img
          src={assets.regImage}
          alt="about-us"
          className="w-full md:w-1/2 rounded-xl shadow-lg object-cover max-h-100"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-playfair text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Founded with a simple idea — booking a hotel shouldn't be
            complicated — our platform brings together thousands of handpicked
            properties, from cozy boutique rooms to luxurious five-star resorts.
            Whether you're traveling for business, relaxation, or adventure, we
            make it easy to find the perfect place to stay.
          </p>
          <p className="text-gray-500 leading-relaxed mt-4">
            Our mission is to give every traveler access to transparent pricing,
            verified reviews, and a seamless booking experience from start to
            finish.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#F5F5FF]/70 rounded-xl py-8 px-4 text-center"
          >
            <p className="text-3xl md:text-4xl font-playfair text-gray-800">
              {stat.value}
            </p>
            <p className="text-gray-500 text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Values Section */}
      <div className="mt-20">
        <Title
          title="Why Choose Us"
          subTitle="What makes our platform the right choice for your next trip."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-playfair text-gray-800 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center text-center mt-20 bg-[#F5F5FF]/70 rounded-xl py-14 px-6">
        <h2 className="text-3xl font-playfair text-gray-800">
          Ready to find your perfect stay?
        </h2>
        <p className="text-gray-500 mt-2 max-w-md">
          Explore thousands of hotels and book your next destination in just a
          few clicks.
        </p>
      </div>
    </div>
  );
};

export default About;
