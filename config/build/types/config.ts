export type BuildMode = 'production' | 'development';

export interface BuildEnv {
    port?: number;
    mode: BuildMode;
    apiUrl: string;
}

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPaths,
    isDev: boolean;
    port: number;
    apiUrl: string;
}
