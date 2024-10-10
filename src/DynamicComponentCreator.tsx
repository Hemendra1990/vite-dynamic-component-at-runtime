
import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useDataContext } from './DataContext';
import * as Babel from '@babel/standalone';
import { primeComponents } from './PrimeComponents';
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

                console.log({transformedCode});
                

                if(!transformedCode.includes('function') ) {
                    setDynamicComponent(() => {
                        return function() {
                            return new Function('React', 'useState', 'useDataContext', 'uc', 'useRef', 'useImperativeHandle', 'useCallback', 'useMemo', `return ${transformedCode}`)(React, useState, useDataContext, primeComponents, useRef, useImperativeHandle, useCallback, useMemo);
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
                    const ComponentFunction = new Function('React', 'useState', 'useDataContext', 'uc', 'useRef', 'useImperativeHandle', 'useCallback', 'useMemo',  functionBody);
                    const CreatedComponent = ComponentFunction(React, useState, useDataContext, primeComponents, useRef, useImperativeHandle, useCallback, useMemo);
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

export default DynamicComponentCreator;