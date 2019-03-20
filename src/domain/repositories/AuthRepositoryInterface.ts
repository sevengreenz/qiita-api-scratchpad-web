export interface IAuthRepository {
  getState: () => string;
  setState: (state: string) => void;
}

