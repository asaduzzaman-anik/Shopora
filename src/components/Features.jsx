import { FaLock, FaShippingFast, FaStar, FaTags } from "react-icons/fa";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section
      id="features"
      className="left-0 right-0 inset-x-0 bg-slate-700 py-16"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <FeatureCard
          icon={<FaShippingFast />}
          title="Fast Delivery"
          desc="Quick and reliable shipping"
        />
        <FeatureCard
          icon={<FaLock />}
          title="Secure Payment"
          desc="100% secure transactions"
        />
        <FeatureCard
          icon={<FaTags />}
          title="Best Deals"
          desc="Affordable prices everyday"
        />
        <FeatureCard
          icon={<FaStar />}
          title="Top Quality"
          desc="Handpicked premium items"
        />
      </div>
    </section>
  );
}
