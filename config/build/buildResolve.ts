import path from 'path';
import { ResolveOptions } from 'webpack';
import { buildPlugins } from './buildPlugins';
import { BuildOptions } from './types/config';

export const buildResolve = ({ paths }: BuildOptions): ResolveOptions => ({
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
        '@': paths.src,
    },
    enforceExtension: false,
    symlinks: false,
    fullySpecified: false,
});
