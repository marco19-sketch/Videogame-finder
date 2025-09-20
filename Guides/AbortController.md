What is AbortController?

AbortController is a built-in Web API that allows you to cancel asynchronous operations, most commonly fetch requests.

Think of it as a “kill switch” for a request or operation that might take too long or is no longer needed.

Basic Usage
const controller = new AbortController();
const signal = controller.signal;

fetch("https://api.example.com/data", { signal })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => {
    if (err.name === "AbortError") {
      console.log("Fetch aborted!");
    } else {
      console.error(err);
    }
  });

// Later, if we want to cancel the fetch:
controller.abort();

// Later, if we want to cancel the fetch:
controller.abort();

Key Points

AbortController instance

new AbortController() creates a controller.

signal property

controller.signal is passed to the request (fetch, axios with adapter, etc.) to listen for abort events.

Canceling a request

Calling controller.abort() triggers the abort signal.

The fetch throws an AbortError which you can catch.

Why use it?

Prevent memory leaks: When components unmount before a fetch finishes.

Cancel unnecessary requests: If user navigates away or types in a search box rapidly.

Timeouts: You can set a timer and abort if it takes too long.

Example in React
import { useEffect, useState } from "react";

export default function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api.example.com/data", { signal: controller.signal })
      .then(res => res.json())
      .then(setData)
      .catch(err => {
        if (err.name === "AbortError") {
          console.log("Fetch was aborted");
        } else {
          console.error(err);
        }
      });

    return () => {
      controller.abort(); // cancel fetch on unmount
    };
  }, []);

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
}


✅ Here, if the component unmounts before the fetch finishes, the request is aborted, preventing memory leaks or errors.