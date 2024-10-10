import * as Babel from '@babel/standalone';
import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useDataContext } from './DataContext';
import { primeComponents } from './PrimeComponents';

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
        const createdComponent = createComponentFunction(transformedCode);
        return createdComponent;
    }

    return {transformJSX, createComponentFunction, createComponent};
}

export default useDynamicComponentCreatorHook;