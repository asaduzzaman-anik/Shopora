import { FaShippingFast } from "react-icons/fa";

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-200 text-black flex items-center gap-5 px-5 py-2 rounded-lg">
      <div>{icon}</div>
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
