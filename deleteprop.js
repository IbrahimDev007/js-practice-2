function deleteProp(arr) {
 let obj=arr[0];
 let prop=arr[1];
 if(prop in obj){
   delete obj.prop;
   return "yes"
 }
else{
    return "No"
}
   
}

const input=[
    {
        fname:"ibrahim"
    },"fname"
]

console.log(deleteProp(input));