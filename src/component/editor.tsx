import React, { useEffect, useRef } from 'react';

export default function Editor() {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const updateCursorPosition = () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0).cloneRange();
    range.collapse(true);

    const rect = range.getClientRects()[0];
    const editorRect = editorRef.current?.getBoundingClientRect();
    const cursor = cursorRef.current;

    if (!rect || !editorRect || !cursor) return;

    cursor.style.left = `${rect.left - editorRect.left + 20}px`;
    cursor.style.top = `${rect.top - editorRect.top + 20}px`;
    cursor.style.height = `${rect.height || 20}px`;
  };

  useEffect(() => {
    const editor = editorRef.current;
    if (editor) {
      editor.focus();
      updateCursorPosition();
    }
  }, []);

  const handleKeyDown = () => {
    requestAnimationFrame(updateCursorPosition);
  };

  const blinkStyle = `
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .animate-blink {
      animation: blink 1s step-start infinite;
    }
  `;

  return React.createElement(
    'div',
    {
      className: 'relative w-full h-screen p-5 bg-black text-white',
    },
    [
      React.createElement('style', { key: 'style' }, blinkStyle),
      React.createElement('div', {
        key: 'editor',
        ref: editorRef,
        id: 'editor',
        className:
          'h-full w-full outline-0 whitespace-pre-wrap break-all caret-transparent',
        contentEditable: true,
        spellCheck: false,
        onClick: updateCursorPosition,
        onInput: updateCursorPosition,
        onKeyUp: updateCursorPosition,
        onKeyDown: handleKeyDown,
      }),
      React.createElement('div', {
        key: 'cursor',
        ref: cursorRef,
        id: 'custom-cursor',
        className:
          'absolute w-[0.6em] bg-white pointer-events-none transition-all animate-blink',
        style: {
          height: '1em',
        },
      }),
    ]
  );
}
