import React, { useRef, useState, useEffect } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";

const ObjectDetection: React.FC = () => {
  const webcamRef = useRef<any>(null);
  const [model, setModel] = useState<any>(null);
  const [predictions, setPredictions] = useState<Array<cocoSsd.DetectedObject>>(
    []
  );

  useEffect(() => {
    const loadModel = async () => {
      try {
        await tf.setBackend("webgl");
        const loadedModel = await cocoSsd.load();
        setModel(loadedModel);
        detectObjects();
      } catch (error) {
        console.log(error);
      }
    };

    loadModel();
  }, []);

  const detectObjects = async () => {
    if (webcamRef.current && model) {
      const imageElement = webcamRef.current.video;
      const predictions = await model.detect(imageElement);
      console.log(predictions);
      setPredictions(predictions);
    }

    // You can handle predictions here, for example, send them to a server for further processing.
  };

  const capture = () => {
    detectObjects();
  };

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          width: 640,
          height: 480,
          facingMode: "environment",
        }}
      />
      <button onClick={capture}>Capture</button>
      <div>
        {predictions.map((prediction, index) => (
          <div key={index}>
            {`Class: ${prediction.class}, Score: ${Math.round(
              prediction.score * 100
            )}%`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObjectDetection;
