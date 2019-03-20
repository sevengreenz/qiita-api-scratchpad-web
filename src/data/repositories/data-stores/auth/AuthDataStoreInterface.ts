
export interface IAuthDataStore {
  getState: () => string | null;
  setState: (state: string) => void;
}
