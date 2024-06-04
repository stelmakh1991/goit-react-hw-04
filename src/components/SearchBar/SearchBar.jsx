import { useRef } from "react";

import * as S from './SearchBar.style'



const SearchBar = ({onSubmit}) => {

  const searchRef = useRef();

  const handleChange = (e) => {
     searchRef.current.value = e.target.value;
  };
   const handleSubmit = (e) => {
     e.preventDefault();
     onSubmit(searchRef.current.value);
   };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <S.Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          ref={searchRef} onChange={handleChange}
        />
        <S.ButtonInput type="submit">Search</S.ButtonInput>
      </form>
    </header>
  );
};

export default SearchBar;