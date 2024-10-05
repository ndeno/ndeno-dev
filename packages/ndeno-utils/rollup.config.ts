import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',  
  output: {
    dir: 'dist',          
    format: 'esm',        
    sourcemap: true,      
    preserveModules: true 
  },
  plugins: [
    resolve(),            
    typescript({
      tsconfig: './tsconfig.json',  
      outDir: 'dist',     
    }),
    terser()              // Minifies the code for production (optional)
  ]
};
