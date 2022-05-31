//* prod.ts - production keys here!

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID, //* można go upublicznić
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGODB_URI,
  cookieKey: process.env.COOKIE_KEY,
};
