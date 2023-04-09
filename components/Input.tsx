interface Props {
    onChange: (value: string) => void;
    value?: string;
    placeHolder: string;
    className?: string;
    type?: string;
}

export default function Form(props: Props) {
    return (
        <input
        type={props.type ? props.type : "text"}
        className={`bg-zinc-100 py-02 px-3 ${props.className}`}
        placeholder={props.placeHolder}
        onChange={(e) => props.onChange(e.target.value)}
        defaultValue={props.value}
        />
    );
}