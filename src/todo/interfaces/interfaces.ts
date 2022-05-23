export interface Todo {
    id: string;
    desc:string;
    completed: boolean;
}

export interface TodoState{
    todoCount: number;
    todos: Todo[]
    compiled: number;
    pending: number;
}