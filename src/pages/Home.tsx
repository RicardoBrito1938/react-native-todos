import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { Task, TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle.length === 0) {
      return;
    } else {
      const newTask: Task = {
        id: tasks.length,
        title: newTaskTitle,
        done: false
      };
      setTasks([...tasks, newTask]);
    }
  }

  function handleToggleTaskDone(id: number) {
    const taskListUpdated = tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(taskListUpdated);
  }

  function handleRemoveTask(id: number) {
    const tasksListUpdated = tasks.filter(task => task.id !== id);
    setTasks(tasksListUpdated);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB"
  }
});
