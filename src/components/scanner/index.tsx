import React, { useRef, useState, useEffect } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import { FaSearch } from "react-icons/fa";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Course from "../course_page/layout";

const ObjectDetection: React.FC = () => {
  const webcamRef = useRef<any>(null);
  const [model, setModel] = useState<any>(null);
  const [scan, setScan] = useState<boolean>(false); // Initialize scan as false
  const [message, setMessage] = useState<string>("");
  const [display, setdisplay] = useState<boolean>(false);
  const [predictions, setPredictions] = useState<Array<cocoSsd.DetectedObject>>(
    []
  );
  const [isLoading, setIsLoading] = useState(true); // Initial loading state
  const [error, setError] = useState<any>(); // Error state for handling issues

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
  useEffect(() => {
    // Asynchronously load the webcam stream:
    const loadStream = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        setIsLoading(false); // Loading complete
      } catch (err) {
        setError(err);
        setIsLoading(false); // Loading complete even with error
      }
    };

    loadStream();
  }, []); // Run effect only once on component mount

  // const API_KEY = "AIzaSyDYPLgsrwG6SNfd9Z5GvpmmGfoQ5rwmz_s";
  const API_KEY = "AIzaSyB-FYRB83UhUfjea_Kt1YxnE3BfCHSZjZU";

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
      console.log(response);
      const text = response.text();
      if (!text)
        setMessage("unable to generate answer , please try again later");
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
      // setScan(true); // Update scan state to true when starting detection
      console.log(scan);
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
      console.log(scan);
    }
  };
  useEffect(() => {
    if (scan) {
      console.log("Scan is true");
      detectObjects().then(() => setdisplay((prevScan) => !prevScan));
      setdisplay(true);
      // Perform any necessary actions when scan is true
    }
  }, [scan, detectObjects]);
  const capture = () => {
    console.log("clicked");
    setScan(true);
    // detectObjects();
  };

  return (
    <Course>
      <>
        <div className="px-[5%] lg:px-[10%] min-h-[100vh]">
          <div className="w-full">
            <div className="flex justify-center mt-6">
              <div>
                {isLoading && (
                  <div className="h-[480px] w-[640px] flex justify-center items-center bg-Primary_30">
                    {/* Your loading spinner or placeholder content here */}
                    <p className="font-[roboto] font-semibold text-white">
                      Preparing webcam...
                    </p>
                  </div>
                )}
                {error && (
                  <div className="h-[480px] w-[640px] flex justify-center items-center bg-Primary_30">
                    <div>
                      {/* Display error message and potential retry button */}
                      <p className="text-[#d00] font-[roboto] font-semibold text-center">
                        An error occurred <br /> Error: {error.message}
                      </p>
                      <button
                        onClick={() => {
                          setError(null);
                          setIsLoading(true);
                        }}
                        className="bg-white px-8 py-2 my-6 text-primary-20 font-[roboto] font-semibold "
                      >
                        Retry
                      </button>
                    </div>
                  </div>
                )}
                {!isLoading && !error && (
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
                )}
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => {
                  capture();
                }}
                disabled={isLoading || error || scan}
                className="transition-opacity bg-primary-10 cursor-pointer text-white disabled:bg-Primary_90 p-3 w-1/2 hover:bg-primary-20"
              >
                Scan
              </button>
            </div>
          </div>
          {message && (
            <Markdown
              remarkPlugins={[remarkGfm]}
              className={"font-[roboto] font-medium my-6"}
            >
              {message}
            </Markdown>
          )}
          <div>
            {predictions.map((prediction, index) => (
              <div key={index} className="font-[roboto] font-medium">
                {`Object Predicted: ${prediction.class}`}
                {/* {`Object Predicted: ${prediction.class},
               Score: ${Math.round(
                prediction.score * 100
              )}%`} */}
              </div>
            ))}
          </div>
        </div>
        {display && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#000000de]">
            <FaSearch className="animate__animated animate__infinite animate__pulse text-white text-9xl" />
          </div>
        )}
      </>
    </Course>
  );
};

export default ObjectDetection;
