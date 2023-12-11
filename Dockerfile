# Use an existing image as a base
FROM grafana/k6

# Copy files from the host to the container
COPY test.js /test/test.js
COPY envoy.protoset /test/envoy.protoset

# Any other commands you wish to run
