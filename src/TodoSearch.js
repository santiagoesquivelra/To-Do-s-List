import React from 'react'

function TodoSearch({
  searchValue,
  setSearchValues,
})  {
  return (
    <>
      <input placeholder="Buscar..." type="search" name="search" id="search" className="search-input"
        value={searchValue}
        onChange={(event) => {
          setSearchValues(event.target.value);
        }} />
    </>
  );
}

export { TodoSearch };      