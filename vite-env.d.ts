/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_YOUTUBE_API_KEY: string;
    readonly VITE_KOBIS_API_KEY: string;
    readonly VITE_KMDB_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
