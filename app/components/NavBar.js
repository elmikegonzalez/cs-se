"use client";
import { useState, useEffect } from "react";
import Stack, { onEntryChange } from "../../lib/index";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

const toggleTheme = () => document.body.classList.toggle("dark");

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [entry, setEntry] = useState({});
  const [loading, SetLoading] = useState(true);

  const getContent = async () => {
    const entry = await Stack.getElementByTypeWtihRefs(
      "menu",
      [""]
    );
    console.log("menu:", entry[0][0]);/**/
    setEntry(entry[0][0]);
    SetLoading(false);
  };

  useEffect(() => {
    onEntryChange(getContent);
  }, []);

  if (loading) {
    return;
  }

  return (


      <header className="bg-white dark:bg-evil shadow-md max-w-full mx-auto">
        <nav
            className="flex items-center justify-between p-8 lg:px-8 bg-transparent bg-opacity-35 dark:bg-evil w-full z-20 top-0 start-0 border-b-2 border-evil dark:border-evil">
          <div className="flex lg:flex-1">
            <img src="../images/BajaCraft_logo800x800dark.png" alt="" className="max-w-24 dark:hidden inline-block"/>
            <img src="../images/BajaCraft_logo800x800white.png" alt="" className="max-w-24 hidden dark:inline-block"/>
          </div>
          <div className="flex lg:hidden">
            <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-between rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6 dark:text-white" aria-hidden="true"/>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-14 dark:text-white">

            {/* ----- ITTERATE OVER ARRAY FROM CONTENTSTACK ----- */}
            {entry.menu_items?.map((item) => (
                <a
                    key={item.menu_item.title}
                    href={item.menu_item.href}
                    className="text-xl font-medium leading-6 text-gray-900"
                    {...item?.menu_item?.$?.title}
                >
                  {item.menu_item.title}
                </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
                href="https://www.contentstack.com/docs/developers"
                target="__blank"
            >
              <InformationCircleIcon
                  className="h-6 w-6 flex-none text-neutral-800 dark:text-white"
              />
            </a>
          </div>
          <button type="button"
                  className="text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 w-10 h-10 inline-flex items-center justify-center">
            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor"
                 viewBox="0 0 20 20">
              <path
                  d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
            </svg>
          </button>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
              <button type="button" data-dropdown-toggle="language-dropdown-menu"
                      className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg className="w-5 h-5 rounded-full me-3" aria-hidden="true" viewBox="0 0 3900 3900">
                  <path fill="#b22234" d="M0 0h7410v3900H0z"/>
                  <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" strokeWidth="300"/>
                  <path fill="#3c3b6e" d="M0 0h2964v2100H0z"/>
                  <g fill="#fff">
                    <g id="d">
                      <g id="c">
                        <g id="e">
                          <g id="b">
                            <path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"/>
                            <use y="420"/>
                            <use y="840"/>
                            <use y="1260"/>
                          </g>
                          <use y="1680"/>
                        </g>
                        <use x="247" y="210"/>
                      </g>
                      <use x="494"/>
                    </g>
                    <use x="988"/>
                    <use x="1976"/>
                    <use x="2470"/>
                  </g>
                </svg>
                English (US)
              </button>
              <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                  id="language-dropdown-menu">
                <ul className="py-2 font-medium" role="none">
                  <li>
                    <a href="#"
                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                       role="menuitem">
                      <div className="inline-flex items-center">
                        <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full me-2"
                             xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512">
                          <g fillRule="evenodd">
                            <g strokeWidth="1pt">
                              <path fill="#bd3d44"
                                    d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                    transform="scale(3.9385)"/>
                              <path fill="#fff"
                                    d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                    transform="scale(3.9385)"/>
                            </g>
                            <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"/>
                            <path fill="#fff"
                                  d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                                  transform="scale(3.9385)"/>
                          </g>
                        </svg>
                        English (US)
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#"
                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                       role="menuitem">
                      <div className="inline-flex items-center">
                        <svg className="h-3.5 w-3.5 rounded-full me-2" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512">
                          <path fill="#ffce00" d="M0 341.3h512V512H0z"/>
                          <path d="M0 0h512v170.7H0z"/>
                          <path fill="#d00" d="M0 170.7h512v170.6H0z"/>
                        </svg>
                        Deutsch
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#"
                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                       role="menuitem">
                      <div className="inline-flex items-center">
                        <svg className="h-3.5 w-3.5 rounded-full me-2" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512">
                          <g fillRule="evenodd" strokeWidth="1pt">
                            <path fill="#fff" d="M0 0h512v512H0z"/>
                            <path fill="#009246" d="M0 0h170.7v512H0z"/>
                            <path fill="#ce2b37" d="M341.3 0H512v512H341.3z"/>
                          </g>
                        </svg>
                        Italiano
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <button data-collapse-toggle="navbar-language" type="button"
                      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      aria-controls="navbar-language" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
              </button>
            </div>
            <button data-collapse-toggle="navbar-sticky" type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 text-evil dark:text-white">
            <label form="check"
                   className="bg-lightGray px-1 py-1 w-[52px] rounded-full has-[:checked]:pl-6 transition-all">
              <div className="w-6 h-6 rounded-full bg-white"></div>
              <input onChange={event => toggleTheme()} id="check" type="checkbox" hidden/>
            </label>
          </div>
        </nav>
        <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10"/>
          <Dialog.Panel
              className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-evil">
            <div className="flex items-center justify-between">
              {/* ----- LOGO FROM CONTENTSTACK FOR MOBILE MENU ----- */}
              <a href="#" className="-m-1.5 p-1.5">
                {/*<img className="h-8 w-auto" src={entry?.logo?.url} alt=""/>*/}
                <img src="../images/BajaCraft_logo800x800dark.png" alt=""
                     className="max-w-20 dark:hidden inline-block"/>
                <img src="../images/BajaCraft_logo800x800white.png" alt=""
                     className="max-w-20 hidden dark:inline-block"/>
              </a>
              <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
                  onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6 dark:text-evil" aria-hidden="true "/>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 ">
                <div className="space-y-2 py-6 dark:text-white">

                  {/* ----- ITTERATE OVER ARRAY FROM CONTENTSTACK ----- */}
                  {entry.menu_items?.map((item) => (
                      <a
                          key={item.menu_item.title}
                          href={item.menu_item.href}
                          className="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          {...item?.menu_item?.$?.title}
                      >
                        {item.menu_item.title}
                      </a>
                  ))}
                  <a
                      key={"docs"}
                      href="https://www.contentstack.com/docs/developers" target="__blank"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Documentation
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
  );
}
