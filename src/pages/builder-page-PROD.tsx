// Import necessary dependencies
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import React from "react";
import { useLocation } from "react-router-dom";

// Initialize Builder.io with the API key from environment variables
builder.init(import.meta.env.VITE_PUBLIC_BUILDER_KEY!);

/**
 * Main page component that renders Builder.io content
 * Handles both production (static JSON) and development/preview (live Builder.io) modes
 */
export default function BuilderPage() {
  // Get current route information
  const location = useLocation();
  // Check if we're in Builder.io's visual editor
  const isPreviewingInBuilder = useIsPreviewing();
  // State to store the page content
  const [content, setContent] = React.useState<any>(null);

  // Get current path, handling hash-based routing if needed
  const currentPath = location.hash?.replace(/^#/, "") || location.pathname;

  // Effect to load content when component mounts or path changes
  React.useEffect(() => {
    /**
     * Fetches content either from local JSON (production) or Builder.io (development/preview)
     */
    async function fetchContent() {
      // In production and not in Builder's preview mode, use local JSON
      if (import.meta.env.MODE === "production" && !isPreviewingInBuilder) {
        try {
          // Fetch static JSON file from public directory
          const response = await fetch("./builder-data/choice2.json");
          if (!response.ok) throw new Error("Failed to load content");
          const data = await response.json();
          setContent(data);
        } catch (error) {
          console.error("Error loading content:", error);
          // Optional: Add error handling or fallback content here
        }
      } else {
        // In development or Builder preview, fetch from Builder.io
        const content = await builder
          .get("page", { url: currentPath })
          .promise();
        setContent(content);
      }

      // Update document title if content has a title
      if (content?.data.title) {
        document.title = content.data.title;
      }
    }

    // Execute the fetch
    fetchContent();
  }, [currentPath, isPreviewingInBuilder]);

  // Show loading state while content is being fetched
  if (!content) return <div>Loading...</div>;

  // Render the Builder.io component with the loaded content
  return <BuilderComponent model="page" content={content} />;
}
