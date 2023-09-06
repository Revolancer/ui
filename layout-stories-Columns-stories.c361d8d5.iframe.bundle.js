"use strict";(self.webpackChunk_revolancer_ui=self.webpackChunk_revolancer_ui||[]).push([[5427],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/layout/stories/Columns.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Columns:()=>Columns,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Columns$parameters,_Columns$parameters2,_Columns$parameters3,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/layout/index.ts"),_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/text/index.ts"),_excluded=["layout"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Template=function Template(_ref){var layout=_ref.layout,children=_ref.children,placeholder=_ref.placeholder,undecorated=_ref.undecorated;return function renderLayout(layout){switch(layout){case"Full Width":return __jsx(___WEBPACK_IMPORTED_MODULE_2__.X3,{undecorated},__jsx(___WEBPACK_IMPORTED_MODULE_2__.oV,{placeholder},children),__jsx(___WEBPACK_IMPORTED_MODULE_2__.oV,{placeholder},children));case"Half Width":return __jsx(___WEBPACK_IMPORTED_MODULE_2__.X3,{undecorated},__jsx(___WEBPACK_IMPORTED_MODULE_2__.W3,null,children),__jsx(___WEBPACK_IMPORTED_MODULE_2__.W3,null,children));case"Side Bars":return __jsx(___WEBPACK_IMPORTED_MODULE_2__.X3,{undecorated},__jsx(___WEBPACK_IMPORTED_MODULE_2__.pA,null,children),__jsx(___WEBPACK_IMPORTED_MODULE_2__.Ke,null,children));case"Two Column":return __jsx(___WEBPACK_IMPORTED_MODULE_2__.UJ,null,children,children);default:return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}}(layout)};const __WEBPACK_DEFAULT_EXPORT__={title:"Layout/Columns",tags:["autodocs"],component:Template,argTypes:{layout:{options:["Full Width","Half Width","Side Bars","Two Column"],control:{type:"radio"},table:{defaultValue:{summary:"Full Width"}}},placeholder:{control:{type:"boolean"},table:{defaultValue:{summary:!1}},description:"For FullWidth component"},undecorated:{control:{type:"boolean"},table:{defaultValue:{summary:!1}},description:"For ColumnLayout component"}},render:function render(_ref2){var layout=_ref2.layout,args=(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref2,_excluded);return __jsx(___WEBPACK_IMPORTED_MODULE_2__.kC,null,__jsx(Template,(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.Z)({layout},args),function children(layout){return __jsx(___WEBPACK_IMPORTED_MODULE_2__.Zb,null,__jsx(_text__WEBPACK_IMPORTED_MODULE_3__.H3,null,layout),__jsx(___WEBPACK_IMPORTED_MODULE_2__.iz,null),__jsx(_text__WEBPACK_IMPORTED_MODULE_3__.P,null,__jsx("b",null,"This is using a ",layout.toLowerCase()," layout.")," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a augue a erat ornare efficitur. Nulla ultricies et risus sed aliquet. Sed aliquet bibendum leo, ut congue nulla fringilla id. Phasellus hendrerit felis quis lectus mattis, ac viverra sapien iaculis."))}(layout)))}};var Columns={args:{layout:"Full Width",placeholder:!1,undecorated:!1}};Columns.parameters=_objectSpread(_objectSpread({},Columns.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Columns$parameters=Columns.parameters)||void 0===_Columns$parameters?void 0:_Columns$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    layout: 'Full Width',\n    placeholder: false,\n    undecorated: false\n  }\n}"},null===(_Columns$parameters2=Columns.parameters)||void 0===_Columns$parameters2||null===(_Columns$parameters2=_Columns$parameters2.docs)||void 0===_Columns$parameters2?void 0:_Columns$parameters2.source),description:_objectSpread({story:"This document allows you to see the implementation and appearance of different layout components available in the Revolancer UI library. for more information about each component, please refer to their respective storybook docs."},null===(_Columns$parameters3=Columns.parameters)||void 0===_Columns$parameters3||null===(_Columns$parameters3=_Columns$parameters3.docs)||void 0===_Columns$parameters3?void 0:_Columns$parameters3.description)})});try{Columns.displayName="Columns",Columns.__docgenInfo={description:"This document allows you to see the implementation and appearance of different layout components available in the Revolancer UI library. for more information about each component, please refer to their respective storybook docs.",displayName:"Columns",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/stories/Columns.stories.tsx#Columns"]={docgenInfo:Columns.__docgenInfo,name:"Columns",path:"src/layout/stories/Columns.stories.tsx#Columns"})}catch(__react_docgen_typescript_loader_error){}},"./src/layout/divider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>LabelledDivider,i:()=>Divider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/index.ts"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/layout/index.ts"),_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/text/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Divider=(0,_styles__WEBPACK_IMPORTED_MODULE_1__.zo)("hr",{borderWidth:"0",borderStyle:"none",borderTopColor:"$neutral400",borderTopWidth:"2px",borderTopStyle:"$solid",marginBlock:"$2",flexGrow:"1",variants:{color:{white:{borderTopColor:"$white"},gray:{borderTopColor:"$neutral400"}}},defaultVariants:{color:"gray"}}),LabelledDivider=function LabelledDivider(_ref){var label=_ref.label,color=_ref.color;return __jsx(___WEBPACK_IMPORTED_MODULE_2__.kC,{css:{alignItems:"center"}},__jsx(Divider,{color}),__jsx(_text__WEBPACK_IMPORTED_MODULE_3__.P,{css:{fontWeight:"$bold",color:"$neutral600"}},label),__jsx(Divider,{color}))};LabelledDivider.displayName="LabelledDivider",LabelledDivider.__docgenInfo={description:"",methods:[],displayName:"LabelledDivider",props:{label:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"'white' | 'gray'",elements:[{name:"literal",value:"'white'"},{name:"literal",value:"'gray'"}]},description:""}}};try{Divider.displayName="Divider",Divider.__docgenInfo={description:"",displayName:"Divider",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLHRElement | null) => void) | RefObject<HTMLHRElement> | null"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"white" | "gray" | ({ "@xl"?: "white" | "gray"; "@lg"?: "white" | "gray"; "@md"?: "white" | "gray" | undefined; "@sm"?: "white" | "gray" | undefined; "@initial"?: "white" | "gray" | undefined; } & { ...; }) | undefined'}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ xl: "(min-width: 1440px)"; lg: "(min-width: 1280px)"; md: "(min-width: 905px)"; sm: "(min-width: 600px)"; }, { colors: { black: string; neutral900: string; neutral800: string; neutral700: string; ... 63 more ...; borders: string; }; ... 12 more ...; transitions: { ...; }; }, DefaultThemeMap, {}>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/divider.tsx#Divider"]={docgenInfo:Divider.__docgenInfo,name:"Divider",path:"src/layout/divider.tsx#Divider"})}catch(__react_docgen_typescript_loader_error){}try{LabelledDivider.displayName="LabelledDivider",LabelledDivider.__docgenInfo={description:"",displayName:"LabelledDivider",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"gray"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/divider.tsx#LabelledDivider"]={docgenInfo:LabelledDivider.__docgenInfo,name:"LabelledDivider",path:"src/layout/divider.tsx#LabelledDivider"})}catch(__react_docgen_typescript_loader_error){}},"./src/layout/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Zb:()=>Card,X3:()=>ColumnLayout,iz:()=>divider.i,kC:()=>Flex,oV:()=>FullWidth,W3:()=>HalfWidth,dB:()=>divider.d,pA:()=>MainContentWithSideBar,Uj:()=>NagBar,Ke:()=>SideBar,GL:()=>StyledBlocksContainer,UJ:()=>TwoCols});var styles=__webpack_require__("./src/styles/index.ts"),Card=(0,styles.zo)("div",{borderWidth:"$1",borderStyle:"$solid",borderColor:"$borders",borderRadius:"$2",backgroundColor:"$background",padding:"$4",display:"flex",gap:"$3",flexDirection:"column",boxShadow:"$2",overflow:"hidden",variants:{flat:{true:{boxShadow:"none"}},unpadded:{true:{padding:"0"}}}});try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},flat:{defaultValue:null,description:"",name:"flat",required:!1,type:{name:'boolean | "true" | ({ "@xl"?: boolean | "true"; "@lg"?: boolean | "true"; "@md"?: boolean | "true" | undefined; "@sm"?: boolean | "true" | undefined; "@initial"?: boolean | "true" | undefined; } & { ...; }) | undefined'}},unpadded:{defaultValue:null,description:"",name:"unpadded",required:!1,type:{name:'boolean | "true" | ({ "@xl"?: boolean | "true"; "@lg"?: boolean | "true"; "@md"?: boolean | "true" | undefined; "@sm"?: boolean | "true" | undefined; "@initial"?: boolean | "true" | undefined; } & { ...; }) | undefined'}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ xl: "(min-width: 1440px)"; lg: "(min-width: 1280px)"; md: "(min-width: 905px)"; sm: "(min-width: 600px)"; }, { colors: { black: string; neutral900: string; neutral800: string; neutral700: string; ... 63 more ...; borders: string; }; ... 12 more ...; transitions: { ...; }; }, DefaultThemeMap, {}>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/cards.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/layout/cards.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}var FullWidth=(0,styles.zo)("div",{gridColumn:"auto / span 4","@sm":{gridColumn:"auto / span 8"},"@md":{gridColumn:"auto / span 12"},variants:{placeholder:{true:{height:"80vh",backgroundColor:"$neutral100",borderRadius:"$3",boxShadow:"$2"}}}}),HalfWidth=(0,styles.zo)("div",{gridColumn:"auto / span 4","@md":{gridColumn:"auto / span 6"}}),SideBar=(0,styles.zo)("div",{gridColumn:"auto / span 4","@sm":{gridColumn:"auto / span 8"},"@md":{gridColumn:"auto / span 4"}}),MainContentWithSideBar=(0,styles.zo)("div",{gridColumn:"auto / span 4","@sm":{gridColumn:"auto / span 8"}}),ColumnLayout=(0,styles.zo)("div",{maxWidth:"420px",minWidth:"328px",display:"grid",gridTemplateColumns:"repeat(4, 1fr)",marginInline:"auto",gap:"$4",position:"relative",paddingInline:"1rem","@sm":{minWidth:"480px",maxWidth:"480px",gridTemplateColumns:"repeat(8, 1fr)",paddingInline:"0"},"@md":{minWidth:"756px",maxWidth:"756px",gridTemplateColumns:"repeat(12, 1fr)",gap:"$3"},"@lg":{minWidth:"880px",maxWidth:"880px",paddingInlineStart:"0",gap:"$6"},"@xl":{minWidth:"1128px",maxWidth:"1128px"},variants:{undecorated:{true:{"@sm":{maxWidth:"536px",paddingInlineStart:"0"},"@md":{maxWidth:"857px",gap:"$6"},"@lg":{maxWidth:"880px"},"@xl":{maxWidth:"1128px"}}}}}),TwoCols=(0,styles.zo)("div",{display:"grid",gridTemplateColumns:"1fr",gap:"$6","@sm":{gridTemplateColumns:"1fr 1fr"}});try{FullWidth.displayName="FullWidth",FullWidth.__docgenInfo={description:"",displayName:"FullWidth",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:'boolean | "true" | ({ "@xl"?: boolean | "true"; "@lg"?: boolean | "true"; "@md"?: boolean | "true" | undefined; "@sm"?: boolean | "true" | undefined; "@initial"?: boolean | "true" | undefined; } & { ...; }) | undefined'}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ xl: "(min-width: 1440px)"; lg: "(min-width: 1280px)"; md: "(min-width: 905px)"; sm: "(min-width: 600px)"; }, { colors: { black: string; neutral900: string; neutral800: string; neutral700: string; ... 63 more ...; borders: string; }; ... 12 more ...; transitions: { ...; }; }, DefaultThemeMap, {}>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/columns.tsx#FullWidth"]={docgenInfo:FullWidth.__docgenInfo,name:"FullWidth",path:"src/layout/columns.tsx#FullWidth"})}catch(__react_docgen_typescript_loader_error){}try{HalfWidth.displayName="HalfWidth",HalfWidth.__docgenInfo={description:"",displayName:"HalfWidth",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ xl: "(min-width: 1440px)"; lg: "(min-width: 1280px)"; md: "(min-width: 905px)"; sm: "(min-width: 600px)"; }, { colors: { black: string; neutral900: string; neutral800: string; neutral700: string; ... 63 more ...; borders: string; }; ... 12 more ...; transitions: { ...; }; }, DefaultThemeMap, {}>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/columns.tsx#HalfWidth"]={docgenInfo:HalfWidth.__docgenInfo,name:"HalfWidth",path:"src/layout/columns.tsx#HalfWidth"})}catch(__react_docgen_typescript_loader_error){}try{SideBar.displayName="SideBar",SideBar.__docgenInfo={description:"",displayName:"SideBar",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ xl: "(min-width: 1440px)"; lg: "(min-width: 1280px)"; md: "(min-width: 905px)"; sm: "(min-width: 600px)"; }, { colors: { black: string; neutral900: string; neutral800: string; neutral700: string; ... 63 more ...; borders: string; }; ... 12 more ...; transitions: { ...; }; }, DefaultThemeMap, {}>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/columns.tsx#SideBar"]={docgenInfo:SideBar.__docgenInfo,name:"SideBar",path:"src/layout/columns.tsx#SideBar"})}catch(__react_docgen_typescript_loader_error){}try{MainContentWithSideBar.displayName="MainContentWithSideBar",MainContentWithSideBar.__docgenInfo={description:"",displayName:"MainContentWithSideBar",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ xl: "(min-width: 1440px)"; lg: "(min-width: 1280px)"; md: "(min-width: 905px)"; sm: "(min-width: 600px)"; }, { colors: { black: string; neutral900: string; neutral800: string; neutral700: string; ... 63 more ...; borders: string; }; ... 12 more ...; transitions: { ...; }; }, DefaultThemeMap, {}>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/columns.tsx#MainContentWithSideBar"]={docgenInfo:MainContentWithSideBar.__docgenInfo,name:"MainContentWithSideBar",path:"src/layout/columns.tsx#MainContentWithSideBar"})}catch(__react_docgen_typescript_loader_error){}try{ColumnLayout.displayName="ColumnLayout",ColumnLayout.__docgenInfo={description:"",displayName:"ColumnLayout",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},undecorated:{defaultValue:null,description:"",name:"undecorated",required:!1,type:{name:'boolean | "true" | ({ "@xl"?: boolean | "true"; "@lg"?: boolean | "true"; "@md"?: boolean | "true" | undefined; "@sm"?: boolean | "true" | undefined; "@initial"?: boolean | "true" | undefined; } & { ...; }) | undefined'}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ xl: "(min-width: 1440px)"; lg: "(min-width: 1280px)"; md: "(min-width: 905px)"; sm: "(min-width: 600px)"; }, { colors: { black: string; neutral900: string; neutral800: string; neutral700: string; ... 63 more ...; borders: string; }; ... 12 more ...; transitions: { ...; }; }, DefaultThemeMap, {}>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/columns.tsx#ColumnLayout"]={docgenInfo:ColumnLayout.__docgenInfo,name:"ColumnLayout",path:"src/layout/columns.tsx#ColumnLayout"})}catch(__react_docgen_typescript_loader_error){}try{TwoCols.displayName="TwoCols",TwoCols.__docgenInfo={description:"",displayName:"TwoCols",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ xl: "(min-width: 1440px)"; lg: "(min-width: 1280px)"; md: "(min-width: 905px)"; sm: "(min-width: 600px)"; }, { colors: { black: string; neutral900: string; neutral800: string; neutral700: string; ... 63 more ...; borders: string; }; ... 12 more ...; transitions: { ...; }; }, DefaultThemeMap, {}>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/columns.tsx#TwoCols"]={docgenInfo:TwoCols.__docgenInfo,name:"TwoCols",path:"src/layout/columns.tsx#TwoCols"})}catch(__react_docgen_typescript_loader_error){}var divider=__webpack_require__("./src/layout/divider.tsx"),Div=(0,styles.zo)("div",{}),Flex=(0,styles.zo)("div",{display:"flex",gap:"$$gap",variants:{column:{true:{flexDirection:"column"}},wrap:{true:{flexWrap:"wrap"}},gap:{0:{gap:"0px"},1:{gap:"$1"},2:{gap:"$2"},3:{gap:"$3"},4:{gap:"$4"},5:{gap:"$5"},6:{gap:"$6"},7:{gap:"$7"},8:{gap:"$8"},9:{gap:"$9"},10:{gap:"$10"},11:{gap:"$11"},12:{gap:"$12"},13:{gap:"$13"},14:{gap:"$14"},15:{gap:"$15"},16:{gap:"$16"}}},defaultVariants:{gap:3}});try{Div.displayName="Div",Div.__docgenInfo={description:"",displayName:"Div",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ xl: "(min-width: 1440px)"; lg: "(min-width: 1280px)"; md: "(min-width: 905px)"; sm: "(min-width: 600px)"; }, { colors: { black: string; neutral900: string; neutral800: string; neutral700: string; ... 63 more ...; borders: string; }; ... 12 more ...; transitions: { ...; }; }, DefaultThemeMap, {}>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/flex.tsx#Div"]={docgenInfo:Div.__docgenInfo,name:"Div",path:"src/layout/flex.tsx#Div"})}catch(__react_docgen_typescript_loader_error){}try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},column:{defaultValue:null,description:"",name:"column",required:!1,type:{name:'boolean | "true" | ({ "@xl"?: boolean | "true"; "@lg"?: boolean | "true"; "@md"?: boolean | "true" | undefined; "@sm"?: boolean | "true" | undefined; "@initial"?: boolean | "true" | undefined; } & { ...; }) | undefined'}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:'boolean | "true" | ({ "@xl"?: boolean | "true"; "@lg"?: boolean | "true"; "@md"?: boolean | "true" | undefined; "@sm"?: boolean | "true" | undefined; "@initial"?: boolean | "true" | undefined; } & { ...; }) | undefined'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:'0 | "0" | 1 | 2 | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | 10 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 12 | 13 | 14 | 15 | 16 | ({ "@xl"?: 0 | ... 33 more ...; "@lg"?: 0 | ... 33 more ...; "@md"?: 0 | ... 33 more ... | undefined; "@sm"?:...'}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ xl: "(min-width: 1440px)"; lg: "(min-width: 1280px)"; md: "(min-width: 905px)"; sm: "(min-width: 600px)"; }, { colors: { black: string; neutral900: string; neutral800: string; neutral700: string; ... 63 more ...; borders: string; }; ... 12 more ...; transitions: { ...; }; }, DefaultThemeMap, {}>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/flex.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/layout/flex.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}var __jsx=__webpack_require__("./node_modules/react/index.js").createElement,NagBarContainer=(0,styles.zo)("div",{width:"100%",backgroundColor:"$orange100",color:"$neutral900",borderStyle:"$solid",borderWidth:"0 0 $1 0",borderColor:"$orange200",padding:"$1"}),NagBar=function NagBar(_ref){var children=_ref.children;return __jsx(NagBarContainer,null,__jsx(ColumnLayout,null,__jsx(FullWidth,{css:{display:"flex",gap:"4px",justifyContent:"center"}},children)))};NagBar.displayName="NagBar",NagBar.__docgenInfo={description:"",methods:[],displayName:"NagBar",props:{children:{required:!1,tsType:{name:"any"},description:""}}};try{NagBar.displayName="NagBar",NagBar.__docgenInfo={description:"",displayName:"NagBar",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/nagbar.tsx#NagBar"]={docgenInfo:NagBar.__docgenInfo,name:"NagBar",path:"src/layout/nagbar.tsx#NagBar"})}catch(__react_docgen_typescript_loader_error){}var StyledBlocksContainer=(0,styles.zo)("div",{"& .image-block--stretched":{"& img":{width:"100%"}},"& figcaption":{color:"$neutral700",fontStyle:"italic",textAlign:"end"},"& ul":{marginBlock:"$3"},"& ol":{marginBlock:"$3"},"& p":{marginBlock:"$3"},"& table":{width:"100%",borderSpacing:"0",borderCollapse:"collapse",marginBlock:"$3"},"& th":{border:"1px solid black",textAlign:"center"},"& td":{border:"1px solid black",textAlign:"center"},"& pre":{backgroundColor:"$neutral800",color:"$neutral100",padding:"$3"},"& blockquote":{background:"$neutral100",borderLeft:"10px solid $neutral600",margin:"1.5em 10px",padding:"0.5em 10px",quotes:"“”‘’"},"& blockquote:before":{color:"$neutral800",content:"open-quote",fontSize:"4em",lineHeight:"0.1em",marginRight:"0.25em",verticalAlign:"-0.4em"},"& blockquote p":{display:"inline"},"& iframe":{display:"block",maxWidth:"100%",marginInline:"auto"}});try{StyledBlocksContainer.displayName="StyledBlocksContainer",StyledBlocksContainer.__docgenInfo={description:"",displayName:"StyledBlocksContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ xl: "(min-width: 1440px)"; lg: "(min-width: 1280px)"; md: "(min-width: 905px)"; sm: "(min-width: 600px)"; }, { colors: { black: string; neutral900: string; neutral800: string; neutral700: string; ... 63 more ...; borders: string; }; ... 12 more ...; transitions: { ...; }; }, DefaultThemeMap, {}>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/styled-block-container.tsx#StyledBlocksContainer"]={docgenInfo:StyledBlocksContainer.__docgenInfo,name:"StyledBlocksContainer",path:"src/layout/styled-block-container.tsx#StyledBlocksContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>Span,H1:()=>H1,H2:()=>H2,H3:()=>H3,H4:()=>H4,H5:()=>H5,P:()=>P});var _styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/index.ts"),H1=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.zo)("h1",{fontSize:"$h1m",lineHeight:"$h1m",fontWeight:"$bold",fontFamily:"$heading","@sm":{fontSize:"$h1",lineHeight:"$h1"}}),H2=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.zo)("h2",{fontSize:"$h2m",lineHeight:"$h2m",fontWeight:"$bold",fontFamily:"$heading","@sm":{fontSize:"$h2",lineHeight:"$h2"}}),H3=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.zo)("h3",{fontSize:"$h3m",lineHeight:"$h3m",fontWeight:"$medium",fontFamily:"$heading","@sm":{fontSize:"$h3",lineHeight:"$h3"}}),H4=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.zo)("h4",{fontSize:"$h4m",lineHeight:"$h4m",fontWeight:"$normal",fontFamily:"$heading","@sm":{fontSize:"$h4",lineHeight:"$h4"}}),H5=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.zo)("h5",{fontSize:"$h5",lineHeight:"$h5",fontWeight:"$bold",fontFamily:"$heading",textTransform:"uppercase"}),P=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.zo)("p"),Span=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.zo)("span")}}]);