export interface Book{
    id: number;
    title: string;
    author: string;
    description: string;
}

export interface CreateBook{
    title: string;
    author: string;
    description: string;
}