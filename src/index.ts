import { Server } from "http";
import { SetupServer } from "./server/Server";

const server = new SetupServer();
server.inicia()