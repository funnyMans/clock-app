import Home from "../pages/home";
import TimePage from "../pages/time/TimePage";
import PageNotFound from "../pages/not-found";

export const routerJSON = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/time",
    element: <TimePage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
