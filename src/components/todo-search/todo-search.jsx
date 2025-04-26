import * as React from 'react';
import './todo-search.scss';

export const TodoSearch = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="todo-search">
      <input
        type="text"
        className="todo-search-input"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search tasks..."
      />
    </div>
  );
};