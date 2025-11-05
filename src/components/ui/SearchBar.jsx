import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
    setQuery(""); // Clear after search
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center h-20 mb-2"
    >
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search city..."
          className="w-full pl-10 pr-4 py-2 text-gray-800 bg-white dark:bg-gray-900 dark:text-gray-200 rounded-2xl shadow-md outline-none 
                     focus:ring-2 focus:ring-sky-500 focus:bg-gray-50 dark:focus:bg-gray-800 transition-all duration-200"
        />
        <button
          type="submit"
          className="absolute right-2 top-2 px-3 py-1.5 text-sm bg-sky-500 hover:bg-sky-600 text-white rounded-xl transition-all duration-200"
        >
          Go
        </button>
      </div>
    </form>
  );
}
