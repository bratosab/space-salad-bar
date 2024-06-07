import { Topping } from "../models/Topping";

export async function getToppings(): Promise<Topping[]> {
  const url = "https://api-generator.retool.com/udhTkG/toppings";

  const toppings = await fetch(url).then((res) => res.json());

  return toppings;
}
