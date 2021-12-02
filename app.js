import React,{Component} from 'react';
const url = 'https://nareshrazu.herokuapp.com';

class resto extends Component{
    constructor(){
        super();
        console.log("Constructor Running");
        this.state={
            loc:'',
        }
    }
    componentDidMount(){
        fetch(url,{Method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {this.setState({location:data})})
    }
    
    render(){
        console.log("Render() running");
        console.log(this.state.loc);
        return(
            <React.Fragment>
                <h3>Restauretn Deata Apperes Here</h3>
                <select>
                    <option>Select an option</option>
                    <option>{this.renderCity(this.state.loc)}</option>
                </select>
            </React.Fragment>
        )
    }
    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <select>
                        <option>----SELECT CITY---------</option>
                        {this.renderCity(this.state.loc)}
                    </select>
                )
            })
        }

        else console.log("Not able to fetch data");
    }
    
}

export default resto;
