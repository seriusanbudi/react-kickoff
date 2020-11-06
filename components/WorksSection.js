import { execOnce } from 'next/dist/next-server/lib/utils'
import styled from 'styled-components'
import { H2, Paragraph } from './ui/Typography'

import works from '../dummy/works'

const WorksSectionWrapper = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 100px;
  margin: 100px 0px;
`

const WorkCard = styled('div')`
  width: 100%;
  text-align: center;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const WorksSection = () => {
  return (
    <WorksSectionWrapper>
      {works.map(work => <WorkCard key={work.key}>
        <img src={work.img} alt={work.key} style={{ width: "100%" }} />
        <div>
          <H2>{work.title}</H2>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec ornare est, non pharetra tortor. Nam placerat quis ipsum vestibulum semper. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </Paragraph>
        </div>
      </WorkCard>)}
    </WorksSectionWrapper>
  )
}

export default WorksSection