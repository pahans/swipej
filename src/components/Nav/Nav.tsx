import Logo from './logo.svg';
import Image from 'next/image';

function NavBar({ userName }: { userName: string }) {
  return (
    <nav className="flex flex-wrap items-center justify-between py-3 bg-black md:mb-3 w-full">
      <div className="container mx-auto flex flex-wrap items-center justify-between max-w-screen-md">
        <div className="flex justify-between lg:justify-start lg:w-auto px-4">
          <a className="" href="#">
            <Image src={Logo} height={35} width={165} alt="swipe jobs logo" />
          </a>
        </div>
        <div className="justify-end text-white px-4">
          <span className="ml-2">{userName}</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
