import Head from "next/head";
import Link from "next/head";
import Button from "../../components/Button";


export default function Login(){
    const googleIcon
    return (
        <div className="flex flex-col items-center justify-center container h-screen m-auto">
            <Head>
            <title>Login</title>
            </Head>

            <Link href={"/"}> Jujurly
            </Link>
            <div className="w-1/3">
                <button className="inline-flex justify-center item-center bg-white py-2 w-full border-2 border-black font-medium hover:bg-black hover:text-white">
                Login Dengan Google
                </button>
            </div>
        </div>
    )
}