import 'vue-router';

// Define custom meta fields you want to add
declare module 'vue-router' {
    interface RouteMeta {
        key?: string
        params?: any
        isTitle?: boolean
        requiresAuth?: boolean;
        icon?: string
        label: string
        parentKey?: string
        badge?: {
            variant: string
            text: string
        }
        tooltip?: {
            variant: string
            icon: string
            text: string
        },
        target?: '_blank' | '_top' | '_parent' | '_self'
    }
}
