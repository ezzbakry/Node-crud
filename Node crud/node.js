// let x=10;
// module.exports=x

// // console.log(f)
// let r=f.readFile("txt.txt",{encoding:"utf8"},(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
//     console.log("arrived")
// })
// console.log("finished")
// console.log(process.argv)



const f=require("fs")


let [,,command]=process.argv;

if(command=="create"){
    let title=process.argv[3]
    let to=JSON.parse(f.readFileSync("todo.json","utf-8"))
    to.push({title:title})
    f.writeFileSync("todo.json",JSON.stringify(to))
    console.log("created")
}else if(command=="list"){
    let todos=JSON.parse(f.readFileSync("todo.json","utf-8"))
    console.log(todos)

}else if(command=="update"){
    let oldtitle=process.argv[3];
    let newtitle=process.argv[4];
    let to=JSON.parse(f.readFileSync("todo.json","utf-8"))
    for (var i=0;i<to.length;i++){
        if(to[i].title==oldtitle){
            to[i].title=newtitle
        }

    }
    f.writeFileSync("todo.json",JSON.stringify(to))
    console.log("updated")
    
}else if(command=="delete"){

    let to=JSON.parse(f.readFileSync("todo.json","utf-8"))
    while(to.length > 0) {
        to.pop();
    }
    
    f.writeFileSync("todo.json",JSON.stringify(to))
    console.log("deleted")

}else if(command=="remove"){
    let title=process.argv[3]
    let to=JSON.parse(f.readFileSync("todo.json","utf-8"))
    for (var i=0;i<to.length;i++){
        if(to[i].title==title){
            let index=to.indexOf(to[i])
            to.splice(index,1)
        }
    }
    f.writeFileSync("todo.json",JSON.stringify(to))
    console.log("the task is removed")

}


