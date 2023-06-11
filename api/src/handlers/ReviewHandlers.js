// import controllers

const {postReview,getProductReviews} = require("../controllers/ReviewControllers.js");

const getReviewsHandler = async (req, res) => {
  try {
    const { productId} = req.body;
    const productReviews = await getProductReviews(productId);

    res.status(200).json(productReviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postReviewHandler = async (req, res) => {
  const { productId, userId, text } = req.body;
  try {
    const newReview = await postReview(productId, userId, text);

    res.status(200).json(newReview);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getReviewsHandler,
  postReviewHandler,
};
