import { createPromiseClient } from '@connectrpc/connect';
import { createConnectTransport } from '@connectrpc/connect-node';

import { RateLimitService } from './gen/envoy/service/ratelimit/v3/rls_connect';

const transport = createConnectTransport({
  // Requests will be made to <baseUrl>/<package>.<service>/method
  baseUrl: 'http://ratelimit:8081',

  // You have to tell the Node.js http API which HTTP version to use.
  httpVersion: '2',

  // Interceptors apply to all calls running through this transport.
  interceptors: [],
});

const client = createPromiseClient(RateLimitService, transport);
const res = await client.shouldRateLimit({
  domain: 'per-bucket',
  descriptors: [
    {
      entries: [{ key: 'bucket', value: 'mz-bucket' }],
    },
  ],
  hitsAddend: 1,
});

console.log(res);
