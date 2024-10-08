import React, { useState, useEffect } from 'react';

const DynamicComponentCreator = ({ jsxString }) => {
  const [DynamicComponent, setDynamicComponent] = useState(null);

  useEffect(() => {
    const createComponent = () => {
      try {
        // Transform JSX to JavaScript
        const transformedCode = Babel.transform(jsxString, {
          presets: ['react']
        }).code;

        // Create a function from the transformed code
        const functionBody = `
          return ${transformedCode}
          //return MyCounter;
        `;
        const ComponentFunction = new Function('React', 'useState', functionBody);

        // Create the component
        const CreatedComponent = ComponentFunction(React, useState);
        setDynamicComponent(() => CreatedComponent);
      } catch (error) {
        console.error('Error creating component:', error);
      }
    };

    createComponent();
  }, [jsxString]);

  return DynamicComponent ? <DynamicComponent /> : null;
};

// Usage
const App = () => {

    const [jsxCode, setJsxCode] = useState(null);

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
      <h1>Dynamic Component Creator</h1>

      <div>
        <textarea
          value={jsxCode}
          onChange={(e) => setJsxCode(e.target.value)}
          rows="5"
          cols="50"
        />
      </div>

      <DynamicComponentCreator jsxString={jsxCode || jsxString} />
    </div>
  );
};

export default App;