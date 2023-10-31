"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const echarts_1 = require("echarts");
const react_1 = __importStar(require("react"));
const Echart = (0, react_1.forwardRef)((props, ref) => {
    const { width, height, option, ...others } = props;
    const wrapper = (0, react_1.useRef)(null);
    const [chart, setChart] = (0, react_1.useState)(null);
    (0, react_1.useImperativeHandle)(ref, () => chart, [chart]);
    (0, react_1.useEffect)(() => {
        const dom = wrapper.current;
        setChart((0, echarts_1.init)(dom, {}, { width, height }));
    }, []);
    (0, react_1.useEffect)(() => {
        chart?.setOption(option);
        chart?.resize({ width, height });
    });
    return react_1.default.createElement("div", { ref: wrapper, ...others });
});
exports.default = Echart;
//# sourceMappingURL=index.js.map