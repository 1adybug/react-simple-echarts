import { BarSeriesOption, ComposeOption, DatasetComponentOption, ECharts, GridComponentOption, init, LineSeriesOption, PieSeriesOption, TitleComponentOption, TooltipComponentOption } from "echarts"
import React, { forwardRef, HTMLAttributes, useEffect, useImperativeHandle, useRef, useState } from "react"

export type PieOption = ComposeOption<PieSeriesOption | TitleComponentOption | DatasetComponentOption | GridComponentOption | TooltipComponentOption>

export type BarOption = ComposeOption<BarSeriesOption | TitleComponentOption | DatasetComponentOption | GridComponentOption | TooltipComponentOption>

export type LineOption = ComposeOption<LineSeriesOption | TitleComponentOption | DatasetComponentOption | GridComponentOption | TooltipComponentOption>

export type OriginEchartProps<T extends PieOption | BarOption | LineOption = PieOption | BarOption | LineOption> = T extends PieOption | BarOption | LineOption
    ? {
          width: number
          height: number
          option: T
      } & Omit<HTMLAttributes<HTMLDivElement>, "children">
    : never

export type EchartProps = OriginEchartProps

const Echart = forwardRef<ECharts, EchartProps>((props, ref) => {
    const { width, height, option, ...others } = props
    const wrapper = useRef<HTMLDivElement>(null)
    const [chart, setChart] = useState<ECharts | null>(null)

    useImperativeHandle(ref, () => chart!, [chart])

    useEffect(() => {
        const dom = wrapper.current!
        setChart(init(dom, {}, { width, height }))
    }, [])

    useEffect(() => {
        chart?.setOption(option)
        chart?.resize({ width, height })
    })

    return <div ref={wrapper} {...others} />
})

export default Echart
