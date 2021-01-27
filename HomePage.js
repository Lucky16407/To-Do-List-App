import React from 'react';
import {TouchableOpacity, View, Text, TextInput, Image, StyleSheet, ScrollView} from 'react-native';

export default class HomePage extends React.Component{
    constructor(){
        super();
        this.state={
            task:'',
            taskList:[]
        }
    }
    
    addTask = ()=>{
        var item = {id:1+Math.random(),
        value: this.state.task}
        var list = this.state.taskList
        list.push(item)
        this.setState({taskList:list, task:''})
    }

    deleteItem = (id)=>{
        var list = this.state.taskList
        var updatedList = list.filter(item=>item.id != id)
        this.setState({taskList:updatedList})
    }
    
    render(){
        return(
            <View style={styles.view}>
                <View style={{flex:1, flexDirection:'row'}}>
                <Text style={styles.title}> Perry's Post-its :D</Text>
                <Image
                style={styles.perry}
                source = {{
                    uri : 'https://images.twinkl.co.uk/tr/image/upload/illustation/parrot-4.png'
                }}
                />
                </View>
                <TextInput
                style={styles.textInput}
                placeholder = "Enter a task! :D"
                onChangeText={(text)=>{
                    this.setState({task:text})
                }}
                value = {this.state.task}
                />
                <TouchableOpacity
                style={styles.addButton}
                onPress={()=>{
                    this.addTask();
                }}
                >
                    <Text style={styles.addButtonText}>
                        Add Task
                    </Text>
                </TouchableOpacity>
                <ScrollView>
                    {this.state.taskList.map(item=>{return(
                        <View>
                            <Text style={styles.task}> {item.value} </Text>
                            <TouchableOpacity
                            onPress={()=>{
                                this.deleteItem(item.id)
                            }}
                            >
                                <Text> X </Text>
                            </TouchableOpacity>
                        </View>
                    )})}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:'#cfffd3'
    },
    title:{
        fontSize:25,
        fontStyle:'italic',
        color:'#003007',
        marginTop:100,
        marginLeft:50
    },
    perry:{
        width:200,
        height:100,
        marginTop:75
    },
    addButton:{
        marginLeft:300,
        color:"#003007",
        borderColor:"#003007",
        borderWidth:2,
        width: 100,
        height: 30

    },
    addButtonText:{
        color:"#003007",
        textAlign:'center'
    },
    textInput:{
        borderColor:"#003007",
        borderWidth:2,
        height: 30,
        width: 325,
        backgroundColor: '#abfff4',
        marginLeft: 80,
        marginBottom: 300

    },
    task:{
        
    }
})