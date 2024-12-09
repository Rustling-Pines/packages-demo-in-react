import React from 'react';
import NoCore from './demos/typesafe-locale-translator/translations/no-core';

const App: React.FC = () => {
    return (
        <>
            <div>Hello, React 16.8.0!</div>
            <p>{NoCore()}</p>
        </>
    );
};

export default App;