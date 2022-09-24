import { Skeleton } from "antd";
import type { NextPage } from "next";

const Login: NextPage = () => {
    return (
        <>
            <Skeleton.Button style={{ width: "100vw", height: "70px" }} active />
        </>
    )

}

export default Login; 