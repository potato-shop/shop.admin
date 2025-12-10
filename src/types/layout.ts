import type {RouteType} from "@/types/index";
import type {IconifyIcon} from "@iconify/vue";
import type {RouteParamsRaw} from "vue-router";

export type MenuItemType = {
    label: string
    icon?: string | IconifyIcon
    image?: string
    route?: RouteType
}

export type MegaMenuItemType = {
    title: string
    bgVariant?: string
    links:
        {
            label: string
            route: RouteType
        }[]
}

export type SubMenus = {
    item: MenuType
    linkClassName?: string
    subMenuClassName?: string
    activeMenuItems?: Array<string>
    toggleMenu?: (item: MenuType, status: boolean) => void
    className?: string
}

export type MenuType = {
    path: string
    name?: string
    label: string
    key?: string
    icon?: string | IconifyIcon
    params?: RouteParamsRaw
    isTitle?: boolean
    meta: {
        parentKey?: string
        badge?: {
            variant: string
            text: string
        },
        tooltip?: {
            variant: string
            icon: string
            text: string
        },
        requiresAuth?: boolean
    },
    component?: () => Promise<any>
    children?: MenuType[]
}