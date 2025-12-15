export default function FeatureCard({ icon, title, desc }) {
  return (
    <div className="text-center bg-gray-200 p-6 rounded-2xl shadow">
      <div className="text-5xl mb-4 flex justify-center">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
