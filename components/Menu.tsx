import Image from "next/image"
import Button from "./Button";
import { useRouter } from "next/router";


export default function Menu() {
    const router = useRouter();

    return (
        <div className="flex justify-between px-10 py-3">
            {/* <Image
        src={"/assets/fotos.svg"}
        width={150}
        height={150}
        alt="Logo"
        /> */}
            {/* <img src="/assets/fotos.svg" alt="logo" width="300px"/> */}

            {/* <a className="text-2xl font-bold cursor-pinter"
        onClick={()=>router.push("/")}>
            Voting</a> */}
            <Button style="third" text="Voting" className="text-2xl font-bold" onclick={() => router.push("/")} />
            <div className="space-x-3">
                <Button style="secondary" text="Login" onclick={() => router.push("/login")} />
                <Button style="secondary" text="Register" onclick={() => router.push("/register")} />
            </div>
        </div>
    );
}