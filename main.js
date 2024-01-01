async function refresh(){
    try {
        let result =await axios.get("https://crudcrud.com/api/225b840200544be08de1dcf48f835a97/studentdata")

        for(let i=0;i<result.data.length;i++){

            useronscreen(result.data[i])
        }
    } catch (error) {
        console.log(error)
        
    }
}

refresh();

function Formdata(event){

    event.preventDefault()

    let name=document.getElementById('name').value
    let number=document.getElementById('contact').value
    let email=document.getElementById('email').value

    let obj={
       
        name:name,
        number: number,
        email:email
          
    }

    userOncurdcurd(obj)
    

}


async function userOncurdcurd(obj){

    try {
        let result=await axios.post("https://crudcrud.com/api/225b840200544be08de1dcf48f835a97/studentdata", obj)
        useronscreen(result.data)
    } catch (error) {

        console.log(error)
        
    }



}

function useronscreen(obj){

    var a=document.createElement('li')
    a.textContent=obj.name+" "+ obj.email+" "+obj.number
    var b= document.getElementById("list")
    b.appendChild(a)
    var c= document.createElement("input")
    c.value="delete"
    c.type="button"
    a.appendChild(c) 
     c.onclick= async ()=>{
        await axios.delete("https://crudcrud.com/api/225b840200544be08de1dcf48f835a97/studentdata/"+obj._id)

        b.removeChild(a)


     }
     var edit=document.createElement("input")
     edit.value="edit"
     edit.type="button"
     a.appendChild(edit)
     edit.onclick= async ()=>{
       document.getElementById("name").value=obj.name
       document.getElementById("contact").value=obj.number
       document.getElementById("email").value=obj.email
        await axios.delete("https://crudcrud.com/api/225b840200544be08de1dcf48f835a97/studentdata/"+obj._id)
          b.removeChild(a)


     }

}