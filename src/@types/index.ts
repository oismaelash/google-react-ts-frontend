export interface ButtonProps {
    title: string;
    classNameType?: string;
    onClickProp?: () => void;
}

export interface LinkProps {
    url: string;
    title: string;
    classNameLink?: string;
    isInternal?: boolean;
}

export interface NavProps {
    links: LinkProps[];
}

export interface EmailFormProps {
    handleConfirm: (email: string) => void;
}

export interface PasswordFormProps {
    email: string;
    handleConfirm: (email: string, password: string) => void;
}
