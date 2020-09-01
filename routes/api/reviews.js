const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Beer, Review, Brewery } = require("../../db/models");
const { handleValidationErrors } = require("../util/validation");
const router = express.Router();

const validatePost = [
  check("beerId", "must be between 5 and 70 characters").exists(),
  check("rating", "must be a number between 1 and 5").exists().isNumeric(),
];

router.get(
  "/",
  asyncHandler(async function (_req, res, _next) {
    const reviews = await Review.findAll();
    res.json({ reviews });
  })
);
router.get(
  "/beer/:id(\\d+)",
  asyncHandler(async function (_req, res, _next) {
    const beerId = parseInt(req.params.id, 10);
    const reviews = await Review.findAll({
      where: {
        beerId,
      },
    });
    res.json({ reviews });
  })
);
router.get(
  "/user/:id(\\d+)",
  asyncHandler(async function (_req, res, _next) {
    const userId = parseInt(req.params.id, 10);
    const reviews = await Review.findAll({
      where: {
        userId,
      },
    });
    res.json({ reviews });
  })
);
router.get(
  "/:id(\\d+)",
  asyncHandler(async function (_req, res, _next) {
    const id = parseInt(req.params.id, 10);
    const review = await Review.findByPk(id);
    res.json({ review });
  })
);
router.delete(
  "/:id(\\d+)",
  asyncHandler(async function (_req, res, _next) {
    const id = parseInt(req.params.id, 10);
    const review = await Review.findByPk(id);
    await review.destroy();
    res.status(204).end();
  })
);
router.post(
  "/",
  validatePost,
  handleValidationErrors,
  asyncHandler(async function (req, res) {
    const { beerId, userId, rating, comments } = req.body;
    const review = await Review.create({ beerId, userId, rating, comments });
    return res.json({
      review,
    });
  })
);

module.exports = router;
