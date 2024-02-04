import axios from "axios";
import { useEffect, useState } from "react";
export default function useGetCardData() {
  const [responseData, setResponseData] = useState(null);
  useEffect(() => {
    // Perform GET request when the component mounts
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get("http://127.0.0.1:8000/tasks/", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  };
  return responseData;
}
