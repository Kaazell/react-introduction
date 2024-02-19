import { useState } from "react"
import { DisplayAge } from "./DisplayAge"

export function AgeCounter() {
    const [age, setAge] = useState(30)

    function increaseAge() {
        setAge(age + 1)
    }
    return (
        <>
            <button onClick={increaseAge}>Increase Age</button>
            <DisplayAge age={age} />
        </>
    )
}