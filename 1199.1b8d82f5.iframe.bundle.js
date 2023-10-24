"use strict";(self.webpackChunk_revolancer_ui=self.webpackChunk_revolancer_ui||[]).push([[1199],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@radix-ui/primitive/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler,ourEventHandler,{checkForDefaultPrevented=!0}={}){return function handleEvent(event){if(null==originalEventHandler||originalEventHandler(event),!1===checkForDefaultPrevented||!event.defaultPrevented)return null==ourEventHandler?void 0:ourEventHandler(event)}}__webpack_require__.d(__webpack_exports__,{M:()=>$e42e1063c40fb3ef$export$b9ecd428b558ff10})},"./node_modules/@radix-ui/react-compose-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>$6ed0406888f73fc4$export$43e446d32b3d21af,e:()=>$6ed0406888f73fc4$export$c7b2cbe3552a0d05});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs){return node=>refs.forEach((ref=>function $6ed0406888f73fc4$var$setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}(ref,node)))}function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs),refs)}},"./node_modules/@radix-ui/react-context/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>$c512c27ab02ef895$export$50c7b4e9d9f19c1});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext)));return function useScope(scope){const contexts=(null==scope?void 0:scope[scopeName])||scopeContexts;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName,defaultContext){const BaseContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext),index=defaultContexts.length;function Provider(props){const{scope,children,...context}=props,Context=(null==scope?void 0:scope[scopeName][index])||BaseContext,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>context),Object.values(context));return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider,{value},children)}return defaultContexts=[...defaultContexts,defaultContext],Provider.displayName=rootComponentName+"Provider",[Provider,function useContext(consumerName,scope){const Context=(null==scope?void 0:scope[scopeName][index])||BaseContext,context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},$c512c27ab02ef895$var$composeContextScopes(createScope,...createContextScopeDeps)]}function $c512c27ab02ef895$var$composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope1=()=>{const scopeHooks=scopes.map((createScope=>({useScope:createScope(),scopeName:createScope.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes1=scopeHooks.reduce(((nextScopes,{useScope,scopeName})=>({...nextScopes,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({[`__scope${baseScope.scopeName}`]:nextScopes1})),[nextScopes1])}};return createScope1.scopeName=baseScope.scopeName,createScope1}},"./node_modules/@radix-ui/react-primitive/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{WV:()=>$8927f6f2acc4f386$export$250ffa63cdc0d034,jH:()=>$8927f6f2acc4f386$export$6d1a0317bde7de7f});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs");const $8927f6f2acc4f386$export$250ffa63cdc0d034=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__.g7:node;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{window[Symbol.for("radix-ui")]=!0}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Comp,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},primitiveProps,{ref:forwardedRef}))}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target,event){target&&(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)((()=>target.dispatchEvent(event)))}},"./node_modules/@radix-ui/react-slot/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g7:()=>$5e63c961fc1ce211$export$8c6ed5c666ac1360});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs");const $5e63c961fc1ce211$export$8c6ed5c666ac1360=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),slottable=childrenArray.find($5e63c961fc1ce211$var$isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(newElement)?newElement.props.children:null:child));return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($5e63c961fc1ce211$var$SlotClone,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.Z)({},slotProps,{ref:forwardedRef}),(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(newElement)?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(newElement,void 0,newChildren):null)}return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($5e63c961fc1ce211$var$SlotClone,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.Z)({},slotProps,{ref:forwardedRef}),children)}));$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName="Slot";const $5e63c961fc1ce211$var$SlotClone=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props;return(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(children)?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(children,{...$5e63c961fc1ce211$var$mergeProps(slotProps,children.props),ref:forwardedRef?(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.F)(forwardedRef,children.ref):children.ref}):react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):null}));$5e63c961fc1ce211$var$SlotClone.displayName="SlotClone";const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45=({children})=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children);function $5e63c961fc1ce211$var$isSlottable(child){return(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)&&child.type===$5e63c961fc1ce211$export$d9f1ccf0bdb05d45}function $5e63c961fc1ce211$var$mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}},"./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>$b1b2314f5f9a1d84$export$25bec8c6f54ee79a});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback){const callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{callbackRef.current=callback})),(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(...args)=>{var _callbackRef$current;return null===(_callbackRef$current=callbackRef.current)||void 0===_callbackRef$current?void 0:_callbackRef$current.call(callbackRef,...args)}),[])}},"./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>$71cd76cc60e0454e$export$6f32135080cb4c3});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");function $71cd76cc60e0454e$export$6f32135080cb4c3({prop,defaultProp,onChange=()=>{}}){const[uncontrolledProp,setUncontrolledProp]=function $71cd76cc60e0454e$var$useUncontrolledState({defaultProp,onChange}){const uncontrolledState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultProp),[value]=uncontrolledState,prevValueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value),handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(onChange);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{prevValueRef.current!==value&&(handleChange(value),prevValueRef.current=value)}),[value,prevValueRef,handleChange]),uncontrolledState}({defaultProp,onChange}),isControlled=void 0!==prop,value1=isControlled?prop:uncontrolledProp,handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(onChange);return[value1,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nextValue=>{if(isControlled){const value="function"==typeof nextValue?nextValue(prop):nextValue;value!==prop&&handleChange(value)}else setUncontrolledProp(nextValue)}),[isControlled,prop,setUncontrolledProp,handleChange])]}},"./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>$9f79659886946c16$export$e5c5a5f917a5871c});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const $9f79659886946c16$export$e5c5a5f917a5871c=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:()=>{}},"./node_modules/@radix-ui/react-use-previous/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>$010c2913dbd2fe3d$export$5cae361ad82dce8b});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({value,previous:value});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}},"./node_modules/@radix-ui/react-use-size/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>$db6c3485150b8e66$export$1ab7ae714698c4b8});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");function $db6c3485150b8e66$export$1ab7ae714698c4b8(element){const[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0);return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.b)((()=>{if(element){setSize({width:element.offsetWidth,height:element.offsetHeight});const resizeObserver=new ResizeObserver((entries=>{if(!Array.isArray(entries))return;if(!entries.length)return;const entry=entries[0];let width,height;if("borderBoxSize"in entry){const borderSizeEntry=entry.borderBoxSize,borderSize=Array.isArray(borderSizeEntry)?borderSizeEntry[0]:borderSizeEntry;width=borderSize.inlineSize,height=borderSize.blockSize}else width=element.offsetWidth,height=element.offsetHeight;setSize({width,height})}));return resizeObserver.observe(element,{box:"border-box"}),()=>resizeObserver.unobserve(element)}setSize(void 0)}),[element]),size}},"./node_modules/react-interactive/dist/react-interactive.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{vj:()=>Interactive});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");let recentTouchTimeoutId,recentEventFrom="key",recentFocusFrom=recentEventFrom,recentTouch=!1,recentMouse=!1,recentWindowFocus=!1;const setRecentEventFromTouch=touchDelay=>{recentTouch=!0,recentEventFrom="touch",window.clearTimeout(recentTouchTimeoutId),recentTouchTimeoutId=window.setTimeout((()=>{recentTouch=!1}),touchDelay)};let recentMouseTimeoutId;const setRecentEventFromMouse=()=>{recentMouse=!0,recentEventFrom="mouse",window.clearTimeout(recentMouseTimeoutId),recentMouseTimeoutId=window.setTimeout((()=>{recentMouse=!1}),200)},handleTouchEvent=touchDelay=>()=>setRecentEventFromTouch(touchDelay),handlePointerEvent=touchDelay=>e=>{switch(e.pointerType){case"mouse":setRecentEventFromMouse();break;case"pen":case"touch":setRecentEventFromTouch(touchDelay)}},handleMouseEvent=()=>{recentTouch||setRecentEventFromMouse()},handleKeyEvent=()=>{recentEventFrom="key"};let recentWindowFocusTimeoutId;const handleWindowFocusEvent=e=>{e.target!==window&&e.target!==document||(recentWindowFocus=!0,window.clearTimeout(recentWindowFocusTimeoutId),recentWindowFocusTimeoutId=window.setTimeout((()=>{recentWindowFocus=!1}),300))},listenerOptions={capture:!0,passive:!0},documentListeners=[["touchstart",handleTouchEvent(750)],["touchend",handleTouchEvent(300)],["touchcancel",handleTouchEvent(300)],["pointerenter",handlePointerEvent(300)],["pointerover",handlePointerEvent(300)],["pointerout",handlePointerEvent(300)],["pointerleave",handlePointerEvent(300)],["pointerdown",handlePointerEvent(750)],["pointerup",handlePointerEvent(300)],["pointercancel",handlePointerEvent(300)],["mouseenter",handleMouseEvent],["mouseover",handleMouseEvent],["mouseout",handleMouseEvent],["mouseleave",handleMouseEvent],["mousedown",handleMouseEvent],["mouseup",handleMouseEvent],["keydown",handleKeyEvent],["keyup",handleKeyEvent],["focus",()=>{(!recentWindowFocus||recentMouse||recentTouch)&&(recentFocusFrom=recentEventFrom)}]];"undefined"!=typeof window&&"undefined"!=typeof document&&(documentListeners.forEach((([eventName,eventHandler])=>{document.addEventListener(eventName,eventHandler,listenerOptions)})),window.addEventListener("focus",handleWindowFocusEvent,listenerOptions));const eventFrom=event=>{switch(event.pointerType){case"mouse":setRecentEventFromMouse();break;case"pen":case"touch":recentTouch?recentEventFrom="touch":setRecentEventFromTouch(300)}return/mouse/.test(event.type)&&!recentTouch&&setRecentEventFromMouse(),/touch/.test(event.type)&&(recentTouch?recentEventFrom="touch":setRecentEventFromTouch(300)),/focus/.test(event.type)?recentFocusFrom:recentEventFrom},enterKeyTrigger=({tagName,type})=>"SELECT"!==tagName&&("INPUT"!==tagName||"checkbox"!==type&&"radio"!==type),spaceKeyTrigger=({tagName,type})=>["BUTTON","SELECT"].includes(tagName)||"INPUT"===tagName&&["checkbox","radio","submit"].includes(type),elementSupportsDisabled=({tagName})=>["BUTTON","INPUT","SELECT","TEXTAREA","FIELDSET"].includes(tagName),classNameToString=className=>"string"==typeof className||"object"==typeof className&&null!==className||"number"==typeof className||"bigint"==typeof className?String(className):"";let pendingUserSelectReset=!1;const resetUserSelect=()=>{pendingUserSelectReset=!0,window.setTimeout((()=>{pendingUserSelectReset&&(document.body.style.userSelect="",document.body.style.webkitUserSelect="")}),250)},initialState={hover:!1,active:!1,focus:!1},eventMap={mouseover:"onMouseOver",mouseleave:"onMouseLeave",mousedown:"onMouseDown",mouseup:"onMouseUp",pointerover:"onPointerOver",pointerleave:"onPointerLeave",pointerdown:"onPointerDown",pointerup:"onPointerUp",pointercancel:"onPointerCancel",touchstart:"onTouchStart",touchend:"onTouchEnd",touchcancel:"onTouchCancel",keydown:"onKeyDown",keyup:"onKeyUp",focus:"onFocus",blur:"onBlur",dragstart:"onDragStart",dragend:"onDragEnd"},eventListenerPropNames=Object.values(eventMap),InteractiveNotMemoized=react.forwardRef((function({as,children,onStateChange,disabled=!1,useExtendedTouchActive=!1,hoverClassName="hover",activeClassName="active",mouseActiveClassName="mouseActive",touchActiveClassName="touchActive",keyActiveClassName="keyActive",focusClassName="focus",focusFromKeyClassName="focusFromKey",focusFromMouseClassName="focusFromMouse",focusFromTouchClassName="focusFromTouch",disabledClassName="disabled",hoverStyle,activeStyle,mouseActiveStyle,touchActiveStyle,keyActiveStyle,focusStyle,focusFromKeyStyle,focusFromMouseStyle,focusFromTouchStyle,disabledStyle,...restProps},ref){const As=as||"button",[iState,setIState]=react.useState({state:initialState,prevState:initialState}),inTouchActiveState="touchActive"===iState.state.active;react.useEffect((()=>{onStateChange&&onStateChange(iState)}),[iState.state.hover,iState.state.active,iState.state.focus]);const disabledAndAsComponent=react.useRef(!1);disabledAndAsComponent.current=disabled&&"string"!=typeof As;const[,forceUpdateDisabledComponent]=react.useState(!1),localRef=react.useRef(null),callbackRef=react.useCallback((node=>{localRef.current=node,"function"==typeof ref?ref(node):ref&&(ref.current=node),disabledAndAsComponent.current&&forceUpdateDisabledComponent((s=>!s))}),[ref]),keyTracking=react.useRef({enterKeyDown:!1,spaceKeyDown:!1}),dragTracking=react.useRef({isDragging:!1}),stateChange=react.useCallback(((...changes)=>{setIState((previous=>{const newState={...previous.state};changes.forEach((({iStateKey,state,action})=>{"enter"===action?newState[iStateKey]=state:"exit"!==action||previous.state[iStateKey]!==state||dragTracking.current.isDragging&&"active"===iStateKey||(newState[iStateKey]=!1)}));const newInteractiveStateChange={state:newState,prevState:previous.state};return(({state,prevState})=>state.hover!==prevState.hover||state.active!==prevState.active||state.focus!==prevState.focus)(newInteractiveStateChange)?newInteractiveStateChange:previous}))}),[]),blurInteractive=react.useCallback((()=>{keyTracking.current.enterKeyDown=!1,keyTracking.current.spaceKeyDown=!1,stateChange({iStateKey:"focus",state:!1,action:"enter"},{iStateKey:"active",state:"keyActive",action:"exit"})}),[stateChange]);react.useEffect((()=>{disabled&&iState.state.focus&&(elementSupportsDisabled(localRef.current||{})||"string"==typeof As)&&(localRef.current&&"function"==typeof localRef.current.blur&&localRef.current.blur(),blurInteractive())}),[disabled,iState.state.focus,blurInteractive,As]);const handleEvent=react.useCallback((e=>{switch(e.type){case"focus":e.target===localRef.current&&stateChange({iStateKey:"focus",state:`focusFrom${eventFrom(e).replace(/^\w/,(c=>c.toUpperCase()))}`,action:"enter"});break;case"blur":blurInteractive();break;case"keydown":case"keyup":if(" "===e.key)keyTracking.current.spaceKeyDown="keydown"===e.type;else{if("Enter"!==e.key)break;keyTracking.current.enterKeyDown="keydown"===e.type}stateChange({iStateKey:"active",state:"keyActive",action:keyTracking.current.enterKeyDown&&enterKeyTrigger(localRef.current||{})||keyTracking.current.spaceKeyDown&&spaceKeyTrigger(localRef.current||{})?"enter":"exit"});break;case"dragstart":dragTracking.current.isDragging=!0,stateChange({iStateKey:"active",state:`${eventFrom(e)}Active`,action:"enter"});break;case"dragend":dragTracking.current.isDragging=!1,stateChange({iStateKey:"active",state:!1,action:"enter"});break;default:switch(eventFrom(e)){case"mouse":switch(e.type){case"mouseover":case"pointerover":stateChange({iStateKey:"hover",state:!0,action:"enter"});break;case"mouseleave":case"pointerleave":case"pointercancel":stateChange({iStateKey:"hover",state:!1,action:"enter"},{iStateKey:"active",state:"mouseActive",action:"exit"});break;case"mousedown":case"pointerdown":stateChange({iStateKey:"active",state:"mouseActive",action:"enter"});break;case"mouseup":case"pointerup":stateChange({iStateKey:"active",state:"mouseActive",action:"exit"})}break;case"touch":switch(e.type){case"touchstart":case"pointerdown":stateChange({iStateKey:"active",state:"touchActive",action:"enter"});break;case"touchend":case"touchcancel":case"pointerup":case"pointercancel":case"mouseover":useExtendedTouchActive&&!["touchend","touchcancel"].includes(e.type)||stateChange({iStateKey:"active",state:"touchActive",action:"exit"});break;case"mouseleave":stateChange({iStateKey:"hover",state:!1,action:"enter"},{iStateKey:"active",state:"mouseActive",action:"exit"})}}}restProps[eventMap[e.type]]&&restProps[eventMap[e.type]](e)}),[...eventListenerPropNames.map((listenerPropName=>restProps[listenerPropName])),useExtendedTouchActive,stateChange,blurInteractive]),eventListeners={};eventListenerPropNames.forEach((listenerPropName=>{eventListeners[listenerPropName]=handleEvent}));const touchActiveTimeoutId=react.useRef(void 0);react.useEffect((()=>{if(inTouchActiveState&&!useExtendedTouchActive)return touchActiveTimeoutId.current=window.setTimeout((()=>{stateChange({iStateKey:"active",state:"touchActive",action:"exit"})}),750),()=>window.clearTimeout(touchActiveTimeoutId.current)}),[inTouchActiveState,useExtendedTouchActive,stateChange]),react.useEffect((()=>{if(inTouchActiveState&&useExtendedTouchActive)return pendingUserSelectReset=!1,document.body.style.userSelect="none",document.body.style.webkitUserSelect="none",resetUserSelect}),[inTouchActiveState,useExtendedTouchActive]);let className=classNameToString(restProps.className);const style={};!disabled&&(({tagName,type},hasOnClickHandler)=>["BUTTON","A","AREA","SELECT"].includes(tagName)||"INPUT"===tagName&&["checkbox","radio","submit"].includes(type)||"INPUT"!==tagName&&"TEXTAREA"!==tagName&&hasOnClickHandler)(localRef.current||{},Boolean(restProps.onClick||restProps.onClickCapture))&&(style.cursor="pointer"),Object.assign(style,restProps.style);const addToClassAndStyleProps=(addClassName,addStyle)=>{className=[className,classNameToString(addClassName)].filter((cN=>cN)).join(" "),Object.assign(style,addStyle)};if(disabled)addToClassAndStyleProps(disabledClassName,disabledStyle);else{if(iState.state.hover&&addToClassAndStyleProps(hoverClassName,hoverStyle),iState.state.active)switch(addToClassAndStyleProps(activeClassName,activeStyle),iState.state.active){case"mouseActive":addToClassAndStyleProps(mouseActiveClassName,mouseActiveStyle);break;case"touchActive":addToClassAndStyleProps(touchActiveClassName,touchActiveStyle);break;case"keyActive":addToClassAndStyleProps(keyActiveClassName,keyActiveStyle)}if(iState.state.focus)switch(addToClassAndStyleProps(focusClassName,focusStyle),iState.state.focus){case"focusFromMouse":addToClassAndStyleProps(focusFromMouseClassName,focusFromMouseStyle);break;case"focusFromTouch":addToClassAndStyleProps(focusFromTouchClassName,focusFromTouchStyle);break;case"focusFromKey":addToClassAndStyleProps(focusFromKeyClassName,focusFromKeyStyle)}}const memoizedStyle=react.useMemo((()=>style),[Object.entries(style).join()]);let disabledProps=null;return disabled&&(disabledProps={onClick:void 0,onClickCapture:void 0,onDoubleClick:void 0,onDoubleClickCapture:void 0,tabIndex:void 0,href:void 0},elementSupportsDisabled("string"==typeof As?{tagName:As.toUpperCase()}:localRef.current||{})&&(disabledProps.disabled=!0)),react.createElement(As,Object.assign({},restProps,eventListeners,disabledProps,{className:""===className?void 0:className,style:memoizedStyle,ref:callbackRef}),"function"==typeof children?children(iState.state):children)})),Interactive=Object.assign(react.memo(InteractiveNotMemoized),{Button:react.memo(InteractiveNotMemoized),A:createInteractive("a"),Input:createInteractive("input"),Select:createInteractive("select"),Div:createInteractive("div"),Span:createInteractive("span")});function createInteractive(as){return react.forwardRef((function(props,ref){return react.createElement(Interactive,Object.assign({},props,{as,ref}))}))}}}]);