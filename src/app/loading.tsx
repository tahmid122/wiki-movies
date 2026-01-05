import { Pulsar } from "ldrs/react";
import "ldrs/react/Pulsar.css";

const Loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center z-999 fixed left-0 top-0">
      <Pulsar size="50" speed="1.75" color="white" />
    </div>
  );
};

export default Loading;
