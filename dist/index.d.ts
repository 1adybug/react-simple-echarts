import { BarSeriesOption, ComposeOption, DatasetComponentOption, GridComponentOption, LineSeriesOption, PieSeriesOption, TitleComponentOption, TooltipComponentOption } from "echarts";
import React from "react";
export type PieOption = ComposeOption<PieSeriesOption | TitleComponentOption | DatasetComponentOption | GridComponentOption | TooltipComponentOption>;
export interface PieProps {
    width: number;
    height: number;
    option: PieOption;
}
export type BarOption = ComposeOption<BarSeriesOption | TitleComponentOption | DatasetComponentOption | GridComponentOption | TooltipComponentOption>;
export interface BarProps {
    width: number;
    height: number;
    option: BarOption;
}
export type LineOption = ComposeOption<LineSeriesOption | TitleComponentOption | DatasetComponentOption | GridComponentOption | TooltipComponentOption>;
export interface LineProps {
    width: number;
    height: number;
    option: LineOption;
}
/** @description 饼图 */
export declare const Pie: React.FC<PieProps>;
/** @description 柱状图 */
export declare const Bar: React.FC<BarProps>;
/** @description 折线图 */
export declare const Line: React.FC<LineProps>;
