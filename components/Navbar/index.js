import {
  List,
  SignOut,
  Coins,
  Lifebuoy,
  HouseSimple,
  ChartPieSlice,
  Robot,
} from 'phosphor-react'
import Link from 'next/link'
import { useRef } from 'react'

export default function navbar() {
  
  const sideBarRef = useRef()
  
  function toogleSideBar() {
    sideBarRef.current.classList.toggle('-translate-x-full')
  }

  return (
    <div className="max-h-screen md:sticky md:top-0 z-50 text-white">
      {/* MOBILE SIDEBAR */}
      <div className="bg-purple-800 flex justify-between p-2 items-center sticky top-0 z-30">
        <a className="block text-white font-extrabold dark:text-dw ">CoolBar</a>
        <button
          
          className="rounded focus:bg-purple-800"
          onClick={toogleSideBar}
        >
          <List size={32} />
        </button>
      </div>
      {/* MAIN SIDEBAR */}
      <div
        ref={sideBarRef}
        className="bg-purple-800 w-48 space-y-10 px-5 py-7  absolute inset-y-0 left-0 transform -translate-x-full
        md:relative md:translate-x-0 z-50 transition duration-200 ease-in-out flex flex-col child:transition-all md:max-h-screen md:min-h-screen md:sticky md:top-0"
      >
        <a href="#" className="w-8 h-8 text-3xl font-extrabold">
          CoolBar
        </a>

        <nav className="flex flex-col grow space-y-3">
          <Link href="/home" passHref>
            <a className="flex flex-row py-2.5 px-4 transition duration-200 rounded items-center space-x-3 hover:bg-blue-600 hover:text-white">
              <HouseSimple size={20} />
              <p>Home</p>
            </a>
          </Link>

          <Link href="/stats">
            <div className="flex flex-row py-2.5 px-4 transition duration-200 rounded items-center space-x-3 hover:bg-blue-600 hover:text-white">
              <ChartPieSlice size={20} />
              <p>Stats</p>
            </div>
          </Link>
          <Link href="/donate" passHref>
            <a className="flex flex-row py-2.5 px-4 transition duration-200 rounded items-center space-x-3 hover:bg-blue-600 hover:text-white">
              <Coins size={20} />
              <p>Donate</p>
            </a>
          </Link>
          <Link href="/feedback" passHref>
            <a className="flex flex-row py-2.5 px-4 transition duration-200 rounded items-center space-x-3 hover:bg-blue-600 hover:text-white">
              <Lifebuoy size={20} />
              <p>Help</p>
            </a>
          </Link>
        </nav>

        <button
          onClick={console.log('signout')}
          color="error"
          className="flex flex-row w-full items-center  rounded py-2.5 my-8 space-x-2 hover:bg-red-500 hover:text-white transition duration-200"
        >
          <SignOut className=" mx-2" size={20} />
          <a>Logout</a>
        </button>
      </div>
    </div>
  )
}
