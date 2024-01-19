# REACT
### why react ?
 React it is use to handle complex framework

### PROBLEM IT SOLVE
facebook fantom problem to solve
 state javascript 
 dom should talk efficiently

 ### Framework OR Library  

library is like cool dude less striction

framework has more rules and restriction

react is a javascript library
react ->|->react -dom
        |->react -native

###   npm and  npx
npm ->node pakage modular 
use to install libraries
npx-node pacage executer donot install directly execute
create react app->an utility(software)


### create-react-app
 npx create-react-app appName

bulcky
time comsuming 
a lot of unwanted package 

as we know that javascript need to be coonected with html 
therefore 
here it is done internaly using react script

### Package json 
pacakage .jscon has
name of project 
version
private or public

dependencies 
notice we have extra dependies like test dependencies 

web vitals 
measure performance 
browser support

script
strat -to start
build-to build production
test-to test apps
eject -to eject it 

### Using vite 

npm create vite@latest
after that choose the option and create the project

### Diffrence between both

1) As we know that html donot enject  javascript by itself it need script tag 
in creat part it is done by script which we can see in package .json
and in vite it is done by script tag 

2) jsx file in  vite should be explicitly mentioned while in create js also work 

3) vite is fast and less bulky as compare to create 

### Simalirity
when we create the componenets in React the function name  first letter should be  uppercase and it is best practice 
to name the file as same 


### Component 
```jsx 

function Name (){
return (<h1> Hello React</h1>)

}

return default Name ;
```

And in file we can import by writing
import name from filename 


Increase reusiblity,redibility, 


### Hooks Usestate 

The main benifit of react is that when we want to update a state ie basicaly which is variable it will update at every place at same time and that is achieved by usestate 

```React 

let [value,setvalue]=usestate(0);
fuction increment(){

        setvalue(value+1)
}

```
In the same dealing with Object 
```React 
let [obj,setobj]=usestate({id:0,fno:0})

function increment(){

        setobj({id:obj.id+1})
}



```
### Create Element 

As simmilar to javascript we can create our own element as well

```React 

let element=React.creatElement({

        'div'
        {style:{color:"red"}}

        <>
})




```

### Note 
```React 

function Hello(){

    return(<h3 style={{color :"orange"}}>Its video 4 a lot to go have paitent </h3>)
}

export default Hello;
```

why double bracket one is to treat as object other is the bracket of object 

### Create root

we know the concept of virtualdom in react, react  donot update the whole page all the time its just update the changes 
with create root react create its own dom tree know as virtual tree and then compare it with browser tree this process is called reconciliation 
the changes is made by react fiber algorithm the key feature of this alogirthm is it has pause ,priority to diffrent type of update ,
abort or reuse work





