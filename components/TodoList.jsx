// Parent
import axios from "axios";
import { useEffect, useState } from "react";
import PageNavigation from "./pageNavigation/Main";

export default function TodoList() {
  const [todos, setodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [pageItems, setPageItems] = useState([]);

  const handleCurrentPageItems = (items) => {
    setPageItems(items);
    console.log("parent", pageItems);
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setErrorMsg("");
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setodos(data);
      } catch (error) {
        setErrorMsg("Something Went Wrong");
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <ul>
          {loading ? (
            <h2>Data Fetching......</h2>
          ) : errorMsg ? (
            <h2>{errorMsg}</h2>
          ) : pageItems ? (
            pageItems.map((todo) => <li key={todo.id}>{todo.title}</li>)
          ) : (
            <h2>Wait....</h2>
          )}
        </ul>

        {/* pages */}
        <PageNavigation
          items={todos}
          handleCurrentPageItems={handleCurrentPageItems}
        />
      </div>
    </div>
  );
}
