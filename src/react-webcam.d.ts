declare module "react-webcam" {
  import * as React from "react";

  interface WebcamProps {
    audio?: boolean;
    height?: number;
    muted?: boolean;
    screenshotFormat?: string;
    width?: number;
    videoConstraints?: MediaTrackConstraints;
    screenshotQuality?: number;
    onUserMedia?: (media: MediaStream) => void;
    onUserMediaError?: (error: string) => void;
    style?: object;
  }

  class Webcam extends React.Component<WebcamProps> {}

  export default Webcam;
}
