const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5000",
      // changeOrigin: true,

      on: {
        proxyReq: (proxyReq, req, res) => {
          console.log({proxyReq});
          /* handle proxyReq */
        },
        proxyRes: (proxyRes, req, res) => {
          /* handle proxyRes */
        },
        error: (err, req, res) => {
          /* handle error */
        },
      },
    })
  );
};
