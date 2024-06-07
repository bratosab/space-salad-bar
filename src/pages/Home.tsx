import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Statut,
  setOrderId,
  setStatut,
  setName as setStoreName,
} from "../store/mainSlice";
import { useGeneratedId } from "../hooks/useGeneratedId";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const orderId = useGeneratedId();
  const navigate = useNavigate();

  const startOrder = (event: FormEvent) => {
    event.preventDefault();

    dispatch(setStoreName({ name }));
    dispatch(setStatut({ statut: Statut.OnGoing }));
    dispatch(setOrderId({ orderId }));

    navigate(`/salad/${orderId}`);
  };

  return (
    <>
      <h2>Welcome, please enter your name :</h2>
      <form onSubmit={(e) => startOrder(e)}>
        <input
          type="text"
          placeholder="Your name here ..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit"></button>
      </form>
    </>
  );
}
