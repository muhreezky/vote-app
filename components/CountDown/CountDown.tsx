import Countdown, { CountdownRendererFn } from "react-countdown";
import CountDownRenderer from "./CountDownRenderer";
import Form from "../Form";

interface props {
    className?:string;
}

expor default function CountDown(props:Props){

    const CountDown : CountdownRendererFn=({
        days,
        hours,
        minutes,
        seconds, 
    })=>{
        return (
            <CountDownRenderer 
            days={days} 
            hours={hours} 
            minutes={minutes} 
            seconds={seconds}
            />
        );
    };
    return (
        <div className={`text-center ${props.className}`}> 
            <p>Voting akan dimulai pada:</p>
            <Countdown date={Date.now() + 100000000} renderer={CountDown}/>
    </div>;
    );
}