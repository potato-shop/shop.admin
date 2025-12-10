import type {RouteParamsRaw} from "vue-router";
import type {ApexOptions} from "apexcharts";

export type RouteType = {
    name: string;
    params?: RouteParamsRaw;
    url?: string;
};

export type ApexChartType = {
    height: number
    type?: string
    series: any[]
    options: ApexOptions
}