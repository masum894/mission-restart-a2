import React from 'react';

const TaskStatus = ({ selectedTicket, step, onFirstComplete, onSecondComplete }) => {
  return (
    <div className="task-status-container">
      <h3>Task Status</h3>
      {selectedTicket ? (
        <div className="status-card">
          <p><strong>{selectedTicket.title}</strong></p>
          
          {step === 1 && (
            <button className="complete-btn" onClick={onFirstComplete}>
              Complete
            </button>
          )}

          {step === 2 && (
            <button className="complete-btn final" onClick={onSecondComplete}>
              Complete (Final)
            </button>
          )}
        </div>
      ) : (
        <p className="placeholder-text">Select a ticket to start</p>
      )}
    </div>
  );
};

export default TaskStatus;