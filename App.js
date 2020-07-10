import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StyleSheet, Text, View, FlatList, TextInput, Button, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { Input, CheckBox, ListItem } from 'react-native-elements';

function App() {

    const [tasks, setTasks] = useState([ 
        {id:1, message : "Drink a glass of water", checked:false},
        {id:2, message : "Be Amazing", checked:false},
        {id:3, message : "Do exercises", checked:false},]);

    const [task, setTask] = useState("");
    
  function changeTask(text) {
    setTask(text);
  }

  function addTask() {
    let newTask = {
      id: uuidv4(),
      message : task,
      checked: false
    }
    console.log("toto");
    setTasks([...tasks,newTask]);
  }


  // completeTask = (id) => {
  //   let task = this.state.tasks.filter(task => task.id === id);
  //     if (task.check === "true"){
  //       task.check = "false";
  //     }
  //     else {
  //       task.check = "true"
  //     }
  // }


  function deleteTask(id) {
    let tempTasks = tasks.filter(task => task.id !== id);
    setTasks(tempTasks);
  }

  function checkButton(id){
    let tempTasks = tasks.filter(task => task.id === id);
    tempTasks[0].checked = !tempTasks[0].checked;
    console.log("toto");
    let newTasks = tasks.filter(task => task.id !== id);
    setTasks([...newTasks,tempTasks[0]]);

  }

    return ( 
      <View style={styles.container}>
        <View>
          <Input style={styles.input} placeholder='add task...' value={task} onChangeText={text => changeTask(text)}/>
          <View style={styles.button}>
            <Button title="Add task" onPress={() => addTask()} />
            </View>
        </View>

        <FlatList
        data = {tasks}
        renderItem = {({item}) => {
          <View style={styles.containTask}>
              <ListItem
                title={item.message}
                // title={<CheckBox
                //         title={item.message}
                //         uncheckedIcon='circle-o'
                //         checkedIcon='dot-circle-o'
                //         checked={item.checked}
                //         onPress={() => checkButton(item.id)}/>
                //       }
                bottomDivider
              />            


  
                    {/* <CheckBox center title={item.message} checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={item.checked} onPress={() => checkButton(item.id)}/> */}
                {/* <Text style={styles.task}>{item.message}</Text>
                <TouchableOpacity onPress={() => deleteTask(item.id)} >
              <Feather style={styles.delete} name="circle" size={24} color="black" />
            </TouchableOpacity> */}
            </View>}} 
        keyExtractor = {item => item.id.toString()}
      />
      </View>
     );
  }



//onPress={id => this.deleteTask(item.id)}
// onPress={id => this.completeTask(item.id)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 50,
    marginBottom : 10,
    borderWidth : 1,
    borderColor: 'black',
    borderRadius: 5,
    height: 40,
    width: 300,
    padding: 10
  },
  button: {
    marginBottom: 30,
  },

  task: {
    fontSize: 20,
    padding: 10,

  },
  delete: {
    paddingRight: 10
  },
  containTask:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#fff",
    width: 300,
    borderRadius: 10,
    marginBottom: 10,
  }
});

export default App;