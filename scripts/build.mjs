import { build, context,  } from "esbuild";
//@ts-check

export const watch = process.argv.includes("--watch");
export const dev = process.argv.includes("--dev");
/**
 * @type {import("esbuild").BuildOptions}
 */
export const defaultOptions = {
    entryPoints: ["src/index.ts"],
    outdir: "./dist",
    bundle: true,
    minify: true,
    sourcemap: "linked",
    treeShaking: true,
    platform: "node",
    define: {
        IS_DEV: `${dev}`,
    }
}

if(watch) {
    const ctx = await context(defaultOptions);
    await ctx.watch();
} else {
    await build(defaultOptions);
}