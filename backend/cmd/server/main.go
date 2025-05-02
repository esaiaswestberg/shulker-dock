package main

import (
	"context"
	"log"
	"net/http"

	"github.com/esaias/shulker-dock/gen/proto"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"google.golang.org/grpc"
)

type server struct {
	proto.UnimplementedPanelServer
}

func (s *server) SayHello(ctx context.Context,
	in *proto.HelloRequest,
) (*proto.HelloReply, error) {
	return &proto.HelloReply{
		Message: "Hello " + in.Name,
	}, nil
}

func main() {
	// 1) make a gRPC server
	grpcServer := grpc.NewServer()
	proto.RegisterPanelServer(grpcServer, &server{})

	// 2) wrap it for grpc-web
	wrapped := grpcweb.WrapServer(
		grpcServer,
	)

	// 3) serve on :8080
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if wrapped.IsGrpcWebRequest(r) ||
			wrapped.IsAcceptableGrpcCorsRequest(r) {
			wrapped.ServeHTTP(w, r)
		} else {
			http.Error(w, "invalid request", http.StatusBadRequest)
		}
	})

	log.Println("Starting server on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
