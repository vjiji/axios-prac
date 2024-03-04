import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _getTodos } from "../redux/modules/todosSlice";

const ThunkTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log(todos, 4);
  useEffect(() => {
    dispatch(_getTodos());
  }, [dispatch]);
  return <div>ThunkTodos</div>;
};

export default ThunkTodos;
