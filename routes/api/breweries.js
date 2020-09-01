const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Beer, Review, Brewery } = require("../../db/models");
const { handleValidationErrors } = require("../util/validation");
const router = express.Router();

router.get(
  "/",
  asyncHandler(async function (_req, res, _next) {
    const breweries = await Brewery.findAll();
    res.json({ breweries });
  })
);
router.get(
  "/:id(\\d+)",
  asyncHandler(async function (_req, res, _next) {
    const id = parseInt(req.params.id, 10);
    const brewery = await Brewery.findByPk(id);
    res.json({ brewery });
  })
);
module.exports = router;
