import { defineConfig } from 'astro/config';
// Descomenta esta línea en el futuro para usar el adaptador de Vercel (ISR)
// import vercel from '@astrojs/vercel';

export default defineConfig({
  // Por defecto es 'static' (SSG Puro). 
  // En el futuro, para activar ISR/Híbrido lo cambias a: 'hybrid'
  output: 'static', 
  
  // En el futuro, descomentas esto para que Vercel maneje el renderizado híbrido
  /*
  adapter: vercel({
    webAnalytics: { enabled: true }
  })
  */
});