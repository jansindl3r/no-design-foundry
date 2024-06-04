import React, { useContext, useEffect } from "react";
import { useFela } from "react-fela";
import data from "@/data";
import Markdown from "@/components/Markdown";

function Index({ markdown }) {
  //   const { title } = useContext(FilterContext);
  const { css } = useFela();

  return (
    <div>
        <Markdown markdown={markdown} />
    </div>
  );
}

export default Index;

export function getStaticPaths() {
  return {
    paths: data.filter((entry) => entry.type === "post").map((entry) => ({ params: { slug: entry.slug } })),
    fallback: false,
  };
}

export function getStaticProps(context) {
  const { slug } = context.params;
  const markdown = require(`@/posts/${slug}.md`);
  return {
    props: { markdown },
  };
}
