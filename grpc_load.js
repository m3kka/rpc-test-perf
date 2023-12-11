import { check, sleep } from 'k6';
import { grpc } from 'k6/experimental/grpc';

export let options = {
  vus: 10, // Virtual Users
  duration: '30s', // Test duration
};

export default function () {
    for (let i = 0; i < 10; i++) {
      const client = new grpc.Client();
      const request = {
        domain: 'per-bucket',
        descriptors: [
          {
            entries: [
              {
                key: 'bucket', // Descriptor key
                value: 'bucket', // Descriptor value
                key: 'category', // Descriptor key
                value: 'GET', // Descriptor value
              },
            ],
          },
        ],
        hits_addend: 1,
      };

    const response = grpc.invoke(client, {
      method: '/envoy.service.ratelimit.v3.RateLimitService/ShouldRateLimit',
      request,
    });

    if (response && response.status === grpc.StatusOK) {
      console.log('gRPC request successful:', response);
      check(response, {
        'gRPC request successful': () => response.status === grpc.StatusOK,
      });
    } else {
      console.error('gRPC request failed:', response);
      check(false, { 'gRPC request failed': () => false });
    }

    client.close();
    sleep(1); // Adjust as needed for pacing between requests
  }
}