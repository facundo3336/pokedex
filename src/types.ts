export interface PokemonResponse {
  id: number;
  name: string;
  sprites: {
    other: {
      ["official-artwork"]: {
        ["front_default"]: string;
      };
    };
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
}

export interface PokemonListResponse {
  next: string;
  results: Array<{
    name: string;
    url: string;
  }>;
}

export interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
  types: Array<string>;
}
