import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 10,
  duration: '10s',
};

export default function () {
  const res = http.get('http://ratelimiter:8080/healthcheck');
  check(res, {
    'response code was 200': (res) => res.status == 200,
  });
}
