function NavBar({ userName }: { userName: string }) {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500 mb-3 w-full">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="relative flex justify-between lg:w-auto  px-4  lg:justify-start">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
            href="#"
          >
            Swipe Jobs
          </a>
        </div>
        <div className="justify-end text-white" id="example-navbar-warning">
          <span className="ml-2">{userName}</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
