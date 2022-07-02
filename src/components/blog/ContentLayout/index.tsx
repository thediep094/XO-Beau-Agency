import React from "react";
import { getTableContentId, IFeaturedImage } from "../BlogDetail";
import styles from "./content.module.css";

export interface IContentLayout {
  title: string;
  subtitle: string;
  description: any[];
  featuredImage: IFeaturedImage;
  id: string;
  blockName: string;
  blockType: string;
  content: IContent[];
  price?: string;
  review?: string;
}

export interface IContent {
  type?: string;
  children: {
    text: string;
    bold?: boolean;
    underline?: boolean;
    italic?: boolean;
  }[];
  value?: IFeaturedImage;
}

const ContentBlock: React.FC<IContent> = (props) => {
  const { type, children, value } = props;
  const { text, bold, underline, italic } = children[0];

  if (type === "upload") {
    return <img src={value!.sizes.card.url} className={styles.contentImage} />;
  }

  if (text === "") {
    return <br />;
  }

  if (type) {
    return (
      <div
        id={type === "h2" || type === "h3" ? getTableContentId(text) : ""}
        className={[
          bold ? styles.textBold : "",
          underline && styles.textUnderline,
          italic && styles.textItalic,
        ]
          .filter(Boolean)
          .join(" ")}
        dangerouslySetInnerHTML={{
          __html: `<${type}>${text}</${type}>`,
        }}
      />
    );
  }

  return (
    <div
      className={[
        bold && styles.textBold,
        underline && styles.textUnderline,
        italic && styles.textItalic,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {text}
    </div>
  );
};

const ContentLayout: React.FC<IContentLayout> = (props) => {
  if (props.blockType === "list-item") {
    return (
      <div className={styles.wrapper}>
        <h2 id={getTableContentId(props.title)}>{props.title}</h2>
        <div className={styles.subtitle}>{props.subtitle}</div>
        {props.description.map((item, index) => (
          <ContentBlock {...item} key={index} />
        ))}
        {props.featuredImage && (
          <img
            src={props.featuredImage.sizes.card.url}
            className={styles.featuredImage}
          />
        )}
        {props.price && <h3>{props.price}</h3>}
        {props.review && <h3>{props.review}</h3>}
      </div>
    );
  }

  if (props.blockType === "content") {
    return (
      <div className={styles.wrapper}>
        {props.content.map((item, index) => (
          <ContentBlock key={index} {...item} />
        ))}
      </div>
    );
  }
};

export default ContentLayout;
