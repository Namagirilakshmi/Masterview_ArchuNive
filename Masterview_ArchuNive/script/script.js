ReactDOM.render(<div><h1>DINOSUARS WORLD</h1></div>,document.getElementById('projectTitle'));
//creating react component
class App extends React.Component {
         constructor() {
        super();
        //json data
        this.dinovalues= {
			"bruhathkayosaurus":{
				"appeared":-70000000,
				"height":25,
				"length":44,
				"order":"saurischia",
				"vanished":-70000000,
				"weight":135000 
			},
			"lambeosaurus":{
				"appeared":-76000000,
				"height":2.1,
				"length":12.5,
				"order":"ornithischia",
				"vanished":-75000000,
				"weight":5000
			},
			"linhenykus":{
				"appeared":-85000000,
				"height":0.6,
				"length":1,
				"order":"theropoda",
				"vanished":-75000000,
				"weight":3
			},
			"pterodactyl":{
				"appeared":-150000000,
				"height":0.6,
				"length":0.8,
				"order":"pterosauria",
				"vanished":-148500000,
				"weight":2
			},
			"stegosaurus":{
				"appeared":-155000000,
				"height":4,
				"length":9,
				"order":"ornithischia",
				"vanished":-150000000,
				"weight":2500
			},
			"triceratops":{
				"appeared":-68000000,
				"height":3,
				"length":8,
				"order":"ornithischia",
				"vanished":-66000000,
				"weight":11000
			}
		}
	}
//function to retrive data from json
	boundItemClick(ind, keystoaccess, valuestoaccess){
			var key = keystoaccess.indexOf(ind),
			    values = valuestoaccess[key],
			    dinosaursList = document.getElementById('list'),
			    dinosaursDescription = document.getElementById('description'),
			    backToList = document.getElementById('returnToList'),
			    mq = window.matchMedia('(max-width: 480px)');//media query to find mobile view
					if(mq.matches) 
					{
					    	dinosaursList.style.display = "none";
					    	dinosaursDescription.style.display = "block";
		    	           //button creation
								 var back = document.createElement("BUTTON");
							     back.setAttribute('id','backButton');
							     backToList.appendChild(back);
							     backToList.style.display = "block";
							      	  back.onclick = function()
							      	  {
									      	 dinosaursList.style.display = "block";
									      	 dinosaursDescription.style.display = "none";
									      	 backToList.innerHTML="";
							      	  }
					} 
					else {
				 	    	dinosaursList.style.display = "block";
				   	    	dinosaursDescription.style.display = "block";
					}
//executed whenever the media query's evaluated result changes
		 		mq.addListener(function(changed) {
				    if(changed.matches) {
					      dinosaursList.style.display = "block";
					      dinosaursDescription.style.display = "none";
				    } 
				    else {
					      dinosaursList.style.display = "block";
						  dinosaursDescription.style.display = "block";
		    			  backToList.style.display = "none";
					      backToList.innerHTML="";
				    }
				}); 
			
			descFunc(values);
	}
//
	render() {
	    var keystoaccess=[],
	        valuestoaccess=[];
	    	keystoaccess=Object.keys(this.dinovalues);//returns an array of a given object's key
	    	valuestoaccess=Object.values(this.dinovalues);//returns an array of agiven object's value
	    	var properties = keystoaccess.map((k, idx) => {
	    	//creates li which displays the name of the dinosaurs(i.e, key of the provided json)
	        return (
	            	<li onClick={this.boundItemClick.bind(this, k, keystoaccess, valuestoaccess)}>{k}<img src="images/arrow.png" /></li>
	        );
	    }); 
			return(
				<ul>{properties}</ul>
			);
	}
} 

ReactDOM.render(<App/>, document.getElementById('list')); 


function descFunc(val){
	var subValues = Object.values(val),
	 	subKeys = Object.keys(val),

	 	dinosaursDetail = subKeys.map((key, idx) => {
	        return (
	            <li>{key}:{subValues[idx]}</li>);
        }), 
		contentUl=(
			<ul>{dinosaursDetail}</ul>
		);
	ReactDOM.render(contentUl, document.getElementById('description')); 
}