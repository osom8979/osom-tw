import {resolve} from 'path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  base: '/',
  plugins: [
    dts({
      outDir: resolve(__dirname, 'dist', 'tailwind'),
      entryRoot: resolve(__dirname, 'src', 'tailwind'),
      insertTypesEntry: true,
    }),
  ],
  build: {
    outDir: resolve(__dirname, 'dist', 'tailwind'),
    lib: {
      entry: resolve(__dirname, 'src', 'tailwind', 'index.ts'),
      name: 'osom-tailwind',
      formats: ['es', 'umd'],
      fileName: format => `osom-tailwind.${format}.js`,
    },
    rollupOptions: {
      external: [
        '@fontsource-variable/hahmlet',
        '@fontsource-variable/noto-sans-kr',
        '@fontsource/nanum-gothic-coding',
      ],
    },
  },
});
