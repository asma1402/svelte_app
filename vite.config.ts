import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  Object.assign(process.env, loadEnv(mode, process.cwd()))
  return {
    // vite config
    plugins: [svelte()],
  }
})

