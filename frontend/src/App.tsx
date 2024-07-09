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
      </div>
    );
};

export default App;