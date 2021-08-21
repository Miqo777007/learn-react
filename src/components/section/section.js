import './section.css'
function Section(props){
 return(
     < div className = 'section'>
         <h1 className = 'first'>{props.title}</h1>
           <p className = 'text'>{props.content}</p> 
               <div className = 'head'>         
                   <img src = {props.src}alt = 'react'></img>
               <div clasName = 'main'>
                 <p className = 'txt'>Integrating Redux with a UI#
                 Redux is a standalone JS library. As we've already seen, you can create and use a Redux store even if you don't have a user interface set up. This also means that you can use Redux with any UI framework (or even without any UI framework), and use it on both client and server. You can write Redux apps with React, Vue, Angular, Ember, jQuery, or vanilla JavaScript.
                 That said, Redux was specifically designed to work well with React. React lets you describe your UI as a function of your state, and Redux contains state and updates it in response to actions.
                 Because of that, we'll use React for this tutorial as we build our todo app, and cover the basics of how to use React with Redux.
                 Before we get to that part, let's take a quick look at how Redux interacts with a UI layer in general.</p>
                </div>
            </div>
        </div>      
 )  
}
export default Section