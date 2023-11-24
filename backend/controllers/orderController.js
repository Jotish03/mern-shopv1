import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

const addOrderItems = asyncHandler(async (req, res) => {
  res.send("addOrderItems");
});

const getMyOrders = asyncHandler(async (req, res) => {
  res.send("getMyOrders");
});

const getOrderById = asyncHandler(async (req, res) => {
  res.send("getOrderById");
});

const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("updateOrderToPaid");
});

const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("updateOrderToDelivered");
});

const getOrders = asyncHandler(async (req, res) => {
  res.send("getOrders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
