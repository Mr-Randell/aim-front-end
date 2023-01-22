import axios from "axios";

const API_URL = `https://aim-snb2.onrender.com/assets`;

// 1.) Get all products
const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// 2.) Get a Product
const getProduct = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};

// 3.) Update Product
const updateProduct = async (id, formData) => {
  const response = await axios.patch(`${API_URL}${id}`, formData);
  return response.data;
};

// 4.) Create New Product
const createProduct = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

// 5.) Delete a Product
const deleteProduct = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

const productService = {
  getProducts,
  getProduct,
  updateProduct,
  createProduct,
  deleteProduct,
};

export default productService;
