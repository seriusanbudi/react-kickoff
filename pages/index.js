import styled from 'styled-components'
import Button from '../components/ui/Button'
import { H1, Paragraph } from '../components/ui/Typography'
import Row from '../components/ui/Row'
import WorksSection from '../components/WorksSection'
import BlogsSection from '../components/BlogsSection'
import TextField from '../components/ui/TextField'

const HeroWrapper = styled('div')`
  height: 70vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
`

const RowHero = styled(Row)`
  color: #FFF;
  background: #63AAFF;
`

const RowWorks = styled(Row)`
  background: url("/wave.svg");
  background-repeat: no-repeat;
  backgrount-position: top;
  display: flex;
  align-items: center;
  padding-top: 300px;
`

const SubscribeSectionWrapper = styled('div')`
  height: 300px;
  display: grid;
  grid-template-columns: 1fr 1.7fr;
  align-items: center;
  gap: 40px;
`

export default function Home() {
  return (<>
    <RowHero>
      <section>
        <HeroWrapper>
          <div>
            <H1>
              Hoommaannn!
            </H1>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper orci quam, and yes this is just placeholder!
            </Paragraph>
            <Button>Tell me more</Button>
          </div>
          <div>
            <img src='/content_creation.png' style={{ width: "100%" }} alt='hero-image' />
          </div>
        </HeroWrapper>
      </section>
    </RowHero>

    <RowWorks>
      <section>
        <H1>What we do</H1>

        <WorksSection />
      </section>
    </RowWorks>
    
    <Row>
      <section>
        <H1>Some article from us</H1>

        <BlogsSection />
      </section>
    </Row>

    <Row style={{ background: "#63AAFF", color: "#FFF" }}>
      <section>
        <SubscribeSectionWrapper>
          <div>
            <H1>Get update</H1>
            <Paragraph>Put your email and we will send you the latest update about our technology</Paragraph>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 0.2fr", gap: "10px" }}>
            <TextField placeholder='smith@earth.com' />
            <Button>Submit!</Button>
          </div>
        </SubscribeSectionWrapper>
      </section>
    </Row>

    <Row style={{ background: "#275a96" }}>
      <section>
        <div style={{ textAlign: "center", color: "#FFF", fontSize: "11px" }}>
          &copy; Hoommaannn 2020
        </div>
      </section>
    </Row>
  </>
  )
}
