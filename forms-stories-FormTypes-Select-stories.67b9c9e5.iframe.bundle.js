"use strict";(self.webpackChunk_revolancer_ui=self.webpackChunk_revolancer_ui||[]).push([[2109],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/forms/stories/FormTypes/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/forms/index.ts"),formik__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),_layout__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/layout/index.ts"),_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/text/index.ts"),_modals__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/modals/index.ts"),_buttons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/buttons/index.ts"),_excluded=["name","placeholder"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/FormTypes/Select",component:___WEBPACK_IMPORTED_MODULE_1__.Ph,parameters:{layout:"centered"},argTypes:{name:{control:{type:"text"},table:{defaultValue:{summary:""}}},placeholder:{control:{type:"text"},table:{defaultValue:{summary:""}}},children:{}},render:function render(_ref){var name=_ref.name,placeholder=_ref.placeholder,args=(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref,_excluded),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),currency=_useState[0],setCurrency=_useState[1],items={gbp:"GBP £",usd:"USD $",eur:"EUR €"};return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(formik__WEBPACK_IMPORTED_MODULE_7__.J9,{initialValues:{currency},onSubmit:function onSubmit(_ref2){return function submitHandler(dataSet,close){setCurrency(dataSet),close()}(_ref2.currency,close)}},(function(props){return __jsx(___WEBPACK_IMPORTED_MODULE_1__.l0,{onSubmit:props.handleSubmit},__jsx(_layout__WEBPACK_IMPORTED_MODULE_2__.kC,{column:!0},__jsx(_layout__WEBPACK_IMPORTED_MODULE_2__.Zb,{css:{width:"50vw"}},__jsx(_text__WEBPACK_IMPORTED_MODULE_3__.H3,null,"Select Component"),__jsx(_layout__WEBPACK_IMPORTED_MODULE_2__.iz,null),__jsx(_text__WEBPACK_IMPORTED_MODULE_3__.P,null,"The select, selectGroup, and selectItem components form a drop down list from a set of choices of your creation. Use this when you want to allow your users to choose from a set amount of choices.",__jsx("br",null),__jsx("br",null),"Make sure to wrap this inside the form component as the select components rely on the Field props from Formik."),__jsx(___WEBPACK_IMPORTED_MODULE_1__.Ph,(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_8__.Z)({name,placeholder},args),__jsx(___WEBPACK_IMPORTED_MODULE_1__.DI,null,Object.entries(items).map((function(_ref3){var _ref4=(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__.Z)(_ref3,2),key=_ref4[0],value=_ref4[1];return __jsx(___WEBPACK_IMPORTED_MODULE_1__.Ql,{value:key,key},value)})))),__jsx(_buttons__WEBPACK_IMPORTED_MODULE_5__.OL,{type:"submit",disabled:""===props.values.currency},"Submit"))))})),__jsx(_modals__WEBPACK_IMPORTED_MODULE_4__.e,{openOnTrigger:""!==currency,renderChildren:function renderChildren(_ref5){var close=_ref5.close;return __jsx(_layout__WEBPACK_IMPORTED_MODULE_2__.Zb,null,__jsx(_layout__WEBPACK_IMPORTED_MODULE_2__.kC,{column:!0,wrap:!0},__jsx(_text__WEBPACK_IMPORTED_MODULE_3__.H4,null,"Data Submitted!"),__jsx(_text__WEBPACK_IMPORTED_MODULE_3__.H5,null,"Here's your submission:"),__jsx(_layout__WEBPACK_IMPORTED_MODULE_2__.iz,null),__jsx(_text__WEBPACK_IMPORTED_MODULE_3__.D,null,"currency: ",currency),__jsx(_buttons__WEBPACK_IMPORTED_MODULE_5__.OL,{size:"small",onClick:function onClick(){setCurrency(""),close()}},"CLOSE")))}}))}};var Default={args:{name:"currency",placeholder:"hello"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'currency',\n    placeholder: 'hello'\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/buttons/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zx:()=>Button,OL:()=>FormButton,rU:()=>Link,rs:()=>Switch,C9:()=>TertiaryButton,uS:()=>TertiaryFormButton,Ho:()=>UnstyledLink});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react_interactive_esm=__webpack_require__("./node_modules/react-interactive/dist/react-interactive.esm.js"),styles=__webpack_require__("./src/styles/index.ts"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-switch/dist/index.mjs"),__jsx=react.createElement,SwitchRoot=(0,styles.zo)(dist.fC,{all:"unset",width:"$11",height:"$7",backgroundColor:"$neutral400",borderRadius:"9999px",position:"relative",'&[data-state="checked"]':{backgroundColor:"$pink500"}}),SwitchThumb=(0,styles.zo)(dist.bU,{display:"block",width:"$6",height:"$6",backgroundColor:"$white",borderRadius:"9999px",transition:"transform 100ms",transform:"translateX(2px)",willChange:"transform",'&[data-state="checked"]':{transform:"translateX(18px)"}}),SwitchWrapper=(0,styles.zo)("div",{display:"flex",alignItems:"center",gap:"$2"}),Switch=function Switch(_ref){var name=_ref.name,children=_ref.children,id=_ref.id,_ref$defaultChecked=_ref.defaultChecked,defaultChecked=void 0!==_ref$defaultChecked&&_ref$defaultChecked,_ref$checked=_ref.checked,checked=void 0!==_ref$checked&&_ref$checked,_ref$required=_ref.required,required=void 0!==_ref$required&&_ref$required,handleCheckedChange=_ref.handleCheckedChange;return void 0===id&&(id="check-".concat(Math.random())),void 0===name&&(name=id),__jsx(SwitchWrapper,null,__jsx(SwitchRoot,{defaultChecked,checked,id,required,name,onCheckedChange:handleCheckedChange},__jsx(SwitchThumb,null)),children&&__jsx("label",{htmlFor:id},children))};Switch.displayName="Switch";try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},defaultChecked:{defaultValue:{value:"false"},description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},handleCheckedChange:{defaultValue:null,description:"",name:"handleCheckedChange",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/buttons/switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/buttons/switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var buttons_styles={variants:{role:{primary:{backgroundColor:"$pink500",color:"$white",borderWidth:"$1",borderStyle:"$solid",borderColor:"$pink500","&:hover":{backgroundColor:"$pink700",borderColor:"$pink700"},"&:active":{backgroundColor:"$pink800",borderColor:"$pink800"}},secondary:(0,defineProperty.Z)({backgroundColor:"$white",color:"$neutral900",borderWidth:"$1",borderStyle:"$solid",borderColor:"$neutral400","&:hover":{backgroundColor:"$neutral100"},"&:active":{backgroundColor:"$neutral300"}},".".concat(styles.$_," &"),{backgroundColor:"$neutral900",color:"$neutral100",borderColor:"$neutral800","&:hover":{borderColor:"$neutral700",backgroundColor:"$neutral800"},"&:active":{borderColor:"$neutral600",backgroundColor:"$neutral700"}}),dangerous:{backgroundColor:"$red500",color:"$white",borderWidth:"$1",borderStyle:"$solid",borderColor:"$red500","&:hover":{backgroundColor:"$red700",borderColor:"$red700"},"&:active":{backgroundColor:"$red800",borderColor:"$red800"}}},size:{small:{paddingBlock:"$2",paddingInline:"$4"},medium:{paddingBlock:"$3",paddingInline:"$6"},large:{paddingBlock:"$4",paddingInline:"$7"}},disabled:{true:{pointerEvents:"none",cursor:"inherit"}},loading:{true:function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({pointerEvents:"none",cursor:"inherit","&::before":{content:"Button",color:"transparent"}},styles.O$)}},display:"inline-block",borderRadius:"$1",textDecoration:"none",fontSize:"$body1",fontWeight:"$semibold",height:"max-content",width:"max-content",boxShadow:"$2",textTransform:"capitalize",compoundVariants:[{role:"primary",disabled:!0,css:{opacity:"$opacity$700",backgroundColor:"$pink200",borderColor:"$pink200"}},{role:"dangerous",disabled:!0,css:{opacity:"$opacity$700",backgroundColor:"$red200",borderColor:"$red200"}},{role:"secondary",disabled:!0,css:(0,defineProperty.Z)({opacity:"$opacity$500"},".".concat(styles.$_," &"),{opacity:"$opacity$500"})}],defaultVariants:{role:"primary",size:"medium",disabled:!1}},tertiaryStyles=(0,defineProperty.Z)((0,defineProperty.Z)({color:"$neutral700",display:"inline",background:"none",border:"none",textDecoration:"none",fontSize:"$body2",fontWeight:"$normal",height:"max-content",width:"max-content",transition:"none",textTransform:"capitalize",padding:0,"&:hover":{color:"$navy500"},"&:active":{color:"$navy500",fontWeight:"$semibold",textDecoration:"underline"}},".".concat(styles.$_," &"),{color:"$white","&:hover":{color:"$navy500"},"&:active":{color:"$navy500",fontWeight:"$semibold",textDecoration:"underline"}}),"variants",{disabled:{true:(0,defineProperty.Z)({color:"$neutral900",opacity:"$opacity$500",pointerEvents:"none",cursor:"inherit"},".".concat(styles.$_," &"),{color:"$neutral100",opacity:"$opacity$500"})},normalCase:{true:{textTransform:"none"}}}),Button=(0,styles.zo)(link_default(),buttons_styles),FormButton=(0,styles.zo)(react_interactive_esm.vj.Button,buttons_styles),TertiaryButton=(0,styles.zo)(link_default(),tertiaryStyles),TertiaryFormButton=(0,styles.zo)(react_interactive_esm.vj.Button,tertiaryStyles),Link=(0,styles.zo)(link_default(),{color:"$pink500",display:"inline",background:"none",border:"none",textDecoration:"none",fontSize:"$body2",fontWeight:"$normal",height:"max-content",width:"max-content",transition:"none",padding:0,"&:hover":{color:"$pink600",textDecoration:"underline"},"&:active":{color:"$pink600",fontWeight:"$semibold",textDecoration:"underline"},variants:{disabled:{true:{color:"$neutral900",opacity:"$opacity$500",pointerEvents:"none",cursor:"inherit"}}}}),UnstyledLink=(0,styles.zo)(link_default(),{textDecoration:"none",color:"inherit",variants:{disabled:{true:{pointerEvents:"none",cursor:"inherit"}}}})},"./src/modals/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>ConfirmationDialog,e:()=>RevoModal});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),styles=__webpack_require__("./src/styles/index.ts"),lib=__webpack_require__("./node_modules/react-modal/lib/index.js"),lib_default=__webpack_require__.n(lib),buttons=__webpack_require__("./src/buttons/index.ts"),layout=__webpack_require__("./src/layout/index.ts"),index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),free_solid_svg_icons=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),src_text=__webpack_require__("./src/text/index.ts"),__jsx=react.createElement,confirmation_dialog_styles=styles.vc.theme,customStyles={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:confirmation_dialog_styles.radii[2],paddingInline:confirmation_dialog_styles.sizes[6],paddingBlock:confirmation_dialog_styles.sizes[3],maxWidth:"min(640px, 85vw)",minWidth:"340px",width:"100%"}},ConfirmationDialog=function ConfirmationDialog(_ref){var onAccept=_ref.onAccept,onReject=_ref.onReject,_ref$confirmationMess=_ref.confirmationMessage,confirmationMessage=void 0===_ref$confirmationMess?"Are you sure you want to do that?":_ref$confirmationMess,_ref$labelAccept=_ref.labelAccept,labelAccept=void 0===_ref$labelAccept?"Confirm":_ref$labelAccept,_ref$labelReject=_ref.labelReject,labelReject=void 0===_ref$labelReject?"Cancel":_ref$labelReject,_ref$dangerous=_ref.dangerous,dangerous=void 0!==_ref$dangerous&&_ref$dangerous,label=_ref.label,_ref$title=_ref.title,title=void 0===_ref$title?"Are you sure?":_ref$title,_useState=(0,react.useState)(!1),modalIsOpen=_useState[0],setIsOpen=_useState[1],rejectHandler=function rejectHandler(){onReject&&onReject()},closeModal=function closeModal(){setIsOpen(!1)};return __jsx(react.Fragment,null,__jsx(buttons.zx,{role:dangerous?"dangerous":"primary",href:"#",onClick:function onClick(e){e.preventDefault(),function openModal(){setIsOpen(!0)}()}},label),__jsx(lib_default(),{isOpen:modalIsOpen,onRequestClose:function onRequestClose(){rejectHandler(),closeModal()},style:customStyles,contentLabel:title},__jsx(layout.kC,{column:!0},__jsx(layout.kC,{css:{justifyContent:"space-between"}},__jsx(src_text.H4,null,title),__jsx(buttons.Ho,{href:"#",onClick:function onClick(e){e.preventDefault(),rejectHandler(),closeModal()},css:{fontSize:"$h5"}},__jsx(index_es.G,{icon:free_solid_svg_icons.YIN}))),__jsx(src_text.P,null,confirmationMessage),__jsx(layout.kC,null,__jsx(buttons.zx,{role:dangerous?"dangerous":"primary",href:"#",onClick:function onClick(e){e.preventDefault(),function acceptHandler(){onAccept()}(),closeModal()}},labelAccept),__jsx(buttons.zx,{role:"secondary",href:"#",onClick:function onClick(e){e.preventDefault(),rejectHandler(),closeModal()}},labelReject)))))};try{ConfirmationDialog.displayName="ConfirmationDialog",ConfirmationDialog.__docgenInfo={description:"",displayName:"ConfirmationDialog",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onAccept:{defaultValue:null,description:"",name:"onAccept",required:!0,type:{name:"() => void"}},onReject:{defaultValue:null,description:"",name:"onReject",required:!1,type:{name:"(() => void)"}},title:{defaultValue:{value:"Are you sure?"},description:"",name:"title",required:!1,type:{name:"string"}},confirmationMessage:{defaultValue:{value:"Are you sure you want to do that?"},description:"",name:"confirmationMessage",required:!1,type:{name:"string"}},labelAccept:{defaultValue:{value:"Confirm"},description:"",name:"labelAccept",required:!1,type:{name:"string"}},labelReject:{defaultValue:{value:"Cancel"},description:"",name:"labelReject",required:!1,type:{name:"string"}},dangerous:{defaultValue:{value:"false"},description:"",name:"dangerous",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modals/confirmation-dialog.tsx#ConfirmationDialog"]={docgenInfo:ConfirmationDialog.__docgenInfo,name:"ConfirmationDialog",path:"src/modals/confirmation-dialog.tsx#ConfirmationDialog"})}catch(__react_docgen_typescript_loader_error){}var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),modal_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var RevoModal=function RevoModal(_ref){var _ref$openOnTrigger=_ref.openOnTrigger,openOnTrigger=void 0===_ref$openOnTrigger||_ref$openOnTrigger,_ref$showModalOpenCTA=_ref.showModalOpenCTA,showModalOpenCTA=void 0!==_ref$showModalOpenCTA&&_ref$showModalOpenCTA,_ref$showCloseIcon=_ref.showCloseIcon,showCloseIcon=void 0!==_ref$showCloseIcon&&_ref$showCloseIcon,renderChildren=_ref.renderChildren,onClose=_ref.onClose,renderCTA=_ref.renderCTA,_ref$css=_ref.css,css=void 0===_ref$css?{}:_ref$css,_useState=(0,react.useState)(!1),modalIsOpen=_useState[0],setIsOpen=_useState[1],modalOpen=function modalOpen(){setIsOpen(!0)},modalClose=function modalClose(){setIsOpen(!1)};(0,react.useEffect)((function(){openOnTrigger&&modalOpen()}),[openOnTrigger]);var customStyles={content:_objectSpread({top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"none",border:"none",overflow:"visible",padding:"0"},css)},renderCloseIcon=modal_jsx(layout.kC,{css:{width:"100%",height:"$2"}},modal_jsx(buttons.zx,{href:"#",onClick:function onClick(){onClose?(onClose(),modalClose()):modalClose()},css:{backgroundColor:"$background",borderWidth:"0px",color:"$neutral400",boxShadow:"0px",borderRadius:"$3",position:"absolute",top:"3px",right:"3px",paddingBlock:"$0",paddingInline:"$2","&:hover":{backgroundColor:"$neutral400",color:"$white"}}},modal_jsx(index_es.G,{icon:free_solid_svg_icons.g82}))),renderOpenModal=showModalOpenCTA&&(renderCTA?renderCTA({open:modalOpen}):modal_jsx(buttons.zx,{role:"primary",href:"#",onClick:function onClick(){return modalOpen()}},"Open"));return modal_jsx(react.Fragment,null,renderOpenModal,modal_jsx(lib_default(),{isOpen:modalIsOpen,onRequestClose:function onRequestClose(){onClose?(onClose(),modalClose()):modalClose()},style:customStyles},modal_jsx(layout.Zb,{css:{color:"$neutral700",alignItems:"center",justifyContent:"center"}},showCloseIcon&&renderCloseIcon,modal_jsx(layout.kC,{column:!0,wrap:!0,css:{alignItems:"center",justifyContent:"center"}},renderChildren({close:modalClose})))))};try{RevoModal.displayName="RevoModal",RevoModal.__docgenInfo={description:"A Reusable Modal Component for Revolancer UI library",displayName:"RevoModal",props:{openOnTrigger:{defaultValue:{value:"true"},description:"Set a trigger to open the modal, set the prop to true to open on load",name:"openOnTrigger",required:!1,type:{name:"boolean"}},showModalOpenCTA:{defaultValue:{value:"false"},description:"Displays a default CTA to open the modal",name:"showModalOpenCTA",required:!1,type:{name:"boolean"}},showCloseIcon:{defaultValue:{value:"false"},description:"Displays the close icon in the modal",name:"showCloseIcon",required:!1,type:{name:"boolean"}},renderChildren:{defaultValue:null,description:"Defines the child components in the modal, you can use handle functions from the parent component",name:"renderChildren",required:!0,type:{name:"({ close }: { close: () => void; }) => ReactNode"}},renderCTA:{defaultValue:null,description:"Defines the CTA",name:"renderCTA",required:!1,type:{name:"(({ open }: { open: () => void; }) => ReactNode)"}},onClose:{defaultValue:null,description:"Custom handleclose function",name:"onClose",required:!1,type:{name:"(() => void)"}},css:{defaultValue:{value:"{}"},description:"Additional modal Card CSS",name:"css",required:!1,type:{name:"object"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modals/modal.tsx#RevoModal"]={docgenInfo:RevoModal.__docgenInfo,name:"RevoModal",path:"src/modals/modal.tsx#RevoModal"})}catch(__react_docgen_typescript_loader_error){}}}]);