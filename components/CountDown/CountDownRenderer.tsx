import CountDownItem from "./CountDownItem";

interface Props{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function CountDownRenderer() {
    return (
    <div className="flex flex-row mx-auto justify-center">
        <CountDownItem Label="Hari" value={props.days} />
        <CountDownItem Label="Jam" value={props.hours} />
        <CountDownItem Label="Menit" value={props.minutes} />
        <CountDownItem Label="Detik" value={props.seconds} />
    </div>
    );
}