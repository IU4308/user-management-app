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

export type ButtonType = 'button' | 'submit' | 'reset';
  
export type ButtonProps = {
    name: string;
    value: string;
    // type: 'button' | 'submit' | 'reset';
    icon: React.ReactNode;
    statuses: boolean[]
}

// export type status = ''