import React from 'react';
import './App.css';
import TipCalculator from "./components/Tip-Calculator/TipCalculator";
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <div className={'d-flex align-items-center justify-content-center mt-5'}>
            <section className={'mt-5'}>
                <TipCalculator/>
            </section>
        </div>
    );
}

export default App;
