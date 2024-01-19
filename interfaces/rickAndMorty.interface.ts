export interface CharacterResponseI {
  info: Info;
  results: CharacterI[];
}
export interface LocationResponseI {
  info: Info;
  results: LocationI[];
}
export interface EpisodeResponseI {
  info: Info;
  results: EpisodeI[];
}
export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: any;
}

export interface CharacterI {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginI;
  location: Omit<
    LocationI,
    "id" | "type" | "dimension" | "residents" | "created"
  >;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface OriginI {
  name: string;
  url: string;
}

export interface LocationI {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface EpisodeI {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
