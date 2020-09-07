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
          attributes: ["id", "name"],
        },
        {
          model: User,
          attributes: ["id", "username"],
        },
        {
          model: Brewery,
          attributes: ["id", "name"],
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
          attributes: ["id", "name"],
        },
        {
          model: User,
          attributes: ["id", "username"],
        },
        {
          model: Brewery,
          attributes: ["id", "name"],
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
    const reviewId = parseInt(req.params.id, 10);
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
    let breweryId;
    let beerId;
    let beer = await Beer.findOne({
      where: {
        name: beerName,
      },
    });
    if (beer) {
      beerId = beer.id;
    }
    let brewery = await Brewery.findOne({
      where: {
        name: breweryName,
      },
    });
    if (brewery) {
      breweryId = brewery.id;
    }
    if (!brewery) {
      brewery = await Brewery.create({
        name: breweryName,
      });
      breweryId = brewery.id;
    }
    if (!beer) {
      beer = await Beer.create({
        name: beerName,
      });
      beerId = beer.id;
    }
    const reviewCreated = await Review.create({
      beerId,
      breweryId,
      userId,
      rating,
      comments,
    });
    if (reviewCreated) {
      let id = reviewCreated.id;
      const review = await Review.findOne({
        where: id,
        include: [
          {
            model: Beer,
            attributes: ["id", "name"],
          },
          {
            model: User,
            attributes: ["id", "username"],
          },
          {
            model: Brewery,
            attributes: ["id", "name"],
          },
        ],
      });
      return res.json({
        review,
      });
    }
    return res.json({ error });
  })
);
router.put(
  "/:id(\\d+)",
  validatePost,
  handleValidationErrors,
  asyncHandler(async (req, res, next) => {
    const reviewId = parseInt(req.params.id, 10);
    let review = await Review.findByPk(reviewId);
    const beerId = review.beerId;
    const breweryId = review.breweryId;
    const { beerName, breweryName, userId, rating, comments } = req.body;
    let beer = await Beer.findByPk(beerId);
    let brewery = await Brewery.findByPk(breweryId);
    await beer.update({ name: beerName });
    await brewery.update({ name: breweryName });
    await review.update({ rating, comments });
    if (review) {
      review = await Review.findOne({
        where: { id: reviewId },
        include: [
          {
            model: Beer,
            attributes: ["id", "name"],
          },
          {
            model: User,
            attributes: ["id", "username"],
          },
          {
            model: Brewery,
            attributes: ["id", "name"],
          },
        ],
      });
      console.log(review);
      return res.json({
        review,
      });
    } else {
      next(reviewNotFoundError(reviewId));
    }
  })
);
module.exports = router;
