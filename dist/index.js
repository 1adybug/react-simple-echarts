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
exports.Line = exports.Bar = exports.Pie = void 0;
const echarts_1 = require("echarts");
const react_1 = __importStar(require("react"));
/** @description 饼图 */
const Pie = props => {
    const { width, height, option } = props;
    const wrapperRef = (0, react_1.useRef)(null);
    const chartRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const dom = wrapperRef.current;
        chartRef.current = (0, echarts_1.init)(dom, {}, { width, height });
    }, []);
    (0, react_1.useEffect)(() => {
        const chart = chartRef.current;
        chart.setOption(option);
    });
    (0, react_1.useEffect)(() => {
        chartRef.current.resize({ width, height });
    }, [width, height]);
    return react_1.default.createElement("div", { ref: wrapperRef });
};
exports.Pie = Pie;
/** @description 柱状图 */
const Bar = props => {
    const { width, height, option } = props;
    const wrapperRef = (0, react_1.useRef)(null);
    const chartRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const dom = wrapperRef.current;
        chartRef.current = (0, echarts_1.init)(dom, {}, { width, height });
    }, []);
    (0, react_1.useEffect)(() => {
        const chart = chartRef.current;
        chart.setOption(option);
    });
    (0, react_1.useEffect)(() => {
        chartRef.current.resize({ width, height });
    }, [width, height]);
    return react_1.default.createElement("div", { ref: wrapperRef });
};
exports.Bar = Bar;
/** @description 折线图 */
const Line = props => {
    const { width, height, option } = props;
    const wrapperRef = (0, react_1.useRef)(null);
    const chartRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const dom = wrapperRef.current;
        chartRef.current = (0, echarts_1.init)(dom, {}, { width, height });
    }, []);
    (0, react_1.useEffect)(() => {
        const chart = chartRef.current;
        chart.setOption(option);
    });
    (0, react_1.useEffect)(() => {
        chartRef.current.resize({ width, height });
    }, [width, height]);
    return react_1.default.createElement("div", { ref: wrapperRef });
};
exports.Line = Line;
//# sourceMappingURL=index.js.map