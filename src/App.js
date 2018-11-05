import React, { Component, lazy, Suspense } from 'react';

import './App.css';

/* Code-splitting Menu container */
const Menu = lazy(() => import('./containers/Menu/Menu.js'));

class App extends Component {
    render() {
        return (
            <div className="App">
                <Suspense fallback={<div>Loading...</div>}>
                    <Menu />
                </Suspense>
            </div>
        );
    }
}

export default App;
