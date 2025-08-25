import React, { useMemo } from "react";
import { useParams } from "react-router-dom";

// Best practice: Store the base URL in an environment variable (.env file)
// Example for Create React App: REACT_APP_PDF_BASE_URL=http://127.0.0.1:8000/storage/exam_schedule/
const PDF_BASE_URL =
  process.env.REACT_APP_PDF_BASE_URL ||
  "http://127.0.0.1:8000/storage/exam_schedule/";

// Style objects to keep JSX cleaner
const styles = {
  container: {
    width: "100%",
    height: "100vh",
  },
  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
  },
};

function PdfViewer() {
  const { encodedUrl } = useParams();

  // useMemo prevents recalculating the URL on every render
  const pdfUrl = useMemo(() => {
    if (!encodedUrl) {
      return null;
    }
    try {
      // 1. Decode the parameter to correctly handle special characters
      const decodedFileName = decodeURIComponent(encodedUrl);

      // 2. Construct the full URL using the base URL constant
      return `${PDF_BASE_URL}${decodedFileName}`;
    } catch (error) {
      console.error("Failed to decode URL parameter:", encodedUrl, error);
      return null; // Handle potential decoding errors
    }
  }, [encodedUrl]);

  if (!pdfUrl) {
    // Provide feedback to the user instead of just returning null
    return <div>Error: The specified PDF could not be found.</div>;
  }

  return (
    <div style={styles.container}>
      <iframe src={pdfUrl} style={styles.iframe} title="PDF Viewer" />
    </div>
  );
}

export default PdfViewer;
