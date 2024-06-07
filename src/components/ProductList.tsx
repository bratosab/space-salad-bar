import { useDeferredValue } from "react";

export function ProductList({ products }) {
  const deferredProducts = useDeferredValue(products);
  return (
    <>
      <ul>
        {deferredProducts &&
          deferredProducts.map((product) => <li key={product}>{product}</li>)}
      </ul>
    </>
  );
}
