import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

export default function RatingStars({ rating, className }) {
  return (
    <div className={`flex ml-2  text-yellow-300  ${className}`}>
      {Array.from({ length: rating }).map((_, index) => (
        <IoStar key={index} className="" />
      ))}
      {rating % Math.floor(rating) > 0 ? <IoStarHalf /> : ""}
      
    </div>
  );
}
