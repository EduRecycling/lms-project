// import Webcam, { WebcamProps } from "react-webcam";
// import { useCallback, useRef, useState } from "react";

// const CustomWebcam: React.FC = () => {
//   const webcamRef = useRef<Webcam | null>(null);
//   const [imgSrc, setImgSrc] = useState<string | null>(null);

//   // create a capture function
//   const capture = useCallback(() => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();
//       setImgSrc(imageSrc);
//     }
//   }, [webcamRef]);

//   const retake = () => {
//     setImgSrc(null);
//   };

//   return (
//     <div className="container">
//       {imgSrc ? (
//         <img src={imgSrc} alt="webcam" />
//       ) : (
//         <Webcam
//           height={600}
//           width={600}
//           ref={webcamRef as React.RefObject<Webcam>}
//           screenshotFormat="image/jpeg"
//           screenshotQuality={0.8}
//         />
//       )}
//       <div className="btn-container">
//         {imgSrc ? (
//           <button onClick={retake}>Retake photo</button>
//         ) : (
//           <button onClick={capture}>Capture photo</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CustomWebcam;
