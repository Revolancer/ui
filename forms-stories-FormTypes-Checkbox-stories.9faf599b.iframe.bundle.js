"use strict";(self.webpackChunk_revolancer_ui=self.webpackChunk_revolancer_ui||[]).push([[6938],{"./src/forms/stories/FormTypes/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/forms/index.ts"),formik__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),_layout__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/layout/index.ts"),_text__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/text/index.ts"),_buttons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/buttons/index.ts"),_modals__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/modals/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/FormTypes/Checkbox",component:___WEBPACK_IMPORTED_MODULE_2__.XZ,parameters:{layout:"centered"},argTypes:{name:{control:{type:"text"},table:{defaultValue:{summary:"Checkbox"}}},children:{},id:{control:{type:"text"},table:{defaultValue:{summary:"Checkbox-1"}}},defaultChecked:{control:{type:"boolean"},table:{defaultValue:{summary:!1}}},checked:{control:{type:"boolean"},table:{defaultValue:{summary:!1}}},required:{control:{type:"boolean"},table:{defaultValue:{summary:!1}}}},render:function render(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),data=_useState[0],setData=_useState[1];return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(formik__WEBPACK_IMPORTED_MODULE_7__.J9,{initialValues:{name:"Stacy Fakename",confirmed:!1},onSubmit:function onSubmit(_ref){return function submitHandler(dataSet,close){setData(dataSet),close()}(_ref.name,close)}},(function(props){return __jsx(___WEBPACK_IMPORTED_MODULE_2__.l0,{onSubmit:props.handleSubmit},__jsx(_layout__WEBPACK_IMPORTED_MODULE_3__.kC,{column:!0},__jsx(_layout__WEBPACK_IMPORTED_MODULE_3__.Zb,{css:{width:"33vw"}},__jsx(_text__WEBPACK_IMPORTED_MODULE_4__.H3,null,"Form Component"),__jsx(_layout__WEBPACK_IMPORTED_MODULE_3__.iz,null),__jsx(_text__WEBPACK_IMPORTED_MODULE_4__.P,null,"The checkbox component is a styled component for confirmation actions (e.g. confirming profile changes or permanently deleting accounts) when creating forms for your project.",__jsx("br",null),__jsx("br",null),"Make sure to use this component inside the Form component as the checkbox uses Formik's useFormikContext custom hook."))),__jsx(___WEBPACK_IMPORTED_MODULE_2__.if,null,__jsx(___WEBPACK_IMPORTED_MODULE_2__.Gy,{name:"name",value:props.values.name,onChange:props.handleChange})),__jsx(_layout__WEBPACK_IMPORTED_MODULE_3__.kC,{css:{alignItems:"center"}},__jsx(___WEBPACK_IMPORTED_MODULE_2__.XZ,{name:"confirmed",checked:props.values.confirmed},"I have read and accepted the terms and conditions")),__jsx(_buttons__WEBPACK_IMPORTED_MODULE_5__.OL,{type:"submit",disabled:!props.values.confirmed},"Submit"))})),__jsx(_modals__WEBPACK_IMPORTED_MODULE_6__.e,{openOnTrigger:""!==data,renderChildren:function renderChildren(_ref2){var close=_ref2.close;return __jsx(_layout__WEBPACK_IMPORTED_MODULE_3__.Zb,null,__jsx(_layout__WEBPACK_IMPORTED_MODULE_3__.kC,{column:!0,wrap:!0},__jsx(_text__WEBPACK_IMPORTED_MODULE_4__.H4,null,"Data Submitted!"),__jsx(_text__WEBPACK_IMPORTED_MODULE_4__.H5,null,"Here's your submission:"),__jsx(_layout__WEBPACK_IMPORTED_MODULE_3__.iz,null),__jsx(_text__WEBPACK_IMPORTED_MODULE_4__.D,null,"name: ",data),__jsx(_buttons__WEBPACK_IMPORTED_MODULE_5__.OL,{size:"small",onClick:function onClick(){setData(""),close()}},"CLOSE")))}}))}};var Default={};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})}}]);