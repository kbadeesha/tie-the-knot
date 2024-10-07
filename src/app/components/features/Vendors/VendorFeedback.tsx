// app/components/features/Vendors/VendorFeedback.tsx

import * as React from "react";
import { useState } from "react";
import { Box, Typography, IconButton, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Feedback } from "@/app/types/vendor";

interface VendorFeedbackProps {
  feedback: Feedback;
}

// Styled component for the feedback container
const FeedbackContainer = styled(Box)({
  backgroundColor: "rgb(243,243,243)", // Light yellow background color
  padding: "8px 12px",
  borderRadius: "4px",
  marginTop: "8px",
});

// Styled component for the "Read more" button
const ReadMoreButton = styled(IconButton)({
  color: "#000", // Blue color for the button
  padding: 0, // Remove default padding
  marginLeft: "4px",
});

const VendorFeedback: React.FC<VendorFeedbackProps> = ({ feedback }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <FeedbackContainer>
      <Typography variant="caption" sx={{ fontWeight: "bold", color: "#333" }}>
        &ldquo;{expanded ? feedback.comment : `${feedback.comment.slice(0, 200)}...`}
        &rdquo;
        {feedback.comment.length > 200 && (
         <ReadMoreButton size="small" onClick={(event) => { 
            event.stopPropagation(); // Prevent navigation
            toggleExpand(); // Expand/collapse the comment
          }}> 
        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ReadMoreButton>
        )}
      </Typography>
      <Typography
        variant="caption"
        sx={{ color: "#888", display: "block", marginTop: "4px" }}
      >
         {feedback.clientName}, {feedback.daysAgo} days ago
      </Typography>
    </FeedbackContainer>
  );
};

export default VendorFeedback;