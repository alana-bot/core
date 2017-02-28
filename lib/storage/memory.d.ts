/// <reference types="bluebird" />
import * as Promise from 'bluebird';
import { UserMiddleware, User, BasicUser } from '../types/user';
import Botler from '../bot';
export default class Memory implements UserMiddleware {
    private users;
    constructor(bot?: Botler);
    getUser(user: BasicUser): Promise<User>;
    saveUser<U extends User>(user: U): Promise<U>;
}
