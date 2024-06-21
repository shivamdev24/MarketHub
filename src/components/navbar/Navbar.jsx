import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronRightIcon, ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Brand from '../../assets/Brand.png'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'MarketHub Home ', to: '/', current: true },
  { name: 'Trending', to: '/', current: false },
  { name: 'Top Categories', to: '/', current: false },
  { name: 'All Product', to: '/', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-100 sticky top-0 shadow z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900  hover:text-gray-900 ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex justify-center ml-8 items-center">
                <Link to="/">
                  <img className="h-20 w-auto" src={Brand} alt="Your Company" />
                </Link>
              </div>
              <div className="hidden  sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Search...."
                      className="p-2 w-80 rounded-l outline-none"
                    />
                    <button className="bg-orange-600 hover:bg-orange-500 text-white rounded-r px-4">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>

                      <UserCircleIcon className="h-8 w-8 rounded-full text-gray-400 bg-white" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-500"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-200"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/login"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              " gap-x-2 px-4 py-2 text-sm text-gray-700 flex"
                            )}
                          >
                            <p>Sign In</p>
                            <ChevronRightIcon
                              className="h-6 w-4"
                              aria-hidden="true"
                            />
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/signup"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "gap-3 px-4 py-2 text-sm flex text-gray-700"
                            )}
                          >
                            <p>Sign Up</p>
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <div className="px-4 text-orange-600">
                  <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden h-auto w-auto">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="Link"
                  to={item.to}
                  className="text-gray-900 hover:text-gray-700 hover:bg-white',
                    'block rounded-md px-3 py-2 text-base font-medium"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
