type todoItemProps = {
  id: number;
  title: string;
  completed: boolean;
};

interface TodoListProps {
  items: todoItemProps[];
}
