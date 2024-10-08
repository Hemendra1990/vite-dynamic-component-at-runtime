import React, { useState, useEffect } from 'react';

const DynamicComponentCreator = ({ jsxString }: { jsxString: string }) => {
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
          ${transformedCode}
          return React.createElement(MyInput);
        `;
        const ComponentFunction = new Function('React', 'useState', functionBody);

        // Create the component
        const CreatedComponent = () => ComponentFunction(React, useState);
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
  const jsxString = `
    function MyInput() {
      const [name, setName] = useState("Hello")
      return React.createElement(
        React.Fragment,
        null,
        "name : ",
        name,
        React.createElement("input", {
          type: "text",
          onChange: (e) => {
            console.log(e.target.value);
          }
        })
      );
    }
  `;

  return (
    <div>
      <h1>Dynamic Component Creator</h1>
      <DynamicComponentCreator jsxString={jsxString} />
    </div>
  );
};

export default App;