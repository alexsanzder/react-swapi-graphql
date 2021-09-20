import React, { useState } from 'react';
import Link from 'next/link';
import Search from './Search';
import { useRouter } from 'next/router';
import { useHistory } from '@/context/HistoryContext';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const Header = () => {
  const router = useRouter();
  const { history } = useHistory();

  const [isScrolled, setIsScrolled] = useState(false);
  useScrollPosition(
    ({ currPos }) => {
      setIsScrolled(currPos.y >= 80);
    },
    [isScrolled],
    undefined,
    true,
    100
  );

  return (
    <header
      className={`z-50 w-full ${
        isScrolled ? 'fixed bg-black shadow-xl' : 'absolute bg-transparent'
      }`}
    >
      <div className="sm:px-6 max-w-6xl px-4 mx-auto">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 mr-5">
            <Link href="/" aria-label="Star Wars">
              <a className="block">
                <svg
                  className="w-auto h-12"
                  viewBox="0 0 201 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-testid="logo"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.88205 28.1575V42.2284H41.6749C46.4164 42.2284 52.4742 37.8047 52.4742 30.4867C52.4742 27.5435 53.5899 25.6236 50.1613 21.7305L44.9436 15.4926C41.9538 12.6785 45.3008 12.6785 47.8121 12.6785H65.0352V42.2284H78.6942V12.6785H97.1035V0.0236206H37.4912C30.2384 0.0236206 26.6919 7.05014 26.8915 10.7086C27.0921 14.367 27.7591 18.9698 33.786 24.4991C39.2838 29.5412 31.0641 28.1575 30.2384 28.1575H0.88205V28.1575ZM127.307 0.0236206H105.271L92.9187 42.2295H106.666L108.896 36.3197H123.4L125.553 42.2295H139.019L127.307 0.0236206V0.0236206ZM111.965 26.1876L116.707 10.7086L121.17 26.1876H111.965V26.1876ZM182.532 28.1575C177.233 28.1575 177.233 26.1876 177.233 26.1876C181.774 26.1876 185.8 19.5126 185.8 12.6785C185.8 5.84439 179.185 0.0236206 173.884 0.0236206H144.239V42.2295H159.302V28.1586C159.302 28.1586 165.716 35.7569 169.063 38.8525C172.411 41.9481 172.689 42.2295 177.232 42.2295H200.878V28.1586C200.88 28.1575 187.832 28.1575 182.532 28.1575V28.1575ZM168.864 18.3079H159.304V10.7086H168.864C173.248 10.7086 174.006 18.3079 168.864 18.3079ZM0.88205 47.5753H16.2928L20.1976 61.6483L23.8234 47.5753H40.0014L44.1851 61.6483L48.3699 47.5753H61.7577L49.4845 89.7911H37.2123L31.8347 69.8083L25.7758 89.7911H13.2247L0.88205 47.5753ZM93.3851 47.8189H71.3499L58.9984 90.0236H72.7444L74.9757 84.115H89.4803L91.6333 90.0236H105.1L93.3851 47.8189ZM78.0449 73.9817L82.7864 58.5027L87.249 73.9817H78.0449ZM182.81 60.2413C180.302 60.2413 177.567 60.5371 180.558 63.3502L185.777 69.5892C189.204 73.4823 189.149 75.1052 189.149 78.0506C189.149 85.3674 181.974 89.7911 177.233 89.7911L144.275 90.0147C139.734 90.0147 139.456 89.7344 136.108 86.6388C132.762 83.5432 126.346 75.9439 126.346 75.9439V90.0147H111.285V47.81H140.93C146.23 47.81 152.846 53.6319 152.846 60.4648C152.846 67.3 148.82 73.974 144.277 73.974C144.277 73.974 146.275 76.0006 149.622 76.0006C152.97 76.0006 165.857 76.014 165.857 76.014C166.682 76.014 174.9 77.3977 169.404 72.3555C163.377 66.8262 162.71 62.2256 162.509 58.5672C162.308 54.9088 165.444 47.5764 172.693 47.5764H200.882V60.2424H182.81V60.2413V60.2413ZM135.908 66.0932H126.345V58.4938H135.908C140.292 58.4938 141.049 66.0932 135.908 66.0932Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </Link>
          </div>
          {router.pathname !== '/' ? (
            <>
              <div className="flex flex-1 px-6">
                <Search />
              </div>
              <nav className="flex flex-wrap justify-end">
                <ul className="flex flex-wrap items-center flex-grow font-medium">
                  {history?.length
                    ? history.map((character) => (
                        <li key={character.name}>
                          <Link href={character.url}>
                            <a className="hover:text-black dark:text-yellow-400 dark:hover:text-gray-100 flex items-center px-4 py-2 text-gray-600 transition duration-150 ease-in-out">
                              {character.name}
                            </a>
                          </Link>
                        </li>
                      ))
                    : null}
                </ul>
              </nav>
            </>
          ) : null}
          {router.pathname !== '/characters' ? (
            <div className="flex flex-wrap items-center justify-end">
              <Link href="/characters">
                <a className="hover:bg-yellow-400 hover:text-black px-6 py-3 ml-6 text-yellow-400 border border-yellow-400 rounded-lg">
                  Explore Characters
                </a>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
