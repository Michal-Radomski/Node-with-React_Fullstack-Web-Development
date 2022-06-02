// Interfaces and Types

type State = ReturnType<typeof store.getState>;
type Dispatch = typeof store.dispatch;
type Fetch = typeof store.fetch;

interface Auth {
  __v: number;
  _id: string;
  googleID: string;
  name: string;
}
