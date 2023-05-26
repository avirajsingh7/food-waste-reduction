import AutocompleteSearch from "../components/AutoCompleteSearch";

function DetectLocation() {
    return (
        <div className="bg-secondary w-screen h-screen"> 
            <div className="w-2/5 flex min-w-200 flex-col m-auto items-center pt-80">
                <AutocompleteSearch />
            </div>
        </div>
    )
}

export default DetectLocation;