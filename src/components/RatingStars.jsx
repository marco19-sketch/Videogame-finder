import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

export default function RatingStars({ rating, className }) {
  const star = rating % Math.floor(rating);

  return (
    <div className={`flex ml-2  text-yellow-300  ${className}`}>
      {Array.from({ length: rating }).map((_, index) => (
        <IoStar key={index} />
      ))}

      {star < 0.25 ? (
        <IoStarOutline />
      ) : star > 0.75 ? (
        <IoStar />
      ) : (
        <IoStarHalf />
      )}
      {Array.from({ length: 4 - Math.floor(rating) }).map((_, index) => (
        <IoStarOutline key={index} />
      ))}
    </div>
  );
}
