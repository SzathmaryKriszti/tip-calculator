import React from 'react';
import './App.css';
import TipCalculator from "./components/Tip-Calculator/TipCalculator";
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <section className={'container-md mt-5'}>
                <div className={'col-3'}>
                    <TipCalculator/>
                </div>
        </section>
    );
}

export default App;
