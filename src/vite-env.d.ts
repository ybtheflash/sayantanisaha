/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

interface ImportMeta {
    glob(pattern: string, options?: { eager?: boolean; as?: string; import?: string }): Record<string, unknown>
}
