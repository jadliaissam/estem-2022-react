export default function NewsDetailsHook(props){
    return <div>
        <h1>Details News </h1>
        <div>
            <img src="https://via.placeholder.com/500"/>
            <p>
                title : {props.data.title} 
    
           </p>
           <p>
                Author : {props.data.author} 
       
           </p>
           <p>
                points : {props.data.points} 
                
           </p>
           <button onClick={props.goBack}>retour</button>
           </div>         
    </div>

}