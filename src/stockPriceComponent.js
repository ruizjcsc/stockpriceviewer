import React,{ Component } from "react";
import './stockPriceComponent.css';

class stockPriceComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            stockData : [],
        };
    }

    // make the getStockPrice function async so i can make the api call using fetch
    // i call it in the did mount function and call it at a certain interval so that 
    // data can be updated
    getStockPrice = async () => {
        //made the ticker sympol a prop so that it can be used with whatever stock
        //aslong as you know the ticker
        const {ticker} = this.props;
        const url = 'https://twelve-data1.p.rapidapi.com/price?symbol='+ticker+'&format=json&outputsize=30';
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9e9cc30171mshbf7d24e3d4700acp1c12c6jsnebb786541872',
            'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
        }
        };

        try {
            const response =  await fetch(url, options);
            const result =  await response.json();
            this.setState({stockData:result});
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
    

    componentDidMount(){
        //api http call goes here. im using fetch

        this.getStockPrice();

        this.pollingInerval = setInterval(this.getStockPrice, 60000);

    }

    
    componentWillUnmount() {
        // clear the polling interval when the component is unmounted
        clearInterval(this.pollingInterval);
      }
    

    render(){
        // initialied the data and the ticker here so that they can stay consistant throughout code
        // and can be called later
        // when initializing the stockData in render make sure the name stays consistant throughout
        const {stockData} = this.state
        const {ticker} = this.props

        return(
            <div className="stockPrice">
                <p>{ticker}</p>
                {stockData ? (<p>{stockData.price}</p>) : (<p>Loading...</p>)}
            </div>


        )
    }

}

export default stockPriceComponent;