import * as React from 'react';
import './todo-filter.scss';

export const TodoFilter = ({ filter, setFilter }) => (
  <div className="todo-filter">
    <button
      type="button"
      className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
      onClick={() => setFilter('all')}
    >
      All
    </button>
    <button
      type="button"
      className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
      onClick={() => setFilter('active')}
    >
      Incomplete
    </button>
    <button
      type="button"
      className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
      onClick={() => setFilter('completed')}
    >
      Completed
    </button>
  </div>
);