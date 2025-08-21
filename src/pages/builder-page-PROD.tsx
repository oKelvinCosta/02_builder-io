// Import necessary dependencies
// @ts-ignore
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../lib/builder-registry';
import Nav from '@/components/nav';
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
  const [content, setContent] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);

  // Get current path, handling hash-based routing if needed
  const currentPath = location.hash?.replace(/^#/, '') || location.pathname;

  // Effect to load content when component mounts or path changes
  useEffect(() => {
    /**
     * Fetches content either from local JSON (production) or Builder.io (development/preview)
     */
    async function fetchContent() {
      // In production and not in Builder's preview mode, use local JSON
      if (import.meta.env.MODE === 'production' && !isPreviewingInBuilder) {
        // Fetch static JSON file from public directory
        // Make this page be the index.html when builded
        const response = await fetch('./builder-data/exportedPage.json');
        if (!response.ok) throw new Error('Failed to load content');
        const data = await response.json();
        console.log('Copy JSON here:', data);
        setContent(data);
        setNotFound(!data);
      } else {
        // In development or Builder preview, fetch from Builder.io
        const content = await builder.get('page', { url: currentPath }).promise();
        console.log('Copy JSON here:', content);
        setContent(content);
        setNotFound(!content);
      }

      // Update document title if content has a title
      if (content?.data.title) {
        document.title = content.data.title;
      }
    }

    // Execute the fetch
    fetchContent();
  }, [currentPath, isPreviewingInBuilder]);

  if (content === null) return null;

  if (notFound && !isPreviewingInBuilder) {
    return <div>404 Page Not Found</div>;
  }

  // Render the Builder.io component with the loaded content
  return (
    <>
      <Nav />
      <BuilderComponent model="page" content={content} />
    </>
  );
}
