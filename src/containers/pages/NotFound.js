import { Suspense } from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <Suspense fallback="...">
      <div className="flex items-center justify-center min-h-screen py-48 bg-white">
        <div className="flex flex-col">
          <span className="my-10 font-bold text-center opacity-30">
            MDI (npm i @mdi/font) reuqired for all icons
            <hr className="my-4" />
            <a
              href="https://egoistdeveloper.github.io/twcss-to-sass-playground/"
              target="_blank"
              className="text-blue-600"
            >
              Convetert to SASS
            </a>
          </span>
          <div className="flex flex-col items-center">
            <div className="font-bold text-indigo-500 text-7xl">404</div>

            <div className="mt-10 text-3xl font-bold xl:text-7xl lg:text-6xl md:text-5xl">
              This page does not exist
            </div>

            <div className="mt-8 text-sm font-medium text-gray-400 md:text-xl lg:text-2xl">
              The page you are looking for could not be found.
            </div>
          </div>

          <div className="flex flex-col mt-48">
            <div className="font-bold text-gray-400 uppercase">
              Continue With
            </div>

            <div className="flex flex-col items-stretch mt-5">
              <div className="flex flex-row px-4 py-8 transition-all duration-200 delay-100 border-t group hover:cursor-pointer">
                <div className="px-3 py-2 bg-blue-100 rounded-xl md:py-4">
                  <i className="mx-auto text-2xl text-indigo-900 mdi mdi-home-outline md:text-3xl"></i>
                </div>

                <NavLink to="/" className="flex flex-col pt-2 pl-5 grow">
                  <div className="text-sm font-bold md:text-lg lg:text-xl group-hover:underline">
                    LogIn Page
                  </div>

                  <div className="text-sm font-semibold text-gray-400 transition-all duration-200 delay-100 md:text-md lg:text-lg group-hover:text-gray-500">
                    Everything starts here
                  </div>
                </NavLink>
                <i className="pr-2 my-auto text-gray-400 transition-all duration-200 delay-100 mdi mdi-chevron-right mdi-24px group-hover:text-gray-700"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
export default NotFound;
