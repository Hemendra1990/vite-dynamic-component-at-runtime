
import { useEffect, useState } from 'react';
import useDynamicComponentCreatorHook from './CreateComponentHook';



const DynamicComponentCreator = ({ jsxString }: { jsxString: string }) => {
    const [DynamicComponent, setDynamicComponent] = useState<any>(null);
    const [syntaxError, setSyntaxError] = useState<string>('');
    const { createComponent: createMainComp } = useDynamicComponentCreatorHook(jsxString);
    
    useEffect(() => {
        try {
            const component = createMainComp();
            setDynamicComponent(() => component);
            setSyntaxError('');
        } catch (error: any) {
            setSyntaxError(error?.message);
        }
    }, [jsxString]);

    if (syntaxError.length > 0) {
        return <div>{syntaxError}</div>
    }

    return DynamicComponent ? <DynamicComponent /> : null;
};

export default DynamicComponentCreator;