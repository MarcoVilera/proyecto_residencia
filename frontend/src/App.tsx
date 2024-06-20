import React from 'react';

const App: React.FC = () => {
    async function fetchData() {
        const response = await fetch('/api');
        const data = await response.json();
        console.log(data);
    }
    fetchData();
    return (
        <div>
            <h1>Hello, React with TypeScript and Vite!</h1>
        </div>
    );
};

export default App;