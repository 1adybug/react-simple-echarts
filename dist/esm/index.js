import { init } from "echarts";
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
const Echart = forwardRef((props, ref) => {
    const { width, height, option, ...others } = props;
    const wrapper = useRef(null);
    const [chart, setChart] = useState(null);
    useImperativeHandle(ref, () => chart, [chart]);
    useEffect(() => {
        const dom = wrapper.current;
        setChart(init(dom, {}, { width, height }));
    }, []);
    useEffect(() => {
        chart?.setOption(option);
        chart?.resize({ width, height });
    });
    return React.createElement("div", { ref: wrapper, ...others });
});
export default Echart;
//# sourceMappingURL=index.js.map