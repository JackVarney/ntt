/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Paper } from "@mui/material";

import Search from "./Search";
import ListContent from "./ListContent";

function List() {
  return (
    <>
      <Paper
        css={css`
          width: calc(100% - 24px);
          max-width: 600px;
          padding: 12px;
          margin: 0;

          @media (min-width: 600px) {
            margin: 0 0 8px 0;
          }
        `}
      >
        <Search />
      </Paper>

      <Paper
        css={css`
          width: calc(100% - 24px);
          height: 100%;
          max-height: 800px;
          max-width: 600px;
          padding: 12px;
        `}
        elevation={4}
      >
        <ListContent />
      </Paper>
    </>
  );
}

export default List;
