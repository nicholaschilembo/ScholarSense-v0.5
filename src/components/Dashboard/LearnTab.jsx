// src/components/Dashboard/LearnTab.jsx
import React from 'react';
import ResourceRecommender from '../ResourceManagement/ResourceRecommender';
import InteractiveResource from '../ResourceManagement/InteractiveResource';

const LearnTab = ({ studentData }) => {
  return (
    <div className="learn-tab">
      <div className="resource-recommender">
        <ResourceRecommender data={studentData} />
      </div>
      <div className="interactive-resource">
        <InteractiveResource data={studentData} />
      </div>
    </div>
  );
};

export default LearnTab;
