import React, {useEffect, useContext} from 'react';
import {todoContext} from './todo-context';
import { useObserver } from "mobx-react-lite";
import { Stylesheet, Alert, View, Text} from 'react-native';

export default function TodoList() {
    const todoStore = useContext(todoContext);
    useEffect(() => {
        onLoadTodos();
    }, []);

  const onLoadTodos = async () => {
    await todoStore.getTodos();
  };
  return useObserver(() => (
    <View>
      <Text>TodoList Works!</Text>
        {todoStore.todos.map(t => (
          <Text key={t.id}>{t.title}</Text>
        ))}
    </View>
  ));
    return <View>
        <Text>TodoList Works!</Text>
    </View>
}