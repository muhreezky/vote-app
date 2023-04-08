interface Props {
    text: string;
    type: "primary" | "secondary" | "third";
    className?: string;
    onclick?: () => void;
}

export default function Button(props: Props) {
    return (
    <button 
        onClick={props.onclick}
        className={`bg-black px-3 py-2 text-white hover:bg-zinc-800"
            ${
                props.type === "secondary" &&
                "bg-white border-2 border-black text-black hover:text-black"
            }
            ${
                props.type === "third" &&
                "bg-white border-black text-black hover:text-black"
            }
            ${props.className}
        `}
        >
        {props.text}
    </button>
);
}