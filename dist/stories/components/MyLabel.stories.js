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
import { MyLabel } from '../../components/MyLabel_01';
// // Our story
export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
        fontColor: { control: 'color' },
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(MyLabel, __assign({}, args)); }; // Enabling Args in Storybook
// // Crear las pages/cuentos de la Story  <- .bind({})  romper ref   this
export var Basic = Template.bind({});
// Args with Default values in Storybook
Basic.args = {
    allCaps: true,
    size: 'h1',
};
export var AllCaps = Template.bind({});
AllCaps.args = {
    allCaps: true,
    size: 'normal',
};
export var Secondary = Template.bind({});
Secondary.args = {
    allCaps: false,
    size: 'normal',
    color: 'secondary',
};
export var Tertiary = Template.bind({});
Tertiary.args = {
    allCaps: false,
    size: 'normal',
    color: 'tertiary',
};
export var CustomFormColor = Template.bind({});
CustomFormColor.args = {
    allCaps: false,
    size: 'h1',
    fontColor: '#5517ac',
};
export var CustomBgColor = Template.bind({});
CustomBgColor.args = {
    allCaps: false,
    fontColor: '#fff',
    size: 'h1',
};
