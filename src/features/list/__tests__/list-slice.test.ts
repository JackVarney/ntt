import reducer, {
  incrementLimit,
  ListState,
  resetLimit,
  setSearchTerm,
} from "../list-slice";

const createDefaultState: () => ListState = () => ({
  limit: 0,
  term: "",
});

test("when the limit is incremented, it should increase by 10", () => {
  const state = reducer(createDefaultState(), incrementLimit());

  expect(state.limit).toEqual(10);
});

test("when the limit is reset, it should be set to 10", () => {
  const state = reducer(createDefaultState(), resetLimit());

  expect(state.limit).toEqual(10);
});

test("it should set the search term", () => {
  const state = reducer(createDefaultState(), setSearchTerm("new search term"));

  expect(state.term).toEqual("new search term");
});
