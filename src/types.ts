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

export interface PokemonDetailsResponse {
  id: number;
  height: number;
  weight: number;
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
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
}

export interface PokemonDetails {
  id: number;
  name: string;
  imageUrl: string;
  types: Array<string>;
  height: number;
  weight: number;
  stats: Array<{
    name: string;
    stat: number;
  }>;
  abilities: Array<string>;
}
