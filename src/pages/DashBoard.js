import { Spin } from "antd";
import Cookies from "js-cookie";
import { Suspense, lazy } from "react";
const NotFound = lazy(() => import("../containers/pages/NotFound.js"));
const UserLayout = lazy(() => import("../layout/user/userLayout.js"));

export default function DashBoard() {
  const decentralization = Cookies.get("decentralization");
  console.log(decentralization);
  if (decentralization === "user") {
    return <UserLayout to="user" />;
  } else if (decentralization === "admin") {
    return;
  } else
    return (
      <Suspense
        fallback={
          <div className="spin flex items-center justify-center bg-white dark:bg-dark h-screen w-full fixed z-[999] ltr:left-0 rtl:right-0 top-0">
            <Spin />
          </div>
        }
      >
        <NotFound />
      </Suspense>
    );
}
