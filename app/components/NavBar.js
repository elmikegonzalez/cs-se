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
    console.log("menu:", entry[0][0]);
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
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          {/*<a href="/" className="-m-1.5 p-1.5">*/}
          {/* ----- LOGO IMAGE SERVED FROM CONTENTSTACK ----- */}
          {/*<img*/}
          {/*  className="h-8 w-auto"*/}
          {/*  src={entry?.logo?.url}*/}
          {/*  alt=""*/}
          {/*  {...entry?.$?.logo}*/}
          {/*/>*/}
          {/*</a>*/}
          <img src="../images/BajaCraft_logo800x800dark.png" alt="" className="max-w-20 dark:hidden inline-block"/>
          <img src="../images/BajaCraft_logo800x800white.png" alt="" className="max-w-20 hidden dark:inline-block"/>
        </div>
        <div className="flex lg:hidden">
          <button
              type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6 dark:text-white" aria-hidden="true"/>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 text-evil dark:text-white">

          {/* ----- ITTERATE OVER ARRAY FROM CONTENTSTACK ----- */}
          {entry.menu_items?.map((item) => (
              <a
                  key={item.menu_item.title}
                  href={item.menu_item.href}
                  className="text-sm font-semibold leading-6 text-gray-900"
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
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 w-10 h-10 inline-flex items-center justify-center">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
               viewBox="0 0 20 20">
            <path
                d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
          </svg>
        </button>
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
              <img src="../images/BajaCraft_logo800x800dark.png" alt="" className="max-w-20 dark:hidden inline-block"/>
              <img src="../images/BajaCraft_logo800x800white.png" alt="" className="max-w-20 hidden dark:inline-block"/>
            </a>
            <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
                onClick={() => setMobileMenuOpen(false)}
            >
            <XMarkIcon className="h-6 w-6 dark:text-evil" aria-hidden="true " />
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
                  href="https://www.contentstack.com/docs/developers"  target="__blank"
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
