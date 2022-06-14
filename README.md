# Student Reader

App for getting students data.

## How To Use

- Run Redis Server or Memurai Server (for Windows)
- Run src/index.js
- Start Nginx and open http://localhost:80/read/[npm] OR open http://localhost:3002/read/[npm] for this module directly.
- To test caching, open http://localhost:80/read/[npm]/[trx_id] OR open http://localhost:3002/read/[npm]/[trx_id] for this module directly.
- `trx_id` is used for cache key
- Method : GET
- App will get a student's data based on an existing NPM.
