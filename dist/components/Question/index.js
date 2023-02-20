var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Popup } from 'antd-mobile';
export var EwtQuestion = function (props) {
    var _a = useState(false), visible1 = _a[0], setVisible1 = _a[1];
    return _jsx("div", { children: _jsx(Popup, __assign({ visible: visible1, onMaskClick: function () {
                setVisible1(false);
            }, bodyStyle: { height: '33vh' } }, { children: _jsxs("div", __assign({ className: "ewtm-pm-popoptions" }, { children: [_jsxs("div", __assign({ className: "qo__option" }, { children: [_jsx("div", __assign({ className: "qo__tag" }, { children: _jsx("p", { children: "A" }) })), _jsx("div", __assign({ className: "qo__content" }, { children: _jsx("span", { children: "Taking a trip does great good to seniors. " }) }))] })), _jsxs("div", __assign({ className: "qo__option checked" }, { children: [_jsx("div", __assign({ className: "qo__tag" }, { children: _jsx("p", { children: "B" }) })), _jsx("div", __assign({ className: "qo__content" }, { children: _jsx("span", { children: "It is a pleasant experience to travel with seniors. " }) }))] })), _jsxs("div", __assign({ className: "qo__option success" }, { children: [_jsx("div", __assign({ className: "qo__tag" }, { children: _jsx("p", { children: "C" }) })), _jsx("div", __assign({ className: "qo__content" }, { children: _jsx("span", { children: "To have a long journey with seniors is unpractical. " }) }))] })), _jsxs("div", __assign({ className: "qo__option fault" }, { children: [_jsx("div", __assign({ className: "qo__tag" }, { children: _jsx("p", { children: "D" }) })), _jsx("div", __assign({ className: "qo__content" }, { children: _jsx("span", { children: "Careful planning ensures seniors to take a nice trip. " }) }))] })), _jsxs("div", __assign({ className: "qo__option" }, { children: [_jsx("div", __assign({ className: "qo__tag" }, { children: _jsx("p", { children: "E" }) })), _jsx("div", __assign({ className: "qo__content" }, { children: _jsx("span", { children: "Taking a trip does great good to seniors. " }) }))] })), _jsxs("div", __assign({ className: "qo__option" }, { children: [_jsx("div", __assign({ className: "qo__tag" }, { children: _jsx("p", { children: "F" }) })), _jsx("div", __assign({ className: "qo__content" }, { children: _jsx("span", { children: "Taking a trip does great good to seniors. " }) }))] })), _jsxs("div", __assign({ className: "qo__option" }, { children: [_jsx("div", __assign({ className: "qo__tag" }, { children: _jsx("p", { children: "G" }) })), _jsx("div", __assign({ className: "qo__content" }, { children: _jsx("span", { children: "Taking a trip does great good to seniors. " }) }))] }))] })) })) });
};
export default EwtQuestion;
