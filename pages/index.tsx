import { Space } from 'antd'
import Layout, { Header } from 'antd/lib/layout/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HeaderMain from './Components/Header'
import logo from '../public/TIAA.svg'
const Home: NextPage = () => {
  return (
    <div className={"app"}>
      <HeaderMain
        Title={"financial cents"}
      />
    </div>

  )
}

export default Home
