// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// // vite.config.js
// import { defineConfig } from 'vite';
// import reactRefresh from '@vitejs/plugin-react-refresh';

// export default defineConfig({
//   plugins: [reactRefresh()],
//   resolve: {
//     alias: {
//       '@ckeditor/ckeditor5-build-classic': require.resolve('@ckeditor/ckeditor5-build-classic'),
//     },
//   },
// });


import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh'; // Import the plugin correctly

export default defineConfig({
  plugins: [reactRefresh()], // Use the plugin correctly within the plugins array
});
