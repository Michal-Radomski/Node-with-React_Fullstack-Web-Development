// Interfaces and Types

export interface CustomRequest extends Request {
  user: {
    credits: number;
    save(): void;
  };
}
