import React, { useRef, useState, useEffect } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import { FaSearch } from "react-icons/fa";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ObjectDetection: React.FC = () => {
  const webcamRef = useRef<any>(null);
  const [model, setModel] = useState<any>(null);
  const [scan, setScan] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [predictions, setPredictions] = useState<Array<cocoSsd.DetectedObject>>(
    []
  );

  useEffect(() => {
    const loadModel = async () => {
      try {
        await tf.setBackend("webgl");
        const loadedModel = await cocoSsd.load();
        setModel(loadedModel);
      } catch (error) {
        console.log(error);
      }
    };

    loadModel();
  }, []);

  const API_KEY = "AIzaSyDYPLgsrwG6SNfd9Z5GvpmmGfoQ5rwmz_s";

  // Access your API key (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(API_KEY);
  const generationConfig = {
    maxOutputTokens: 250,
  };
  async function run(prompt: string) {
    try {
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({
        model: "gemini-pro",
        generationConfig,
      });

      // const prompt = "what is a dictionary?";

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(text);
      setMessage(text);
    } catch (error) {
      console.log(error);
      setMessage("unable to generate answer , please try again later");
    }
  }

  // run();

  const detectObjects = async () => {
    console.log("working");

    try {
      setScan(true); // Update scan state to true when starting detection
      if (webcamRef.current && model) {
        console.log("working inside");

        webcamRef.current.getScreenshot();

        const imageElement = webcamRef.current.video;
        const predictions = await model.detect(imageElement);
        setPredictions(predictions);
        console.log(predictions);
        if (predictions.length === 0) {
          console.log("no prediction");
          setMessage(
            "Unable to get an object image, kindly try again later or scan in a better background, it is advised to scan in a white or plain backgound, Thanks"
          );
        } else {
          const values = predictions
            .map((prediction: any) => prediction.class)
            .join(" and ");
          console.log(values);
          const promptTemplate = `
          Hey Gemini AI, I've identified an object(s) as  ${values}. Can you provide comprehensive guidance on how to recycle different variations of this object? and if it  is also not possible to recycle it kindly let me know Your expertise in environmental sustainability would be invaluable in guiding users on the best recycling practices for a wide range of objects. Thank you for your assistance! `;
          // Send the promptTemplate to Gemini AI
          // (Send the prompt to Gemini AI using your communication method)
          run(promptTemplate);
          console.log(promptTemplate);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setScan(false); // Update scan state to false when detection is done
    }
  };

  const capture = () => {
    console.log("clicked");
    detectObjects();
  };

  return (
    <> 
      <div className="px-[5%] lg:px-[10%] min-h-[100vh]">
        <div className="w-full">
          <div className="flex justify-center">
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
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={capture}
              disabled={scan}
              className="transition-opacity bg-primary-10 cursor-pointer text-white disabled:bg-Primary_90 p-3 w-1/2 hover:bg-primary-20"
            >
              Scan
            </button>
          </div>
        </div>
        {message && <Markdown remarkPlugins={[remarkGfm]}>{message}</Markdown>}{" "}
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
      {scan && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#000000de]">
          <FaSearch className="animate__animated animate__infinite animate__pulse text-white text-9xl" />
        </div>
      )}
    </>
  );
};

export default ObjectDetection;
