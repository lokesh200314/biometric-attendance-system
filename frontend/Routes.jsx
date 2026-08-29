import React from 'react'
import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import MainRouter from './router/MainRouter';
import PageNotFound from "./pages/errorpages/PageNotFound";
import Forbidden from "./pages/errorpages/Forbidden";

export default function Routes() {
  return (
    <BrowserRouter>
                <RouterRoutes>
                   {MainRouter()}
                    <Route path="/forbidden" element={<Forbidden />} />
                    <Route path="*" element={<PageNotFound />} />
                </RouterRoutes>
        </BrowserRouter>
  )
}
