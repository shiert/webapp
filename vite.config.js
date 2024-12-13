import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  proxy: {
    "/cosy": {
      target: `http://127.0.0.1/cosy/`, // 后台接口
      changeOrigin: true,
      // secure: false, // 如果是https接口，需要配置这个参数
      // ws: true, //websocket支持
      rewrite: (path) => path.replace(/^\/cosy/, ""),
    },
  },
  // build: {
  //   outDir: "dist", // 指定输出路径
  //   assetsDir: "assets", // 指定生成静态资源的存放路径
  //   minify: "terser", // 混淆器,terser构建后文件体积更小
  //   sourcemap: false, //是否构建source map 文件
  //   terserOptions: {
  //     compress: {
  //       drop_console: true, // 生产环境移除console
  //       drop_debugger: true, // 生产环境移除debugger
  //     },
  //   },
  // },
})
