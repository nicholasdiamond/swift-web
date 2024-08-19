import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./route";

export default function App() {
  const [user] = useState<boolean>(true);
  return (
    <>
      <RouterProvider router={routes(user)} />
    </>
  );
}
