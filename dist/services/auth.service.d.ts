export declare class AuthService {
    register(username: string, email: string, password: string): Promise<import("mongoose").Document<unknown, {}, import("../models/user.model").User> & import("../models/user.model").User & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    login(username: string | undefined, email: string | undefined, password: string): Promise<{
        user: import("mongoose").Document<unknown, {}, import("../models/user.model").User> & import("../models/user.model").User & Required<{
            _id: unknown;
        }> & {
            __v?: number;
        };
        token: string;
    }>;
}
