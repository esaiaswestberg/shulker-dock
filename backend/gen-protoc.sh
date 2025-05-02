rm -rf gen/proto
mkdir -p gen/proto
protoc -I ../proto \
  --go_out=gen/proto --go_opt=paths=source_relative \
  --go-grpc_out=gen/proto --go-grpc_opt=paths=source_relative \
  ../proto/service.proto
