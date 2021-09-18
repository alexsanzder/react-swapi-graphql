import React from 'react';

interface LoaderType {
  className?: string;
}

const Loader = ({
  className = 'w-5 h-5 bg-gray-400',
}: LoaderType): JSX.Element => {
  return (
    <div className="animate-pulse flex flex-col">
      <div className="flex items-center justify-center space-x-2">
        <div className={`rounded-full ${className}`}></div>
        <div className={`rounded-full ${className}`}></div>
        <div className={`rounded-full ${className}`}></div>
      </div>
      <span className="mt-1 text-sm text-gray-400">Loading...</span>
    </div>
  );
};

export default Loader;
