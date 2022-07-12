import Home from "../app/components/screens/home/Home";
import Container from "../app/components/ui/container/Container";
import Wrapper from "../app/components/ui/wrapper/Wrapper";
import {API_URL, tts_engines} from "../app/constants";

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

  return {
    props: {
      tts_engines
    }
  }
}