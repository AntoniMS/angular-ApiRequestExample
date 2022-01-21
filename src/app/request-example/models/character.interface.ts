export interface CharacterResponseInterface {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: string;
  };
  results: CharacterInterface[];
}
export interface CharacterInterface {
    id: number;
    name: string;
    image: string;
  }
  