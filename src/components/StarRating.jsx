export default function StarRating({ rating, size = 20 }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={star <= Math.round(rating) ? "#39853E" : "#e5e7eb"}
          width={size}
          height={size}
        >
          <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24
            l-7.19-.61L12 2 9.19 8.63
            2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </div>
  );
}
