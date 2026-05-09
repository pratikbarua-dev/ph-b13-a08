import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  return (
    <div className="bg-[#15133C] py-3 text-white font-medium container mx-auto">
      <Marquee speed={50} pauseOnHover gradient={false}>
        <span className="mx-8">📚 New Arrivals: Atomic Habits</span>

        <span className="mx-8">🎉 Special Discount on Memberships</span>

        <span className="mx-8">🔥 Get 30% OFF on Premium Plans</span>

        <span className="mx-8">✨ Explore Thousands of Books</span>

        <span className="mx-8">🚀 Free Access for New Members</span>
      </Marquee>
    </div>
  );
}
