import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Provider } from "react-redux";

import List from "../List";
import TEST_DATA from "./TEST_DATA.json";
import { createStore } from "../../../app/store";

// https://github.com/bvaughn/react-virtualized/issues/493
jest.mock("react-virtualized", () => {
  const ReactVirtualized = jest.requireActual("react-virtualized");
  return {
    ...ReactVirtualized,
    AutoSizer: ({ children }: { children: any }) =>
      children({ height: 1000, width: 1000 }),
  };
});

const server = setupServer(
  rest.get("http://localhost:8080/api", (req, res, ctx) => {
    const query = req.url.searchParams;
    const term = query.get("term");
    const limit = query.get("limit");

    if (term === "Drake") {
      const results = TEST_DATA.results.slice(0, Number(limit));

      return res(
        ctx.status(200),
        ctx.json({
          resultCount: limit,
          results,
        }),
      );
    }

    return res(ctx.status(200), ctx.json({ resultCount: 0, results: [] }));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("when the user searches for a term, it should render the items returned", async () => {
  const store = createStore();
  render(
    <Provider store={store}>
      <List />
    </Provider>,
  );

  await waitFor(() => {
    screen.getByLabelText("Search term");
  });

  fireEvent.change(screen.getByLabelText("Search term"), {
    target: { value: "Drake" },
  });

  await waitFor(() => {
    screen.getByText("What's My Name? (feat. Drake)");
  });
});

test("when I conduct a search and there are no results, notify that there are no results", async () => {
  const store = createStore();
  render(
    <Provider store={store}>
      <List />
    </Provider>,
  );

  await waitFor(() => {
    screen.getByLabelText("Search term");
  });

  fireEvent.change(screen.getByLabelText("Search term"), {
    target: { value: "Drake" },
  });

  await waitFor(() => {
    screen.getByText("What's My Name? (feat. Drake)");
  });

  fireEvent.change(screen.getByLabelText("Search term"), {
    target: { value: "There are no results for this search" },
  });

  await waitFor(() => {
    screen.getByText("There are no results");
  });
});
