import { defineConfig, normalizePath, build } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';
import { viteStaticCopy } from 'vite-plugin-static-copy';

import path, { resolve } from 'path';
import { fileURLToPath } from 'url';

import { StartFunc as StartFuncGetFiles } from "./KCode/getFiles.js";
import { StartFunc as StartFuncGetVariables } from "./KCode/generateVariables.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SourceFolderName = "SourceCode";
const SrcFolder = "src/Laundry/Admin/AdminAllDays/QrCodeWise/BranchWise";

const FrontEndDistFolder = "publicDir/Admin/AdminAllDays/QrCodeWise/BranchWise";

const root = resolve(__dirname, `${SrcFolder}/${SourceFolderName}`);

console.log("root : ", root);

let files = StartFuncGetFiles({ inSrcPath: `${SrcFolder}/${SourceFolderName}` });

build({
    configFile: false,
    build: {
        emptyOutDir: false,
        outDir: resolve(__dirname, `../../../../../../${FrontEndDistFolder}/assets/compiled/js`),
        lib: {
            name: 'app',
            formats: ['umd'],
            fileName: 'app',
            entry: `${SrcFolder}/${SourceFolderName}/assets/js/app.js`,
        },
        rollupOptions: {
            output: {
                entryFileNames: '[name].js'
            }
        }
    },
});

export default defineConfig((env) => ({
    publicDir: 'static',
    base: './',
    root: resolve(__dirname, `../../../../../../${SrcFolder}/${SourceFolderName}`),
    plugins: [
        viteStaticCopy({
            targets: [
                { src: normalizePath(resolve(__dirname, `../../../../../../${SrcFolder}/${SourceFolderName}/assets/static`)), dest: "assets" }
            ],
            watch: {
                reloadPageOnChange: true
            }
        }),
        nunjucks({
            templatesDir: root,
            variables: StartFuncGetVariables({ mode: env.mode, inFilesArray: files, inSrcPath: SrcFolder }),
            nunjucksEnvironment: {
                filters: {
                    containString: (str, containStr) => {
                        if (!str.length) return false
                        return str.indexOf(containStr) >= 0
                    },
                    startsWith: (str, targetStr) => {
                        if (!str.length) return false
                        return str.startsWith(targetStr)
                    }
                }
            }
        })
    ],
    resolve: {
        alias: {
            '@': normalizePath(resolve(__dirname, 'src')),
            '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
            '~bootstrap-icons': resolve(__dirname, 'node_modules/bootstrap-icons'),
            '~perfect-scrollbar': resolve(__dirname, 'node_modules/perfect-scrollbar'),
            '~@fontsource': resolve(__dirname, 'node_modules/@fontsource'),
        }
    },
    build: {
        emptyOutDir: false,
        manifest: true,
        target: "chrome58",
        outDir: resolve(__dirname, `../../../../../../${FrontEndDistFolder}`),
        rollupOptions: {
            input: files,
            output: {
            }
        },
    }
}));