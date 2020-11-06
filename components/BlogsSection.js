import styled from 'styled-components'
import Link from 'next/link'
import blogs from '../dummy/blogs'
import { H2, Paragraph } from './ui/Typography'

const BlogSectionWrapper = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin: 64px 0px;
`

const Card = styled('div')`
  cursor: pointer;
  border-radius: 6px;
  padding: 14px;
  box-shadow: 0 10px 12px 3px rgba(26,51,130,.1);
  transition: 0.2s;

  &: hover {
    box-shadow: 0 0px 12px 0px rgba(26,51,130,.1);
  }
`

const Tags = styled('div')`
  background: #63AAFF;
  color: #FFF;
  font-size: 9px;
  display: inline-block;
  margin-right: 4px;
  padding: 4px 14px;
  border-radius: 6px;
`

const Anchor = styled('a')`
  text-decoration: none;
  font-size: 12px;
  font-weight: bold;
`

const BlogsSection = () => {
  return (<BlogSectionWrapper>
    {blogs.map(blog => {
      return (
        <Card key={blog.key}>
          <H2>{blog.title}</H2>
          <div style={{ marginBottom: 16 }}>
            {blog.tags.map(tag => <Tags key={tag}>{tag}</Tags>)}
          </div>
          <Paragraph>
            {blog.content}
          </Paragraph>

          <div style={{ textAlign: "right" }}>
            <Link href="/blogs/[id]" as={`/blogs/${blog.key}`}>
              <Anchor>
                Continue Reading
              </Anchor>
            </Link>
          </div>
        </Card>
      )
    })}
  </BlogSectionWrapper>)
}

export default BlogsSection