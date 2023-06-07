const Order = require("../models/Order.js");

const updateOrder = async (sessionId, paymentStatus) => {
  try {
    const order = await Order.findOne({ sessionId });
    order.status = paymentStatus === "paid" ? "sending products" : "pending";
    order.payment = paymentStatus === "paid" ? true : false;
    // order.cart = paymentStatus === "paid" ? [] : order.cart;
    //agregar el adress
    // order.adress = customerDetails;
    const savedOrder = await order.save();
    return savedOrder;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  updateOrder,
};
