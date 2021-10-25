/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEvent } from "react";
import { TextField } from "@mui/material";
import { useDebounceCallback } from "@react-hook/debounce";

import { useAppDispatch } from "../../app/hooks";
import { setSearchTerm } from "./list-slice";

const useOnChange = () => {
  const dispatch = useAppDispatch();

  return useDebounceCallback<[ChangeEvent<HTMLInputElement>]>((e) => {
    dispatch(setSearchTerm(e.target.value));
  }, 100);
};

const Search = () => {
  const onChange = useOnChange();

  return (
    <TextField
      css={css`
        width: 100%;
      `}
      id="search-term"
      label="Search term"
      variant="standard"
      onChange={onChange}
    />
  );
};

export default Search;
