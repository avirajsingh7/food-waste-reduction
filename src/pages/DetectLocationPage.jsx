import SearchBar from "../components/SearchBar";
import SearchResultList from "../components/SearchResultsList";

function DetectLocation() {
    return (
        <div className="bg-secondary w-screen h-screen"> 
            <div className="w-2/5 flex min-w-200 flex-col m-auto items-center pt-80">
                <SearchBar />
                <SearchResultList />
            </div>
        </div>
    )
}

export default DetectLocation;