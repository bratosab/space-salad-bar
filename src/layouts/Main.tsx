import { Outlet } from "react-router-dom";

export function Main() {
  return (
    <>
      <header>
        <h1>Welcome to THE best Salad Bar</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
