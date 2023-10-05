"use strict";(self.webpackChunk_revolancer_ui=self.webpackChunk_revolancer_ui||[]).push([[9478],{"./src/modals/stories/RevoModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CTAWithHandleSubmit:()=>CTAWithHandleSubmit,Default:()=>Default,OpenOnTrigger:()=>OpenOnTrigger,WithCloseIcon:()=>WithCloseIcon,WithOpenModalCTA:()=>WithOpenModalCTA,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_WithCloseIcon$parame,_WithCloseIcon$parame2,_WithOpenModalCTA$par,_WithOpenModalCTA$par2,_CTAWithHandleSubmit$,_CTAWithHandleSubmit$2,_CTAWithHandleSubmit$3,_OpenOnTrigger$parame,_OpenOnTrigger$parame2,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/modals/index.ts"),_buttons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/buttons/index.ts"),_text__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/text/index.ts"),_layout__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/layout/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Modals/RevoModal",component:___WEBPACK_IMPORTED_MODULE_2__.e,tags:["autodocs"],argTypes:{showModalOpenCTA:{control:{type:"boolean"},table:{defaultValue:{summary:!1}}},openOnTrigger:{control:{type:"boolean"},table:{defaultValue:{summary:!1}}},showCloseIcon:{control:{type:"boolean"},table:{defaultValue:{summary:!1}}},renderChildren:{},renderCTA:{},onClose:{}}};var Default={args:{openOnTrigger:!0,showModalOpenCTA:!1,showCloseIcon:!1,renderChildren:function renderChildren(_ref){var close=_ref.close;return __jsx(_layout__WEBPACK_IMPORTED_MODULE_5__.kC,{column:!0,css:{justifyContent:"center",alignItems:"center"}},__jsx(_layout__WEBPACK_IMPORTED_MODULE_5__.kC,null,__jsx(_text__WEBPACK_IMPORTED_MODULE_4__.P,null,"THE MODAL IS OPEN")),__jsx(_layout__WEBPACK_IMPORTED_MODULE_5__.kC,null,__jsx(_buttons__WEBPACK_IMPORTED_MODULE_3__.zx,{role:"primary",href:"#",size:"small",onClick:function onClick(){return close()}},"Close Modal")))}},render:function render(args){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_layout__WEBPACK_IMPORTED_MODULE_5__.kC,{css:{minHeight:"20vh"}},__jsx(_text__WEBPACK_IMPORTED_MODULE_4__.H3,null,"Re-mount the component to view the modal again!")),__jsx(___WEBPACK_IMPORTED_MODULE_2__.e,args))}},WithCloseIcon={args:_objectSpread(_objectSpread({},Default.args),{},{showCloseIcon:!0,renderChildren:function renderChildren(_ref2){_ref2.close;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_layout__WEBPACK_IMPORTED_MODULE_5__.kC,null,__jsx(_text__WEBPACK_IMPORTED_MODULE_4__.P,null,"THE MODAL IS OPEN AND THERE'S NO ESCAPE!")))}}),render:function render(args){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_layout__WEBPACK_IMPORTED_MODULE_5__.kC,{css:{minHeight:"20vh"}},__jsx(_text__WEBPACK_IMPORTED_MODULE_4__.H3,null,"Re-mount the component to view the modal again!")),__jsx(___WEBPACK_IMPORTED_MODULE_2__.e,args))}},WithOpenModalCTA={args:_objectSpread(_objectSpread({},Default.args),{},{openOnTrigger:!1,showModalOpenCTA:!0,renderChildren:function renderChildren(_ref3){var close=_ref3.close;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_layout__WEBPACK_IMPORTED_MODULE_5__.kC,null,__jsx(_text__WEBPACK_IMPORTED_MODULE_4__.P,null,"THE MODAL IS OPEN")),__jsx(_layout__WEBPACK_IMPORTED_MODULE_5__.kC,null,__jsx(_buttons__WEBPACK_IMPORTED_MODULE_3__.zx,{role:"primary",href:"#",size:"small",onClick:function onClick(){return close()}},"Close Modal")))}}),render:function render(args){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_layout__WEBPACK_IMPORTED_MODULE_5__.kC,{css:{minHeight:"20vh"}},__jsx(_text__WEBPACK_IMPORTED_MODULE_4__.H3,null,"PRESS HIM")),__jsx(___WEBPACK_IMPORTED_MODULE_2__.e,args))}},CTAWithHandleSubmit={args:_objectSpread(_objectSpread({},Default.args),{},{openOnTrigger:!1,showModalOpenCTA:!0}),render:function render(args){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),submitHandled=_useState[0],setSubmitHandled=_useState[1];return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_layout__WEBPACK_IMPORTED_MODULE_5__.kC,{column:!0,css:{minHeight:"20vh"}},__jsx(_text__WEBPACK_IMPORTED_MODULE_4__.H3,null,"Submit Status: ",submitHandled?"Handled":""),__jsx(_text__WEBPACK_IMPORTED_MODULE_4__.P,null,"create your handleSubmit button with close as an argument with a function type, this will be referred to by the modal to perform its modalClose function")),__jsx(___WEBPACK_IMPORTED_MODULE_2__.e,(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},args,{renderCTA:function renderCTA(_ref4){var open=_ref4.open;return __jsx(_buttons__WEBPACK_IMPORTED_MODULE_3__.zx,{href:"#",onClick:function onClick(){return open()}},submitHandled&&"un-","handle submit")},renderChildren:function renderChildren(_ref5){var close=_ref5.close;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_layout__WEBPACK_IMPORTED_MODULE_5__.kC,null,__jsx(_text__WEBPACK_IMPORTED_MODULE_4__.P,null,"your return statement can be whatever JSX you plan on using, just make sure CTAs include calling the handleSubmit function defined earlier")),__jsx(_layout__WEBPACK_IMPORTED_MODULE_5__.kC,{wrap:!0,css:{alignItems:"center",justifyContent:"center"}},__jsx(_buttons__WEBPACK_IMPORTED_MODULE_3__.zx,{role:"primary",href:"#",size:"small",onClick:function onClick(){return function handleSubmit(close){setSubmitHandled(!submitHandled),close()}(close)}},"Close and Submit"),__jsx(_buttons__WEBPACK_IMPORTED_MODULE_3__.zx,{role:"secondary",href:"#",size:"small",onClick:function onClick(){return close()}},"Close")))}})))}},OpenOnTrigger={args:_objectSpread({},Default.args),render:function render(args){var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),count=_useState2[0],setCount=_useState2[1],handleClose=function handleClose(close){setCount(count-1),close()};return __jsx(_layout__WEBPACK_IMPORTED_MODULE_5__.kC,{column:!0},__jsx(_text__WEBPACK_IMPORTED_MODULE_4__.H3,null,"COUNT: ",count),__jsx(_buttons__WEBPACK_IMPORTED_MODULE_3__.zx,{role:"primary",href:"#",onClick:function onClick(){setCount(count+1)}},"ADD"),__jsx(___WEBPACK_IMPORTED_MODULE_2__.e,(0,_home_runner_work_ui_ui_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},args,{openOnTrigger:count>5,onClose:function onClose(){return handleClose(close)},renderChildren:function renderChildren(_ref6){var close=_ref6.close;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_text__WEBPACK_IMPORTED_MODULE_4__.P,null,"Count exceeded!"),__jsx(_buttons__WEBPACK_IMPORTED_MODULE_3__.zx,{role:"primary",href:"#",onClick:function onClick(){return handleClose(close)}},"Fix Count"))}})))}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    openOnTrigger: true,\n    showModalOpenCTA: false,\n    showCloseIcon: false,\n    renderChildren: ({\n      close\n    }) => {\n      return <Flex column css={{\n        justifyContent: 'center',\n        alignItems: 'center'\n      }}>\n          <Flex>\n            <P>THE MODAL IS OPEN</P>\n          </Flex>\n          <Flex>\n            <Button role=\"primary\" href=\"#\" size=\"small\" onClick={() => close()}>\n              Close Modal\n            </Button>\n          </Flex>\n        </Flex>;\n    }\n  },\n  render: args => {\n    return <>\n        <Flex css={{\n        minHeight: '20vh'\n      }}>\n          <H3>Re-mount the component to view the modal again!</H3>\n        </Flex>\n        <Modal {...args} />\n      </>;\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),WithCloseIcon.parameters=_objectSpread(_objectSpread({},WithCloseIcon.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithCloseIcon$parame=WithCloseIcon.parameters)||void 0===_WithCloseIcon$parame?void 0:_WithCloseIcon$parame.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    ...Default.args,\n    showCloseIcon: true,\n    renderChildren: ({\n      close\n    }) => {\n      return <>\n          <Flex>\n            <P>THE MODAL IS OPEN AND THERE'S NO ESCAPE!</P>\n          </Flex>\n        </>;\n    }\n  },\n  render: args => {\n    return <>\n        <Flex css={{\n        minHeight: '20vh'\n      }}>\n          <H3>Re-mount the component to view the modal again!</H3>\n        </Flex>\n        <Modal {...args} />\n      </>;\n  }\n}"},null===(_WithCloseIcon$parame2=WithCloseIcon.parameters)||void 0===_WithCloseIcon$parame2||null===(_WithCloseIcon$parame2=_WithCloseIcon$parame2.docs)||void 0===_WithCloseIcon$parame2?void 0:_WithCloseIcon$parame2.source)})}),WithOpenModalCTA.parameters=_objectSpread(_objectSpread({},WithOpenModalCTA.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithOpenModalCTA$par=WithOpenModalCTA.parameters)||void 0===_WithOpenModalCTA$par?void 0:_WithOpenModalCTA$par.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    ...Default.args,\n    openOnTrigger: false,\n    showModalOpenCTA: true,\n    renderChildren: ({\n      close\n    }) => {\n      return <>\n          <Flex>\n            <P>THE MODAL IS OPEN</P>\n          </Flex>\n          <Flex>\n            <Button role="primary" href="#" size="small" onClick={() => close()}>\n              Close Modal\n            </Button>\n          </Flex>\n        </>;\n    }\n  },\n  render: args => {\n    return <>\n        <Flex css={{\n        minHeight: \'20vh\'\n      }}>\n          <H3>PRESS HIM</H3>\n        </Flex>\n        <Modal {...args} />\n      </>;\n  }\n}'},null===(_WithOpenModalCTA$par2=WithOpenModalCTA.parameters)||void 0===_WithOpenModalCTA$par2||null===(_WithOpenModalCTA$par2=_WithOpenModalCTA$par2.docs)||void 0===_WithOpenModalCTA$par2?void 0:_WithOpenModalCTA$par2.source)})}),CTAWithHandleSubmit.parameters=_objectSpread(_objectSpread({},CTAWithHandleSubmit.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_CTAWithHandleSubmit$=CTAWithHandleSubmit.parameters)||void 0===_CTAWithHandleSubmit$?void 0:_CTAWithHandleSubmit$.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    ...Default.args,\n    openOnTrigger: false,\n    showModalOpenCTA: true\n  },\n  render: args => {\n    const [submitHandled, setSubmitHandled] = useState(false);\n    // create your handleSubmit button with close as an argument with a function type, this will be referred to by the modal to perform its modalClose function\n    const handleSubmit = (close: () => void) => {\n      setSubmitHandled(!submitHandled);\n      close();\n    };\n    return <>\n        <Flex column css={{\n        minHeight: \'20vh\'\n      }}>\n          <H3>Submit Status: {submitHandled ? \'Handled\' : \'\'}</H3>\n          <P>\n            create your handleSubmit button with close as an argument with a\n            function type, this will be referred to by the modal to perform its\n            modalClose function\n          </P>\n        </Flex>\n        <Modal {...args} renderCTA={({\n        open\n      }) => <Button href="#" onClick={() => open()}>\n              {submitHandled && \'un-\'}handle submit\n            </Button>} renderChildren={({\n        close\n      }) => {\n        // your return statement can be whatever JSX you plan on using, just make sure CTAs include calling the handleSubmit function defined earlier\n        return <>\n                <Flex>\n                  <P>\n                    your return statement can be whatever JSX you plan on using,\n                    just make sure CTAs include calling the handleSubmit\n                    function defined earlier\n                  </P>\n                </Flex>\n                <Flex wrap css={{\n            alignItems: \'center\',\n            justifyContent: \'center\'\n          }}>\n                  <Button role="primary" href="#" size="small" onClick={() => handleSubmit(close)}>\n                    Close and Submit\n                  </Button>\n                  <Button role="secondary" href="#" size="small" onClick={() => close()}>\n                    Close\n                  </Button>\n                </Flex>\n              </>;\n      }} />\n      </>;\n  }\n}'},null===(_CTAWithHandleSubmit$2=CTAWithHandleSubmit.parameters)||void 0===_CTAWithHandleSubmit$2||null===(_CTAWithHandleSubmit$2=_CTAWithHandleSubmit$2.docs)||void 0===_CTAWithHandleSubmit$2?void 0:_CTAWithHandleSubmit$2.source),description:_objectSpread({story:"sample case of a component using the reusable modal and how to use renderProps"},null===(_CTAWithHandleSubmit$3=CTAWithHandleSubmit.parameters)||void 0===_CTAWithHandleSubmit$3||null===(_CTAWithHandleSubmit$3=_CTAWithHandleSubmit$3.docs)||void 0===_CTAWithHandleSubmit$3?void 0:_CTAWithHandleSubmit$3.description)})}),OpenOnTrigger.parameters=_objectSpread(_objectSpread({},OpenOnTrigger.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_OpenOnTrigger$parame=OpenOnTrigger.parameters)||void 0===_OpenOnTrigger$parame?void 0:_OpenOnTrigger$parame.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    ...Default.args\n  },\n  render: args => {\n    const [count, setCount] = useState(0);\n    const maxCount = 5;\n    const handleClose = (close: () => void) => {\n      setCount(count - 1);\n      close();\n    };\n    return <Flex column>\n        <H3>COUNT: {count}</H3>\n        <Button role="primary" href="#" onClick={() => {\n        setCount(count + 1);\n      }}>\n          ADD\n        </Button>\n        <Modal {...args} openOnTrigger={count > maxCount} onClose={() => handleClose(close)} renderChildren={({\n        close\n      }) => {\n        return <>\n                <P>Count exceeded!</P>\n                <Button role="primary" href="#" onClick={() => handleClose(close)}>\n                  Fix Count\n                </Button>\n              </>;\n      }} />\n      </Flex>;\n  }\n}'},null===(_OpenOnTrigger$parame2=OpenOnTrigger.parameters)||void 0===_OpenOnTrigger$parame2||null===(_OpenOnTrigger$parame2=_OpenOnTrigger$parame2.docs)||void 0===_OpenOnTrigger$parame2?void 0:_OpenOnTrigger$parame2.source)})});try{CTAWithHandleSubmit.displayName="CTAWithHandleSubmit",CTAWithHandleSubmit.__docgenInfo={description:"sample case of a component using the reusable modal and how to use renderProps",displayName:"CTAWithHandleSubmit",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modals/stories/RevoModal.stories.tsx#CTAWithHandleSubmit"]={docgenInfo:CTAWithHandleSubmit.__docgenInfo,name:"CTAWithHandleSubmit",path:"src/modals/stories/RevoModal.stories.tsx#CTAWithHandleSubmit"})}catch(__react_docgen_typescript_loader_error){}}}]);