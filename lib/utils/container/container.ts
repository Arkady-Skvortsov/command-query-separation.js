import { Container } from "inversify";
import "reflect-metadata";
import { TYPES } from "./types";
import { Store } from "../store";
import { Command } from "../command";

const container = new Container();
container.bind<Store>(TYPES.Store).to(Store);
container.bind<Command>(TYPES.Command).to(Command);

export { container };
