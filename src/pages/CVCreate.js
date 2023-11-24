import { Suspense, lazy, useState } from "react";
import { NavLink } from "react-router-dom";
import defaultAvatar from "../imgs/default-avatar.jpg";
import logo from "../imgs/logo.jpg";
import dob from "../imgs/dob.png";
import gender from "../imgs/gender.png";
import address from "../imgs/address.png";
import email from "../imgs/email.png";
import ab from "../imgs/ab.png";
import Cookies from "js-cookie";

const AddButton = lazy(() => import("../components/AddButton.js"));

function logOut() {
  Cookies.remove("passWord");
  Cookies.remove("decentralization");
  Cookies.remove("isLogged");
  Cookies.remove("userName");
}
function showSave() {
  const current = document.querySelector(".saveBox");
  current.classList.remove("hidden");
}
function hideSave() {
  const current = document.querySelector(".saveBox");
  current.classList.add("hidden");
}

const CVDEtail = () => {
  const [target, setTarget] = useState(1);
  function handleAddTarget() {
    if (target < 5) setTarget(target + 1);
  }
  const [skill, setSkill] = useState(1);
  function handleAddSkill() {
    if (skill < 5) setSkill(skill + 1);
  }
  const [education, setEducation] = useState(1);
  function handleAddEducation() {
    if (education < 5) setEducation(education + 1);
  }
  const [archive, setArchive] = useState(1);
  function handleAddArchive() {
    if (archive < 5) setArchive(archive + 1);
  }
  const [exp, setExp] = useState(1);
  function handleAddExp() {
    if (exp < 2) setExp(exp + 1);
  }
  const [act, setAct] = useState(1);
  function handleAddAct() {
    if (act < 5) setAct(act + 1);
  }

  return (
    <Suspense>
      <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div class="-mx-6 px-6 py-4">
            <NavLink to="/dashboard" title="home" className="flex items-center">
              <img
                className="rounded-[50%] w-[50px] h-[50px] mx-[10px]"
                src={logo}
                alt="logo"
              />
              <div className="font-bold">Your CV</div>
            </NavLink>
          </div>

          <div class="mt-8 text-center">
            <img
              src={defaultAvatar}
              alt=""
              class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
            <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              Do Dong Duong
            </h5>
          </div>

          <ul class="space-y-2 tracking-wide mt-8">
            <li>
              <a
                href="#"
                aria-label="dashboard"
                class="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
              >
                <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                    class="fill-current text-cyan-400 dark:fill-slate-600"
                  ></path>
                  <path
                    d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                    class="fill-current text-cyan-200 group-hover:text-cyan-300"
                  ></path>
                  <path
                    d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                    class="fill-current group-hover:text-sky-300"
                  ></path>
                </svg>
                <span class="-mr-1 font-medium">Your CV</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    class="fill-current text-gray-300 group-hover:text-cyan-300"
                    fill-rule="evenodd"
                    d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                    clip-rule="evenodd"
                  />
                  <path
                    class="fill-current text-gray-600 group-hover:text-cyan-600"
                    d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                  />
                </svg>
                <span class="group-hover:text-gray-700">Categories</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    class="fill-current text-gray-600 group-hover:text-cyan-600"
                    fill-rule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clip-rule="evenodd"
                  />
                  <path
                    class="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                  />
                </svg>
                <span class="group-hover:text-gray-700">Reports</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    class="fill-current text-gray-600 group-hover:text-cyan-600"
                    d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                  />
                  <path
                    class="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                  />
                </svg>
                <span class="group-hover:text-gray-700">Other data</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    class="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                  />
                  <path
                    class="fill-current text-gray-600 group-hover:text-cyan-600"
                    fill-rule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="group-hover:text-gray-700">Finance</span>
              </a>
            </li>
          </ul>
        </div>

        <div
          class="px-6 -mx-6 pt-4 flex justify-between items-center border-t"
          onClick={logOut}
        >
          <NavLink
            className="flex items-center px-4 py-3 space-x-4 text-gray-600 rounded-md group"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span class="group-hover:text-gray-700">Logout</span>
          </NavLink>
        </div>
      </aside>
      <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div class="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5 items-center">
          <div class="px-6 flex items-center justify-between 2xl:container h-[100%]">
            <button class="w-12 h-16 -mr-2 border-r lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <NavLink
              className="text-gray-600 text-[20px] flex items-center"
              to="/dashboard"
            >
              <img src={ab} className="w-[30px] h-[30px]" alt="" />
              <div>Back</div>
            </NavLink>
          </div>
        </div>
        <div className="relative flex flex-wrap bg-gray-100">
          <div className="w-[30%] h-[200px] bg-white fixed z-2 top-[40%] rounded-[23px] mx-[20%] shadow-2xl transition-transform hidden saveBox">
            <div className="text-center text-[20px] mt-[10%] font-bold">
              ARE YOU SURE TO SAVE THIS CV?
            </div>
            <div className="flex justify-between w-[40%] mx-auto mt-[5%]">
              <button
                className="px-[10px] py-[5px] border-red-400 border-[2px] rounded-sm hover:bg-red-400 hover:text-white font-bold"
                onClick={hideSave}
              >
                YES
              </button>
              <button
                className="px-[10px] py-[5px] border-gray-400 border-[2px] rounded-sm hover:bg-gray-400 hover:text-white font-bold"
                onClick={hideSave}
              >
                CANCEL
              </button>
            </div>
          </div>
          <div className="w-[40%] h-[100%] bg-[#34CCF7]">
            <div>
              <div className="flex justify-center ">
                <img
                  className="my-[20px] w-[200px] h-[200px] rounded-[50%]"
                  src={defaultAvatar}
                  alt="avatar"
                />
              </div>
              <div className="text-[50px] flex justify-center text-white font-bold flex-wrap">
                <div className="text-[30px] w-[65%] font-thin">Họ và tên:</div>
                <input
                  className="outline-none bg-[#34CCF7] w-[65%] border-b-[3px]"
                  type="text"
                />
              </div>
              <div className="mb-[60px] text-center text-white">
                <div className="text-[30px] w-[50%] font-thin">Vai trò:</div>
                <input
                  className="outline-none bg-[#34CCF7] w-[65%] border-b-[3px]"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-center mb-[40px]">
              <div
                className="text-white  w-[100%] rounded-[12px] text-center font-bold mb-[12px] text-[30px]
               "
              >
                THÔNG TIN CÁ NHÂN
              </div>
              <div className="border-[4px] border-white w-[80%] rounded-[12px] text-white font-bold ">
                <div className="p-[20px]">
                  <div className="flex items-center py-[10px]">
                    <img className="w-[30px] h-[30px]" src={dob} alt="" />
                    <div className="ml-[10px]">
                      <input
                        className="outline-none bg-[#34CCF7] w-[100%] border-b-[3px]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center py-[10px]">
                    <img className="w-[30px] h-[30px]" src={gender} alt="" />
                    <div className="ml-[10px]">
                      <input
                        className="outline-none bg-[#34CCF7] w-[100%] border-b-[3px]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center py-[10px]">
                    <img className="w-[30px] h-[30px]" src={address} alt="" />
                    <div className="ml-[10px]">
                      <input
                        className="outline-none bg-[#34CCF7] w-[100%] border-b-[3px]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center py-[10px]">
                    <img className="w-[30px] h-[30px]" src={email} alt="" />
                    <div className="ml-[10px]">
                      <input
                        className="outline-none bg-[#34CCF7] w-[100%] border-b-[3px]"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center mb-[40px]">
              <div
                className="text-white  w-[100%] rounded-[12px] text-center font-bold mb-[12px] text-[30px]
               "
              >
                MỤC TIÊU
              </div>
              <div className="border-[4px] border-white w-[80%] rounded-[12px] text-white font-bold ">
                <div className="p-[20px]">
                  {Array.from({ length: target }, (_, i) => (
                    <input
                      key={i}
                      className="outline-none bg-[#34CCF7] w-[100%] border-b-[3px] mt-[5px]"
                      type="text"
                    />
                  ))}

                  <div className="w-[100%] flex justify-end mt-[10px] ">
                    <div className="w-[80px]" onClick={handleAddTarget}>
                      <AddButton />
                    </div>
                  </div>

                  <button>
                    <img src="" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center pb-[80px]">
              <div
                className="text-white  w-[100%] rounded-[12px] text-center font-bold mb-[12px] text-[30px]
               "
              >
                KỸ NĂNG
              </div>
              <div className="border-[4px] border-white w-[80%] rounded-[12px] text-white font-bold ">
                <div className="p-[20px]">
                  <div className="p-[20px]">
                    {Array.from({ length: skill }, (_, i) => (
                      <input
                        key={i}
                        className="outline-none bg-[#34CCF7] w-[100%] border-b-[3px] mt-[5px]"
                        type="text"
                      />
                    ))}

                    <div className="w-[100%] flex justify-end mt-[10px] ">
                      <div className="w-[80px]" onClick={handleAddSkill}>
                        <AddButton />
                      </div>
                    </div>

                    <button>
                      <img src="" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[60%] h-[100%]">
            <div className="mx-[60px] my-[80px] flex justify-between flex-wrap">
              <div className="h-[30%] w-[100%] flex justify-center flex-wrap text-[#569eb2] mb-[60px]">
                <div className="w-[80%] rounded-[12px] text-left font-bold mb-[12px] text-[30px] ">
                  HỌC VẤN
                </div>
                <div className="border-l-[4px] border-l-[#34CCF7] w-[80%] rounded-[6px]  font-bold">
                  <div className="p-[20px]">
                    <div className="p-[20px]">
                      {Array.from({ length: education }, (_, i) => (
                        <div className="flex">
                          <input
                            className="outline-none bg-gray-100 w-[50%] border-b-[3px] border-b-[#34CCF7]"
                            type="text"
                          />
                          Start:
                          <input
                            className="outline-none bg-gray-100 w-[10%] border-b-[3px] border-b-[#34CCF7]"
                            type="text"
                          />
                          End:
                          <input
                            className="outline-none bg-gray-100 w-[10%] border-b-[3px] border-b-[#34CCF7]"
                            type="text"
                          />
                        </div>
                      ))}
                      <div className="w-[100%] flex justify-end mt-[10px] ">
                        <div className="w-[80px]" onClick={handleAddEducation}>
                          <AddButton />
                        </div>
                      </div>

                      <button>
                        <img src="" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[30%] w-[100%] flex justify-center flex-wrap text-[#569eb2] mb-[60px]">
                <div className="w-[80%] rounded-[12px] text-left font-bold mb-[12px] text-[30px]">
                  THÀNH TỰU
                </div>
                <div className="border-l-[4px] border-l-[#34CCF7] w-[80%] rounded-[6px]  font-bold">
                  <div className="p-[20px]">
                    <div className="p-[20px]">
                      {Array.from({ length: archive }, (_, i) => (
                        <input
                          className="outline-none bg-gray-100 w-[60%] border-b-[3px] border-b-[#34CCF7]"
                          type="text"
                        />
                      ))}
                      <div className="w-[100%] flex justify-end mt-[10px] ">
                        <div className="w-[80px]" onClick={handleAddArchive}>
                          <AddButton />
                        </div>
                      </div>
                      <button>
                        <img src="" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[30%] w-[100%] flex justify-center flex-wrap text-[#569eb2] mb-[80px]">
                <div className="w-[80%] rounded-[12px] text-left font-bold mb-[12px] text-[30px]">
                  KINH NGHIỆM LÀM VIỆC
                </div>
                <div className="border-l-[4px] border-l-[#34CCF7] w-[80%] rounded-[6px]  font-bold">
                  <div className="p-[20px]">
                    <div className="p-[20px]">
                      {Array.from({ length: exp }, (_, i) => (
                        <div className="mb-[20px]">
                          <div>
                            <input
                              className="outline-none bg-gray-100 w-[30%] border-b-[3px] border-b-[#34CCF7]"
                              type="text"
                            />
                            Vị trí:
                            <input
                              className="outline-none bg-gray-100 w-[20%] border-b-[3px] border-b-[#34CCF7]"
                              type="text"
                            />
                            Start:
                            <input
                              className="outline-none bg-gray-100 w-[10%] border-b-[3px] border-b-[#34CCF7]"
                              type="text"
                            />
                            End:
                            <input
                              className="outline-none bg-gray-100 w-[10%] border-b-[3px] border-b-[#34CCF7]"
                              type="text"
                            />
                          </div>
                          <div className="flex flex-wrap ml-[20px]">
                            <div className="w-[100%] flex justify-start">
                              Mô tả
                            </div>
                            <input
                              className="outline-none bg-gray-100 w-[60%] border-b-[3px] border-b-[#34CCF7]"
                              type="text"
                            />
                            <input
                              className="outline-none bg-gray-100 w-[60%] border-b-[3px] border-b-[#34CCF7]"
                              type="text"
                            />
                            <input
                              className="outline-none bg-gray-100 w-[60%] border-b-[3px] border-b-[#34CCF7]"
                              type="text"
                            />
                          </div>
                        </div>
                      ))}
                      <div className="w-[100%] flex justify-end mt-[10px] ">
                        <div className="w-[80px]" onClick={handleAddExp}>
                          <AddButton />
                        </div>
                      </div>
                      <button>
                        <img src="" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[30%] w-[100%] flex justify-center flex-wrap text-[#569eb2]">
                <div className="w-[80%] rounded-[12px] text-left font-bold mb-[12px] text-[30px]">
                  HOẠT ĐỘNG
                </div>
                <div className="border-l-[4px] border-l-[#34CCF7] w-[80%] rounded-[6px]  font-bold">
                  <div className="p-[20px]">
                    <div className="p-[20px]">
                      {Array.from({ length: act }, (_, i) => (
                        <input
                          className="outline-none bg-gray-100 w-[60%] border-b-[3px] border-b-[#34CCF7]"
                          type="text"
                        />
                      ))}
                      <div className="w-[100%] flex justify-end mt-[10px] ">
                        <div className="w-[80px]" onClick={handleAddAct}>
                          <AddButton />
                        </div>
                      </div>
                      <button>
                        <img src="" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="fixed right-[80px] bottom-[80px] font-bold text-[20px] px-[20px] bg-[#34CCF7] py-[10px] rounded-[12px] text-white
          hover:bg-cyan-700"
            onClick={showSave}
          >
            Submit
          </button>
        </div>
      </div>
    </Suspense>
  );
};

export default CVDEtail;
