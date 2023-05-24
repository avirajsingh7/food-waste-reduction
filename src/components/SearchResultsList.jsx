import SearchResult from "./SearchResult";

function SearchResultList() {
    return (
      <div className="w-full bg-white flex flex-col rounded-xl mt-4 max-h-80 overflow-y-scroll shadow-l">
        <SearchResult />
      </div>
    );
}

export default SearchResultList;