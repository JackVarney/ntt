/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import List from "./features/list/List";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <main
        css={css`
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;

          @media (min-width: 600px) {
            margin: 8px;
          }
        `}
      >
        <List />
      </main>
    </Provider>
  );
}

export default App;
