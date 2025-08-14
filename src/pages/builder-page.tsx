// builder-page.tsx
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/nav";
import "../lib/builder-registry";

builder.init(import.meta.env.VITE_PUBLIC_BUILDER_KEY!);

export default function BuilderPage() {
  const location = useLocation(); // <- pega a rota atual
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = React.useState(false);
  const [content, setContent] = React.useState(null);

  // converte URL hash ou pathname
  const currentPath = location.hash?.replace(/^#/, "") || location.pathname;

  React.useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get("page", {
          url: currentPath,
        })
        .promise();

      // const content = await builder
      //   .get("page", {
      //     url: "/choice",
      //   })
      //   .promise();

      console.log("content", content);
      setContent(content);
      setNotFound(!content);

      if (content?.data.title) {
        document.title = content.data.title;
      }
    }
    fetchContent();
  }, [currentPath]);

  if (content === null) return null;

  if (notFound && !isPreviewingInBuilder) {
    return <div>404 Page Not Found</div>;
  }

  return (
    <>
      <Nav />
      <BuilderComponent model="page" content={content} />
    </>
  );
}
