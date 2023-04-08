import Head from "next/head";
import Button from "../Button";

export default function RestrictedPage(){
    return (
        <div>
            <head>
                <title> Login Dulu</title>
            </head>
            <Image scr={"/assets/restricted.jpg"}
            alt="restricted"
            width={200}
            height={200}
        />

        <h1  className="text-4xl font-bold">Login Dulu Yah!</h1>
        <h2 className="text=lg">
            Untuk mengakses halaman ini, kamu wajib login terlebih dahulu
        </h2>
        <Button onClick={() => {}}text="Login" />
        </div>
    );
}