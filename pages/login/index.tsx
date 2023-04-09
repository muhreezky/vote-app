import Head from "next/head";
import Link from "next/link";
import Button from "../../components/Button";
import { FaUserPlus, FaSignInAlt } from "react-icons/fa";
import Menu from "../../components/Menu";

export default function Login(){
    return (
        <>
            <Menu />
            <div className="flex items-center justify-center">
                <Head>
                    <title>Login</title>
                </Head>
                <div className="w-1/3">
                    <div className="text-4xl mb-3">
                        <strong>Login dahulu untuk Mulai Vote</strong>
                    </div>
                    <button className="inline-flex justify-between px-7 items-center gap-3 bg-white py-2 w-full border-2 border-black font-medium hover:bg-black mb-3 hover:text-white">
                        Login <FaSignInAlt />
                    </button>
                    <button className="inline-flex justify-between px-7 items-center gap-3 bg-white py-2 w-full border-2 border-black font-medium hover:bg-black hover:text-white">
                        Buat Akun Baru <FaUserPlus />
                    </button>
                </div>
            </div>
        </>
    )
}