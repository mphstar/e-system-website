
import { redirect } from "next/navigation";
import InOutPage from "./InOutPage";
import PermissionPage from "./PermissionPage";

const page = (param) => {

    const { params, searchParams } = param

    if(params.divisi[0] === 'inout') return <InOutPage param={param} />

    if(params.divisi[0] === 'permission') return <PermissionPage param={param} />

    redirect('/admin/absensi')

}

export default page