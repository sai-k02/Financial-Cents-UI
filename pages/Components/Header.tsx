import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import { Avatar, Button, PageHeader, Tooltip, Typography } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import FadeIn from 'react-fade-in/lib/FadeIn';
import { AiTwotoneMail } from 'react-icons/ai';
import { BsStackOverflow } from "react-icons/bs";

import SkeletonHeader from "./SkeletonHeader";


interface HeaderProps {
    Title: String,
    Subtitle?: String,
    Avatar?: any
}

const HeaderMain: NextPage<HeaderProps> = (props: HeaderProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const { Title, Text } = Typography;
    useEffect(() => {
        // activate loading state when component mounts
        setIsLoading(true);
        var max = 1;
        var min = 0;
        var rand = Math.floor(Math.random() * (max - min + 1) + min);
        const timer = setTimeout(() => {
            // disable loading after 5 seconds
            setIsLoading(false);
        }, rand * 1000);
        // Cancel the timer while unmounting
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <SkeletonHeader />
    }

    if (!isLoading) {
        return (
            <FadeIn>
                <PageHeader
                    className="HeaderMain"
                    title={<a onClick={() => location.assign("/")}>{props.Title}</a>}
                    subTitle={props.Subtitle}
                    avatar={{ src: "../public/TIAA.png", shape: "square", size: 'large' }}
                    extra={[
                        <Button className="button-primary" >
                            Sign In
                        </Button>,
                        <Button className="button-primary" >
                            Sign Out
                        </Button>,
                    ]}

                />
            </FadeIn>
        )
    }

    return null;

}


export default HeaderMain;