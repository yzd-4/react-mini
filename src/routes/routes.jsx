import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import RootLayout from "../Layout/RootLayout/RootLayout";
import NewsPage from "../pages/NewsPage/NewsPage";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<h1>Main page</h1>} />
        <Route path="rami" element={<h1>Rami page</h1>} />
        <Route path="news" element={<NewsPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Route>
  )
);
