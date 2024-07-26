import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const changeSearch = () => {
    props.changeSearch(search);
  };

  const keyDown = (e) => {
    if (e.key === "Enter") {
      changeSearch();
    }
  };

  return (
    <>
      <div>
        <label for="search">Cari Artikel: </label>
        <input
          type="text"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={keyDown}
        />
        <button onClick={changeSearch}>Cari</button>
      </div>
      <h4>
        Ditemukan {props.totalData} data dari pencarian kata {search}
      </h4>
    </>
  );
}

export default Search;
