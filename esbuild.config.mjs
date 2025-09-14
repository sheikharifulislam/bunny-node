import { build } from 'esbuild';

await build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outfile: 'dist/index.js',
    platform: 'node', // or "browser"
    target: 'es2020',
    sourcemap: false, // disable in production for smaller size
    minify: true, // enable minification
});

console.log('Production build completed!');
