import { Container } from 'inversify';
import 'reflect-metadata';
import { TYPES } from './types';
import { Store } from '../store';

const container = new Container();
container.bind<Store>(TYPES.Store).to(Store).inSingletonScope();

export { container };
