import React from 'react';
import Title from '../components/Title';
import RecordButton from '../components/RecordButton';
import startRecording from '../utils/audio';

function Notes() {
  const [isRecording, setIsRecording] = React.useState(false);

  function handleRecordButtonClick() {
    setIsRecording(!isRecording);
  }

  return (
    <>
      <Title>Notes</Title>
      <RecordButton onClick={startRecording} isRecording={isRecording} />
    </>
  );
}

export default Notes;
