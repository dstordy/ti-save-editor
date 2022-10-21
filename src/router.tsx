import { createMemoryRouter, RouteObject } from "react-router-dom";
import * as pages from "./pages";

const editorRoutes: RouteObject[] = [
  {
    path: "factions",
    element: <pages.editor.FactionsOverview />,
  },
];

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <pages.Root />,
    children: [
      {
        index: true,
        element: <pages.Start />,
      },
      ...editorRoutes,
    ],
  },
];

export const router = createMemoryRouter(routes, {
  basename: import.meta.env.BASE_URL,
});
