"use strict";(self.webpackChunk_revolancer_ui=self.webpackChunk_revolancer_ui||[]).push([[3516],{"./src/modals/stories/ConfirmationDialog.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/modals/index.ts"),_layout__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/layout/index.ts"),_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/text/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Modals/ConfirmationDialog",component:___WEBPACK_IMPORTED_MODULE_1__.U,tags:["autodocs"],argTypes:{onAccept:{},onReject:{},confirmationMessage:{control:{type:"text"},table:{defaultValue:{summary:"Are you sure you want to do that?"}}},labelAccept:{control:{type:"text"},table:{defaultValue:{summary:"Confirm"}}},labelReject:{control:{type:"text"},table:{defaultValue:{summary:"Cancel"}}},dangerous:{control:{type:"boolean"},table:{defaultValue:{summary:!1}}},label:{control:{type:"text"},table:{defaultValue:{summary:"Open Modal"}}},title:{control:{type:"text"},table:{defaultValue:{summary:"Are you sure?"}}}}};var Default={args:{onAccept:function onAccept(){},onReject:function onReject(){},confirmationMessage:"Are you sure you want to do that?",labelAccept:"Confirm",labelReject:"Cancel",dangerous:!1,label:"Open Modal",title:"Are you sure?"},render:function render(args){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_layout__WEBPACK_IMPORTED_MODULE_2__.kC,{css:{minHeight:"20vh"}},__jsx(_text__WEBPACK_IMPORTED_MODULE_3__.H3,null,"This is a confirmation modal")),__jsx(___WEBPACK_IMPORTED_MODULE_1__.U,args))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    onAccept: () => {},\n    onReject: () => {},\n    confirmationMessage: 'Are you sure you want to do that?',\n    labelAccept: 'Confirm',\n    labelReject: 'Cancel',\n    dangerous: false,\n    label: 'Open Modal',\n    title: 'Are you sure?'\n  },\n  render: args => {\n    return <>\n        <Flex css={{\n        minHeight: '20vh'\n      }}>\n          <H3>This is a confirmation modal</H3>\n        </Flex>\n        <ConfirmationDialog {...args} />\n      </>;\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/buttons/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zx:()=>Button,OL:()=>FormButton,rU:()=>Link,rs:()=>Switch,C9:()=>TertiaryButton,uS:()=>TertiaryFormButton,Ho:()=>UnstyledLink});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react_interactive_esm=__webpack_require__("./node_modules/react-interactive/dist/react-interactive.esm.js"),styles=__webpack_require__("./src/styles/index.ts"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-switch/dist/index.mjs"),__jsx=react.createElement,SwitchRoot=(0,styles.zo)(dist.fC,{all:"unset",width:"$11",height:"$7",backgroundColor:"$neutral400",borderRadius:"9999px",position:"relative",'&[data-state="checked"]':{backgroundColor:"$pink500"}}),SwitchThumb=(0,styles.zo)(dist.bU,{display:"block",width:"$6",height:"$6",backgroundColor:"$white",borderRadius:"9999px",transition:"transform 100ms",transform:"translateX(2px)",willChange:"transform",'&[data-state="checked"]':{transform:"translateX(18px)"}}),SwitchWrapper=(0,styles.zo)("div",{display:"flex",alignItems:"center",gap:"$2"}),Switch=function Switch(_ref){var name=_ref.name,children=_ref.children,id=_ref.id,_ref$defaultChecked=_ref.defaultChecked,defaultChecked=void 0!==_ref$defaultChecked&&_ref$defaultChecked,_ref$checked=_ref.checked,checked=void 0!==_ref$checked&&_ref$checked,_ref$required=_ref.required,required=void 0!==_ref$required&&_ref$required,handleCheckedChange=_ref.handleCheckedChange;return void 0===id&&(id="check-".concat(Math.random())),void 0===name&&(name=id),__jsx(SwitchWrapper,null,__jsx(SwitchRoot,{defaultChecked,checked,id,required,name,onCheckedChange:handleCheckedChange},__jsx(SwitchThumb,null)),children&&__jsx("label",{htmlFor:id},children))};Switch.displayName="Switch";try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},defaultChecked:{defaultValue:{value:"false"},description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},handleCheckedChange:{defaultValue:null,description:"",name:"handleCheckedChange",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/buttons/switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/buttons/switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var buttons_styles={variants:{role:{primary:{backgroundColor:"$pink500",color:"$white",borderWidth:"$1",borderStyle:"$solid",borderColor:"$pink500","&:hover":{backgroundColor:"$pink700",borderColor:"$pink700"},"&:active":{backgroundColor:"$pink800",borderColor:"$pink800"}},secondary:(0,defineProperty.Z)({backgroundColor:"$white",color:"$neutral900",borderWidth:"$1",borderStyle:"$solid",borderColor:"$neutral400","&:hover":{backgroundColor:"$neutral100"},"&:active":{backgroundColor:"$neutral300"}},".".concat(styles.$_," &"),{backgroundColor:"$neutral900",color:"$neutral100",borderColor:"$neutral800","&:hover":{borderColor:"$neutral700",backgroundColor:"$neutral800"},"&:active":{borderColor:"$neutral600",backgroundColor:"$neutral700"}}),dangerous:{backgroundColor:"$red500",color:"$white",borderWidth:"$1",borderStyle:"$solid",borderColor:"$red500","&:hover":{backgroundColor:"$red700",borderColor:"$red700"},"&:active":{backgroundColor:"$red800",borderColor:"$red800"}}},size:{small:{paddingBlock:"$2",paddingInline:"$4"},medium:{paddingBlock:"$3",paddingInline:"$6"},large:{paddingBlock:"$4",paddingInline:"$7"}},disabled:{true:{pointerEvents:"none",cursor:"inherit"}},loading:{true:function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({pointerEvents:"none",cursor:"inherit","&::before":{content:"Button",color:"transparent"}},styles.O$)}},display:"inline-block",borderRadius:"$1",textDecoration:"none",fontSize:"$body1",fontWeight:"$semibold",height:"max-content",width:"max-content",boxShadow:"$2",textTransform:"capitalize",compoundVariants:[{role:"primary",disabled:!0,css:{opacity:"$opacity$700",backgroundColor:"$pink200",borderColor:"$pink200"}},{role:"dangerous",disabled:!0,css:{opacity:"$opacity$700",backgroundColor:"$red200",borderColor:"$red200"}},{role:"secondary",disabled:!0,css:(0,defineProperty.Z)({opacity:"$opacity$500"},".".concat(styles.$_," &"),{opacity:"$opacity$500"})}],defaultVariants:{role:"primary",size:"medium",disabled:!1}},tertiaryStyles=(0,defineProperty.Z)((0,defineProperty.Z)({color:"$neutral700",display:"inline",background:"none",border:"none",textDecoration:"none",fontSize:"$body2",fontWeight:"$normal",height:"max-content",width:"max-content",transition:"none",textTransform:"capitalize",padding:0,"&:hover":{color:"$navy500"},"&:active":{color:"$navy500",fontWeight:"$semibold",textDecoration:"underline"}},".".concat(styles.$_," &"),{color:"$white","&:hover":{color:"$navy500"},"&:active":{color:"$navy500",fontWeight:"$semibold",textDecoration:"underline"}}),"variants",{disabled:{true:(0,defineProperty.Z)({color:"$neutral900",opacity:"$opacity$500",pointerEvents:"none",cursor:"inherit"},".".concat(styles.$_," &"),{color:"$neutral100",opacity:"$opacity$500"})},normalCase:{true:{textTransform:"none"}}}),Button=(0,styles.zo)(link_default(),buttons_styles),FormButton=(0,styles.zo)(react_interactive_esm.vj.Button,buttons_styles),TertiaryButton=(0,styles.zo)(link_default(),tertiaryStyles),TertiaryFormButton=(0,styles.zo)(react_interactive_esm.vj.Button,tertiaryStyles),Link=(0,styles.zo)(link_default(),{color:"$pink500",display:"inline",background:"none",border:"none",textDecoration:"none",fontSize:"$body2",fontWeight:"$normal",height:"max-content",width:"max-content",transition:"none",padding:0,"&:hover":{color:"$pink600",textDecoration:"underline"},"&:active":{color:"$pink600",fontWeight:"$semibold",textDecoration:"underline"},variants:{disabled:{true:{color:"$neutral900",opacity:"$opacity$500",pointerEvents:"none",cursor:"inherit"}}}}),UnstyledLink=(0,styles.zo)(link_default(),{textDecoration:"none",color:"inherit",variants:{disabled:{true:{pointerEvents:"none",cursor:"inherit"}}}})},"./src/layout/divider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>LabelledDivider,i:()=>Divider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/index.ts"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/layout/index.ts"),_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/text/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Divider=(0,_styles__WEBPACK_IMPORTED_MODULE_1__.zo)("hr",{borderWidth:"0",borderStyle:"none",borderTopColor:"$neutral400",borderTopWidth:"2px",borderTopStyle:"$solid",marginBlock:"$2",flexGrow:"1",variants:{color:{white:{borderTopColor:"$white"},gray:{borderTopColor:"$neutral400"}}},defaultVariants:{color:"gray"}}),LabelledDivider=function LabelledDivider(_ref){var label=_ref.label,color=_ref.color;return __jsx(___WEBPACK_IMPORTED_MODULE_2__.kC,{css:{alignItems:"center"}},__jsx(Divider,{color}),__jsx(_text__WEBPACK_IMPORTED_MODULE_3__.P,{css:{fontWeight:"$bold",color:"$neutral600"}},label),__jsx(Divider,{color}))};LabelledDivider.displayName="LabelledDivider";try{Divider.displayName="Divider",Divider.__docgenInfo={description:"",displayName:"Divider",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLHRElement | null) => void) | RefObject<HTMLHRElement> | null"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"white" | "gray" | ({ "@xl"?: "white" | "gray"; "@lg"?: "white" | "gray"; "@md"?: "white" | "gray" | undefined; "@sm"?: "white" | "gray" | undefined; "@initial"?: "white" | "gray" | undefined; } & { ...; }) | undefined'}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ xl: "(min-width: 1440px)"; lg: "(min-width: 1280px)"; md: "(min-width: 905px)"; sm: "(min-width: 600px)"; }, { colors: { black: string; neutral900: string; neutral800: string; neutral700: string; ... 63 more ...; borders: string; }; ... 12 more ...; transitions: { ...; }; }, DefaultThemeMap, {}>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/divider.tsx#Divider"]={docgenInfo:Divider.__docgenInfo,name:"Divider",path:"src/layout/divider.tsx#Divider"})}catch(__react_docgen_typescript_loader_error){}try{LabelledDivider.displayName="LabelledDivider",LabelledDivider.__docgenInfo={description:"",displayName:"LabelledDivider",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"gray"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/divider.tsx#LabelledDivider"]={docgenInfo:LabelledDivider.__docgenInfo,name:"LabelledDivider",path:"src/layout/divider.tsx#LabelledDivider"})}catch(__react_docgen_typescript_loader_error){}},"./src/layout/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Zb:()=>Card,X3:()=>ColumnLayout,iz:()=>divider.i,kC:()=>Flex,oV:()=>FullWidth,W3:()=>HalfWidth,dB:()=>divider.d,pA:()=>MainContentWithSideBar,Uj:()=>NagBar,Ke:()=>SideBar,GL:()=>StyledBlocksContainer,UJ:()=>TwoCols});var styles=__webpack_require__("./src/styles/index.ts"),Card=(0,styles.zo)("div",{borderWidth:"$1",borderStyle:"$solid",borderColor:"$borders",borderRadius:"$2",backgroundColor:"$background",padding:"$4",display:"flex",gap:"$3",flexDirection:"column",boxShadow:"$2",overflow:"hidden",variants:{flat:{true:{boxShadow:"none"}},unpadded:{true:{padding:"0"}}}});try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},flat:{defaultValue:null,description:"",name:"flat",required:!1,type:{name:'boolean | "true" | ({ "@xl"?: boolean | "true"; "@lg"?: boolean | "true"; "@md"?: boolean | "true" | undefined; "@sm"?: boolean | "true" | undefined; "@initial"?: boolean | "true" | undefined; } & { ...; }) | undefined'}},unpadded:{defaultValue:null,description:"",name:"unpadded",required:!1,type:{name:'boolean | "true" | ({ "@xl"?: boolean | "true"; "@lg"?: boolean | "true"; "@md"?: boolean | "true" | undefined; "@sm"?: boolean | "true" | undefined; "@initial"?: boolean | "true" | undefined; } & { ...; }) | undefined'}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ xl: "(min-width: 1440px)"; lg: "(min-width: 1280px)"; md: "(min-width: 905px)"; sm: "(min-width: 600px)"; }, { colors: { black: string; neutral900: string; neutral800: string; neutral700: string; ... 63 more ...; borders: string; }; ... 12 more ...; transitions: { ...; }; }, DefaultThemeMap, {}>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/cards.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/layout/cards.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}var FullWidth=(0,styles.zo)("div",{gridColumn:"auto / span 4","@sm":{gridColumn:"auto / span 8"},"@md":{gridColumn:"auto / span 12"},variants:{placeholder:{true:{height:"80vh",backgroundColor:"$neutral100",borderRadius:"$3",boxShadow:"$2"}}}}),HalfWidth=(0,styles.zo)("div",{gridColumn:"auto / span 4","@md":{gridColumn:"auto / span 6"}}),SideBar=(0,styles.zo)("div",{gridColumn:"auto / span 4","@sm":{gridColumn:"auto / span 8"},"@md":{gridColumn:"auto / span 4"}}),MainContentWithSideBar=(0,styles.zo)("div",{gridColumn:"auto / span 4","@sm":{gridColumn:"auto / span 8"}}),ColumnLayout=(0,styles.zo)("div",{maxWidth:"420px",minWidth:"328px",display:"grid",gridTemplateColumns:"repeat(4, 1fr)",marginInline:"auto",gap:"$4",position:"relative",paddingInline:"1rem","@sm":{minWidth:"480px",maxWidth:"480px",gridTemplateColumns:"repeat(8, 1fr)",paddingInline:"0"},"@md":{minWidth:"756px",maxWidth:"756px",gridTemplateColumns:"repeat(12, 1fr)",gap:"$3"},"@lg":{minWidth:"880px",maxWidth:"880px",paddingInlineStart:"0",gap:"$6"},"@xl":{minWidth:"1128px",maxWidth:"1128px"},variants:{undecorated:{true:{"@sm":{maxWidth:"536px",paddingInlineStart:"0"},"@md":{maxWidth:"857px",gap:"$6"},"@lg":{maxWidth:"880px"},"@xl":{maxWidth:"1128px"}}}}}),TwoCols=(0,styles.zo)("div",{display:"grid",gridTemplateColumns:"1fr",gap:"$6","@sm":{gridTemplateColumns:"1fr 1fr"}});try{FullWidth.displayName="FullWidth",FullWidth.__docgenInfo={description:"",displayName:"FullWidth",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:'boolean | "true" | ({ "@xl"?: boolean | "true"; "@lg"?: boolean | "true"; "@md"?: boolean | "true" | undefined; "@sm"?: boolean | "true" | undefined; "@initial"?: boolean | "true" | undefined; } & { ...; }) | undefined'}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ xl: "(min-width: 1440px)"; lg: "(min-width: 1280px)"; md: "(min-width: 905px)"; sm: "(min-width: 600px)"; }, { colors: { black: string; neutral900: string; neutral800: string; neutral700: string; ... 63 more ...; borders: string; }; ... 12 more ...; transitions: { ...; }; }, DefaultThemeMap, {}>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/columns.tsx#FullWidth"]={docgenInfo:FullWidth.__docgenInfo,name:"FullWidth",path:"src/layout/columns.tsx#FullWidth"})}catch(__react_docgen_typescript_loader_error){}try{HalfWidth.displayName="HalfWidth",HalfWidth.__docgenInfo={description:"",displayName:"HalfWidth",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ xl: "(min-width: 1440px)"; lg: "(min-width: 1280px)"; md: "(min-width: 905px)"; sm: "(min-width: 600px)"; }, { colors: { black: string; neutral900: string; neutral800: string; neutral700: string; ... 63 more ...; borders: string; }; ... 12 more ...; transitions: { ...; }; }, DefaultThemeMap, {}>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/columns.tsx#HalfWidth"]={docgenInfo:HalfWidth.__docgenInfo,name:"HalfWidth",path:"src/layout/columns.tsx#HalfWidth"})}catch(__react_docgen_typescript_loader_error){}try{SideBar.displayName="SideBar",SideBar.__docgenInfo={description:"",displayName:"SideBar",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ xl: "(min-width: 1440px)"; lg: "(min-width: 1280px)"; md: "(min-width: 905px)"; sm: "(min-width: 600px)"; }, { colors: { black: string; neutral900: string; neutral800: string; neutral700: string; ... 63 more ...; borders: string; }; ... 12 more ...; transitions: { ...; }; }, DefaultThemeMap, {}>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/columns.tsx#SideBar"]={docgenInfo:SideBar.__docgenInfo,name:"SideBar",path:"src/layout/columns.tsx#SideBar"})}catch(__react_docgen_typescript_loader_error){}try{MainContentWithSideBar.displayName="MainContentWithSideBar",MainContentWithSideBar.__docgenInfo={description:"",displayName:"MainContentWithSideBar",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ xl: "(min-width: 1440px)"; lg: "(min-width: 1280px)"; md: "(min-width: 905px)"; sm: "(min-width: 600px)"; }, { colors: { black: string; neutral900: string; neutral800: string; neutral700: string; ... 63 more ...; borders: string; }; ... 12 more ...; transitions: { ...; }; }, DefaultThemeMap, {}>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/columns.tsx#MainContentWithSideBar"]={docgenInfo:MainContentWithSideBar.__docgenInfo,name:"MainContentWithSideBar",path:"src/layout/columns.tsx#MainContentWithSideBar"})}catch(__react_docgen_typescript_loader_error){}try{ColumnLayout.displayName="ColumnLayout",ColumnLayout.__docgenInfo={description:"",displayName:"ColumnLayout",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},undecorated:{defaultValue:null,description:"",name:"undecorated",required:!1,type:{name:'boolean | "true" | ({ "@xl"?: boolean | "true"; "@lg"?: boolean | "true"; "@md"?: boolean | "true" | undefined; "@sm"?: boolean | "true" | undefined; "@initial"?: boolean | "true" | undefined; } & { ...; }) | undefined'}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ xl: "(min-width: 1440px)"; lg: "(min-width: 1280px)"; md: "(min-width: 905px)"; sm: "(min-width: 600px)"; }, { colors: { black: string; neutral900: string; neutral800: string; neutral700: string; ... 63 more ...; borders: string; }; ... 12 more ...; transitions: { ...; }; }, DefaultThemeMap, {}>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/columns.tsx#ColumnLayout"]={docgenInfo:ColumnLayout.__docgenInfo,name:"ColumnLayout",path:"src/layout/columns.tsx#ColumnLayout"})}catch(__react_docgen_typescript_loader_error){}try{TwoCols.displayName="TwoCols",TwoCols.__docgenInfo={description:"",displayName:"TwoCols",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ xl: "(min-width: 1440px)"; lg: "(min-width: 1280px)"; md: "(min-width: 905px)"; sm: "(min-width: 600px)"; }, { colors: { black: string; neutral900: string; neutral800: string; neutral700: string; ... 63 more ...; borders: string; }; ... 12 more ...; transitions: { ...; }; }, DefaultThemeMap, {}>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/columns.tsx#TwoCols"]={docgenInfo:TwoCols.__docgenInfo,name:"TwoCols",path:"src/layout/columns.tsx#TwoCols"})}catch(__react_docgen_typescript_loader_error){}var divider=__webpack_require__("./src/layout/divider.tsx"),Div=(0,styles.zo)("div",{}),Flex=(0,styles.zo)("div",{display:"flex",gap:"$$gap",variants:{column:{true:{flexDirection:"column"}},wrap:{true:{flexWrap:"wrap"}},gap:{0:{gap:"0px"},1:{gap:"$1"},2:{gap:"$2"},3:{gap:"$3"},4:{gap:"$4"},5:{gap:"$5"},6:{gap:"$6"},7:{gap:"$7"},8:{gap:"$8"},9:{gap:"$9"},10:{gap:"$10"},11:{gap:"$11"},12:{gap:"$12"},13:{gap:"$13"},14:{gap:"$14"},15:{gap:"$15"},16:{gap:"$16"}}},defaultVariants:{gap:3}});try{Div.displayName="Div",Div.__docgenInfo={description:"",displayName:"Div",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ xl: "(min-width: 1440px)"; lg: "(min-width: 1280px)"; md: "(min-width: 905px)"; sm: "(min-width: 600px)"; }, { colors: { black: string; neutral900: string; neutral800: string; neutral700: string; ... 63 more ...; borders: string; }; ... 12 more ...; transitions: { ...; }; }, DefaultThemeMap, {}>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/flex.tsx#Div"]={docgenInfo:Div.__docgenInfo,name:"Div",path:"src/layout/flex.tsx#Div"})}catch(__react_docgen_typescript_loader_error){}try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},column:{defaultValue:null,description:"",name:"column",required:!1,type:{name:'boolean | "true" | ({ "@xl"?: boolean | "true"; "@lg"?: boolean | "true"; "@md"?: boolean | "true" | undefined; "@sm"?: boolean | "true" | undefined; "@initial"?: boolean | "true" | undefined; } & { ...; }) | undefined'}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:'boolean | "true" | ({ "@xl"?: boolean | "true"; "@lg"?: boolean | "true"; "@md"?: boolean | "true" | undefined; "@sm"?: boolean | "true" | undefined; "@initial"?: boolean | "true" | undefined; } & { ...; }) | undefined'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:'0 | 1 | "0" | 2 | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | 10 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 12 | 13 | 14 | 15 | 16 | ({ "@xl"?: 0 | ... 33 more ...; "@lg"?: 0 | ... 33 more ...; "@md"?: 0 | ... 33 more ... | undefined; "@sm"?:...'}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ xl: "(min-width: 1440px)"; lg: "(min-width: 1280px)"; md: "(min-width: 905px)"; sm: "(min-width: 600px)"; }, { colors: { black: string; neutral900: string; neutral800: string; neutral700: string; ... 63 more ...; borders: string; }; ... 12 more ...; transitions: { ...; }; }, DefaultThemeMap, {}>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/flex.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/layout/flex.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}var __jsx=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement,NagBarContainer=(0,styles.zo)("div",{width:"100%",backgroundColor:"$orange100",color:"$neutral900",borderStyle:"$solid",borderWidth:"0 0 $1 0",borderColor:"$orange200",padding:"$1"}),NagBar=function NagBar(_ref){var children=_ref.children;return __jsx(NagBarContainer,null,__jsx(ColumnLayout,null,__jsx(FullWidth,{css:{display:"flex",gap:"4px",justifyContent:"center"}},children)))};NagBar.displayName="NagBar";try{NagBar.displayName="NagBar",NagBar.__docgenInfo={description:"",displayName:"NagBar",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/nagbar.tsx#NagBar"]={docgenInfo:NagBar.__docgenInfo,name:"NagBar",path:"src/layout/nagbar.tsx#NagBar"})}catch(__react_docgen_typescript_loader_error){}var StyledBlocksContainer=(0,styles.zo)("div",{"& .image-block--stretched":{"& img":{width:"100%"}},"& figcaption":{color:"$neutral700",fontStyle:"italic",textAlign:"end"},"& ul":{marginBlock:"$3"},"& ol":{marginBlock:"$3"},"& p":{marginBlock:"$3"},"& table":{width:"100%",borderSpacing:"0",borderCollapse:"collapse",marginBlock:"$3"},"& th":{border:"1px solid black",textAlign:"center"},"& td":{border:"1px solid black",textAlign:"center"},"& pre":{backgroundColor:"$neutral800",color:"$neutral100",padding:"$3"},"& blockquote":{background:"$neutral100",borderLeft:"10px solid $neutral600",margin:"1.5em 10px",padding:"0.5em 10px",quotes:"“”‘’"},"& blockquote:before":{color:"$neutral800",content:"open-quote",fontSize:"4em",lineHeight:"0.1em",marginRight:"0.25em",verticalAlign:"-0.4em"},"& blockquote p":{display:"inline"},"& iframe":{display:"block",maxWidth:"100%",marginInline:"auto"}});try{StyledBlocksContainer.displayName="StyledBlocksContainer",StyledBlocksContainer.__docgenInfo={description:"",displayName:"StyledBlocksContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ xl: "(min-width: 1440px)"; lg: "(min-width: 1280px)"; md: "(min-width: 905px)"; sm: "(min-width: 600px)"; }, { colors: { black: string; neutral900: string; neutral800: string; neutral700: string; ... 63 more ...; borders: string; }; ... 12 more ...; transitions: { ...; }; }, DefaultThemeMap, {}>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/styled-block-container.tsx#StyledBlocksContainer"]={docgenInfo:StyledBlocksContainer.__docgenInfo,name:"StyledBlocksContainer",path:"src/layout/styled-block-container.tsx#StyledBlocksContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/modals/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>ConfirmationDialog,e:()=>RevoModal});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),styles=__webpack_require__("./src/styles/index.ts"),lib=__webpack_require__("./node_modules/react-modal/lib/index.js"),lib_default=__webpack_require__.n(lib),buttons=__webpack_require__("./src/buttons/index.ts"),layout=__webpack_require__("./src/layout/index.ts"),index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),free_solid_svg_icons=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),src_text=__webpack_require__("./src/text/index.ts"),__jsx=react.createElement,confirmation_dialog_styles=styles.vc.theme,customStyles={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:confirmation_dialog_styles.radii[2],paddingInline:confirmation_dialog_styles.sizes[6],paddingBlock:confirmation_dialog_styles.sizes[3],maxWidth:"min(640px, 85vw)",minWidth:"340px",width:"100%"}},ConfirmationDialog=function ConfirmationDialog(_ref){var onAccept=_ref.onAccept,onReject=_ref.onReject,_ref$confirmationMess=_ref.confirmationMessage,confirmationMessage=void 0===_ref$confirmationMess?"Are you sure you want to do that?":_ref$confirmationMess,_ref$labelAccept=_ref.labelAccept,labelAccept=void 0===_ref$labelAccept?"Confirm":_ref$labelAccept,_ref$labelReject=_ref.labelReject,labelReject=void 0===_ref$labelReject?"Cancel":_ref$labelReject,_ref$dangerous=_ref.dangerous,dangerous=void 0!==_ref$dangerous&&_ref$dangerous,label=_ref.label,_ref$title=_ref.title,title=void 0===_ref$title?"Are you sure?":_ref$title,_useState=(0,react.useState)(!1),modalIsOpen=_useState[0],setIsOpen=_useState[1],rejectHandler=function rejectHandler(){onReject&&onReject()},closeModal=function closeModal(){setIsOpen(!1)};return __jsx(react.Fragment,null,__jsx(buttons.zx,{role:dangerous?"dangerous":"primary",href:"#",onClick:function onClick(e){e.preventDefault(),function openModal(){setIsOpen(!0)}()}},label),__jsx(lib_default(),{isOpen:modalIsOpen,onRequestClose:function onRequestClose(){rejectHandler(),closeModal()},style:customStyles,contentLabel:title},__jsx(layout.kC,{column:!0},__jsx(layout.kC,{css:{justifyContent:"space-between"}},__jsx(src_text.H4,null,title),__jsx(buttons.Ho,{href:"#",onClick:function onClick(e){e.preventDefault(),rejectHandler(),closeModal()},css:{fontSize:"$h5"}},__jsx(index_es.G,{icon:free_solid_svg_icons.YIN}))),__jsx(src_text.P,null,confirmationMessage),__jsx(layout.kC,null,__jsx(buttons.zx,{role:dangerous?"dangerous":"primary",href:"#",onClick:function onClick(e){e.preventDefault(),function acceptHandler(){onAccept()}(),closeModal()}},labelAccept),__jsx(buttons.zx,{role:"secondary",href:"#",onClick:function onClick(e){e.preventDefault(),rejectHandler(),closeModal()}},labelReject)))))};try{ConfirmationDialog.displayName="ConfirmationDialog",ConfirmationDialog.__docgenInfo={description:"",displayName:"ConfirmationDialog",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onAccept:{defaultValue:null,description:"",name:"onAccept",required:!0,type:{name:"() => void"}},onReject:{defaultValue:null,description:"",name:"onReject",required:!1,type:{name:"(() => void)"}},title:{defaultValue:{value:"Are you sure?"},description:"",name:"title",required:!1,type:{name:"string"}},confirmationMessage:{defaultValue:{value:"Are you sure you want to do that?"},description:"",name:"confirmationMessage",required:!1,type:{name:"string"}},labelAccept:{defaultValue:{value:"Confirm"},description:"",name:"labelAccept",required:!1,type:{name:"string"}},labelReject:{defaultValue:{value:"Cancel"},description:"",name:"labelReject",required:!1,type:{name:"string"}},dangerous:{defaultValue:{value:"false"},description:"",name:"dangerous",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modals/confirmation-dialog.tsx#ConfirmationDialog"]={docgenInfo:ConfirmationDialog.__docgenInfo,name:"ConfirmationDialog",path:"src/modals/confirmation-dialog.tsx#ConfirmationDialog"})}catch(__react_docgen_typescript_loader_error){}var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),modal_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var RevoModal=function RevoModal(_ref){var _ref$openOnTrigger=_ref.openOnTrigger,openOnTrigger=void 0===_ref$openOnTrigger||_ref$openOnTrigger,_ref$showModalOpenCTA=_ref.showModalOpenCTA,showModalOpenCTA=void 0!==_ref$showModalOpenCTA&&_ref$showModalOpenCTA,_ref$showCloseIcon=_ref.showCloseIcon,showCloseIcon=void 0!==_ref$showCloseIcon&&_ref$showCloseIcon,renderChildren=_ref.renderChildren,onClose=_ref.onClose,renderCTA=_ref.renderCTA,_ref$css=_ref.css,css=void 0===_ref$css?{}:_ref$css,_useState=(0,react.useState)(!1),modalIsOpen=_useState[0],setIsOpen=_useState[1],modalOpen=function modalOpen(){setIsOpen(!0)},modalClose=function modalClose(){setIsOpen(!1)};(0,react.useEffect)((function(){openOnTrigger&&modalOpen()}),[openOnTrigger]);var customStyles={content:_objectSpread({top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"none",border:"none",overflow:"visible",padding:"0"},css)},renderCloseIcon=modal_jsx(layout.kC,{css:{width:"100%",height:"$2"}},modal_jsx(buttons.zx,{href:"#",onClick:function onClick(){onClose?(onClose(),modalClose()):modalClose()},css:{backgroundColor:"$background",borderWidth:"0px",color:"$neutral400",boxShadow:"0px",borderRadius:"$3",position:"absolute",top:"3px",right:"3px",paddingBlock:"$0",paddingInline:"$2","&:hover":{backgroundColor:"$neutral400",color:"$white"}}},modal_jsx(index_es.G,{icon:free_solid_svg_icons.g82}))),renderOpenModal=showModalOpenCTA&&(renderCTA?renderCTA({open:modalOpen}):modal_jsx(buttons.zx,{role:"primary",href:"#",onClick:function onClick(){return modalOpen()}},"Open"));return modal_jsx(react.Fragment,null,renderOpenModal,modal_jsx(lib_default(),{isOpen:modalIsOpen,onRequestClose:function onRequestClose(){onClose?(onClose(),modalClose()):modalClose()},style:customStyles},modal_jsx(layout.Zb,{css:{color:"$neutral700",alignItems:"center",justifyContent:"center"}},showCloseIcon&&renderCloseIcon,modal_jsx(layout.kC,{column:!0,wrap:!0,css:{alignItems:"center",justifyContent:"center"}},renderChildren({close:modalClose})))))};try{RevoModal.displayName="RevoModal",RevoModal.__docgenInfo={description:"A Reusable Modal Component for Revolancer UI library",displayName:"RevoModal",props:{openOnTrigger:{defaultValue:{value:"true"},description:"Set a trigger to open the modal, set the prop to true to open on load",name:"openOnTrigger",required:!1,type:{name:"boolean"}},showModalOpenCTA:{defaultValue:{value:"false"},description:"Displays a default CTA to open the modal",name:"showModalOpenCTA",required:!1,type:{name:"boolean"}},showCloseIcon:{defaultValue:{value:"false"},description:"Displays the close icon in the modal",name:"showCloseIcon",required:!1,type:{name:"boolean"}},renderChildren:{defaultValue:null,description:"Defines the child components in the modal, you can use handle functions from the parent component",name:"renderChildren",required:!0,type:{name:"({ close }: { close: () => void; }) => ReactNode"}},renderCTA:{defaultValue:null,description:"Defines the CTA",name:"renderCTA",required:!1,type:{name:"(({ open }: { open: () => void; }) => ReactNode)"}},onClose:{defaultValue:null,description:"Custom handleclose function",name:"onClose",required:!1,type:{name:"(() => void)"}},css:{defaultValue:{value:"{}"},description:"Additional modal Card CSS",name:"css",required:!1,type:{name:"object"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modals/modal.tsx#RevoModal"]={docgenInfo:RevoModal.__docgenInfo,name:"RevoModal",path:"src/modals/modal.tsx#RevoModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>Span,H1:()=>H1,H2:()=>H2,H3:()=>H3,H4:()=>H4,H5:()=>H5,P:()=>P});var _styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/index.ts"),H1=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.zo)("h1",{fontSize:"$h1m",lineHeight:"$h1m",fontWeight:"$bold",fontFamily:"$heading","@sm":{fontSize:"$h1",lineHeight:"$h1"}}),H2=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.zo)("h2",{fontSize:"$h2m",lineHeight:"$h2m",fontWeight:"$bold",fontFamily:"$heading","@sm":{fontSize:"$h2",lineHeight:"$h2"}}),H3=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.zo)("h3",{fontSize:"$h3m",lineHeight:"$h3m",fontWeight:"$medium",fontFamily:"$heading","@sm":{fontSize:"$h3",lineHeight:"$h3"}}),H4=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.zo)("h4",{fontSize:"$h4m",lineHeight:"$h4m",fontWeight:"$normal",fontFamily:"$heading","@sm":{fontSize:"$h4",lineHeight:"$h4"}}),H5=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.zo)("h5",{fontSize:"$h5",lineHeight:"$h5",fontWeight:"$bold",fontFamily:"$heading",textTransform:"uppercase"}),P=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.zo)("p"),Span=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.zo)("span")}}]);