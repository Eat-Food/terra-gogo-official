import React from 'react';

interface ClampedContentWithTooltipProps {
  content: string;
  className?: string;
  rows?: number;
}

export const ClampedContentWithTooltip: React.FC<ClampedContentWithTooltipProps> = ({
  content,
  className = '',
  rows = 2
}) => {

  return (
    <p
      className={`${className} line-clamp-${rows} overflow-hidden`}
      title={content}
    >
      {content}
    </p>
  );
};
