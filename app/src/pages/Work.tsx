import React from 'react';
export const Work: React.FC = () => {

    const electron = (window as any).electron;

    console.log('Home Directory:', electron.homeDir());
    return (
        <div>
            <h1>Work Page</h1>
            <p>This is the work page.</p>
            <p>Your home directory is: {electron.homeDir()}</p>
            {/* <p>Operating System: {electron.os()}</p> */}
            <p>Check the console for the home directory log.</p>
        </div>
    );
}