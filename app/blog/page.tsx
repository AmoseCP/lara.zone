
export default function Blog() {
  return(
    <>
      <div id="__next">
         <div id="theme-hexo" className="font-sans dark:bg-black scroll-smooth">
            <div id="top-nav" className="z-40">
               
               <div id="sticky-nav" className="top-0 duration-300 transition-all  shadow-none fixed bg-none dark:bg-hexo-black-gray dark:text-gray-200 text-black w-full z-20 transform border-transparent dark:border-transparent">
                  <div className="w-full flex justify-between items-center px-4 py-2">
                     <div className="flex">
                        <div className="flex flex-col justify-center items-center cursor-pointer space-y-3" >
                           <div className="font-medium text-lg p-1.5 rounded dark:border-white dark:text-white menu-link transform duration-200">
                               NotionNext BLOG
                           </div>
                        </div>
                     </div>
                     <div className="mr-1 flex justify-end items-center ">
                        <div className="hidden lg:flex">
                           <nav id="nav-mobile" className="leading-8 justify-center font-light w-full flex">
                              <div>
                                 <a target="_self" className=" menu-link pl-2 pr-4 no-underline tracking-widest pb-1" href="/">
                                    <i className="fa-solid fa-house"></i>  Home
                                 </a>
                              </div>
                              <div>
                                 <a target="_self" className=" menu-link pl-2 pr-4 no-underline tracking-widest pb-1" href="/search">
                                    <i className="fas fa-search"></i>  Search
                                 </a>
                              </div>
                              <div>
                                 <a target="_self" className=" menu-link pl-2 pr-4 no-underline tracking-widest pb-1" href="/archive">
                                    <i className="fas fa-archive"></i>  Archive
                                 </a>
                              </div>
                              <div>
                                 <a target="_self" className=" menu-link pl-2 pr-4 no-underline tracking-widest pb-1" href="/links">
                                    <i className="fas fa-link"></i>  友链
                                 </a>
                              </div>
                              <div>
                                 <a target="_blank" className=" menu-link pl-2 pr-4 no-underline tracking-widest pb-1" href="https://github.com/tangly1024/NotionNext">
                                    <i className="fab fa-github"></i>  Github
                                 </a>
                              </div>
                           </nav>
                        </div>
                        <div className="w-8 justify-center items-center h-8 cursor-pointer flex lg:hidden"><i className="fas fa-bars"></i></div>
                        <div title="Search"  className="cursor-pointer dark:text-white hover:bg-black hover:bg-opacity-10 rounded-full w-10 h-10 flex justify-center items-center duration-200 transition-all"><i title="Search" className="fa-solid fa-magnifying-glass"></i></div>
                     </div>
                  </div>
               </div>
               <div id="sidebar-wrapper" className=" block lg:hidden top-0 undefined">
                  <div id="sidebar-drawer" className="-mr-72 max-w-side invisible bg-gray-50 right-0 top-0 dark:bg-hexo-black-gray shadow-black shadow-lg flex flex-col duration-300 fixed h-full overflow-y-scroll scroll-hidden z-30">
                     <div id="side-bar">
                        <div className="h-52 w-full flex justify-center">
                           <div>
                              <div className="justify-center items-center flex hover:rotate-45 py-6 hover:scale-105 dark:text-gray-100  transform duration-200 cursor-pointer"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Tangly" width="80" className="rounded-full"/></div>
                              <nav id="nav" className="leading-8 flex justify-center  dark:text-gray-200 w-full">
                                 <a title="/archive" target="_self" className="py-1.5 my-1 px-2 duration-300 text-base justify-center items-center cursor-pointer" href="/archive">
                                    <div className="w-full items-center justify-center hover:scale-105 duration-200 transform dark:hover:text-indigo-400 hover:text-indigo-600">
                                       <div className="text-center">Article</div>
                                       <div className="text-center font-semibold">
                                          <div className="text-center">12</div>
                                       </div>
                                    </div>
                                 </a>
                                 <a title="/category" target="_self" className="py-1.5 my-1 px-2 duration-300 text-base justify-center items-center cursor-pointer" href="/category">
                                    <div className="w-full items-center justify-center hover:scale-105 duration-200 transform dark:hover:text-indigo-400 hover:text-indigo-600">
                                       <div className="text-center">Category</div>
                                       <div className="text-center font-semibold">
                                          <div className="text-center">3</div>
                                       </div>
                                    </div>
                                 </a>
                                 <a title="/tag" target="_self" className="py-1.5 my-1 px-2 duration-300 text-base justify-center items-center cursor-pointer" href="/tag">
                                    <div className="w-full items-center justify-center hover:scale-105 duration-200 transform dark:hover:text-indigo-400 hover:text-indigo-600">
                                       <div className="text-center">Tags</div>
                                       <div className="text-center font-semibold">
                                          <div className="text-center">8</div>
                                       </div>
                                    </div>
                                 </a>
                              </nav>
                           </div>
                        </div>
                        <nav>
                           <div className="w-full px-8 py-3 text-left dark:bg-hexo-black-gray"><a target="_self" className="font-extralight  flex justify-between pl-2 pr-4 dark:text-gray-200 no-underline tracking-widest pb-1" href="/links"><span className=" transition-all items-center duration-200"><i className="fas fa-link mr-4"></i>友链</span></a></div>
                           <div className="w-full px-8 py-3 text-left dark:bg-hexo-black-gray"><a target="_blank" className="font-extralight  flex justify-between pl-2 pr-4 dark:text-gray-200 no-underline tracking-widest pb-1" href="https://github.com/tangly1024/NotionNext"><span className=" transition-all items-center duration-200"><i className="fab fa-github mr-4"></i>Github</span></a></div>
                           <div className="w-full px-8 py-3 text-left dark:bg-hexo-black-gray"><a target="_self" className="font-extralight  flex justify-between pl-2 pr-4 dark:text-gray-200 no-underline tracking-widest pb-1" href="/archive"><span className=" transition-all items-center duration-200"><i className="fas fa-archive mr-4"></i>Archive</span></a></div>
                           <div className="w-full px-8 py-3 text-left dark:bg-hexo-black-gray"><a target="_self" className="font-extralight  flex justify-between pl-2 pr-4 dark:text-gray-200 no-underline tracking-widest pb-1" href="/search"><span className=" transition-all items-center duration-200"><i className="fas fa-search mr-4"></i>Search</span></a></div>
                           <div className="w-full px-8 py-3 text-left dark:bg-hexo-black-gray"><a target="_self" className="font-extralight  flex justify-between pl-2 pr-4 dark:text-gray-200 no-underline tracking-widest pb-1" href="/category"><span className=" transition-all items-center duration-200"><i className="fas fa-folder mr-4"></i>Category</span></a></div>
                           <div className="w-full px-8 py-3 text-left dark:bg-hexo-black-gray"><a target="_self" className="font-extralight  flex justify-between pl-2 pr-4 dark:text-gray-200 no-underline tracking-widest pb-1" href="/tag"><span className=" transition-all items-center duration-200"><i className="fas fa-tag mr-4"></i>Tags</span></a></div>
                        </nav>
                     </div>
                  </div>
                  <div id="sidebar-drawer-background" className="hidden animate__animated animate__fadeIn fixed top-0 duration-300 left-0 z-20 w-full h-full bg-black/70"></div>
               </div>
            </div>
            <div className="transition ease-in-out duration-700 transform order-first opacity-0 -translate-y-16">
               <header id="header"  className="w-full h-screen relative bg-black">
                  <div className="text-white absolute bottom-0 flex flex-col h-full items-center justify-center w-full ">
                     <div className="font-black text-4xl md:text-5xl shadow-text">NotionNext BLOG</div>
                     <div className="mt-2 h-12 items-center text-center font-medium shadow-text text-lg"><span id="typed"></span></div>
                     <nav id="home-nav-button" className="w-full z-10 md:h-72 md:mt-6 xl:mt-32 px-5 py-2 mt-8 flex flex-wrap md:max-w-6xl space-y-2 md:space-y-0 md:flex justify-center max-h-80 overflow-auto"><a title="知行合一" className="text-center shadow-text w-full sm:w-4/5 md:mx-6 md:w-40 md:h-14 lg:h-20 h-14 justify-center items-center flex border-2 cursor-pointer rounded-lg glassmorphism hover:bg-white hover:text-black duration-200 hover:scale-105 transform" href="/category/%E7%9F%A5%E8%A1%8C%E5%90%88%E4%B8%80">知行合一</a><a title="技术分享" className="text-center shadow-text w-full sm:w-4/5 md:mx-6 md:w-40 md:h-14 lg:h-20 h-14 justify-center items-center flex border-2 cursor-pointer rounded-lg glassmorphism hover:bg-white hover:text-black duration-200 hover:scale-105 transform" href="/category/%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB">技术分享</a><a title="心情随笔" className="text-center shadow-text w-full sm:w-4/5 md:mx-6 md:w-40 md:h-14 lg:h-20 h-14 justify-center items-center flex border-2 cursor-pointer rounded-lg glassmorphism hover:bg-white hover:text-black duration-200 hover:scale-105 transform" href="/category/%E5%BF%83%E6%83%85%E9%9A%8F%E7%AC%94">心情随笔</a></nav>
                     <div className="z-10 cursor-pointer w-full text-center py-4 text-3xl absolute bottom-10 text-white">
                        <div className="opacity-70 animate-bounce text-xs">Start Reading</div>
                        <i className="opacity-70 animate-bounce fas fa-angle-down"></i>
                     </div>
                  </div>
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" id="header-cover" className="header-cover w-full h-screen object-cover object-center "/>
               </header>
            </div>
            <main id="wrapper" className=" bg-hexo-background-gray dark:bg-black w-full py-8 md:px-8 lg:px-24 min-h-screen relative">
               <div id="container-inner" className=" w-full mx-auto lg:flex lg:space-x-4 justify-center relative z-10">
                  <div className=" w-full max-w-4xl h-full overflow-hidden">
                     <div className="transition ease-in-out duration-700 transform order-first opacity-0 translate-y-16">
                        <div className="pt-8">
                           <div id="container" className="w-full">
                              <div className="space-y-6 px-2">
                                 <div className="">
                                    <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800" data-aos-once="false" data-aos-anchor-placement="top-bottom" id="blog-post-card" className="group md:h-56 w-full flex justify-between md:flex-row flex-col-reverse 
                                       overflow-hidden border dark:border-black rounded-xl bg-white dark:bg-hexo-black-gray">
                                       <article className="flex flex-col justify-between lg:p-6 p-4  md:w-7/12 w-full md:max-h-60">
                                          <div>
                                             <header>
                                                <h2><a className="line-clamp-2 replace cursor-pointer text-2xl  leading-tight font-normal text-gray-600 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400" href="/article/guide"><span className="mr-1">📖</span><span className="menu-link ">模板说明</span></a></h2>
                                                <div className="flex mt-2 items-center justify-start flex-wrap dark:text-gray-500 text-gray-400 "><a className="cursor-pointer font-light text-sm menu-link hover:text-indigo-700 dark:hover:text-indigo-400 transform" href="/category/%E7%9F%A5%E8%A1%8C%E5%90%88%E4%B8%80"><i className="mr-1 far fa-folder"></i>知行合一</a></div>
                                             </header>
                                             <main className="line-clamp-2 replace my-3 text-gray-700  dark:text-gray-300 text-sm font-light leading-7">&lt;- 点击标题OPEN按钮打开说明；请检查您的NOTION_PAGE_ID是否成功配置，否则会显示我的默认数据库内容。</main>
                                          </div>
                                          <div>
                                             <div className="text-gray-400 justify-between flex">
                                                <a className="font-light menu-link cursor-pointer text-sm leading-4 mr-3" href="/archive#2021-07"><i className="far fa-calendar-alt mr-1"></i>2021-7-2</a>
                                                <div className="md:flex-nowrap flex-wrap md:justify-start inline-block">
                                                   <div>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-brown_background " href="/tag/%E6%96%87%E5%AD%97">
                                                         <div className="font-light">
                                                             文字  
                                                         </div>
                                                      </a>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-red_background " href="/tag/%E6%8E%A8%E8%8D%90">
                                                         <div className="font-light">
                                                             推荐  
                                                         </div>
                                                      </a>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </article>
                                       <div className="md:w-5/12 overflow-hidden"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" className="h-56 w-full object-cover object-center group-hover:scale-110 duration-500"/></div>
                                    </div>
                                 </div>
                                 <div className="">
                                    <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800" data-aos-once="false" data-aos-anchor-placement="top-bottom" id="blog-post-card" className="group md:h-56 w-full flex justify-between md:flex-row flex-col-reverse md:flex-row-reverse
                                       overflow-hidden border dark:border-black rounded-xl bg-white dark:bg-hexo-black-gray">
                                       <article className="flex flex-col justify-between lg:p-6 p-4  md:w-7/12 w-full md:max-h-60">
                                          <div>
                                             <header>
                                                <h2><a className="line-clamp-2 replace cursor-pointer text-2xl  leading-tight font-normal text-gray-600 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400" href="/article/example-1"><span className="mr-1">1️⃣</span><span className="menu-link ">示例文章</span></a></h2>
                                                <div className="flex mt-2 items-center justify-start flex-wrap dark:text-gray-500 text-gray-400 "><a className="cursor-pointer font-light text-sm menu-link hover:text-indigo-700 dark:hover:text-indigo-400 transform" href="/category/%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB"><i className="mr-1 far fa-folder"></i>技术分享</a></div>
                                             </header>
                                             <main className="line-clamp-2 replace my-3 text-gray-700  dark:text-gray-300 text-sm font-light leading-7">这是示例的文章摘要，摘要内容可被用做搜索，预览。文章列表默认展示概要；若要在列表直接展示文章内容，可在blog.config.js中配置。</main>
                                          </div>
                                          <div>
                                             <div className="text-gray-400 justify-between flex">
                                                <a className="font-light menu-link cursor-pointer text-sm leading-4 mr-3" href="/archive#2021-11"><i className="far fa-calendar-alt mr-1"></i>2021-11-5</a>
                                                <div className="md:flex-nowrap flex-wrap md:justify-start inline-block">
                                                   <div>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-brown_background " href="/tag/%E5%BB%BA%E7%AB%99">
                                                         <div className="font-light">
                                                             建站  
                                                         </div>
                                                      </a>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-brown_background " href="/tag/%E6%96%87%E5%AD%97">
                                                         <div className="font-light">
                                                             文字  
                                                         </div>
                                                      </a>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-red_background " href="/tag/%E6%8E%A8%E8%8D%90">
                                                         <div className="font-light">
                                                             推荐  
                                                         </div>
                                                      </a>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </article>
                                       <div className="md:w-5/12 overflow-hidden"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" className="h-56 w-full object-cover object-center group-hover:scale-110 duration-500"/></div>
                                    </div>
                                 </div>
                                 <div className="">
                                    <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800" data-aos-once="false" data-aos-anchor-placement="top-bottom" id="blog-post-card" className="group md:h-56 w-full flex justify-between md:flex-row flex-col-reverse 
                                       overflow-hidden border dark:border-black rounded-xl bg-white dark:bg-hexo-black-gray">
                                       <article className="flex flex-col justify-between lg:p-6 p-4  md:w-7/12 w-full md:max-h-60">
                                          <div>
                                             <header>
                                                <h2><a className="line-clamp-2 replace cursor-pointer text-2xl  leading-tight font-normal text-gray-600 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400" href="/article/example-2"><span className="mr-1">2️⃣</span><span className="menu-link ">加锁文章 - 密码123456</span></a></h2>
                                                <div className="flex mt-2 items-center justify-start flex-wrap dark:text-gray-500 text-gray-400 "><a className="cursor-pointer font-light text-sm menu-link hover:text-indigo-700 dark:hover:text-indigo-400 transform" href="/category/%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB"><i className="mr-1 far fa-folder"></i>技术分享</a></div>
                                             </header>
                                             <main className="line-clamp-2 replace my-3 text-gray-700  dark:text-gray-300 text-sm font-light leading-7">本文需要输入密码才可访问，密码: 123456</main>
                                          </div>
                                          <div>
                                             <div className="text-gray-400 justify-between flex">
                                                <a className="font-light menu-link cursor-pointer text-sm leading-4 mr-3" href="/archive#2021-11"><i className="far fa-calendar-alt mr-1"></i>2021-11-5</a>
                                                <div className="md:flex-nowrap flex-wrap md:justify-start inline-block">
                                                   <div>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-pink_background " href="/tag/%E5%BC%80%E5%8F%91">
                                                         <div className="font-light">
                                                             开发  
                                                         </div>
                                                      </a>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-pink_background " href="/tag/%E5%B7%A5%E5%85%B7">
                                                         <div className="font-light">
                                                             工具  
                                                         </div>
                                                      </a>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </article>
                                       <div className="md:w-5/12 overflow-hidden"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" className="h-56 w-full object-cover object-center group-hover:scale-110 duration-500"/></div>
                                    </div>
                                 </div>
                                 <div className="">
                                    <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800" data-aos-once="false" data-aos-anchor-placement="top-bottom" id="blog-post-card" className="group md:h-56 w-full flex justify-between md:flex-row flex-col-reverse md:flex-row-reverse
                                       overflow-hidden border dark:border-black rounded-xl bg-white dark:bg-hexo-black-gray">
                                       <article className="flex flex-col justify-between lg:p-6 p-4  md:w-7/12 w-full md:max-h-60">
                                          <div>
                                             <header>
                                                <h2><a className="line-clamp-2 replace cursor-pointer text-2xl  leading-tight font-normal text-gray-600 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400" href="/article/example-3"><span className="mr-1">3️⃣</span><span className="menu-link ">EMPTY-ARTICLE</span></a></h2>
                                                <div className="flex mt-2 items-center justify-start flex-wrap dark:text-gray-500 text-gray-400 "><a className="cursor-pointer font-light text-sm menu-link hover:text-indigo-700 dark:hover:text-indigo-400 transform" href="/category/%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB"><i className="mr-1 far fa-folder"></i>技术分享</a></div>
                                             </header>
                                             <main className="line-clamp-2 replace my-3 text-gray-700  dark:text-gray-300 text-sm font-light leading-7">仅供列表展示、文章无内容，仅供列表展示、文章无内容，仅供列表展示、文章无内容。</main>
                                          </div>
                                          <div>
                                             <div className="text-gray-400 justify-between flex">
                                                <a className="font-light menu-link cursor-pointer text-sm leading-4 mr-3" href="/archive#2021-07"><i className="far fa-calendar-alt mr-1"></i>2021-7-2</a>
                                                <div className="md:flex-nowrap flex-wrap md:justify-start inline-block">
                                                   <div>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-orange_background " href="/tag/%E6%96%B0%E9%97%BB">
                                                         <div className="font-light">
                                                             新闻  
                                                         </div>
                                                      </a>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-red_background " href="/tag/%E6%8E%A8%E8%8D%90">
                                                         <div className="font-light">
                                                             推荐  
                                                         </div>
                                                      </a>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </article>
                                       <div className="md:w-5/12 overflow-hidden"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" className="h-56 w-full object-cover object-center group-hover:scale-110 duration-500"/></div>
                                    </div>
                                 </div>
                                 <div className="">
                                    <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800" data-aos-once="false" data-aos-anchor-placement="top-bottom" id="blog-post-card" className="group md:h-56 w-full flex justify-between md:flex-row flex-col-reverse 
                                       overflow-hidden border dark:border-black rounded-xl bg-white dark:bg-hexo-black-gray">
                                       <article className="flex flex-col justify-between lg:p-6 p-4  md:w-7/12 w-full md:max-h-60">
                                          <div>
                                             <header>
                                                <h2><a className="line-clamp-2 replace cursor-pointer text-2xl  leading-tight font-normal text-gray-600 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400" href="/article/example-4"><span className="mr-1">4️⃣</span><span className="menu-link ">绑定成功测试</span></a></h2>
                                                <div className="flex mt-2 items-center justify-start flex-wrap dark:text-gray-500 text-gray-400 "><a className="cursor-pointer font-light text-sm menu-link hover:text-indigo-700 dark:hover:text-indigo-400 transform" href="/category/%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB"><i className="mr-1 far fa-folder"></i>技术分享</a></div>
                                             </header>
                                             <main className="line-clamp-2 replace my-3 text-gray-700  dark:text-gray-300 text-sm font-light leading-7">如果您的Notion数据库已经修改了内容，发现网站内容还是旧的，说明绑定NotionPageID失败了，请重新检查Vercel后台是否正确配置好ID，并尝试重新部署。</main>
                                          </div>
                                          <div>
                                             <div className="text-gray-400 justify-between flex">
                                                <a className="font-light menu-link cursor-pointer text-sm leading-4 mr-3" href="/archive#2021-07"><i className="far fa-calendar-alt mr-1"></i>2021-7-2</a>
                                                <div className="md:flex-nowrap flex-wrap md:justify-start inline-block">
                                                   <div>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-pink_background " href="/tag/%E5%81%A5%E5%BA%B7">
                                                         <div className="font-light">
                                                             健康  
                                                         </div>
                                                      </a>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-red_background " href="/tag/%E6%8E%A8%E8%8D%90">
                                                         <div className="font-light">
                                                             推荐  
                                                         </div>
                                                      </a>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </article>
                                       <div className="md:w-5/12 overflow-hidden"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" className="h-56 w-full object-cover object-center group-hover:scale-110 duration-500"/></div>
                                    </div>
                                 </div>
                                 <div className="">
                                    <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800" data-aos-once="false" data-aos-anchor-placement="top-bottom" id="blog-post-card" className="group md:h-56 w-full flex justify-between md:flex-row flex-col-reverse md:flex-row-reverse
                                       overflow-hidden border dark:border-black rounded-xl bg-white dark:bg-hexo-black-gray">
                                       <article className="flex flex-col justify-between lg:p-6 p-4  md:w-7/12 w-full md:max-h-60">
                                          <div>
                                             <header>
                                                <h2><a className="line-clamp-2 replace cursor-pointer text-2xl  leading-tight font-normal text-gray-600 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400" href="/article/example-5"><span className="mr-1">5️⃣</span><span className="menu-link ">空白文章</span></a></h2>
                                                <div className="flex mt-2 items-center justify-start flex-wrap dark:text-gray-500 text-gray-400 "><a className="cursor-pointer font-light text-sm menu-link hover:text-indigo-700 dark:hover:text-indigo-400 transform" href="/category/%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB"><i className="mr-1 far fa-folder"></i>技术分享</a></div>
                                             </header>
                                             <main className="line-clamp-2 replace my-3 text-gray-700  dark:text-gray-300 text-sm font-light leading-7">仅供列表展示、文章无内容，仅供列表展示、文章无内容，仅供列表展示、文章无内容，仅供列表展示、文章无内容，仅供列表展示、文章无内容，仅供列表展示、文章无内容，仅供列表展示、文章无内容，仅供列表展示、文章无内容，仅供列表展示、文章无内容，仅供列表展示、文章无内容，仅供列表展示、文章无内容，仅供列表展示、文章无内容</main>
                                          </div>
                                          <div>
                                             <div className="text-gray-400 justify-between flex">
                                                <a className="font-light menu-link cursor-pointer text-sm leading-4 mr-3" href="/archive#2021-07"><i className="far fa-calendar-alt mr-1"></i>2021-7-2</a>
                                                <div className="md:flex-nowrap flex-wrap md:justify-start inline-block">
                                                   <div>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-pink_background " href="/tag/%E5%81%A5%E5%BA%B7">
                                                         <div className="font-light">
                                                             健康  
                                                         </div>
                                                      </a>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-red_background " href="/tag/%E6%8E%A8%E8%8D%90">
                                                         <div className="font-light">
                                                             推荐  
                                                         </div>
                                                      </a>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </article>
                                       <div className="md:w-5/12 overflow-hidden"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" className="h-56 w-full object-cover object-center group-hover:scale-110 duration-500"/></div>
                                    </div>
                                 </div>
                                 <div className="">
                                    <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800" data-aos-once="false" data-aos-anchor-placement="top-bottom" id="blog-post-card" className="group md:h-56 w-full flex justify-between md:flex-row flex-col-reverse 
                                       overflow-hidden border dark:border-black rounded-xl bg-white dark:bg-hexo-black-gray">
                                       <article className="flex flex-col justify-between lg:p-6 p-4  md:w-7/12 w-full md:max-h-60">
                                          <div>
                                             <header>
                                                <h2><a className="line-clamp-2 replace cursor-pointer text-2xl  leading-tight font-normal text-gray-600 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400" href="/article/example-6"><span className="mr-1">6️⃣</span><span className="menu-link ">空白文章</span></a></h2>
                                                <div className="flex mt-2 items-center justify-start flex-wrap dark:text-gray-500 text-gray-400 "><a className="cursor-pointer font-light text-sm menu-link hover:text-indigo-700 dark:hover:text-indigo-400 transform" href="/category/%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB"><i className="mr-1 far fa-folder"></i>技术分享</a></div>
                                             </header>
                                             <main className="line-clamp-2 replace my-3 text-gray-700  dark:text-gray-300 text-sm font-light leading-7">仅供列表展示、文章无内容</main>
                                          </div>
                                          <div>
                                             <div className="text-gray-400 justify-between flex">
                                                <a className="font-light menu-link cursor-pointer text-sm leading-4 mr-3" href="/archive#2021-07"><i className="far fa-calendar-alt mr-1"></i>2021-7-2</a>
                                                <div className="md:flex-nowrap flex-wrap md:justify-start inline-block">
                                                   <div>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-green_background " href="/tag/%E9%87%91%E9%92%B1">
                                                         <div className="font-light">
                                                             金钱  
                                                         </div>
                                                      </a>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-red_background " href="/tag/%E6%8E%A8%E8%8D%90">
                                                         <div className="font-light">
                                                             推荐  
                                                         </div>
                                                      </a>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </article>
                                       <div className="md:w-5/12 overflow-hidden"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" className="h-56 w-full object-cover object-center group-hover:scale-110 duration-500"/></div>
                                    </div>
                                 </div>
                                 <div className="">
                                    <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800" data-aos-once="false" data-aos-anchor-placement="top-bottom" id="blog-post-card" className="group md:h-56 w-full flex justify-between md:flex-row flex-col-reverse md:flex-row-reverse
                                       overflow-hidden border dark:border-black rounded-xl bg-white dark:bg-hexo-black-gray">
                                       <article className="flex flex-col justify-between lg:p-6 p-4  md:w-7/12 w-full md:max-h-60">
                                          <div>
                                             <header>
                                                <h2><a className="line-clamp-2 replace cursor-pointer text-2xl  leading-tight font-normal text-gray-600 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400" href="/article/example-7"><span className="mr-1">7️⃣</span><span className="menu-link ">空白文章</span></a></h2>
                                                <div className="flex mt-2 items-center justify-start flex-wrap dark:text-gray-500 text-gray-400 "><a className="cursor-pointer font-light text-sm menu-link hover:text-indigo-700 dark:hover:text-indigo-400 transform" href="/category/%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB"><i className="mr-1 far fa-folder"></i>技术分享</a></div>
                                             </header>
                                             <main className="line-clamp-2 replace my-3 text-gray-700  dark:text-gray-300 text-sm font-light leading-7">仅供列表展示、文章无内容;
                                                这里写文章的前言：
                                                一个简单的开头,简述这篇文章讨论的问题、目标、人物、背景是什么？并简述你给出的答案。
                                             </main>
                                          </div>
                                          <div>
                                             <div className="text-gray-400 justify-between flex">
                                                <a className="font-light menu-link cursor-pointer text-sm leading-4 mr-3" href="/archive#2021-07"><i className="far fa-calendar-alt mr-1"></i>2021-7-2</a>
                                                <div className="md:flex-nowrap flex-wrap md:justify-start inline-block">
                                                   <div>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-gray_background " href="/tag/Python">
                                                         <div className="font-light">
                                                             Python  
                                                         </div>
                                                      </a>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-pink_background " href="/tag/%E5%81%A5%E5%BA%B7">
                                                         <div className="font-light">
                                                             健康  
                                                         </div>
                                                      </a>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </article>
                                       <div className="md:w-5/12 overflow-hidden"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" className="h-56 w-full object-cover object-center group-hover:scale-110 duration-500"/></div>
                                    </div>
                                 </div>
                                 <div className="">
                                    <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800" data-aos-once="false" data-aos-anchor-placement="top-bottom" id="blog-post-card" className="group md:h-56 w-full flex justify-between md:flex-row flex-col-reverse 
                                       overflow-hidden border dark:border-black rounded-xl bg-white dark:bg-hexo-black-gray">
                                       <article className="flex flex-col justify-between lg:p-6 p-4  md:w-7/12 w-full md:max-h-60">
                                          <div>
                                             <header>
                                                <h2><a className="line-clamp-2 replace cursor-pointer text-2xl  leading-tight font-normal text-gray-600 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400" href="/article/example-8"><span className="mr-1">8️⃣</span><span className="menu-link ">空白文章</span></a></h2>
                                                <div className="flex mt-2 items-center justify-start flex-wrap dark:text-gray-500 text-gray-400 "><a className="cursor-pointer font-light text-sm menu-link hover:text-indigo-700 dark:hover:text-indigo-400 transform" href="/category/%E5%BF%83%E6%83%85%E9%9A%8F%E7%AC%94"><i className="mr-1 far fa-folder"></i>心情随笔</a></div>
                                             </header>
                                             <main className="line-clamp-2 replace my-3 text-gray-700  dark:text-gray-300 text-sm font-light leading-7">仅供列表展示、文章无内容</main>
                                          </div>
                                          <div>
                                             <div className="text-gray-400 justify-between flex">
                                                <a className="font-light menu-link cursor-pointer text-sm leading-4 mr-3" href="/archive#2021-07"><i className="far fa-calendar-alt mr-1"></i>2021-7-2</a>
                                                <div className="md:flex-nowrap flex-wrap md:justify-start inline-block">
                                                   <div>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-gray_background " href="/tag/Python">
                                                         <div className="font-light">
                                                             Python  
                                                         </div>
                                                      </a>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-pink_background " href="/tag/%E5%81%A5%E5%BA%B7">
                                                         <div className="font-light">
                                                            健康
                                                         </div>
                                                      </a>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </article>
                                       <div className="md:w-5/12 overflow-hidden"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" className="h-56 w-full object-cover object-center group-hover:scale-110 duration-500"/></div>
                                    </div>
                                 </div>
                                 <div className="">
                                    <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800" data-aos-once="false" data-aos-anchor-placement="top-bottom" id="blog-post-card" className="group md:h-56 w-full flex justify-between md:flex-row flex-col-reverse md:flex-row-reverse
                                       overflow-hidden border dark:border-black rounded-xl bg-white dark:bg-hexo-black-gray">
                                       <article className="flex flex-col justify-between lg:p-6 p-4  md:w-7/12 w-full md:max-h-60">
                                          <div>
                                             <header>
                                                <h2><a className="line-clamp-2 replace cursor-pointer text-2xl  leading-tight font-normal text-gray-600 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400" href="/article/example-9"><span className="mr-1">9️⃣</span><span className="menu-link ">空白文章</span></a></h2>
                                                <div className="flex mt-2 items-center justify-start flex-wrap dark:text-gray-500 text-gray-400 "><a className="cursor-pointer font-light text-sm menu-link hover:text-indigo-700 dark:hover:text-indigo-400 transform" href="/category/%E5%BF%83%E6%83%85%E9%9A%8F%E7%AC%94"><i className="mr-1 far fa-folder"></i>心情随笔</a></div>
                                             </header>
                                             <main className="line-clamp-2 replace my-3 text-gray-700  dark:text-gray-300 text-sm font-light leading-7">仅供列表展示、文章无内容</main>
                                          </div>
                                          <div>
                                             <div className="text-gray-400 justify-between flex">
                                                <a className="font-light menu-link cursor-pointer text-sm leading-4 mr-3" href="/archive#2021-07"><i className="far fa-calendar-alt mr-1"></i>2021-7-2</a>
                                                <div className="md:flex-nowrap flex-wrap md:justify-start inline-block">
                                                   <div>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-gray_background " href="/tag/Python">
                                                         <div className="font-light">
                                                           Python
                                                         </div>
                                                      </a>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-pink_background " href="/tag/%E5%81%A5%E5%BA%B7">
                                                         <div className="font-light">
                                                            健康
                                                         </div>
                                                      </a>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </article>
                                       <div className="md:w-5/12 overflow-hidden"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" className="h-56 w-full object-cover object-center group-hover:scale-110 duration-500"/></div>
                                    </div>
                                 </div>
                                 <div className="">
                                    <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800" data-aos-once="false" data-aos-anchor-placement="top-bottom" id="blog-post-card" className="group md:h-56 w-full flex justify-between md:flex-row flex-col-reverse 
                                       overflow-hidden border dark:border-black rounded-xl bg-white dark:bg-hexo-black-gray">
                                       <article className="flex flex-col justify-between lg:p-6 p-4  md:w-7/12 w-full md:max-h-60">
                                          <div>
                                             <header>
                                                <h2><a className="line-clamp-2 replace cursor-pointer text-2xl  leading-tight font-normal text-gray-600 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400" href="/article/example-10"><span className="mr-1">🔟</span><span className="menu-link ">空白文章，标题注意不应该过长，否则影响显示效果，这是一个示范</span></a></h2>
                                                <div className="flex mt-2 items-center justify-start flex-wrap dark:text-gray-500 text-gray-400 "><a className="cursor-pointer font-light text-sm menu-link hover:text-indigo-700 dark:hover:text-indigo-400 transform" href="/category/%E5%BF%83%E6%83%85%E9%9A%8F%E7%AC%94"><i className="mr-1 far fa-folder"></i>心情随笔</a></div>
                                             </header>
                                             <main className="line-clamp-2 replace my-3 text-gray-700  dark:text-gray-300 text-sm font-light leading-7">仅供列表展示、文章无内容、文章描述摘要过长时会被截断，仅显示前面几行内容，根据主题决定。这是一个示范</main>
                                          </div>
                                          <div>
                                             <div className="text-gray-400 justify-between flex">
                                                <a className="font-light menu-link cursor-pointer text-sm leading-4 mr-3" href="/archive#2021-07"><i className="far fa-calendar-alt mr-1"></i>2021-7-2</a>
                                                <div className="md:flex-nowrap flex-wrap md:justify-start inline-block">
                                                   <div>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-gray_background " href="/tag/Python">
                                                         <div className="font-light">
                                                         Python
                                                         </div>
                                                      </a>
                                                      <a className="cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
                                                         mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
                                                         text-gray-600 hover:shadow-xl dark:border-gray-400 notion-pink_background " href="/tag/%E5%81%A5%E5%BA%B7">
                                                         <div className="font-light">
                                                          健康
                                                         </div>
                                                      </a>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </article>
                                       <div className="md:w-5/12 overflow-hidden"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" className="h-56 w-full object-cover object-center group-hover:scale-110 duration-500"/></div>
                                    </div>
                                 </div>
                                 <div className="">
                                    <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800" data-aos-once="false" data-aos-anchor-placement="top-bottom" id="blog-post-card" className="group md:h-56 w-full flex justify-between md:flex-row flex-col-reverse md:flex-row-reverse
                                       overflow-hidden border dark:border-black rounded-xl bg-white dark:bg-hexo-black-gray">
                                       <article className="flex flex-col justify-between lg:p-6 p-4  md:w-7/12 w-full md:max-h-60">
                                          <div>
                                             <header>
                                                <h2><a className="line-clamp-2 replace cursor-pointer text-2xl  leading-tight font-normal text-gray-600 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400" href="/article/01cc4bd3-fe3b-456b-a08e-e961d83c7999"><span className="menu-link "></span></a></h2>
                                             </header>
                                             <main className="line-clamp-2 replace my-3 text-gray-700  dark:text-gray-300 text-sm font-light leading-7">无slug\category\tag\tittle空白文章；此文章的路径为notion页面id</main>
                                          </div>
                                          <div>
                                             <div className="text-gray-400 justify-between flex">
                                                <a className="font-light menu-link cursor-pointer text-sm leading-4 mr-3" href="/archive#2021-07"><i className="far fa-calendar-alt mr-1"></i>2021-7-2</a>
                                                <div className="md:flex-nowrap flex-wrap md:justify-start inline-block">
                                                   <div> </div>
                                                </div>
                                             </div>
                                          </div>
                                       </article>
                                       <div className="md:w-5/12 overflow-hidden"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" className="h-56 w-full object-cover object-center group-hover:scale-110 duration-500"/></div>
                                    </div>
                                 </div>
                              </div>
                              <div className="mt-10 mb-5  flex justify-center items-end font-medium text-black duration-500 dark:text-gray-300 py-3 space-x-2"><a rel="prev" className="invisible pb-0.5 border-white dark:border-indigo-700 hover:border-indigo-400 dark:hover:border-indigo-400 w-6 text-center cursor-pointer duration-200  hover:font-bold" href="/page/0"><i className="fas fa-angle-left"></i></a><a className="font-bold bg-indigo-400 dark:bg-indigo-500 text-white  border-white dark:border-indigo-700 dark:hover:border-indigo-400 cursor-pointer pb-0.5 w-6 text-center font-light hover:font-bold" href="/">1</a><a rel="next" className="invisible pb-0.5 border-b border-indigo-300 dark:border-indigo-700 hover:border-indigo-400 dark:hover:border-indigo-400 w-6 text-center cursor-pointer duration-500  hover:font-bold" href="/page/2"><i className="fas fa-angle-right"></i></a></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div id="sideRight" className="space-y-4 lg:w-80 pt-4 lg:pt-4">
                     <div className="space-y-4 lg:w-80 pt-4 lg:pt-4">
                        <section className="card shadow-md hover:shadow-md dark:text-gray-300 border dark:border-black rounded-xl lg:p-6 p-4 bg-white dark:bg-hexo-black-gray lg:duration-100">
                           <div className="justify-center items-center flex py-6 dark:text-gray-100  transform duration-200 cursor-pointer"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Tangly" width="120" className="rounded-full"/></div>
                           <div className="font-medium text-center text-xl pb-4">Tangly</div>
                           <div className="text-sm text-center">一个普通的干饭人🍚</div>
                           <nav id="nav" className="leading-8 flex justify-center  dark:text-gray-200 w-full">
                              <a title="/archive" target="_self" className="py-1.5 my-1 px-2 duration-300 text-base justify-center items-center cursor-pointer" href="/archive">
                                 <div className="w-full items-center justify-center hover:scale-105 duration-200 transform dark:hover:text-indigo-400 hover:text-indigo-600">
                                    <div className="text-center">Article</div>
                                    <div className="text-center font-semibold">
                                       <div className="text-center">12</div>
                                    </div>
                                 </div>
                              </a>
                              <a title="/category" target="_self" className="py-1.5 my-1 px-2 duration-300 text-base justify-center items-center cursor-pointer" href="/category">
                                 <div className="w-full items-center justify-center hover:scale-105 duration-200 transform dark:hover:text-indigo-400 hover:text-indigo-600">
                                    <div className="text-center">Category</div>
                                    <div className="text-center font-semibold">
                                       <div className="text-center">3</div>
                                    </div>
                                 </div>
                              </a>
                              <a title="/tag" target="_self" className="py-1.5 my-1 px-2 duration-300 text-base justify-center items-center cursor-pointer" href="/tag">
                                 <div className="w-full items-center justify-center hover:scale-105 duration-200 transform dark:hover:text-indigo-400 hover:text-indigo-600">
                                    <div className="text-center">Tags</div>
                                    <div className="text-center font-semibold">
                                       <div className="text-center">8</div>
                                    </div>
                                 </div>
                              </a>
                           </nav>
                           <div className="w-full justify-center flex-wrap flex">
                              <div className="space-x-3 text-xl text-gray-600 dark:text-gray-300 "><a target="_blank" rel="noreferrer" title="github" href="https://github.com/tangly1024"><i className="transform hover:scale-125 duration-150 fab fa-github dark:hover:text-indigo-400 hover:text-indigo-600"></i></a><a target="_blank" rel="noreferrer" title="email" href="/cdn-cgi/l/email-protection#a0cdc1c9cce0d4c1cec7ccd9919092948ec3cfcd"><i className="transform hover:scale-125 duration-150 fas fa-envelope dark:hover:text-indigo-400 hover:text-indigo-600"></i></a><a target="_blank" rel="noreferrer" title="RSS" href="/feed"><i className="transform hover:scale-125 duration-150 fas fa-rss dark:hover:text-indigo-400 hover:text-indigo-600"></i></a></div>
                           </div>
                        </section>
                     </div>
                     <div>
                        <section className="card shadow-md hover:shadow-md dark:text-gray-300 border dark:border-black rounded-xl lg:p-6 p-4 bg-white dark:bg-hexo-black-gray lg:duration-100">
                           <div className=" mb-2 px-1 flex flex-nowrap justify-between">
                              <div><i className="mr-2 fas fas fa-history"></i>Latest posts</div>
                           </div>
                           <a title="模板说明" className="my-3 flex" href="/article/guide">
                              <div className="w-20 h-14 overflow-hidden relative"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" className="object-cover w-full h-full"/></div>
                              <div className="dark:text-gray-400  text-sm overflow-x-hidden hover:text-indigo-600 px-2 duration-200 w-full rounded  hover:text-indigo-400 cursor-pointer items-center flex">
                                 <div>
                                    <div className="line-clamp-2 menu-link">模板说明</div>
                                    <div className="text-gray-500">2024-3-4</div>
                                 </div>
                              </div>
                           </a>
                           <a title="示例文章" className="my-3 flex" href="/article/example-1">
                              <div className="w-20 h-14 overflow-hidden relative"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" className="object-cover w-full h-full"/></div>
                              <div className="dark:text-gray-400  text-sm overflow-x-hidden hover:text-indigo-600 px-2 duration-200 w-full rounded  hover:text-indigo-400 cursor-pointer items-center flex">
                                 <div>
                                    <div className="line-clamp-2 menu-link">示例文章</div>
                                    <div className="text-gray-500">2024-3-4</div>
                                 </div>
                              </div>
                           </a>
                           <a title="空白文章，标题注意不应该过长，否则影响显示效果，这是一个示范" className="my-3 flex" href="/article/example-10">
                              <div className="w-20 h-14 overflow-hidden relative"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" className="object-cover w-full h-full"/></div>
                              <div className="dark:text-gray-400  text-sm overflow-x-hidden hover:text-indigo-600 px-2 duration-200 w-full rounded  hover:text-indigo-400 cursor-pointer items-center flex">
                                 <div>
                                    <div className="line-clamp-2 menu-link">空白文章，标题注意不应该过长，否则影响显示效果，这是一个示范</div>
                                    <div className="text-gray-500">2024-2-5</div>
                                 </div>
                              </div>
                           </a>
                           <a title="空白文章" className="my-3 flex" href="/article/example-9">
                              <div className="w-20 h-14 overflow-hidden relative"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" className="object-cover w-full h-full"/></div>
                              <div className="dark:text-gray-400  text-sm overflow-x-hidden hover:text-indigo-600 px-2 duration-200 w-full rounded  hover:text-indigo-400 cursor-pointer items-center flex">
                                 <div>
                                    <div className="line-clamp-2 menu-link">空白文章</div>
                                    <div className="text-gray-500">2024-2-5</div>
                                 </div>
                              </div>
                           </a>
                           <a title="空白文章" className="my-3 flex" href="/article/example-8">
                              <div className="w-20 h-14 overflow-hidden relative"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" className="object-cover w-full h-full"/></div>
                              <div className="dark:text-gray-400  text-sm overflow-x-hidden hover:text-indigo-600 px-2 duration-200 w-full rounded  hover:text-indigo-400 cursor-pointer items-center flex">
                                 <div>
                                    <div className="line-clamp-2 menu-link">空白文章</div>
                                    <div className="text-gray-500">2024-2-5</div>
                                 </div>
                              </div>
                           </a>
                           <a title="空白文章" className="my-3 flex" href="/article/example-7">
                              <div className="w-20 h-14 overflow-hidden relative"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" className="object-cover w-full h-full"/></div>
                              <div className="dark:text-gray-400  text-sm overflow-x-hidden hover:text-indigo-600 px-2 duration-200 w-full rounded  hover:text-indigo-400 cursor-pointer items-center flex">
                                 <div>
                                    <div className="line-clamp-2 menu-link">空白文章</div>
                                    <div className="text-gray-500">2024-2-5</div>
                                 </div>
                              </div>
                           </a>
                        </section>
                     </div>
                     <div>
                        <section id="announcement-wrapper" className="dark:text-gray-300 border dark:border-black rounded-xl lg:p-6 p-4 bg-white dark:bg-hexo-black-gray">
                           <div><i className="mr-2 fas fa-bullhorn"></i>Announcement</div>
                           <div id="announcement-content">
                              <div id="notion-article" className="mx-auto overflow-hidden text-center">
                                 <main className="notion light-mode notion-page notion-block-571f2540eb8a42ee84f585f1583430ae">
                                    <div className="notion-viewport"></div>
                                    <div className="notion-text notion-block-35f4e0ba2de44f0a8ae58078d9c18e06"><b>🎉NotionNext 4.1已经上线🎉</b></div>
                                    <div className="notion-text notion-block-8a24990d0be2477dbbdb997c823c6469"><b>-- 感谢您的支持 ---</b></div>
                                    <div className="notion-text notion-block-871da2f901bb41cb8a2080b354987aad">👏欢迎更新体验👏</div>
                                    <div className="notion-text notion-block-c338fd2a3504454495a5b6c8618ffa5d"><a target="_blank" rel="noopener noreferrer" className="notion-link" href="https://docs.tangly1024.com/about">操作手册</a></div>
                                    <div className="notion-text notion-block-607efe33179c4af6840a28e186608c03"><a target="_blank" rel="noopener noreferrer" className="notion-link" href="https://docs.tangly1024.com/article/latest">更新记录</a></div>
                                    <div className="notion-text notion-block-b6bd944725b94ff581b0428e3b9504a8"><a target="_blank" rel="noopener noreferrer" className="notion-link" href="https://docs.tangly1024.com/article/how-to-question">联系我们</a></div>
                                    <div className="notion-blank notion-block-1ffc5438b80c43a38325bdd54219a89d"> </div>
                                 </main>
                              </div>
                           </div>
                        </section>
                     </div>
                     <div className="sticky top-20"></div>
                  </div>
               </div>
            </main>
            <div className="block lg:hidden">
               <div className="fixed top-0 right-0 z-40 ">
                  <div className=" -mr-72 animate__slideOutRight shadow-card animate__animated animate__faster w-60 duration-200 fixed right-12 bottom-12 rounded py-2 bg-white dark:bg-gray-900"></div>
               </div>
               <div id="right-drawer-background" className="hidden fixed top-0 left-0 z-30 w-full h-full"></div>
            </div>
            <div className="invisible opacity-0  duration-300 transition-all bottom-12 right-1 fixed justify-end z-20  text-white bg-indigo-500 dark:bg-hexo-black-gray rounded-sm">
               <div className="justify-center  flex flex-col items-center cursor-pointer">
                  <div className="justify-center items-center w-7 h-7 text-center transform hover:scale-105 duration-200"><i id="darkModeButton" className="fa-moon fas text-xs"></i></div>
                  <div className="flex space-x-1 items-center justify-center transform hover:scale-105 duration-200 w-7 h-7 text-center"><i className="fas fa-comment text-xs"></i></div>
                  <div className="space-x-1 items-center justify-center transform hover:scale-105 duration-200 w-7 h-auto pb-1 text-center">
                     <div title="Top"><i className="fas fa-arrow-up text-xs"></i></div>
                     <div className="text-xs hidden lg:block"></div>
                  </div>
               </div>
            </div>
            <footer className="relative z-10 dark:bg-black flex-shrink-0 bg-hexo-light-gray justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm p-6">
               <i className="fas fa-copyright"></i> 
               <span>
                  <i className="mx-1 animate-pulse fas fa-heart"></i> <a href="https://blog.tangly1024.com" className="underline font-bold  dark:text-gray-300 ">Tangly</a>.<br/><span className="hidden busuanzi_container_site_pv"><i className="fas fa-eye"></i><span className="px-1 busuanzi_value_site_pv"> </span>  </span><span className="pl-2 hidden busuanzi_container_site_uv"><i className="fas fa-users"></i> <span className="px-1 busuanzi_value_site_uv"> </span> </span>
                  <h1 className="text-xs pt-4 text-light-400 dark:text-gray-400">
                     NotionNext BLOG 一个普通的干饭人🍚
                  </h1>
                  <p className="text-xs pt-2 text-light-500 dark:text-gray-500">
                     Powered by 
                     <a href="https://github.com/tangly1024/NotionNext" className="dark:text-gray-300">
                        NotionNext 4.3.1
                     </a>
                     .
                  </p>
               </span>
               <br/>
            </footer>
         </div>
      </div>
    </>
  )
}

