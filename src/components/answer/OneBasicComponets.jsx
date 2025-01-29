import { useEffect, useState } from "react";

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) setSidebar(true);
      else setSidebar(false);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebar]);

  return (
    <div className="flex">
      <div className="transition-all delay-100 md:w-96 w-20 h-screen">
        {sidebar ? <Bar /> : <Menu />}
      </div>
      <div className="w-full bg-green-600 h-screen">Content</div>
    </div>
  );
};

function Bar() {
  return (
    <div>
      <div>Icon</div>
      <div>Icon</div>
      <div>Icon</div>
    </div>
  );
}

function Menu() {
  return (
    <div className="mt-5 mx-3 flex justify-between items-center">
      <div className="overflow-hidden">
        <button className="px-5 py-3 rounded-2xl bg-blue-800 text-white cursor-pointer delay-100 hover:bg-blue-600 hover:outline-0">
          welcome
        </button>
      </div>

      <Avatar />
    </div>
  );
}

function Avatar() {
  return (
    <div className="inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex-shrink-0">
      <span className="font-medium text-gray-600 dark:text-gray-300">A</span>
    </div>
  );
}

export default SideBar;
