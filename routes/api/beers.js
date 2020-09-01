const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Beer, Review, Brewery } = require("../../db/models");
const { handleValidationErrors } = require("../util/validation");
const router = express.Router();

router.get(
  "/",
  asyncHandler(async function (_req, res, _next) {
    const beers = await Beer.findAll();
    res.json({ beers });
  })
);

module.exports = router;
