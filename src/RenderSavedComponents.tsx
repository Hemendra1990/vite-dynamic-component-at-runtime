import useDynamicComponentCreatorHook from "./CreateComponentHook";

function RenderSavedComponents() {
    const components: any = JSON.parse(localStorage.getItem("components") as string) || [];
    const {createComponentFromTransformedCode} = useDynamicComponentCreatorHook("");

    return <div>    
        {
            components.map((component: any) => {
                return <div key={component.id}>
                    {createComponentFromTransformedCode(component.component)()}
                </div>
            })
        }
    </div>
}

export default RenderSavedComponents;