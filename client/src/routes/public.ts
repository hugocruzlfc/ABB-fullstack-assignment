import { Parts, Controls, ControlsByPart } from "../pages";

export const publicRoutes = [
  {
    path: "/",
    component: Parts,
  },
  {
    path: "/controls",
    component: Controls,
  },
  {
    path: "/parts/:id",
    component: ControlsByPart,
  },
];
