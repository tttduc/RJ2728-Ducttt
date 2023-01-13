import React, { Component } from "react";


type Props = {}

type State = {
    count: number;
}

 class Ss03 extends Component<Props, State> {
    state = {
        count: 0
    }
        Tang = () =>{
            this.setState((state) => ({
            count: state.count + 1,
            }));
        };

        Giam= () =>{
        this.setState((state) => ({
        count: state.count - 1,
        }));
    };

        render(){
        return (        
        <div className="d-flex m-auto w-50 justifyContent-content-center">
            <button onClick={this.Tang} disabled={this.state.count >=10 ? true : false}>Tang</button>
              <h1>{this.state.count }</h1>
            <button onClick={this.Giam} disabled={this.state.count <=0 ? true : false}>Giam</button>
            {
                this.state.count === 10 && <h1>Max</h1>
            }
         </div>  
   
    )
}
}

export default Ss03;