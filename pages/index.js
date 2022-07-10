import Head from 'next/head'
import Image from 'next/image'
import Meta from "../app/utils/Meta";
import Home from "../app/components/screens/home/Home";
import Container from "../app/components/ui/container/Container";
import Wrapper from "../app/components/ui/wrapper/Wrapper";
import {API_URL} from "../app/constants";
import axios from "axios";

export default function HomePage(props) {
  return (
    <Container >
      <Wrapper >
        <Home {...props} />
      </Wrapper>
    </Container>
  )
}

export const getStaticProps = async () => {
  const { data: tts_engines } = await axios.get(`${API_URL}/tts-engines`)

  return {
    props: {
      tts_engines
    }
  }
}