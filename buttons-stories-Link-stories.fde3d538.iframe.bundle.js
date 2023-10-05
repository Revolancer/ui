"use strict";(self.webpackChunk_revolancer_ui=self.webpackChunk_revolancer_ui||[]).push([[9012],{"./node_modules/@radix-ui/react-switch/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bU:()=>$6be4966fd9bbc698$export$6521433ed15a34db,fC:()=>$6be4966fd9bbc698$export$be92b6f5f03c0fe9});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@radix-ui/react-use-previous/dist/index.mjs"),_radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@radix-ui/react-use-size/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs");const[$6be4966fd9bbc698$var$createSwitchContext,$6be4966fd9bbc698$export$cf7f5f17f69cbd43]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.b)("Switch"),[$6be4966fd9bbc698$var$SwitchProvider,$6be4966fd9bbc698$var$useSwitchContext]=$6be4966fd9bbc698$var$createSwitchContext("Switch"),$6be4966fd9bbc698$export$b5d5cf8927ab7262=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeSwitch,name,checked:checkedProp,defaultChecked,required,disabled,value="on",onCheckedChange,...switchProps}=props,[button,setButton]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.e)(forwardedRef,(node=>setButton(node))),hasConsumerStoppedPropagationRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),isFormControl=!button||Boolean(button.closest("form")),[checked=!1,setChecked]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__.T)({prop:checkedProp,defaultProp:defaultChecked,onChange:onCheckedChange});return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($6be4966fd9bbc698$var$SwitchProvider,{scope:__scopeSwitch,checked,disabled},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.WV.button,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({type:"button",role:"switch","aria-checked":checked,"aria-required":required,"data-state":$6be4966fd9bbc698$var$getState(checked),"data-disabled":disabled?"":void 0,disabled,value},switchProps,{ref:composedRefs,onClick:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.M)(props.onClick,(event=>{setChecked((prevChecked=>!prevChecked)),isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())}))})),isFormControl&&(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($6be4966fd9bbc698$var$BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled,style:{transform:"translateX(-100%)"}}))})),$6be4966fd9bbc698$export$4d07bf653ea69106=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeSwitch,...thumbProps}=props,context=$6be4966fd9bbc698$var$useSwitchContext("SwitchThumb",__scopeSwitch);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.WV.span,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({"data-state":$6be4966fd9bbc698$var$getState(context.checked),"data-disabled":context.disabled?"":void 0},thumbProps,{ref:forwardedRef}))})),$6be4966fd9bbc698$var$BubbleInput=props=>{const{control,checked,bubbles=!0,...inputProps}=props,ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),prevChecked=(0,_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__.D)(checked),controlSize=(0,_radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__.t)(control);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles});setChecked.call(input,checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input",(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:checked},inputProps,{tabIndex:-1,ref,style:{...props.style,...controlSize,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function $6be4966fd9bbc698$var$getState(checked){return checked?"checked":"unchecked"}const $6be4966fd9bbc698$export$be92b6f5f03c0fe9=$6be4966fd9bbc698$export$b5d5cf8927ab7262,$6be4966fd9bbc698$export$6521433ed15a34db=$6be4966fd9bbc698$export$4d07bf653ea69106},"./src/buttons/stories/Link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Disabled$parameters,_Disabled$parameters2,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Buttons/Link",component:__webpack_require__("./src/buttons/index.ts").rU,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{summary:!1}}}}};var Default={args:{disabled:!1,href:"#",children:"Link"}},Disabled={args:_objectSpread(_objectSpread({},Default.args),{},{disabled:!0})};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    disabled: false,\n    href: '#',\n    children: 'Link'\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Disabled.parameters=_objectSpread(_objectSpread({},Disabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Disabled$parameters=Disabled.parameters)||void 0===_Disabled$parameters?void 0:_Disabled$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    ...Default.args,\n    disabled: true\n  }\n}"},null===(_Disabled$parameters2=Disabled.parameters)||void 0===_Disabled$parameters2||null===(_Disabled$parameters2=_Disabled$parameters2.docs)||void 0===_Disabled$parameters2?void 0:_Disabled$parameters2.source)})})},"./src/buttons/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zx:()=>Button,OL:()=>FormButton,rU:()=>Link,rs:()=>Switch,C9:()=>TertiaryButton,uS:()=>TertiaryFormButton,Ho:()=>UnstyledLink});var _tertiaryStyles,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react_interactive_esm=__webpack_require__("./node_modules/react-interactive/dist/react-interactive.esm.js"),styles=__webpack_require__("./src/styles/index.ts"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-switch/dist/index.mjs"),__jsx=react.createElement,SwitchRoot=(0,styles.zo)(dist.fC,{all:"unset",width:"$11",height:"$7",backgroundColor:"$neutral400",borderRadius:"9999px",position:"relative",'&[data-state="checked"]':{backgroundColor:"$pink500"}}),SwitchThumb=(0,styles.zo)(dist.bU,{display:"block",width:"$6",height:"$6",backgroundColor:"$white",borderRadius:"9999px",transition:"transform 100ms",transform:"translateX(2px)",willChange:"transform",'&[data-state="checked"]':{transform:"translateX(18px)"}}),SwitchWrapper=(0,styles.zo)("div",{display:"flex",alignItems:"center",gap:"$2"}),Switch=function Switch(_ref){var name=_ref.name,children=_ref.children,id=_ref.id,_ref$defaultChecked=_ref.defaultChecked,defaultChecked=void 0!==_ref$defaultChecked&&_ref$defaultChecked,_ref$checked=_ref.checked,checked=void 0!==_ref$checked&&_ref$checked,_ref$required=_ref.required,required=void 0!==_ref$required&&_ref$required,handleCheckedChange=_ref.handleCheckedChange;return void 0===id&&(id="check-".concat(Math.random())),void 0===name&&(name=id),__jsx(SwitchWrapper,null,__jsx(SwitchRoot,{defaultChecked,checked,id,required,name,onCheckedChange:handleCheckedChange},__jsx(SwitchThumb,null)),children&&__jsx("label",{htmlFor:id},children))};Switch.displayName="Switch",Switch.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{defaultChecked:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},checked:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},required:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"any"},description:""},id:{required:!1,tsType:{name:"string"},description:""},handleCheckedChange:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},defaultChecked:{defaultValue:{value:"false"},description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},handleCheckedChange:{defaultValue:null,description:"",name:"handleCheckedChange",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/buttons/switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/buttons/switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var buttons_styles={variants:{role:{primary:{backgroundColor:"$pink500",color:"$white",borderWidth:"$1",borderStyle:"$solid",borderColor:"$pink500","&:hover":{backgroundColor:"$pink700",borderColor:"$pink700"},"&:active":{backgroundColor:"$pink800",borderColor:"$pink800"}},secondary:(0,defineProperty.Z)({backgroundColor:"$white",color:"$neutral900",borderWidth:"$1",borderStyle:"$solid",borderColor:"$neutral400","&:hover":{backgroundColor:"$neutral100"},"&:active":{backgroundColor:"$neutral300"}},".".concat(styles.$_," &"),{backgroundColor:"$neutral900",color:"$neutral100",borderColor:"$neutral800","&:hover":{borderColor:"$neutral700",backgroundColor:"$neutral800"},"&:active":{borderColor:"$neutral600",backgroundColor:"$neutral700"}}),dangerous:{backgroundColor:"$red500",color:"$white",borderWidth:"$1",borderStyle:"$solid",borderColor:"$red500","&:hover":{backgroundColor:"$red700",borderColor:"$red700"},"&:active":{backgroundColor:"$red800",borderColor:"$red800"}}},size:{small:{paddingBlock:"$2",paddingInline:"$4"},medium:{paddingBlock:"$3",paddingInline:"$6"},large:{paddingBlock:"$4",paddingInline:"$7"}},disabled:{true:{pointerEvents:"none",cursor:"inherit"}},loading:{true:function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({pointerEvents:"none",cursor:"inherit","&::before":{content:"Button",color:"transparent"}},styles.O$)}},display:"inline-block",borderRadius:"$1",textDecoration:"none",fontSize:"$body1",fontWeight:"$semibold",height:"max-content",width:"max-content",boxShadow:"$2",textTransform:"capitalize",compoundVariants:[{role:"primary",disabled:!0,css:{opacity:"$opacity$700",backgroundColor:"$pink200",borderColor:"$pink200"}},{role:"dangerous",disabled:!0,css:{opacity:"$opacity$700",backgroundColor:"$red200",borderColor:"$red200"}},{role:"secondary",disabled:!0,css:(0,defineProperty.Z)({opacity:"$opacity$500"},".".concat(styles.$_," &"),{opacity:"$opacity$500"})}],defaultVariants:{role:"primary",size:"medium",disabled:!1}},tertiaryStyles=(_tertiaryStyles={color:"$neutral700",display:"inline",background:"none",border:"none",textDecoration:"none",fontSize:"$body2",fontWeight:"$normal",height:"max-content",width:"max-content",transition:"none",textTransform:"capitalize",padding:0,"&:hover":{color:"$navy500"},"&:active":{color:"$navy500",fontWeight:"$semibold",textDecoration:"underline"}},(0,defineProperty.Z)(_tertiaryStyles,".".concat(styles.$_," &"),{color:"$white","&:hover":{color:"$navy500"},"&:active":{color:"$navy500",fontWeight:"$semibold",textDecoration:"underline"}}),(0,defineProperty.Z)(_tertiaryStyles,"variants",{disabled:{true:(0,defineProperty.Z)({color:"$neutral900",opacity:"$opacity$500",pointerEvents:"none",cursor:"inherit"},".".concat(styles.$_," &"),{color:"$neutral100",opacity:"$opacity$500"})},normalCase:{true:{textTransform:"none"}}}),_tertiaryStyles),Button=(0,styles.zo)(link_default(),buttons_styles),FormButton=(0,styles.zo)(react_interactive_esm.vj.Button,buttons_styles),TertiaryButton=(0,styles.zo)(link_default(),tertiaryStyles),TertiaryFormButton=(0,styles.zo)(react_interactive_esm.vj.Button,tertiaryStyles),Link=(0,styles.zo)(link_default(),{color:"$pink500",display:"inline",background:"none",border:"none",textDecoration:"none",fontSize:"$body2",fontWeight:"$normal",height:"max-content",width:"max-content",transition:"none",padding:0,"&:hover":{color:"$pink600",textDecoration:"underline"},"&:active":{color:"$pink600",fontWeight:"$semibold",textDecoration:"underline"},variants:{disabled:{true:{color:"$neutral900",opacity:"$opacity$500",pointerEvents:"none",cursor:"inherit"}}}}),UnstyledLink=(0,styles.zo)(link_default(),{textDecoration:"none",color:"inherit",variants:{disabled:{true:{pointerEvents:"none",cursor:"inherit"}}}})}}]);