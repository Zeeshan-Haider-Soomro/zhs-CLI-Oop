#!/usr/bin/env node
import inquirer from "inquirer";
class Student{
    name:string
    constructor (n:string){
        this.name=n
    }
}
class Person{
    students:Student[]=[]
    addStudent(obj:Student){
        this.students.push(obj)
    }
}
const persons = new Person()
const programStart = async(persons:Person)=>{
    do{
    console.log("Welcome!");
    const ans = await inquirer.prompt(
        {
            name:"select",
            type:"list",
            message:"whom would you like to interact with?",
            choices:["staff","student","exit"]
        }
    )
    
    if(ans.select == "staff"){
        console.log("You approach the staff room.feel free to ask any question");
        
    }
    else if(ans.select == "student"){
const ans = await inquirer.prompt(
    {
        name:"student",
        type:"input",
        message:"Enter the student name you wish engage with:",
    }
)
const student = persons.students.find(val => val.name == ans.student)
if(!student){
    const name = new Student(ans.student)
    persons.addStudent(name)
    console.log(`Hello i am ${name.name}.nice to meet you!`);
    console.log("New student added");
    console.log("Current student list");
    console.log(persons.students);}
    
    else{
        console.log(`Hello i am ${student.name}.nice to meet you again!`);
    console.log("Existing student list");
    console.log(persons.students);
}
    }
else if(ans.select === "exit"){
    console.log("Exiting the program....");
    process.exit()
    
}
}while(true)
    }
programStart(persons);


