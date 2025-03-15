export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    created_at: string;
    last_login: string;
    is_blocked: boolean;
};

export type Attribute = 'name' | 'email' | 'is_blocked' | 'created_at' | 'last_login'


  