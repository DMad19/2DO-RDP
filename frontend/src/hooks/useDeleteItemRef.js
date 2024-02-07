import axios from "axios";
export default async function useDeleteItemRef(id = "all") {
  if (id == "all") {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/tasks/`);
      console.log("Delete successful:", response.data);
      // Handle success response
    } catch (error) {
      console.error("Error deleting data:", error);
      // Handle error
    }
  } else {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/tasks/${id}`);
      console.log("Delete successful:", response.data);
      // Handle success response
    } catch (error) {
      console.error("Error deleting data:", error);
      // Handle error
    }
  }
}
