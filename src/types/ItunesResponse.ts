export interface ItunesApiResponse {
  resultCount: number;
  results: ItunesSearchResult[];
}

export interface ItunesSearchResult {
  wrapperType: string;
  kind?: string;
  artistId?: number;
  collectionId: number;
  trackId?: number;
  artistName: string;
  collectionName: string;
  trackName?: string;
  collectionCensoredName: string;
  trackCensoredName?: string;
  artistViewUrl?: string;
  collectionViewUrl: string;
  trackViewUrl?: string;
  previewUrl?: string;
  artworkUrl30?: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice?: number;
  releaseDate: Date;
  collectionExplicitness: string;
  trackExplicitness?: string;
  discCount?: number;
  discNumber?: number;
  trackCount: number;
  trackNumber?: number;
  trackTimeMillis?: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  isStreamable?: boolean;
  copyright?: string;
  description?: string;
  collectionHdPrice?: number;
  trackHdPrice?: number;
  contentAdvisoryRating?: string;
  shortDescription?: string;
  longDescription?: string;
  feedUrl?: string;
  trackRentalPrice?: number;
  trackHdRentalPrice?: number;
  artworkUrl600?: string;
  genreIds?: string[];
  genres?: string[];
}
