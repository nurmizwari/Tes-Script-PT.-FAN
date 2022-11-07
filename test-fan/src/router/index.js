import { createBrowserRouter } from "react-router-dom";
import Details from "../components/Details";
import DetailSearch from "../components/DetailSearch";
import HomePage from "../components/HomePage";
import PageLayout from "../components/PageLayout";
const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/detail",
        element: <Details />,
      },
      {
        path: "/detail-search",
        element: <DetailSearch />,
      },
    ],
  },
]);

export default router;
