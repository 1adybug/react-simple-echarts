import { BarSeriesOption, ComposeOption, DatasetComponentOption, ECharts, GridComponentOption, init, LineSeriesOption, PieSeriesOption, TitleComponentOption, TooltipComponentOption } from "echarts"

import React, { useEffect, useRef } from "react"

export type PieOption = ComposeOption<PieSeriesOption | TitleComponentOption | DatasetComponentOption | GridComponentOption | TooltipComponentOption>

export interface PieProps {
    width: number
    height: number
    option: PieOption
}

export type BarOption = ComposeOption<BarSeriesOption | TitleComponentOption | DatasetComponentOption | GridComponentOption | TooltipComponentOption>

export interface BarProps {
    width: number
    height: number
    option: BarOption
}

export type LineOption = ComposeOption<LineSeriesOption | TitleComponentOption | DatasetComponentOption | GridComponentOption | TooltipComponentOption>

export interface LineProps {
    width: number
    height: number
    option: LineOption
}

/** @description 饼图 */
export const Pie: React.FC<PieProps> = props => {
    const { width, height, option } = props

    const wrapperRef = useRef<HTMLDivElement>(null)

    const chartRef = useRef<ECharts | null>(null)

    useEffect(() => {
        const dom = wrapperRef.current!
        chartRef.current = init(dom, {}, { width, height })
    }, [])

    useEffect(() => {
        const chart = chartRef.current!
        chart.setOption(option)
    })

    useEffect(() => {
        chartRef.current!.resize({ width, height })
    }, [width, height])
    return <div ref={wrapperRef}></div>
}

/** @description 柱状图 */
export const Bar: React.FC<BarProps> = props => {
    const { width, height, option } = props

    const wrapperRef = useRef<HTMLDivElement>(null)

    const chartRef = useRef<ECharts | null>(null)

    useEffect(() => {
        const dom = wrapperRef.current!
        chartRef.current = init(dom, {}, { width, height })
    }, [])

    useEffect(() => {
        const chart = chartRef.current!
        chart.setOption(option)
    })

    useEffect(() => {
        chartRef.current!.resize({ width, height })
    }, [width, height])
    return <div ref={wrapperRef}></div>
}

/** @description 折线图 */
export const Line: React.FC<LineProps> = props => {
    const { width, height, option } = props

    const wrapperRef = useRef<HTMLDivElement>(null)

    const chartRef = useRef<ECharts | null>(null)

    useEffect(() => {
        const dom = wrapperRef.current!
        chartRef.current = init(dom, {}, { width, height })
    }, [])

    useEffect(() => {
        const chart = chartRef.current!
        chart.setOption(option)
    })

    useEffect(() => {
        chartRef.current!.resize({ width, height })
    }, [width, height])
    return <div ref={wrapperRef}></div>
}
