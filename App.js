import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StyleSheet, Text, View, FlatList, TextInput, Button, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

class App extends Component {
  state = {  
    tasks : [
      {id:1, message : "Drink a glass of water", check:"false"},
      {id:2, message : "Be Amazing", check:"false"},
      {id:3, message : "Do exercises", check:"false"},
    ],
    task : "",
  }

  newTask = (text) => {
    this.setState({
      task : text
    })
  }

  addTask = () => {
    let newTask = {
      id: uuidv4(),
      message : this.state.task,
      check: "false"
    }
    this.setState({
      tasks : [...this.state.tasks,newTask]
    })
  }

  completeTask = (id) => {
    let task = this.state.tasks.filter(task => task.id === id);
      if (task.check === "true"){
        task.check = "false";
      }
      else {
        task.check = "true"
      }
  }


  deleteTask = (id) => {
    let tasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: tasks,
    })
  }



  render() { 

    return ( 
      <View style={styles.container}>
        <View>
          <TextInput style={styles.input} value={this.state.task} onChangeText={text => this.newTask(text)}/>
          <View style={styles.button}>
            <Button title="Add task" onPress={this.addTask} />
            </View>
        </View>

        <FlatList
        data = {this.state.tasks}
        renderItem = {({item}) => {
        if(item.check === 'false'){
          return (<View style={styles.containTask}>
            <Text style={styles.task}>{item.message}</Text>
            <TouchableOpacity onPress={id => this.completeTask(item.id)} >
              <Feather style={styles.delete} name="circle" size={24} color="black" />
            </TouchableOpacity>
            </View>)}
        else{
          return (<View style={styles.containTask}>
            <Text style={styles.task}>{item.message}</Text>
            <TouchableOpacity onPress={id => this.completeTask(item.id)} >
              <Feather style={styles.delete} name="check-circle" size={24} color="black" />
            </TouchableOpacity>
            </View>)
        }
      }} 
      keyExtractor = {item => item.id.toString()}
      />
      </View>
     );
  }
}

//onPress={id => this.deleteTask(item.id)}


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