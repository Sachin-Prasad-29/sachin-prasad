import React from 'react';
interface Props {
    handleCount: (value: number) => void;
}
const ShowLess = ({ handleCount }: Props) => {
    return (
        <div
            style={{
                width: '40px',
                color: 'lightblue',
                cursor: 'pointer',
                margin: '0 auto',
            }}
            onClick={(e) => {
                console.log('hello');
                handleCount(5);
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                />
            </svg>
        </div>
    );
};

export default ShowLess;
