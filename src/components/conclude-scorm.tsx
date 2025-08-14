import { Button } from "./ui/button";
import { LESSON_STATUS, useScorm } from '@/contexts/ScormContext';


export default function ConcludeScorm() {
    const { scormSet, scormSave, scormQuit } = useScorm();

  function handleConcludeScorm() {
    scormSet('cmi.core.lesson_status', LESSON_STATUS.completed);
    scormSave();
    scormQuit();
    console.log("Conclude SCORM");
  }
  return (
    <Button
      onClick={() => {
        handleConcludeScorm();
      }}
    >
      Conclude SCORM
    </Button>
  );
}



