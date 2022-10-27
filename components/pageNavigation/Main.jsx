import { useEffect, useState } from "react";
// Child.js
export default function PageNavigation({ items, handleCurrentPageItems }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const pages = [];
  console.log(items);

  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pages.push(i);
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPageItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handleCurrentPage = (event) => {
    setCurrentPage(Number(event.target.innerHTML));
    console.log("child", currentPageItems);
  };

  useEffect(() => {
    handleCurrentPageItems(currentPageItems);
  }, [currentPage, items]);

  return (
    <div className="py-5">
      <ul className="flex">
        {pages.map((page, index) => {
          return (
            <li className="p-2" key={index} onClick={handleCurrentPage}>
              {page}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
