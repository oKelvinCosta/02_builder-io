// import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
// import React from "react";
// import { useLocation } from "react-router-dom";

// // Importa o JSON local diretamente
// import choiceJson from "../builder-data/choice2.json";

// builder.init(import.meta.env.VITE_PUBLIC_BUILDER_KEY!);

// export default function BuilderPageImport() {
//   const location = useLocation();
//   const isPreviewingInBuilder = useIsPreviewing();
//   const [content, setContent] = React.useState<any>(null);

//   const currentPath = location.hash?.replace(/^#/, "") || location.pathname;

//   React.useEffect(() => {
//     async function fetchContent() {
//       if (import.meta.env.MODE === "production" && !isPreviewingInBuilder) {
//         // ✅ Usa JSON local sem fetch
//         console.log("choiceJson", choiceJson);
//         setContent(choiceJson);
//       } else {
//         // 🔁 Usa Builder.io no dev ou preview
//         const content = await builder
//           .get("page", { url: currentPath })
//           .promise();
//         setContent(content);
//       }
//     }

//     fetchContent();
//   }, [currentPath, isPreviewingInBuilder]);

//   if (!content) return <div>Carregando...</div>;

//   return <BuilderComponent model="page" content={content} />;
// }
