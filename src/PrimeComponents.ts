import { AutoComplete } from 'primereact/autocomplete';
import { Calendar } from 'primereact/calendar';
import { CascadeSelect } from 'primereact/cascadeselect';        
import { Checkbox } from 'primereact/checkbox';
import { Chips } from 'primereact/chips';
import { ColorPicker } from 'primereact/colorpicker';        
import { Dropdown } from 'primereact/dropdown';
// import { Editor } from 'primereact/editor';
import { FloatLabel } from 'primereact/floatlabel';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputMask } from 'primereact/inputmask';
import { InputSwitch } from 'primereact/inputswitch';
import { InputNumber } from 'primereact/inputnumber';
import { InputOtp } from 'primereact/inputotp';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Knob } from 'primereact/knob';
import { ListBox } from 'primereact/listbox';
import { Mention } from 'primereact/mention';
import { MultiSelect } from 'primereact/multiselect';
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';
import { Password } from 'primereact/password';
import { RadioButton } from 'primereact/radiobutton';
import { Rating } from 'primereact/rating';
import { SelectButton } from 'primereact/selectbutton';
import { Slider } from 'primereact/slider';
import { TreeSelect } from 'primereact/treeselect';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { ToggleButton } from 'primereact/togglebutton';


import { Button } from 'primereact/button';
import { SpeedDial } from 'primereact/speeddial';
import { SplitButton } from 'primereact/splitbutton';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { DataScroller } from 'primereact/datascroller';
import { OrderList } from 'primereact/orderlist';
import { OrganizationChart } from 'primereact/organizationchart';
import { Paginator } from 'primereact/paginator';
import { PickList } from 'primereact/picklist';
import { ProgressBar } from 'primereact/progressbar';
import { Tree } from 'primereact/tree';
import { TreeTable } from 'primereact/treetable';
import { Timeline } from 'primereact/timeline';
import { VirtualScroller } from 'primereact/virtualscroller';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Card } from 'primereact/card';
import { DeferredContent } from 'primereact/deferredcontent';
import { Divider } from 'primereact/divider';
import { Fieldset } from 'primereact/fieldset';
import { Panel } from 'primereact/panel';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { TabView, TabPanel } from 'primereact/tabview';
import { Toolbar } from 'primereact/toolbar';
import { ConfirmDialog } from 'primereact/confirmdialog'; // For <ConfirmDialog /> component
import { confirmDialog } from 'primereact/confirmdialog'; // For confirmDialog method
import { ConfirmPopup } from 'primereact/confirmpopup'; // To use <ConfirmPopup> tag
import { confirmPopup } from 'primereact/confirmpopup'; // To use confirmPopup method
import { Dialog } from 'primereact/dialog';
import { OverlayPanel } from 'primereact/overlaypanel';      
import { Sidebar } from 'primereact/sidebar';
import { Tooltip } from 'primereact/tooltip';
import { FileUpload } from 'primereact/fileupload';
import { BreadCrumb } from 'primereact/breadcrumb';
import { ContextMenu } from 'primereact/contextmenu';
import { Dock } from 'primereact/dock';
import { MegaMenu } from 'primereact/megamenu';
import { Menu } from 'primereact/menu';
import { Menubar } from 'primereact/menubar';
import { PanelMenu } from 'primereact/panelmenu';
import { Steps } from 'primereact/steps';
import { TabMenu } from 'primereact/tabmenu';
import { TieredMenu } from 'primereact/tieredmenu';
import { Message } from 'primereact/message';
import { Messages } from 'primereact/messages';
import { Toast } from 'primereact/toast';
import { Carousel } from 'primereact/carousel';
import { Galleria } from 'primereact/galleria';
import { Image } from 'primereact/image';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';   //Optional for grouping
import { Badge } from 'primereact/badge';
import { BlockUI } from 'primereact/blockui';
import { Chip } from 'primereact/chip';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { MeterGroup } from 'primereact/metergroup';
import { ScrollTop } from 'primereact/scrolltop';
import { Skeleton } from 'primereact/skeleton';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';
import { Tag } from 'primereact/tag';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';

