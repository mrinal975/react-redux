import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/todosActions";

const Todos = () => {
  const { todos, isLoading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      <h3>Todos App</h3>
      {isLoading && <h4>Loading ...</h4>}
      {error && <h4>{error.message}</h4>}
      <section>
        {todos &&
          todos.map((todo) => {
            return (
              <article key={todo.id}>
                <h4>{todo.id}</h4>
                <h4>{todo.title}</h4>
              </article>
            );
          })}
      </section>
    </div>
  );
};
export default Todos;
