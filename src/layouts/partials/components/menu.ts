import {allRoutes} from "@/router/routes";
import type {RouteRecordNameGeneric, RouteRecordRaw} from "vue-router";

export const getActiveItem = (currentRoute: RouteRecordNameGeneric) => {
    for (let i of allRoutes) {
        if (i.children != undefined) {
            for (let j of i.children) {
                if (j.name === currentRoute) {
                    return j
                } else if (j.children != undefined) {
                    for (let k of j.children) {
                        if (k.name === currentRoute) {
                            return k
                        }
                    }
                }
            }
        }
    }
    return null
}


export const getParentOfActiveItem = (parentKey: string) => {
    for (let i of allRoutes) {
        if (i.meta?.key === parentKey) {
            return i
        }

        if (i.children != undefined) {
            for (let j of i.children) {
                if (j.meta?.key === parentKey) {
                    console.log(j)
                    return j
                }
            }
        }
    }
    return null
}