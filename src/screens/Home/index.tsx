import { useState } from "react";
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View, Dimensions, FlatList } from "react-native";
import { styles } from "./styles";

import Logo from "../../../assets/logo.png";
import Add from "../../../assets/add.png";
import TaskLogo from "../../../assets/task.png";
import { Counter } from "../../components/Counter";
import { TaskCard } from "../../components/TaskCard";
import { Task } from "../../models/Task.model";

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskName, setTaskName] = useState('');
    const [inputFocus, setInputFocus] = useState(false);

    function handleTaskAdd() {
        setTasks(prevState => [...prevState, {
            text: taskName,
            done: false
        }]);

        setTaskName('');
    }

    function handleDoneTask(task: Task) {
        const newList = tasks.map(item => item == task
            ? { ...task, done: !task.done }
            : item
        );
        setTasks(newList);
    }

    function handleDeleteTask(task: Task) {
        let index = tasks.indexOf(task);
        if (index !== -1) {
            tasks.splice(index, 1);
        }

        setTasks([...tasks])
    }


    return (
        <>
            <View style={styles.topContainer}>
                <Image source={Logo} style={styles.logo} />
            </View>
            <View style={styles.form}>
                <TextInput
                    style={[styles.input, inputFocus ? styles.inputFocus : {}]}
                    placeholder="Adicione uma tarefa"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setTaskName}
                    value={taskName}
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                />
                <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                    <Image source={Add} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={styles.taksContainer}>
                    <Counter text="Criadas" quantity={tasks?.length === undefined ? 0 : tasks?.length} textColor="#4EA8DE" />
                    <Counter text="Concluídas" quantity={tasks.filter(item => item.done === true).length} textColor="#8284FA" />
                </View>
            </View>
            <View style={styles.todoListContainer}>
                <FlatList
                    data={tasks}
                    keyExtractor={item => item.text}
                    renderItem={({ item }) =>
                        <TaskCard
                            key={item.text}
                            text={item.text}
                            onDone={() => handleDoneTask(item)}
                            onRemove={() => handleDeleteTask(item)}
                        />
                    }
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.emptyListContainer}>
                            <Image source={TaskLogo} style={styles.taskImage} />
                            <Text style={[styles.emptyText, styles.textBold]}>Você ainda não tem tarefas cadastradas</Text>
                            <Text style={styles.emptyText}>Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                    )}
                />
            </View>
        </>
    )
}