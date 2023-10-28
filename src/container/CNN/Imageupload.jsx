import React, { useState } from 'react';
import axios from 'axios';
import './Imageupload.css'

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 500;  // Set the desired width (500 pixels)
        canvas.height = 500; // Set the desired height (500 pixels)
        ctx.drawImage(img, 0, 0, 500, 500); // Resize the image
        const resizedImageSrc = canvas.toDataURL('image/jpeg'); // Convert to data URL
        setUploadedImage(resizedImageSrc);
      };
    };
    reader.readAsDataURL(file);
  };

  const handleInference = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      try {
        const response = await axios.post('http://127.0.0.1:5000/predict', formData); // Update with your API endpoint
        setPrediction(response.data.prediction);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const getNutStatement = () => {
    if (prediction !== '' && parseFloat(prediction) > 0.5) {
      return 'This food has nuts.';
    } else if (prediction !== '' && parseFloat(prediction) <= 0.5) {
      return 'This food doesn\'t have nuts.';
    }
    return '';
  };

  return (
    <div className="app__chef-content">
      <h1 className="app__chef-sign">Nut Food Identifier Neural Network</h1>
      <div className="upload-container">
        <input type="file" accept="image/*" onChange={handleFileUpload} />
        {uploadedImage && <img src={uploadedImage} alt="Uploaded" className="uploaded-image" />}
      </div>
      <button onClick={handleInference} className="app__chef-sign">Run Inference</button>
      {prediction && (
        <p className="app__chef-content_quote" style={{textAlign: 'center'}}>
          Prediction: {prediction}
          <br />
          {getNutStatement()}
        </p>
      )}
      <p className="disclaimer">
        Please use this tool responsibly. The developer is not liable for any decisions made based on the predictions.
      </p>
    </div>
  );
}

export default ImageUpload;