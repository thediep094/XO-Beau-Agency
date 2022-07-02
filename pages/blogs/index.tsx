import { GetStaticProps } from "next";
import { Col, Container, Row } from "react-bootstrap";
import BlogPreview, { IBlogPreview } from "src/components/blog/BlogPreview";

export interface IBlogsProps {
  blogs: IBlogPreview[];
}

const Blogs: React.FC<IBlogsProps> = (props) => {
  const { blogs } = props;

  return (
    <Container style={{ width: "100%" }}>
      <Row>
        {blogs.map((blog: IBlogPreview) => {
          return (
            <Col md={6} xxl={4} lg={4} key={blog.id}>
              <BlogPreview
                thumbnail={blog.thumbnail}
                id={blog.id}
                author={blog.author}
                title={blog.title}
                slug={blog.slug}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Blogs;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const blogsReq = await fetch(`${process.env.NEXT_PUBLIC_CMS}/api/posts`);
  const blogsData = await blogsReq.json();

  return {
    props: {
      blogs: blogsData.docs,
    },
    revalidate: 1,
  };
};
