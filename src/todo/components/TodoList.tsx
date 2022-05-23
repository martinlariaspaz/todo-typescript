import { useTodos } from "../hooks/useTodos";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {

  const {todos} = useTodos();

  return (
    <div>
      {
          todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
      }
    </div>
  );
};
