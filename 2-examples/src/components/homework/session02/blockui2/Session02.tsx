import BL1 from "../Blockui1/Blockui1"

const Session02: React.FC= () => {
    return (
        <>
    <BL1 title={"Banwidth"} bgTitle = 'red' percent={20} bgProcess='green' /> 
    <BL1 title={"Storage"} bgTitle = 'lightblue' percent={50} bgProcess='green' />
    <BL1 title={"Users"} bgTitle = 'lightgreen' percent={70} bgProcess='green' />
    <BL1 title={"Visitors"} bgTitle = 'yellow' percent={30} bgProcess='green' />
    <BL1 title={"Emails"} bgTitle = 'purple' percent={45} bgProcess='green' />
    <BL1 title={"Basic"} bgTitle = 'pink' percent={80} bgProcess='green' /> 
    <BL1 title={"Others"} bgTitle = 'blue' percent={37} bgProcess='green' /> 
    </>
    );
};

export default Session02;