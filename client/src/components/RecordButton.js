import React from 'react';
import { ReactComponent as MicrophoneIcon } from '../assets/microphone.svg';
import styled from '@emotion/styled';

const RecordButtonGradientWrapper = styled.div`
  border-radius: 100px;
  width: 57px;
  height: 57px;
  background: ${(props) =>
    props.isRecording
      ? props.theme.colors.gradient
      : props.theme.colors.altTwo};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
`;

const RecordButtonInput = styled.button`
  border-radius: 100px;
  border: none;
  width: 52px;
  height: 52px;
  background-color: ${(props) => props.theme.colors.altTwo};
  display: flex;
  justify-content: center;
  transition: 0.5s;
  cursor: pointer;
`;

const RecordButtonIcon = styled(MicrophoneIcon)`
  & > #gradient-vertical {
    --color-stop-1: ${(props) => props.theme.colors.gradientStart};
    --color-stop-2: ${(props) => props.theme.colors.gradientStop};
  }
  & > path {
    fill: ${(props) =>
      props.isRecording
        ? 'url(#gradient-vertical)'
        : props.theme.colors.background};
  }
`;

function RecordButton(props) {
  return (
    <RecordButtonGradientWrapper {...props}>
      <RecordButtonInput>
        <RecordButtonIcon {...props} />
      </RecordButtonInput>
    </RecordButtonGradientWrapper>
  );
}

export default RecordButton;
