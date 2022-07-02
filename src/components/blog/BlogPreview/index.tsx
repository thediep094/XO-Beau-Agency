import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";
import styles from "./blogpreview.module.css";
export interface IAuthor {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface IContent {
  type: string;
  children: {
    text: string;
  }[];
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

export interface IBlogPreview {
  id: string;
  title: string;
  author: IAuthor;
  slug: string;
  thumbnail: IFeaturedImage;
}

const BlogPreview: React.FC<IBlogPreview> = (props) => {
  const { author, thumbnail, id, slug, title } = props;
  console.log(props);

  return (
    <Link href={`/blogs/${slug}`}>
      <a>
        {thumbnail && (
          <img className={styles.previewImage} src={thumbnail.sizes.card.url} />
        )}
        <div className={styles.previewContent}>
          <div className={styles.previewTitle}>{title}</div>
          <div className={styles.previewAuthor}>{author.name}</div>
        </div>
      </a>
    </Link>
  );
};

export default BlogPreview;
