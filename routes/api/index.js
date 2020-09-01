const router = require("express").Router();

const routes = ["users", "session", "csrf", "beers", "breweries", "reviews"];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
