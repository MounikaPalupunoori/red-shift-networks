import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useState } from "react";

const SearchInput = ({ id, onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearchText("");
    onSearch(""); 
  };

  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      <Input
        id={id}
        type="text"
        placeholder="Search"
        value={searchText}
        onInput={handleChange}
        className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {searchText && (
        <button
          onClick={clearSearch}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
