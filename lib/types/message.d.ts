export interface Message {
    type: MessageType;
}
export declare type Text = 'text';
export declare type Image = 'image';
export declare type Button = 'button';
export declare type Greeting = 'greeting';
export declare type Postback = 'postback';
export declare type Audio = 'audio';
import { TextMessage } from './messages/text';
import { ImageMessage } from './messages/image';
import { ButtonMessage } from './messages/button';
import { PostbackMessage } from './messages/postback';
import { GreetingMessage } from './messages/greeting';
import { AudioMessage } from './messages/audio';
export declare type IncomingMessage = TextMessage | PostbackMessage | GreetingMessage | ImageMessage;
export declare type MessageType = Text | Image | Button | Greeting | Postback | Audio;
export declare type OutgoingMessage = TextMessage | ImageMessage | ButtonMessage | AudioMessage;
export declare const MessageTypes: {
    text: Text;
    image: Image;
    button: Button;
    greeting: Greeting;
    postback: Postback;
    audio: Audio;
};
export { TextMessage, ButtonMessage, PostbackMessage, ImageMessage, GreetingMessage, AudioMessage };
