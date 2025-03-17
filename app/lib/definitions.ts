export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    created_at: string;
    last_login: string;
    is_blocked: boolean;
};

export type UserState = {
    errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
        passwordConfirm?: string[];
    };
    message?: string | null;
    formData: FormData
}

export type Attribute = 'name' | 'email' | 'is_blocked' | 'created_at' | 'last_login'

export type ButtonType = 'button' | 'submit' | 'reset';
  
export type ButtonProps = {
    name: string;
    value: string;
    icon: React.ReactNode;
    statuses: boolean[]
}

export type ColumnHeadProps = {
    title: string;
    index: number;
    sorterId: number;
    handleSort: (id: number) => void;
    isDescending: boolean;
}

export type UserRowProps = {
    user: User;
    index: number;
    selectedRows: number[];
    handleSelect: (index: number) => void;
}

export interface InputFieldProps {
    value: FormDataEntryValue | null;
    type: string;
    placeholder: string;
    name: string;
    icon: React.ReactNode;
    errors?: string[];
}