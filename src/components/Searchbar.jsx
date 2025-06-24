import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Pesquisar..."
        className="border p-2 rounded w-full"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded"
        id="Buscar"
      >
        Buscar
      </button>
    </div>
  );
}
