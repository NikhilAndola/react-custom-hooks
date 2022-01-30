import React from 'react';
import ClipboardIcon from '../svg/ClipboardIcon';
import SuccessIcon from '../svg/SuccessIcon';
import useCopyToClipboard from '../utils/useCopyToClipboard';

function CopyButton({ code }) {
  const [isCopied, handleCopy] = useCopyToClipboard();

  return (
    <button onClick={() => handleCopy(code)}>
      {isCopied ? <SuccessIcon /> : <ClipboardIcon />}
    </button>
  );
}
