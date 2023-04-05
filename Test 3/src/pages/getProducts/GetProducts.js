import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import API_BASE_URL from "../../BaseUrl/config";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const GetProducts = () => {
  const [products, setProducts] = useState([]);

  console.log(products);

  const gettingProducts = async () => {
    try {
      await axios
        .get(`${API_BASE_URL}/product/all-products`)
        .then((response) => {
          setProducts(response.data);
        });
    } catch (error) {
      console.log(error, "Error getting users");
    }
  };

  useEffect(() => {
    gettingProducts();
  }, []);


  

  return (
    <div className="container-fluid">
      <div className="row">
        <>
          {products.map((product) => (
            <div className="col-4 mt-2">
           
              <Card style={{ border: "solid 2px red" }}>
                <Card.Img
                  style={{ height: "200px", width: "100%" }}
                  variant="top"
                  src={`${API_BASE_URL}/${product.image}`}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>Price {product.price}</Card.Text>
                  <Card.Text>Ratings {product.ratings}</Card.Text>
                  <Link to={`/get-products/${product._id}`}>
                  <Button variant="primary">
                    Go somewhere
                  </Button>
                  </Link>
                </Card.Body>
              </Card>
              
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default GetProducts;
