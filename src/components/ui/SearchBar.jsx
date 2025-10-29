import { Search } from "lucide-react"

export default function SearchBar() {
  return (
    <div className="flex items-center justify-center w-200 h-40">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-5 h-5 w-5 text-gray-400 dark:text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-5 text-gray-800 bg-white rounded-2xl shadow-md outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-50 transition-all duration-200"
        />
      </div>
    </div>
  )
}
