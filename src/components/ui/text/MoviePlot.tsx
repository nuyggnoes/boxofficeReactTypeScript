import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const MoviePlot = ({ plot }: { plot: string }) => {
  const [expanded, setExpanded] = useState(false);
  const [isExpandable, setIsExpandable] = useState(false);
  const plotRef = useRef<HTMLDivElement>(null);

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (plotRef.current) {
      const lineHeight = 24; // Line height in px
      const maxTwoLinesHeight = lineHeight * 2;
      const contentHeight = plotRef.current.scrollHeight;

      setIsExpandable(contentHeight > maxTwoLinesHeight);
    }
  }, [plot]);

  return (
    <div
      style={{
        cursor: 'pointer',
        borderRadius: '10px',
        transition: 'background-color 0.2s ease',
        padding: '10px',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
    >
      <div
        ref={plotRef}
        style={{
          lineHeight: '1.5em',
          maxHeight: expanded ? `${plotRef.current?.scrollHeight}px` : '3em',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        {plot}
      </div>
      {isExpandable && (
        <div
          style={{
            border: '1px solid lightgray',
            borderRadius: '5px',
            marginTop: '5px',
            padding: '8px 0',
            display: 'flex',
            justifyContent: 'center',
          }}
          onClick={toggleExpanded}
        >
          {expanded ? (
            <div>
              <FaChevronUp style={{ marginRight: '4px' }} />
              접기
            </div>
          ) : (
            <div>
              <FaChevronDown style={{ marginRight: '4px' }} />
              더보기
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MoviePlot;
