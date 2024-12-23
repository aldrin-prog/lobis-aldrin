// import $ from 'jquery';
// window.jQuery = $;
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
// import "../styles/EditorComponent.module.css"; // Import your custom styles
import { useEvent } from '../context/AppContext';

const EditorComponent = (props) => {
  const {value}=props
  const isInitialized = useRef(false);
  const {  event,setEvent } = useEvent();
  // const contentSummernote=event.description;
  // Direct handler to update the event state
  const handleEditorChange = useCallback((content) => {
    setEvent((prev) => ({
      ...prev,
      ["description"]: content
    }));
  }, []); // handleEditorChange function does not need to depend on other state

  // Memoize ReactSummernoteLite to prevent unnecessary re-renders
  const memoizedEditor = useMemo(() => (
    // <ReactSummernoteLite
    //   id="summernote"
    //   onChange={handleEditorChange}
    //   onInit={(({ note }) => {
    //     if (!isInitialized.current && value!='' ) {
    //       isInitialized.current = true;
         
    //       note.summernote('pasteHTML',value);
    //     }
    //   })}

    // />
    <div></div>
  ), []); // Only recreate if handleEditorChange changes
  return (
    <div className="summernote-container">
      {memoizedEditor}
    </div>
  );
};

export default EditorComponent;
// export default function EditorComponent(){
//   return (<div></div>)
// }