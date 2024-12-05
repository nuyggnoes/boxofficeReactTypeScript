import { useState } from "react"

const ONE_SEC = 1000;

export const useTimer = (seconds:number, onTimeout:() => void) => {
    const [isStart, setIsStart] = useState(false);
    const startTimer = () => {
        setIsStart(true);
        setTimeout(() => {
            onTimeout();
            setIsStart(false);
        }, seconds * ONE_SEC);
    }
    return { isStart, startTimer };
}