import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function getPagesBasePath(): string {
  const repository = process.env.GITHUB_REPOSITORY;
  if (!repository) {
    return '/';
  }

  const repoName = repository.split('/')[1];
  if (!repoName || repoName.endsWith('.github.io')) {
    return '/';
  }

  return `/${repoName}/`;
}

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? getPagesBasePath() : '/',
  plugins: [react(), tailwindcss()],
});
