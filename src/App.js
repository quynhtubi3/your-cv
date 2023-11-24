import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Spin } from "antd";

const SignIn = lazy(() => import("../src/containers/pages/SignIn.js"));
const NotFound = lazy(() => import("../src/containers/pages/NotFound.js"));
const DashBoard = lazy(() => import("../src/pages/DashBoard.js"));
const CVDetail = lazy(() => import("../src/pages/CVDetail.js"));
const CVCreate = lazy(() => import("../src/pages/CVCreate.js"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="spin flex items-center justify-center bg-white dark:bg-dark h-screen w-full fixed z-[999] ltr:left-0 rtl:right-0 top-0">
          <Spin />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard/*" element={<DashBoard />} />
        <Route path="/dashboard/profile/:id" element={<CVDetail />} />
        <Route path="/dashboard/create" element={<CVCreate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
