import { render } from "@testing-library/react";
import React from "react";
import style from "./Blockui1.module.css";
interface IProps {
    title: string,
    bgTitle: string ,
    percent: number,
    bgProcess: string
}

/* const Blockui1: React.FC<IProps> = (props) => {
    render (
        <div className='big__box'>
            <div className="div_parren d-flex m-auto w-50 border">
                <div style={{width: 100, backgroundColor: this.props.bgTitle}}>{this.props.title}</div>
                <div style={{width: 500}}>
                    <div style={{width: `${this.props.percent}%`, backgroundColor: this.props.bgProcess}}>{this.props.percent}%</div>
                </div>
            </div>
        </div>
    );
};

export default Blockui1; */