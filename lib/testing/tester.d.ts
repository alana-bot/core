/// <reference types="bluebird" />
import * as Promise from 'bluebird';
import { Message } from '../types/message';
import { Button } from '../types/messages/button';
import TestPlatform from './platform';
export declare enum TestState {
    notStarted = 0,
    running = 1,
    error = 2,
    done = 3,
}
export default class Tester {
    userId: string;
    private script;
    private testPlatfom;
    private step;
    private thePromise;
    private publicPromise;
    private resolve;
    private reject;
    private state;
    private timeout;
    private timer;
    private checkforExtraDialogs;
    constructor(platform: TestPlatform, userId?: string);
    expectText(allowedPhrases: Array<string> | string): this;
    expectButtons(text: string, button: Array<Button>): this;
    sendText(text: string): this;
    sendButtonClick(payload: string): this;
    then(): void;
    run(): Promise<any>;
    checkForTrailingDialogs(bool: boolean): this;
    private execute();
    receive<M extends Message>(message: M): void;
    onError(err: Error): void;
}
