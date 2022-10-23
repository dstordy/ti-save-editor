import { createMemoryRouter, RouteObject } from "react-router-dom";
import * as pages from "./pages";

const editorRoutes: RouteObject[] = [
  {
    path: "factions",
    children: [
      { path: "", element: <pages.editor.FactionsOverview /> },
      { path: ":factionId", element: <pages.editor.FactionDetail /> },
    ],
  },
  {
    path: "councilors",
    element: <pages.editor.CouncilorOverview />,
  },
];

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <pages.Root />,
    children: [
      {
        errorElement: <pages.ErrorPage />,
        children: [
          {
            index: true,
            element: <pages.Start />,
          },
          ...editorRoutes,
        ],
      },
    ],
  },
];

// Currently using a memory router, not the 'correct' option but browser history and navigation
// to arbitrary pages is not currently wanted behaviour.
export const router = createMemoryRouter(routes, {
  // Both of these together will give better a href on a Link element.
  // This stops nonsensical navigation tooltips when the BASE_URL is not '/'
  basename: import.meta.env.BASE_URL,
  // It is required to force the initial navigation to the BASE_URL as otherwise it is '/'
  // As '/' would not be valid for any BASE_URL other than '/' it causes an error
  // Could also use window.location.pathname
  initialEntries: [import.meta.env.BASE_URL],
});
