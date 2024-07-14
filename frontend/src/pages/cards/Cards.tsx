import React, { useState } from 'react';


export const CropCard= () =>  {
  const [waterStatus, setWaterStatus] = useState('onTrack');
  const [fertilizerStatus, setFertilizerStatus] = useState('late');

  const handleWaterChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setWaterStatus(event.target.value);
  };

  const handleFertilizerChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setFertilizerStatus(event.target.value);
  };

  return (
    <div className="crop-card">
      <div className="crop-header">
        <div className="crop-icon">
          {/* Replace with your actual crop icon */}
          <img src="https://cdn.pixabay.com/photo/2016/01/19/17/37/apple-1149590_960_720.png" alt="Crop Icon" />
        </div>
        <div className="crop-name">Apples</div>
      </div>
      <div className="crop-image">
        {/* Replace with your actual crop image */}
        <img src="https://cdn.pixabay.com/photo/2017/07/06/11/13/cornfield-2482205_960_720.jpg" alt="Crop Image" />
      </div>
      <button className="crop-edit-button">Edit</button>
      <div className="crop-task">
        <div className="task-icon">
          {/* Replace with your actual water icon */}
          <img src="https://cdn.pixabay.com/photo/2012/04/01/13/13/water-25520_960_720.png" alt="Water Icon" />
        </div>
        <div className="task-name">Water</div>
        <div className="task-status">
          {/* Replace with your actual progress bar */}
          <input
            type="range"
            min="0"
            max="100"
            value={waterStatus === 'onTrack' ? 100 : 0}
            onChange={handleWaterChange}
            disabled={false} // Enable the input
          />
          <span className={`task-status-label ${waterStatus}`}>
            {waterStatus === 'onTrack' ? 'Today' : ''}
          </span>
          <span className="task-status-icon">
            {waterStatus === 'onTrack' ? (
              <img src="https://cdn.pixabay.com/photo/2017/01/31/23/03/check-mark-1886266_960_720.png" alt="Check Mark" />
            ) : (
              <img src="https://cdn.pixabay.com/photo/2016/11/22/18/42/icon-1855639_960_720.png" alt="Exclamation Mark" />
            )}
          </span>
        </div>
      </div>
      <div className="crop-task">
        <div className="task-icon">
          {/* Replace with your actual fertilizer icon */}
          <img src="https://cdn.pixabay.com/photo/2016/07/15/20/28/fertilizer-1525998_960_720.png" alt="Fertilizer Icon" />
        </div>
        <div className="task-name">Fertilizer</div>
        <div className="task-status">
          {/* Replace with your actual progress bar */}
          <input
            type="range"
            min="0"
            max="100"
            value={fertilizerStatus === 'late' ? 50 : 100}
            onChange={handleFertilizerChange}
            disabled={false} // Enable the input
          />
          <span className={`task-status-label ${fertilizerStatus}`}>
            {fertilizerStatus === 'late' ? 'Last Week' : ''}
          </span>
          <span className="task-status-icon">
            {fertilizerStatus === 'late' ? (
              <img src="https://cdn.pixabay.com/photo/2016/11/22/18/42/icon-1855639_960_720.png" alt="Exclamation Mark" />
            ) : (
              <img src="https://cdn.pixabay.com/photo/2017/01/31/23/03/check-mark-1886266_960_720.png" alt="Check Mark" />
            )}
          </span>
        </div>
      </div>
      <div className="crop-task">
        <div className="task-icon">
          {/* Replace with your actual harvest icon */}
          <img src="https://cdn.pixabay.com/photo/2012/04/11/20/59/harvest-26222_960_720.png" alt="Harvest Icon" />
        </div>
        <div className="task-name">Harvest</div>
        <div className="task-status">
          {/* Replace with your actual progress bar */}
          <input
            type="range"
            min="0"
            max="100"
            value={0}
            disabled={false} // Enable the input
          />
        </div>
      </div>
    </div>
  );
}
