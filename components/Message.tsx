import React from 'react';

import Loader from './Loader';

export enum MessageType {
  Error = 'ERROR',
  Nada = 'NADA',
  Loader = 'LOADER',
}

interface MessageProps {
  message?: string;
  type: MessageType;
  className?: string;
}

const Message = ({
  message,
  type,
  className = 'h-32',
}: MessageProps): JSX.Element => {
  return (
    <div
      className={`${className} flex items-center justify-center select-none`}
    >
      <div className="flex flex-col items-center justify-center w-full mx-auto space-y-2 text-gray-600 opacity-50">
        {type === 'ERROR' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : type === 'NADA' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : type === 'LOADER' ? (
          <Loader className="w-5 h-5 bg-gray-400" />
        ) : null}
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Message;
