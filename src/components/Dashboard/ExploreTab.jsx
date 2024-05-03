// src/components/Dashboard/ExploreTab.jsx
import React from 'react';
import PerformanceHistoryGraph from '../DataViz/PerformanceHistoryGraph';
import CareerExplorer from '../Classification/CareerExplorer';

const ExploreTab = ({ studentData }) => {
  return (
    <div className="explore-tab">
      <div className="performance-history">
        <PerformanceHistoryGraph data={studentData} />
      </div>
      <div className="career-explorer">
        <CareerExplorer data={studentData} />
      </div>
    </div>
  );
};

export default ExploreTab;
