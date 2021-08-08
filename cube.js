// Cube.js configuration options: https://cube.dev/docs/config
module.exports = {
  logger: (msg, params) => {
    console.log(`[logger] ${msg}: ${JSON.stringify(params)}`);
  }
};
