import React, { Component, lazy, Suspense } from 'react';

import './App.css';

/* Code-splitting Menu container */
const Menu = lazy(() => import('./containers/Menu/Menu.js'));

const App = () => {
    return (
        <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
                {/* Menu is always rendered */}
                <Menu />
            </Suspense>
        </div>
    );
};

export default App;
