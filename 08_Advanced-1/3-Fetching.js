//fetching 

const fetchApi=async ()=>{
    try {
        let url =await fetch( "https://randomuser.me/api/"); //we use await in async 
        let data = await url.json(); 
        console.log(data);
        
    } catch (error) {
        console.log("error ",error);
    }
 }

//  fetchApi();  //uncomment this line 
    //fetching with then();
 console.log("\n"); //line break
   

        fetch("https://randomuser.me/api/").then((response)=>{
            return response.json();
            
        }).then((data)=>{
            console.log(data);
        }).catch((eror)=>console.log(error));
   