import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import AIPlatformPage from "./pages/AIPlatformPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/ai-platform",
    Component: AIPlatformPage,
  },
]);
