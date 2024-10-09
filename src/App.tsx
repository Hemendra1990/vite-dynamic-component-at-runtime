import React, { useState, useEffect } from 'react';
import DynamicComponentCreator from './DynamicComponentCreator';

// Usage
const App = () => {
    const [renderComponent, setRenderComponent] = useState<boolean>(false);
    const [jsxCode, setJsxCode] = useState<string>('');
    const jsxString = `
    function MyInput() {
      const [name, setName] = useState("Hello")
      return <>
        name : {name}
        <input type="text" onChange={(e)=>{console.log(e.target.value); setName(e.target.value)}} />
      </>
    }
  `;

    return (
        <div>
            <h1>Kevit's `Dynamic Component Creator</h1>
            <div>
                <textarea
                    value={jsxCode}
                    onChange={(e) => {setJsxCode(e.target.value); setRenderComponent(false)}}
                    rows="5"
                    cols="50"
                />
            </div>

            {renderComponent && <DynamicComponentCreator jsxString={jsxCode} />}

            <button onClick={() => setRenderComponent(true)}>Create Component</button>
        </div>
    );
};

export default App;