import { useMountEffect } from 'primereact/hooks';
import { useUpdateEffect } from 'primereact/hooks';
import { useUnmountEffect } from 'primereact/hooks';
import { useEventListener } from 'primereact/hooks';
import { useOverlayListener } from 'primereact/hooks';
import { useOverlayScrollListener } from 'primereact/hooks';
import { useResizeListener } from 'primereact/hooks';
import { useClickOutside } from 'primereact/hooks';
import { useIntersectionObserver } from 'primereact/hooks';
import { useMouse } from 'primereact/hooks';
import { useMove } from 'primereact/hooks';
import { useInterval } from 'primereact/hooks';
import { useCounter } from 'primereact/hooks';
import { useDebounce } from 'primereact/hooks';
import { useFavicon } from 'primereact/hooks';
import { usePrevious } from 'primereact/hooks';
import { useLocalStorage } from 'primereact/hooks';
import { useSessionStorage } from 'primereact/hooks';
import { classNames } from 'primereact/utils';


export const primeComponents = {
   AutoComplete, 
   Calendar,
   CascadeSelect,        
   Checkbox,
   Chips,
   ColorPicker,        
   Dropdown,
//    Editor,
   FloatLabel,
   IconField,
   InputIcon,
   InputMask,
   InputSwitch,
   InputNumber,
   InputOtp,
   InputText,
   InputTextarea,
   Knob,
   ListBox,
   Mention,
   MultiSelect,
   MultiStateCheckbox,
   Password,
   RadioButton,
   Rating,
   SelectButton,
   Slider,
   TreeSelect,
   ConfirmPopup, // To use <ConfirmPopup> tag
   confirmPopup, // To use confirmPopup method
   Dialog,
   OverlayPanel,
   Sidebar,
   Tooltip,
   FileUpload,
   BreadCrumb,
   ContextMenu,
   Dock,
   MegaMenu,
   Menu,
   Menubar,
   PanelMenu,
   Steps,
   TabMenu,
   TieredMenu,
   Message,
   Messages,
   Toast,
   Carousel,
   Galleria,
   Image,
   Avatar,
   AvatarGroup,   //Optional for grouping
   Badge,
   BlockUI,
   Chip,
   Inplace,
   InplaceDisplay,
   InplaceContent,
   MeterGroup,
   ScrollTop,
   Skeleton,
   ProgressSpinner,
   Ripple,
   StyleClass,
   Tag,
   Terminal,
   TerminalService,
   useMountEffect,
   useUpdateEffect,
   useUnmountEffect,
   useEventListener,
   useOverlayListener,
   useOverlayScrollListener,
   useResizeListener,
   useClickOutside,
   useIntersectionObserver,
   useMouse,
   useMove,
   useInterval,
   useCounter,
   useDebounce,
   useFavicon,
   usePrevious,
   useLocalStorage,
   useSessionStorage,
   Button,
   SpeedDial,
   SplitButton,
   DataTable,
   Column,
   DataView,
   DataViewLayoutOptions,
   DataScroller,
   OrderList,
   OrganizationChart,
   Paginator,
   PickList,
   ProgressBar,
   Tree,
   TreeTable,
   Timeline,
   VirtualScroller,
   Accordion,
   AccordionTab,
   Card,
   DeferredContent,
   Divider,
   Fieldset,
   Panel,
   ScrollPanel,
   Splitter,
   SplitterPanel,
   Stepper,
   StepperPanel,
   TabView,
   TabPanel,
   Toolbar,
   ConfirmDialog, // For <ConfirmDialog /> component
   confirmDialog, // For confirmDialog method
   TriStateCheckbox,
   ToggleButton,
   classNames,
};