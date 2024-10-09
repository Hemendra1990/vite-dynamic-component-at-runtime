import React, { useState, useEffect } from 'react';
import { useDataContext } from './DataContext';
import * as Babel from '@babel/standalone';


const DynamicComponentCreator = ({ jsxString }: { jsxString: string}) => {
    const [DynamicComponent, setDynamicComponent] = useState<any>(null);
    const [syntaxError, setSyntaxError] = useState<string>('');

    useEffect(() => {
        const createComponent = () => {
            try {
                // Transform JSX to JavaScript
                const transformedCode: string = Babel.transform(jsxString, {
                    presets: ['react']
                }).code;

                if(!transformedCode.includes('function') ) {
                    setDynamicComponent(() => {
                        return function() {
                            return new Function('React', 'useState', 'useDataContext', `return ${transformedCode}`)(React, useState, useDataContext);
                        }
                    });
                    setSyntaxError('');
                    return;
                }

                // Create a function from the transformed code
                const functionBody = `
                    return ${transformedCode}
                `;
                try {
                    const ComponentFunction = new Function('React', 'useState', 'useDataContext', functionBody);
                    const CreatedComponent = ComponentFunction(React, useState, useDataContext);
                    setDynamicComponent(() => CreatedComponent);
                } catch (error) {
                    setDynamicComponent(() => '<span>There is a problem with your code ${error?.message}</span>');
                }
                setSyntaxError('');
            } catch (error: any) {
                //console.error('Error creating component:', error);
                setSyntaxError(error?.message);
            }
        };
        createComponent();
    }, [jsxString]);

    if(syntaxError.length > 0) {
        return <div>{syntaxError}</div>
    }


    {JSON.stringify(DynamicComponent)}
    return DynamicComponent ? <DynamicComponent /> : null;
};

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