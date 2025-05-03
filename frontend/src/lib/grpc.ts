import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { PanelClient } from "./gen/proto/service.client";

const apiUrl = "/grpc";

const transport = new GrpcWebFetchTransport({
  baseUrl: apiUrl,
});
export const panelClient = new PanelClient(transport);