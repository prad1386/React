import React, { useState, useEffect } from "react";

const USERS_URL = "https://example.com/api/users";

export default function Table() {
  const [loading, setLoading] = useState(false);
  const [totalPages, settotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [results, setResults] = useState([]);
  const page_size = 10;

  const fetchUsers = async (page) => {
    try {
      setLoading(true);
      const response = await fetch(`${USERS_URL}?page=${page}`);
      const data = await response.json();
      // setCount(data.count);
      setResults(data.results);
      settotalPages(Math.ceil(data.count / page_size));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers(0);
  }, []);

  const handleFirst = () => {
    fetchUsers(0);
    setCurrentPage(0);
  };

  const handlePrevious = () => {
    if (currentPage != 0) {
      fetchUsers(currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage != totalPages - 1) {
      fetchUsers(currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  const handleLast = () => {
    fetchUsers(totalPages - 1);
    setCurrentPage(totalPages - 1);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {results &&
            results.map((user) => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <section className="pagination">
        <button
          className="first-page-btn"
          onClick={handleFirst}
          disabled={loading || results.length <= 0 || currentPage === 0}
        >
          first
        </button>
        <button
          className="previous-page-btn"
          onClick={handlePrevious}
          disabled={loading || results.length <= 0 || currentPage === 0}
        >
          previous
        </button>
        <button
          className="next-page-btn"
          onClick={handleNext}
          disabled={
            loading || results.length <= 0 || currentPage === totalPages - 1
          }
        >
          next
        </button>
        <button
          className="last-page-btn"
          onClick={handleLast}
          disabled={
            loading || results.length <= 0 || currentPage === totalPages - 1
          }
        >
          last
        </button>
      </section>
    </div>
  );
}
