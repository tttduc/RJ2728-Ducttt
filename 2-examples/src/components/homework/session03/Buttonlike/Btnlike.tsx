import React, { Component } from "react";
import { AiFillLike, AiFillDislike} from 'react-icons/ai';

type Props = {}

type State = {
    isLike: boolean;
};

class Btnlike extends Component<Props, State> {
    state = {
        isLike: false,
    };

    handleLike = () => {
        console.log("handleLike");
        this.setState((state) => ({
            isLike: !state.isLike,
        }));
    }
    render() {
        return (
            <div onClick={() => this.handleLike()}> {this.state.isLike ? <AiFillLike/> : <AiFillDislike/>}</div>
        )
    }
}

export default Btnlike;