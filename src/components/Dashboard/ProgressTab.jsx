// src/components/Dashboard/ProgressTab.jsx
import React from 'react';
import ProgressTracker from '../DataViz/ProgressTracker';
import AssignmentTracker from '../DataViz/AssignmentTracker';

const ProgressTab = ({ studentData }) => {
  return (
    <div className="progress-tab">
      <div className="progress-tracker">
        <ProgressTracker data={studentData} />
      </div>
      <div className="assignment-tracker">
        <AssignmentTracker data={studentData} />
      </div>
    </div>
  );
};

export default ProgressTab;