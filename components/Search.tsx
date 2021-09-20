import React, { useRef, useState } from 'react';
import { useSearch } from '@/context/SearchContext';
import { useRouter } from 'next/router';

const Search = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { setSearchInput: setSearchType } = useSearch();

  const router = useRouter();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value && value !== '') {
      setInputValue(value);
      setSearchType(value);
      router.push('/characters');
    } else onClear();
  };

  const onClear = () => {
    setInputValue('');
    setSearchType('');
  };

  const onFocus = () => {
    inputRef?.current?.focus();
  };

  return (
    <div className="relative flex w-full">
      <input
        className="focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-0 w-full px-3 py-2 placeholder-gray-600 bg-transparent border border-yellow-400 rounded-lg"
        type="search"
        placeholder="What character do you want to meet?"
        value={inputValue}
        onChange={handleInputChange}
        ref={inputRef}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-yellow-400">
        {inputValue && inputValue.trim().length > 0 ? (
          <button type="button" aria-label="clear button" onClick={onClear}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        ) : (
          <button
            className="cursor-text"
            type="button"
            aria-label="focus input button"
            onClick={onFocus}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
