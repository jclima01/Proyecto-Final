import { useState } from "react";
import s from "./DashBoardEditProduct.module.css";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { editProduct } from "../../redux/actions";
import toast, { Toaster } from "react-hot-toast";

const DashBoardModalEditProduct = ({
  show,
  handleClose,
  productName,
  description,
  categories,
  imageUrl,
  stocks,
  price,
  rating,
  id,
}) => {
  const dispatch = useDispatch();

  const [dataEditProducts, setDataEditProducts] = useState({
    productName,
    description,
    categories,
    imageUrl,
    stocks,
    price,
    rating,
  });

  const handleInputChange = (e) => {
    setDataEditProducts({
      ...dataEditProducts,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitEdit = (e) => {
    e.preventDefault();
    dispatch(
      editProduct(
        id,
        dataEditProducts.productName,
        dataEditProducts.description,
        dataEditProducts.categories,
        dataEditProducts.imageUrl,
        dataEditProducts.stocks,
        dataEditProducts.price,
        dataEditProducts.rating
      )
    ).finally(() => {
      handleClose();
      toast.success("Product Updated Successfully");
    });
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Toaster
        toastOptions={{
          style: {
            padding: "36px",
            color: "#2f2b29",
          },
        }}
        position="top-center"
        reverseOrder={false}
      />
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="imageUrl"
            value={dataEditProducts.imageUrl}
            autoFocus
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              value={dataEditProducts.productName}
              name="productName"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={dataEditProducts.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/*  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Categroies</Form.Label>
            <Form.Check>
              {categories?.map(category => (
                <div className={s.categoriescheked}>
                  
                  <Form.Check.Input
                    checked="true"
                    type="radio"
                    name={category.categoryName}
                    id={category.categoryName}
                    value={category.categoryName}
                  />
                  <Form.Check.Label>{category.categoryName}</Form.Check.Label>
                </div>
              ))}
            </Form.Check>
          </Form.Group> */}

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Stocks</Form.Label>
            <Form.Control
              type="number"
              autoFocus
              value={dataEditProducts.stocks}
              name="stocks"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              autoFocus
              value={dataEditProducts.price}
              name="price"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              autoFocus
              value={dataEditProducts.rating}
              name="rating"
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmitEdit}>
          Edit Product
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default DashBoardModalEditProduct;