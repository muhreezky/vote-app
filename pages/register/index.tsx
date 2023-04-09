import Head from "next/head";
import Button from "../../components/Button";
import Menu from "../../components/Menu";
import { useFormik } from "formik";

export default function Register() {
  return (
    <>
      <Menu />
      <form>
        <input type="text" className="p-4 bg-gray-500" />
      </form>
    </>
  )
}