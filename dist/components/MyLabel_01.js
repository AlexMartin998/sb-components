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
import { jsx as _jsx } from "react/jsx-runtime";
import './mylabel.css';
export var MyLabel = function (_a) {
    var allCaps = _a.allCaps, color = _a.color, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? 'transparent' : _b, _c = _a.label, label = _c === void 0 ? 'No label' : _c, _d = _a.size, size = _d === void 0 ? 'normal' : _d, fontColor = _a.fontColor;
    return (_jsx("span", __assign({ className: "label ".concat(size, " text-").concat(color), style: { color: "".concat(fontColor), backgroundColor: backgroundColor } }, { children: (allCaps && label.toUpperCase()) || label })));
};
