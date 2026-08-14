import { JwtPayload } from 'jwtwebtoken';

export interface UserPayload{
    id: string;
}

declare global {
    namespace Express{
        interface Request{
            user?: UserPayload;
        }
    }
}