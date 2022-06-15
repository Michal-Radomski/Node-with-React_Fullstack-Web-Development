// Interfaces and Types

type State = ReturnType<typeof store.getState>;
type Dispatch = typeof store.dispatch;
type Fetch = typeof store.fetch;

interface Auth {
  credits: number;
  __v: number;
  _id: string;
  googleID: string;
  name: string;
}

interface Values {
  title: string;
  subject: string;
  body: string;
  recipients: string;
}
