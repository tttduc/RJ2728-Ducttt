import { useState } from "react";

 const Ss03 = () => {
        const [numberState, setNumberState] = useState<number>(0)
        const Tang = () =>{
            if (numberState<10){
            setNumberState((prev)=> prev + 1)
        }
        console.log('Tang');
    }
        const Giam = () =>{
            
            if (numberState>0){
            setNumberState((prev)=> prev - 1)
        }
        console.log('Giam');
    }
        return (
        <>         
        <div className="d-flex m-auto w-50 border" style={{justifyContent: 'center'}}>
            <button onClick={Tang} disabled={numberState>=10 ? true : false}>Tang</button>
              <h1>{numberState}</h1>
            <button onClick={Giam} disabled={numberState<=0 ? true : false}>Giam</button>
            {
                numberState === 10 && <h1>Max</h1>
            }
         </div>  
        </>
    );
};

export default Ss03;