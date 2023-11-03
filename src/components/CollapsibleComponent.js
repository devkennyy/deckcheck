import React, { useState } from 'react';

const CollapsibleComponent = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="collapsible-component">
      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? `Expand ${title}` : `Minimize ${title}`}
      </button>
      {!isCollapsed && children}
    </div>
  );
};

export default CollapsibleComponent;
