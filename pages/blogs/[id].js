import styled from 'styled-components'
import { useRouter } from 'next/router'
import Row from '../../components/ui/Row'
import Link from 'next/link'
import { Paragraph } from '../../components/ui/Typography'

const Title = styled('h1')`
  font-size: 72px;
  font-weight: bold;
  margin: 0px;
  padding: 0px;
`

const Label = styled('div')`
  margin-bottom: 24px;
`

const BackToHomeLink = styled('a')`
  font-size: 12px;
  margin-bottom: 42px;
  cursor: pointer;
`

export default function Blog() {
  const router = useRouter()
  const blogID = router.query.id

  return (
    <Row style={{ paddingTop: "140px" }}>
      <section>
        <Link href="/">
          <BackToHomeLink>
            &#xab; Back to home
          </BackToHomeLink>
        </Link>

        <Title>Awesome Blog Title #{blogID}</Title>
        <Label>2 Hours ago - by Jhon Smith</Label>

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante felis, sollicitudin non semper sed, scelerisque nec sapien. Donec a commodo diam. Maecenas faucibus consequat sapien in imperdiet. Sed ultricies fringilla hendrerit. Fusce quam neque, porta sit amet scelerisque quis, fringilla a massa. Sed congue finibus odio sit amet suscipit. Maecenas sed maximus mi. Proin nisi nunc, egestas id semper ut, porttitor vitae felis. In eget vulputate nisl. Pellentesque a congue nibh. Suspendisse vel sapien ut mauris accumsan tempor ac a ante.
        </Paragraph>
        <Paragraph>
          Nam suscipit mauris at ornare congue. Nunc eleifend pretium tempor. In molestie magna erat, ut facilisis urna fringilla in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut egestas magna quis semper pulvinar. Integer ipsum lacus, maximus ut lorem eu, sodales consequat tortor. Etiam et rutrum justo, sed congue tellus.
        </Paragraph>
        <Paragraph>
          Phasellus rhoncus faucibus mauris non convallis. Fusce hendrerit ligula at porttitor semper. Suspendisse in ipsum malesuada, aliquet ante a, rhoncus dui. Integer sit amet sapien in nisl placerat vehicula a id lacus. Vivamus elementum a justo a viverra. Fusce eget ultrices est, eu posuere mauris. Donec ultrices luctus eleifend. Etiam tempor tincidunt tempor. Donec a scelerisque enim. Pellentesque dignissim mi luctus urna laoreet, sed vulputate risus elementum.
        </Paragraph>
        <Paragraph>
          Suspendisse potenti. Cras sollicitudin lorem elit, non ornare libero bibendum ut. Praesent ligula enim, tempus maximus ligula vel, tempor ultrices arcu. Vestibulum cursus iaculis arcu. Nulla et sapien erat. Vivamus dapibus auctor tortor, quis molestie dui tristique in. Ut et odio a ipsum molestie vulputate eu et magna. Donec quis erat pretium, consectetur nisl et, tristique libero. Maecenas cursus nunc at varius varius. Aliquam sed odio a orci porttitor interdum vel viverra tortor. Cras dignissim hendrerit risus et pellentesque. Sed sapien sem, gravida quis pretium vitae, sodales vel mauris. Mauris ut elit elementum ex vestibulum dictum. Ut gravida ipsum magna, eu malesuada risus tincidunt et. Cras at aliquet tortor, nec eleifend eros.
        </Paragraph>
        <Paragraph>
          Vivamus a imperdiet elit. Etiam dui dui, convallis sit amet scelerisque vel, dictum vitae orci. Mauris sollicitudin libero id nunc dignissim, vel rutrum lorem luctus. Sed quis imperdiet sem. Nulla aliquam in felis vitae ornare. Aenean massa elit, elementum vitae porta ut, tempor a ligula. Pellentesque dapibus libero pretium, lobortis mauris non, mollis nunc. Morbi a viverra diam, nec maximus nisl. Fusce vitae orci leo. Etiam ultricies eget diam at eleifend. Sed viverra luctus augue nec eleifend. Praesent tincidunt fringilla massa, in vulputate ligula.
        </Paragraph>
      </section>
    </Row>
  )
}