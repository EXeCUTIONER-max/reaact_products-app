import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3003")
      .then((result) => setProducts(result.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3003/deleteProduct/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((errr) => console.log(errr));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-primary">
          Products +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Color</th>
              <th>Price in $</th>
              <th>Comments</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.color}</td>
                  <td>{product.price}</td>
                  <td>{product.comments}</td>
                  <td>
                    <Link
                      to={`/update/${product._id}`}
                      className="btn btn-primary"
                    >
                      Update Product
                    </Link>
                    <button
                      className="btn btn-dark"
                      onClick={(e) => handleDelete(product._id)}
                    >
                      Delete Product
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Products;
