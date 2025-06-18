import { useEffect, useRef } from 'react';

export default function Editor() {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const updateCursorPosition = () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0).cloneRange();
    range.collapse(true);

    const rect = range.getClientRects()[0];
    if (!rect) return;

    const customCursor = cursorRef.current;
    if (customCursor) {
      customCursor.style.left = `${rect.left}px`;
      customCursor.style.top = `${rect.top}px`;
    }
  };

  useEffect(() => {
    const editor = editorRef.current;
    if (editor) {
      editor.focus();
      updateCursorPosition();
    }
  }, []);

  const handleKeyDown = () => {
    setTimeout(updateCursorPosition, 0);
  };

  return (
    <div className="relative w-full h-screen p-5">
      <div
        ref={editorRef}
        id="editor"
        className="h-full w-full outline-0 whitespace-pre-wrap break-all caret-transparent"
        contentEditable
        spellCheck={false}
        onClick={updateCursorPosition}
        onInput={updateCursorPosition}
        onKeyUp={updateCursorPosition}
        onKeyDown={handleKeyDown}
      ></div>
      <div
        ref={cursorRef}
        id="custom-cursor"
        className="absolute w-0.5 h-[1.2em] bg-black pointer-events-none transition-[top_0.1s_ease,_left_0.1s_ease]"
      ></div>
    </div>
  );
}
