import {resolve} from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  base: '/',
  build: {
    outDir: resolve(__dirname, 'dist'),
    lib: {
      entry: resolve(__dirname, 'src', 'tailwind', 'index.ts'),
      name: 'osom-ui',
      formats: ['es', 'umd'],
      fileName: format => `osom-ui.${format}.js`,
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
