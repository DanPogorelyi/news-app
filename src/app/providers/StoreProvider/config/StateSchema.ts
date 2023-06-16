import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

export type StateSchema = {
    counter: CounterSchema;
    user: UserSchema;
}
