// Interfaces and Types

export interface CustomRequest extends Request {
  user: {
    id: string;
    credits: number;
    save(): void;
  };
  body: {
    id: string;
    title: string;
    subject: string;
    body: string;
    recipients: string;
  };
}
