import { useState, useEffect } from "react";
//helper function that uses the fetch function of the parent component
export default function RatingMsg({ rating, ratings }) {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setMsg(ratings?.find(m => m.id === Math.round(rating)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <p className="ml-2">{msg?.title}</p>;
}
