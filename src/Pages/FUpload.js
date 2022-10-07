import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { render } from "react-dom";

// for pdf files
const FUpload=()=> {
    const [state,setState] = useState({warningMsg:''})
    
//   state = { warningMsg: "" };
    

   ondragover = (accepted, rejected) => {
    if (Object.keys(rejected).length !== 0) {
      const message = "Please submit valid file type";
      setState({ warningMsg: message });
    } else {
      this.props.addFile(accepted);
      setState({ warningMsg: "" });
      console.log(accepted[0].preview);

      var blobPromise = new Promise((resolve, reject) => {
        const reader = new window.FileReader();
        reader.readAsDataURL(accepted[0]);
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        };
      });
      blobPromise.then((value) => {
        console.log(value);
      });
    }
  };

  
  render(); {
    const { files } = this.props;
    const render =
      Object.keys(files).length !== 0 ? (
        files.map((file) => <p key={file.name}>{file.name}</p>)
      ) : (
        <p className="hello">Please drop only .PDF, .DOC or .DOCX files</p>
      );
  return (
      
      <div>
        <p>{state.warningMsg}</p>

        <Dropzone 
          multiple={false}
          accept="application/msword, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onDrop={(accepted, rejected) => this.onDrop(accepted, rejected)}
        >
          {({ isDragAccept, isDragReject, acceptedFiles, rejectedFiles }) => {
            if (isDragReject) return "Please submit a valid file";
            return render;
          }}
        </Dropzone>
      </div>
    );
  }
}

export default FUpload;
