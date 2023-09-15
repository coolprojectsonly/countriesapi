"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "./action";

const Table = () => {
  const data = useSelector((data) => data.post.data);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [columns, setColumn] = useState([
    { Header: "No", accessor: "index" },
    { Header: "Country", accessor: "value" },
    { Header: "Continent Code", accessor: "continent_code" },
    { Header: "Currency", accessor: "currency" },
    { Header: "Currency Code", accessor: "currency_code" },
    { Header: "Currency Num Code", accessor: "country" },
    { Header: "ISO A3", accessor: "continent_code" },
    { Header: "Key", accessor: "currency" },
  ]);

  const numRows = data?.length;
  const numCols = 7;
  const rowsPerPage = 10;

  const dispatch = useDispatch();

  const handleClick = () => {
    const newColumn = [...columns];

    newColumn[0], (newColumn[1] = newColumn[1]), newColumn[0];

    setColumn(newColumn);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);

    const filtered = data?.filter((item) =>
      item?.value.toLowerCase().includes(search.toLowerCase())
    );

    setFiltered(filtered);
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(numRows / rowsPerPage);

  console.log(filtered);
  const allTableRows = filtered?.map((item, index) => (
    <tr>
      <motion.td
        initial={{ opacity: 0, x: -56, scale: 0 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 56, scale: 0 }}
      >
        {index + 1}{" "}
      </motion.td>
      <motion.td
        initial={{ opacity: 1, y: -45, scale: 1 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 45, scale: 0 }}
      >
        {" "}
        {item.value}{" "}
      </motion.td>
      <motion.td
        initial={{ opacity: 1, x: -2, scale: 1 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 1, x: 5, scale: 1 }}
      >
        {item.continent_code}{" "}
      </motion.td>
      <motion.td
        initial={{ opacity: 1, y: -66, scale: 1 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 6, scale: 0 }}
      >
        {item.currency}{" "}
      </motion.td>
      <motion.td
        initial={{ opacity: 0, x: -59, scale: 0 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 1, x: 9, scale: 1 }}
      >
        {item.currency_code}{" "}
      </motion.td>
      <motion.td
        initial={{ opacity: 1, y: -24, scale: 1 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 14, scale: 0 }}
      >
        {item.currency_num_code}{" "}
      </motion.td>
      <motion.td
        initial={{ opacity: 1, x: -68, scale: 1 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 12, scale: 0 }}
      >
        {item.iso_a3}{" "}
      </motion.td>
      <motion.td
        initial={{ opacity: 0, y: -5, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0 }}
      >
        {item.key}{" "}
      </motion.td>
    </tr>
  ));

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Handle pagination button clicks
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="table-container">
      <h1>Countries API Data</h1>
      <div className="inputContainer">
        <input
          onChange={handleChange}
          placeholder="Search by Country"
          className="search"
        ></input>
      </div>

      <table className="custom-table">
        <thead>
          {columns.map((column, index) => (
            <th key={index}>{column.Header}</th>
          ))}
        </thead>
        <tbody>
          <AnimatePresence>
            {allTableRows.map((row, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                style={{
                  display:
                    index >= startIndex && index < endIndex
                      ? "table-row"
                      : "none",
                }}
              >
                {row.props.children}
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>

        <button
          onClick={() => handlePageChange(2)}
          className={`pagination-button `}
        >
          2
        </button>

        <button
          onClick={() => handlePageChange(3)}
          className={`pagination-button `}
        >
          3
        </button>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
