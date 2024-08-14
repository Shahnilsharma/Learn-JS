//using inline js for events handling is not a good practice because they are outdated and doesnt have much features so its prefered that we use eventListner function as js to get maximum features

// there are three parts of the event listner
//1. the action of any event we are listning i.e click,dblclick,drag,copy,altkey, ctrlkey, shiftkey, keyCode etc 

document.querySelector('#ladybug').addEventListener('click',()=>{
    alert('this is a lady bug')
})

//2. function along with its element 
document.querySelector('#butterfly').addEventListener('click',(e)=>{
    console.log(e)
    alert("butterfly");
    // in the console we get alot of values of this some of imp value are
    //type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
})
//3. event propogations 
//1.event public = its the default value which is false
//2. event capturing = its the value which is true

document.querySelector('#parentGrass').addEventListener('click',(e)=>{
console.log("ParentGrass ");

},false)
      // if you click on grashoper img it will give the child value first and then the parent
      //the propogation is from bottom to top (bubbling)
document.querySelector('#grasshoper').addEventListener('click',(e)=>{
   console.log("Grasshoper");
}
,false)  

//sometime you need to get a value from parent first so n that we will
// allow the propogation which will use a top to bottom propogation (capture)
document.querySelector('#parentBee').addEventListener('click',(e)=>{
console.log("Parent Bee");

},true)
      // if you click on grashoper img it will give the child value first and then the parent
      //the propogation is from bottom to top
document.querySelector('#bee').addEventListener('click',(e)=>{
   console.log("Bee");
}
,true)
// you can also stop the propogation by just using the stopPropogation() function 
//which wont make the the values public it will only the specific elemtent

document.querySelector('#parentCat').addEventListener('click',(e)=>{
    console.log("Parent Cat");
    e.stopPropagation()
    },true)
document.querySelector('#cat').addEventListener('click',(e)=>{
    console.log("Cat");
    e.stopPropagation()
    },true)
    //we we just get the value of child or the specific element we are targeting



//lets understand it by doing a simple task so we have 
// a div conatiner in html file and we want to add event listner
// which on click any img deletes that img but we want to select the whole conatiner
// which could be a problem if we click on parent conatiner all imges will get removed
// lets see how to do it

let removeIt=document.querySelector('.mainParent')
removeIt.addEventListener('click',(e)=>{
    // e.target.remove();//now if we click on the border all the imges get deleted 
    // to avoid this we will use the if condition
    if(e.target.tagName==="IMG"){
        e.target.remove();
    }
})//we get the tagname of that specif element and then remove it