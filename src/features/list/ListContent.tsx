import { useEffect } from "react";
import {
  AutoSizer,
  List as VirtualList,
  InfiniteLoader,
  Index,
  ListRowRenderer,
} from "react-virtualized";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useGetItunesItemsQuery } from "../../services/itunes-api";
import { incrementLimit, resetLimit } from "./list-slice";
import ListCard from "./ListCard";
import NoSearchResults from "./NoSearchResults";

const useResetOnNewSearchTerm = (searchTerm: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetLimit());
  }, [searchTerm, dispatch]);
};

const useSearch = (searchTerm: string, limit: number) => {
  const { data } = useGetItunesItemsQuery({
    searchTerm,
    limit,
  });

  return { results: data?.results || [] };
};

function ListContent() {
  const dispatch = useAppDispatch();
  const limit = useAppSelector((state) => state.list.limit);
  const searchTerm = useAppSelector((state) => state.list.term);
  const { results } = useSearch(searchTerm, limit);
  useResetOnNewSearchTerm(searchTerm);

  const isRowLoaded = ({ index }: Index) => {
    return Boolean(results[index]);
  };

  // needs to be async to match function signature
  const loadMoreRows = async () => {
    dispatch(incrementLimit());
  };

  const rowRenderer: ListRowRenderer = ({ index, style }) => {
    const searchItem = results[index];

    if (!searchItem) return null;

    const { artworkUrl100, artistName, trackName, primaryGenreName } =
      results[index];

    const [prefix] = artworkUrl100.split("100x100bb.jpg");
    const compoundKey =
      artworkUrl100 + artistName + trackName + primaryGenreName;

    return (
      <div style={style} key={compoundKey}>
        <ListCard
          image={prefix + "200x200bb.jpg"}
          artistName={artistName}
          trackName={trackName}
          genre={primaryGenreName}
        />
      </div>
    );
  };

  return (
    <AutoSizer>
      {({ width, height }) => (
        <InfiniteLoader
          rowCount={200}
          isRowLoaded={isRowLoaded}
          loadMoreRows={loadMoreRows}
        >
          {({ onRowsRendered, registerChild }) => (
            <VirtualList
              ref={registerChild}
              width={width}
              height={height}
              overscanRowCount={0}
              noRowsRenderer={() => <NoSearchResults />}
              rowCount={200}
              rowHeight={84}
              onRowsRendered={onRowsRendered}
              rowRenderer={rowRenderer}
            />
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
}

export default ListContent;
