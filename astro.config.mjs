import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
// Descomenta esta línea en el futuro para usar el adaptador de Vercel (ISR)
// import vercel from '@astrojs/vercel';

export default defineConfig({
  // Por defecto es 'static' (SSG Puro). 
  // En el futuro, para activar ISR/Híbrido lo cambias a: 'hybrid'
  // En el futuro, descomentas esto para que Vercel maneje el renderizado híbrido
  output: 'static'
  /*
  adapter: vercel({
    webAnalytics: { enabled: true }
  })
  */,

  integrations: [react()]
});