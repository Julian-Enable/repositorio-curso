import React from "react"

function Home() {
    const ListItems = [1,2,3,4,5,6,7,8,9,10]

    const addItem = () => {
        const variableA = 1;
        const variableB = 2;
        const variableC = 3;

        return variableA*3 + variableB*3 + variableC
    }
    return (
        <><div>Home</div>
        <button onClick={addItem}/></>
    )
    
}

export default Home