import * as Babel from '@babel/standalone';
import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useDataContext } from './DataContext';
import { primeComponents } from './PrimeComponents';


function addComponentToLocalStorage(transformedCode: any) {
    const id = localStorage.getItem("id");
    const currentComponentName = localStorage.getItem("currentComponentName");

    const newComp = {
        id,
        name: currentComponentName,
        component: transformedCode
    };

    // Retrieve the previous components and parse them as an array
    let prevComponents = JSON.parse(localStorage.getItem("components") || "[]");

    // Find the index of the component with the same id, if it exists
    const index = prevComponents.findIndex((comp: any) => comp.id === id);

    if (index !== -1) {
        // Update the existing component
        prevComponents[index] = newComp;
    } else {
        // Add the new component to the list if no matching id was found
        prevComponents.push(newComp);
    }

    // Save the updated components array back to localStorage as a string
    localStorage.setItem("components", JSON.stringify(prevComponents));
}

const useDynamicComponentCreatorHook = (jsxString: string) => {

    function transformJSX(jsxString: string) {
        const transformedCode: string = Babel.transform(jsxString, {
            presets: ['react']
        }).code;

        return transformedCode;
    }

    function createComponentFunction(transformedCode: string) {
        if(!transformedCode.includes('function') ) {
            return function() {
                return new Function('React', 'useState', 'useDataContext', 'uc', 'useRef', 'useImperativeHandle', 'useCallback', 'useMemo', 'useEffect', `return ${transformedCode}`)(React, useState, useDataContext, primeComponents, useRef, useImperativeHandle, useCallback, useMemo, useEffect);
            }
        }

        const functionBody = `
            return ${transformedCode}
        `;
        try {
            const ComponentFunction = new Function('React', 'useState', 'useDataContext', 'uc', 'useRef', 'useImperativeHandle', 'useCallback', 'useMemo', 'useEffect',  functionBody);
            const CreatedComponent = ComponentFunction(React, useState, useDataContext, primeComponents, useRef, useImperativeHandle, useCallback, useMemo, useEffect);
            return CreatedComponent;
        } catch (error: any) {
            return `<span>There is a problem with your code ${error?.message}</span>`;
        }
    }

    function createComponent() {
        const transformedCode = transformJSX(jsxString);

        //Specific for POC to store the component in the context
        addComponentToLocalStorage(transformedCode);
        //End

        const createdComponent = createComponentFunction(transformedCode);
        return createdComponent;
    }

    function createComponentFromTransformedCode(transformedCode: string) {
        const createdComponent = createComponentFunction(transformedCode);
        return createdComponent;
    }

    return {transformJSX, createComponentFunction, createComponent, createComponentFromTransformedCode};
}

export default useDynamicComponentCreatorHook;