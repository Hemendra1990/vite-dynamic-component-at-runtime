import React, { useState, useEffect } from 'react';
import DynamicComponentCreator from './DynamicComponentCreator';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { DataContextType, useDataContext } from './DataContext';
import RenderSavedComponents from './RenderSavedComponents';

const getId = () => {
  return window.crypto.randomUUID();
}

type SaveType = 'save' | 'saveAndRender' | null;

// Usage
const App = () => {
    const [renderComponent, setRenderComponent] = useState<boolean>(false);
    const [jsxCode, setJsxCode] = useState<string>('');
    const [componentName, setComponentName] = useState<string>('');

    const [saveType, setSaveType] = useState<SaveType>(null);

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
        <div className='grid justify-content-center align-items-center w-40rem'>
            <div className='col-12'>
              <h1 className='text-lg'>Kevit's Dynamic Component Creator</h1>
            </div>
              <div className='col-1'>
                <label>Name</label>
              </div>
              <div className='col-11'>
                <InputText className='w-full' value={componentName} onChange={(e) => setComponentName(e.target.value)} />
              </div>
            
            <div className='col-12'>
                <InputTextarea
                    value={jsxCode}
                    onChange={(e) => {setJsxCode(e.target.value); setRenderComponent(false)}}
                    rows={10}
                    className='w-full'
                />
            </div>
            
            <div className='col-12 '>

              <Button severity="success" label='Save & Render Component' 
                onClick={() => {
                  const id = getId();
                  localStorage.setItem("id", id);
                  localStorage.setItem("currentComponentName", componentName);
                  setSaveType('save');
                  setRenderComponent(true);
              }} />
            </div>

            <Divider />

            {renderComponent && <div className='col-12'><DynamicComponentCreator jsxString={jsxCode} /></div>}

            <RenderSavedComponents />

        </div>
    );
};

export default App;