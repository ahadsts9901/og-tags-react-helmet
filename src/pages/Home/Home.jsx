import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  return (
    <>
      <Layout
        mainTitle="Fakestore"
        title="Fakestore"
        description="This is a fakestore web made for practice"
        url={window?.location?.href}
        image="https://yt3.googleusercontent.com/a3r_4fxqBWJxpcmDpkCcuCcdfr1ekBbHj877HOX97FeSFl7RKdw0E-ccgzUD_MBobjWm-qWJOoc=s176-c-k-c0x00ffffff-no-rj"
      >
        <div style={{ padding: "3em" }}></div>
        <div className="productsCont">
          {products ? (
            products.map((product, index) => (
              <Card
                id={product.id}
                image={product.image}
                price={product.price}
                description={product.description}
                title={product.category}
              />
            ))
          ) : (
            <span id="loader"></span>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Home;
