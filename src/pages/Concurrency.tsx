import { useState, useTransition } from "react";
import { generateProducts } from "../services/productService";
import { ProductList } from "../components/ProductList";

const products = generateProducts();

function filterProducts(term) {
  if (!term) {
    return products;
  }
  return products.filter((product) => product.includes(term));
}

export function Concurrency() {
  const [term, setTerm] = useState("");
  const [isFiltering, startTransition] = useTransition();

  const filteredProducts = filterProducts(term);

  const filterHandler = (e) => {
    // startTransition(() => {
    //   setTerm(e.target.value);
    // });
    setTerm(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={filterHandler} />
      { isFiltering && <p>"Filtering..."</p> }
      <ProductList products={filteredProducts} />
    </>
  );
}
