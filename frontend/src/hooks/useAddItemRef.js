import axios from "axios";
export default async function useAddItemRef(title, description, priority) {
  let addItemData = {
    title: title,
    description: description,
    priority: priority,
  };
  console.log(addItemData);
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/tasks/",
      addItemData
    );
    return response.data;
  } catch (error) {
    console.error("API error:", error.message);
    throw error;
  }
}
