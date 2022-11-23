import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = () => {

    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData)
    }

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
        />
    )
}

export default Search;