// src/components/Dashboard/StudentDashboard.jsx
import React, { useState } from 'react';
import ExploreTab from './ExploreTab';
import LearnTab from './LearnTab';
import ProgressTab from './ProgressTab';
import { getStudentData } from '../../utils/dataUtils';

const StudentDashboard = () => {
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [studentData, setStudentData] = useState(null);

  const handleGradeChange = (grade) => {
    setSelectedGrade(grade);
    fetchStudentData(grade);
  };

  const handleStudentChange = (student) => {
    setSelectedStudent(student);
    filterStudentData(student);
  };

  const fetchStudentData = async (grade) => {
    const data = await getStudentData(grade);
    setStudentData(data);
  };

  const filterStudentData = (student) => {
    const filteredData = studentData.filter((data) => data.name === student);
    setStudentData(filteredData);
  };

  return (
    <div className="student-dashboard">
      <div className="student-selector">
        {/* Render grade and student selectors */}
        <GradeSelector onGradeChange={handleGradeChange} />
        <StudentSelector
          grade={selectedGrade}
          onStudentChange={handleStudentChange}
        />
      </div>
      <div className="tab-container">
        <div className="tab-buttons">
          <button className="tab-button">Explore</button>
          <button className="tab-button">Learn</button>
          <button className="tab-button">Progress</button>
        </div>
        <div className="tab-content">
          <ExploreTab studentData={studentData} />
          <LearnTab studentData={studentData} />
          <ProgressTab studentData={studentData} />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;