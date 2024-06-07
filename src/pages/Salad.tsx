import { List, ListItem, ListItemButton } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadToppings, selectTotalPrice, selectTotalPriceMemo } from "../store/saladSlice";
import { AppDispatch, RootState } from "../store/store";
import { Topping } from "../models/Topping";
import { selectTopping as selectStoreTopping } from "../store/saladSlice";
import './Salad.css'

export function Salad() {
  const toppings = useSelector((state: RootState) => state.salad.toppings)
  const chosenToppings = useSelector((state: RootState) => state.salad.chosenToppings)
  const loading = useSelector((state: RootState) => state.salad.loading)
  const price = useSelector(selectTotalPriceMemo)
  const price2 = useSelector(selectTotalPriceMemo)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadToppings());
  }, [dispatch]);

  const selectTopping = (topping: Topping) => {
    dispatch(selectStoreTopping({ topping }))
  }

  return (
    <>
      <h2>Salad</h2>
      <p>Welcome, choose your toppings</p>
      <p>Total Price : {price}</p>
      <p>Total Price : {price2}</p>
      {loading && <p>Loading toppings...</p>}
      <div className="toppings-lists">
      <List>
        {toppings &&
          toppings.map((topping) => (
            <ListItemButton key={topping.id} onClick={() => selectTopping(topping)}>
              {topping.name} ({topping.price}€)

            </ListItemButton>
          ))}
      </List>
      <List>
        {chosenToppings &&
          chosenToppings.map((topping) => (
            <ListItem key={topping.id}>
              {topping.name} ({topping.price}€)

            </ListItem>
          ))}
      </List>
      </div>
    </>
  );
}
