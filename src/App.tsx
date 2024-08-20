import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./route";
import "./index.css";
import "./App.css";

export default function App() {
  const [user] = useState<boolean>(false);
  return (
    <>
      <RouterProvider router={routes(user)} />
    </>
  );
}
