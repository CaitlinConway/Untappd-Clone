const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { User, Beer, Review, Brewery } = require("../../db/models");
const { handleValidationErrors } = require("../util/validation");
const router = express.Router();

const validatePost = [
  check("beerName", "must have a beer name").exists().notEmpty(),
  check("breweryName", "must have a brewery name").exists().notEmpty(),
  check("rating", "must be a number between 1 and 5").exists().isNumeric(),
];

router.get(
  "/",
  asyncHandler(async function (req, res, _next) {
    const reviews = await Review.findAll({
      include: [
        {
          model: Beer,
          attributes: ["id", "name", "breweryId"],
        },
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    res.json({ reviews });
  })
);
// router.get(
//   "/beer/:id(\\d+)",
//   asyncHandler(async function (_req, res, _next) {
//     const beerId = parseInt(req.params.id, 10);
//     const reviews = await Review.findAll({
//       where: {
//         beerId,
//       },
//     });
//     res.json({ reviews });
//   })
// );
// router.get(
//   "/user/:id(\\d+)",
//   asyncHandler(async function (_req, res, _next) {
//     const userId = parseInt(req.params.id, 10);
//     const reviews = await Review.findAll({
//       where: {
//         userId,
//       },
//     });
//     res.json({ reviews });
//   })
// );
router.get(
  "/:id(\\d+)",
  asyncHandler(async function (req, res, next) {
    const id = parseInt(req.params.id, 10);
    const reviews = await Review.findAll({
      include: [
        {
          model: Beer,
          attributes: ["id", "name", "breweryId"],
        },
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
    });
    const review = reviews[id];
    res.json({ review });
  })
);
router.delete(
  "/:id(\\d+)",
  asyncHandler(async function (req, res, next) {
    console.log("in delete");
    const reviewId = parseInt(req.params.id, 10);
    console.log(reviewId, "reviewId");
    const review = await Review.findByPk(reviewId);
    await review.destroy();
    res.status(204).end();
  })
);
router.post(
  "/",
  validatePost,
  handleValidationErrors,
  asyncHandler(async function (req, res) {
    const { beerName, breweryName, userId, rating, comments } = req.body;
    let beer = await Beer.findOne({
      where: {
        name: beerName,
      },
    });
    let beerId = beer.id;
    let brewery = await Brewery.findOne({
      where: {
        name: breweryName,
      },
    });
    let breweryId = brewery.id;
    console.log(beerId, breweryId);
    if (!breweryId) {
      brewery = await Brewery.create({
        name: breweryName,
      });
      breweryId = brewery.id;
    }
    if (!beerId) {
      beer = await Beer.create({
        name: beerName,
        breweryId: breweryId,
      });
      beerId = beer.id;
    }
    const review = await Review.create({
      beerId,
      userId,
      rating,
      comments,
    });
    return res.json({
      review,
    });
  })
);

module.exports = router;
