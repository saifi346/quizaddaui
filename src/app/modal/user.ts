import { TopicAttempted } from './TopicAttempted';
export class User {
    id : string;
    username : string;
    email : string;
    password : string;
    topics : TopicAttempted[];
    totalScore : number;
}
