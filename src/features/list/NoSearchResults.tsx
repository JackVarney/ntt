/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const NoSearchResults = () => {
  return (
    <div
      css={css`
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      There are no results
    </div>
  );
};

export default NoSearchResults;
