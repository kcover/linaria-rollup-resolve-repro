# linaria rollup plugin issue repro
External imports do not resolve properly when using the linaria rollup plugin in combination with certain plugins e.g. node-resolve. 
This happens because `@linaria/rollup@4.3.4" does not handle the case where rollup's resolver returns an object indicating that the 
resolve dependency is external. See this link for more info on when that might occur: https://rollupjs.org/plugin-development/#resolveid

To reproduce the build failure, run `yarn build` or `npm run build`