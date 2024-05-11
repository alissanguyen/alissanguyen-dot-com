'use client'
import { AlertType } from "@/types";
import * as React from "react";

interface Props extends React.PropsWithChildren {
  message: string;
  type: AlertType;
}

const Alert: React.FC<Props> = (props) => {
  return (
    <div className="Alert mb-6">
      {props.type === AlertType.SUCCESS ? (
        <div className="bg-green-100 p-5 w-full rounded-lg">
          <div className="flex justify-between">
            <div className="flex space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="flex-none fill-current text-green-500 h-4 w-4"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" />
              </svg>
              <div className="flex-1 leading-tight text-sm text-green-700 font-medium">
                {props.message}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-red-100 p-5 w-full rounded-lg">
          <div className="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="flex-none fill-current text-red-500 h-4 w-4"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z" />
            </svg>
            <div className="leading-tight flex flex-col space-y-2">
              <div className="flex-1 leading-tight text-sm text-red-600">
                {props.message}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
