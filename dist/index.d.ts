import { BarSeriesOption, ComposeOption, DatasetComponentOption, ECharts, GridComponentOption, LineSeriesOption, PieSeriesOption, TitleComponentOption, TooltipComponentOption } from "echarts";
import React, { HTMLAttributes } from "react";
export type PieOption = ComposeOption<PieSeriesOption | TitleComponentOption | DatasetComponentOption | GridComponentOption | TooltipComponentOption>;
export type BarOption = ComposeOption<BarSeriesOption | TitleComponentOption | DatasetComponentOption | GridComponentOption | TooltipComponentOption>;
export type LineOption = ComposeOption<LineSeriesOption | TitleComponentOption | DatasetComponentOption | GridComponentOption | TooltipComponentOption>;
export type OriginEchartProps<T extends PieOption | BarOption | LineOption = PieOption | BarOption | LineOption> = T extends PieOption | BarOption | LineOption ? {
    width: number;
    height: number;
    option: T;
} & Omit<HTMLAttributes<HTMLDivElement>, "children"> : never;
export type EchartProps = OriginEchartProps;
declare const Echart: React.ForwardRefExoticComponent<EchartProps & React.RefAttributes<ECharts>>;
export default Echart;
