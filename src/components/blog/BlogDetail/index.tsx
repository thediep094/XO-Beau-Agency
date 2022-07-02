import { useRouter } from "next/router";
import React from "react";
import { Col, Container } from "react-bootstrap";
import ContentLayout, { IContentLayout } from "../ContentLayout";
import styles from "./blogdetail.module.css";
export interface IAuthor {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface ICard {
  width: number;
  height: number;
  mimeType: string;
  filesize: number;
  filename: string;
  url: string;
}
export interface IFeature {
  width: number;
  height: number;
  mimeType: string;
  filesize: number;
  filename: string;
  url: string;
}
export interface ISizes {
  card: ICard;
  feature: IFeature;
}
export interface IFeaturedImage {
  id: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  sizes: ISizes;
  alt: string;
  createdAt: Date;
  updatedAt: Date;
  url: string;
}
export interface Subtitle {
  children: {
    text: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
  }[];
  type: string;
}

export interface ITag {
  id: string;
  name: string;
}

export interface IBlogDetail {
  id: string;
  title: string;
  author: IAuthor;
  publishedDate: string;
  tags: ITag[];
  layout: IContentLayout[];
  createdAt: string;
  featuredImage: IFeaturedImage;
}

export const getTableContentId = (content: string) => {
  return content.toLowerCase().split(" ").join("-");
};

const BlogDetail: React.FC<IBlogDetail> = (props) => {
  const { author, layout, featuredImage, publishedDate, tags, title } = props;
  const listTags = tags.map((tag) => `#${tag.name}`);

  const router = useRouter();

  const headings = [];

  //Get heading table of content
  for (let item of layout) {
    if (item.title) {
      headings.push(item.title);
    }

    if (item.description) {
      for (let subHeading of item.description) {
        if (subHeading.type === "h2" || subHeading.type === "h3") {
          headings.push(subHeading.children[0].text);
        }
      }
    }

    if (item.content) {
      for (let subHeading of item.content) {
        if (subHeading.type === "h2" || subHeading.type === "h3") {
          console.log(subHeading);
          headings.push(subHeading.children[0].text);
        }
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        {featuredImage && (
          <img
            src={featuredImage.sizes.feature.url}
            className={styles.featuredImage}
          />
        )}
        <div className={styles.headerContent}>
          <div className={styles.author}>{author.name}</div>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
      <Container className={styles.contentWrapper}>
        <Col xl={2} sm={2} className={styles.sidebar}>
          <div className={styles.sidebarHeader}>TABLE OF CONTENT</div>
          {headings.map((heading, index) => (
            <h2
              onClick={() => router.push(`#${getTableContentId(heading)}`)}
              key={index}
              className={styles.sidebarContentHeading}
            >
              {heading}
            </h2>
          ))}
        </Col>
        <Col xl={6} sm={6} className={styles.content}>
          {layout.map((data, index) => (
            <ContentLayout {...data} key={index} />
          ))}
          <hr />
          <div className={styles.tags}>{listTags.join(", ")}</div>
        </Col>
      </Container>
    </div>
  );
};

export default BlogDetail;
