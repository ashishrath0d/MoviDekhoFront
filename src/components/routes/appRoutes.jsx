import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route,  } from "react-router-dom";
import NotFound from "./NotFound";
import ProtectedRoute from "./ProtectedRoute";
import Loader from "./Loader";

const Login = lazy(() => import("../pages/login/login"));
const LandingPage = lazy(() => import("../pages/layout/LandingPage"));
export default function AppRoutes() {
    let user=true
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path={"/"} element={<Login />} />

                <Route
                    path={"/LandingPage"}
                    element={
                        <ProtectedRoute user={user}>
                            <LandingPage />
                        </ProtectedRoute>
                    }
                />

                <Route path={"/*"} element={<NotFound />} />
            </Routes>
         </Suspense>
    );
}
