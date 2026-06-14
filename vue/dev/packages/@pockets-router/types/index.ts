import type { RouteRecordRaw } from "vue-router"

export interface $routerProps {
    routes: [ RouteRecordRaw ]
    base?: string
    history?: "html5" | "hash" | "memory"
    linkActiveClass?: string
    linkInactiveClass?: string
    linkExactActiveClass?: string
    linkBase?: string
    /*
        Can be used to group router instances together for syncing.
        Routers with the same ID will trigger syncs when they change.
    */
    routerID?: string
    sync?: boolean | "both" | "listen" | "emit"
}
