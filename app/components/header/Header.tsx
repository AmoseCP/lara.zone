import styles from "./Header.module.css"
import Image from "next/image"

export default async function Header() {
  return (
    <div className={styles.background}>
      <div id="theme-hexo" className="font-sans dark:bg-black scroll-smooth">
        <div id="top-nav" className="z-40">
          <div id="sticky-nav" className="top-0 duration-300 transition-all  shadow-none fixed bg-none dark:bg-hexo-black-gray dark:text-gray-200 text-black w-full z-20 transform border-transparent dark:border-transparent">
            <div className="w-full flex justify-between items-center px-4 py-2">
              <div className="flex">
                <div className="flex flex-col justify-center items-center cursor-pointer space-y-3" >
                  <div className="font-medium text-lg p-1.5 rounded dark:border-white dark:text-white menu-link transform duration-200">
                    Lara Zone
                  </div>
                </div>
              </div>
              <div className="mr-1 flex justify-end items-center ">
                <div className="hidden lg:flex">
                  <nav id="nav-mobile" className="leading-8 justify-center font-light w-full flex">
                    <div>
                      <a target="_self" className=" menu-link pl-2 pr-4 no-underline tracking-widest pb-1" href="/">
                        <i className="fa-solid fa-house"></i>首页
                      </a>
                    </div>
                    <div>
                      <a target="_self" className=" menu-link pl-2 pr-4 no-underline tracking-widest pb-1" href="/lara">
                        <i className="fas fa-search"></i>Lara
                      </a>
                    </div>
                    <div>
                      <a target="_self" className=" menu-link pl-2 pr-4 no-underline tracking-widest pb-1" href="/about">
                        <i className="fas fa-archive"></i>关于本站
                      </a>
                    </div>
                    <div>
                      <a target="_self" className=" menu-link pl-2 pr-4 no-underline tracking-widest pb-1" href="/links">
                        <i className="fas fa-link"></i>友情链接
                      </a>
                    </div>
                    <div>
                      <a target="_blank" className=" menu-link pl-2 pr-4 no-underline tracking-widest pb-1" href="https://github.com/AmoseCP/lara.zone">
                        <i className="fab fa-github"></i>Github
                      </a>
                    </div>
                  </nav>
                </div>
                <div className="w-8 justify-center items-center h-8 cursor-pointer flex lg:hidden"><i className="fas fa-bars"></i></div>
                <div title="Search" className="cursor-pointer dark:text-white hover:bg-black hover:bg-opacity-10 rounded-full w-10 h-10 flex justify-center items-center duration-200 transition-all"><i title="Search" className="fa-solid fa-magnifying-glass"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}