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
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setErrorMsg("");
        const { data } = await axios.get("https://dummyjson.com/todos");
        setodos(data.todos);
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
        <ul className="flex flex-wrap">
          {loading ? (
            <h2>Data Fetching......</h2>
          ) : errorMsg ? (
            <h2>{errorMsg}</h2>
          ) : pageItems ? (
            pageItems.map((todo) => (
              <li key={todo.id}>
                <h3 className="font-bold">{todo.todo}</h3>
              </li>
            ))
          ) : (
            <h2>Wait....</h2>
          )}
        </ul>

        {/* pages */}
        <PageNavigation items={todos} handleCurrentPageItems={handleCurrentPageItems} />
      </div>
    </div>
  );
}
