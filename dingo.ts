import { RateLimitServiceClient } from './gen/envoy/service/ratelimit/v3/rls.client';
import { GrpcTransport } from '@protobuf-ts/grpc-transport';
import grpc, { ChannelCredentials } from '@grpc/grpc-js';

const transport = new GrpcTransport({
  host: 'localhost:8081',
  channelCredentials: ChannelCredentials.createInsecure(),
});

const client = new RateLimitServiceClient(transport);
try {
  const res = await client.shouldRateLimit({
    domain: 'per-bucket',
    descriptors: [
      {
        entries: [{ key: 'bucket', value: 'mz-bucket' }],
      },
    ],
    hitsAddend: 1,
  });
} catch (err) {
  console.log(err);
}

// console.log(res);

// import { createPromiseClient } from '@connectrpc/connect';
// import { createGrpcTransport } from '@connectrpc/connect-node';

// import { RateLimitService } from './gen/envoy/service/ratelimit/v3/rls_connect';

// const transport = createGrpcTransport({
//   // Requests will be made to <baseUrl>/<package>.<service>/method
//   baseUrl: 'http://localhost:8081',

//   // You have to tell the Node.js http API which HTTP version to use.
//   httpVersion: '2',

//   // Interceptors apply to all calls running through this transport.
//   interceptors: [],
// });

// const client = createPromiseClient(RateLimitService, transport);
// const res = await client.shouldRateLimit({
//   domain: 'per-bucket',
//   descriptors: [
//     {
//       entries: [{ key: 'bucket', value: 'mz-bucket' }],
//     },
//   ],
//   hitsAddend: 1,
// });

// console.log(res);
