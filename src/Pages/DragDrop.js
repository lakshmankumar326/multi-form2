import { useRef, useState } from "react";


function handleFile(files) {
  alert(files.length + " File adeed");
  const file = files;
}

// drag drop file component
function DragDrop() {
  // drag state
  const [dragActive, setDragActive] = useState(false);
  // ref
  const inputRef = useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files);
      console.log(e.target.files.length);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = (e) => {
    inputRef.current.click();
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files);
      //   console.log(e.target.files)
    }
  };

  return (
    <>
      <form
        className="drag-form"
        id="form-file-upload"
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="header"><p>Uplaod your resume here</p></div>
        <input
          ref={inputRef}
          type="file"
          id="input-file-upload"
          multiple={true}
          onChange={handleChange}
          accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"/>
        <label
          id="label-file-upload"
          htmlFor="input-file-upload"
          className={dragActive ? "drag-active" : ""}
        >
          <div className="drag-container">
            <div className="drag-img">
              <svg
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="5"
                  y="5"
                  width="56"
                  height="56"
                  rx="28"
                  fill="#D4E7FD"
                />
                <g clip-path="url(#clip0_283_23993)">
                  <path
                    d="M37.6667 37.6666L33 32.9999M33 32.9999L28.3333 37.6666M33 32.9999V43.4999M42.7883 40.4549C43.9262 39.8346 44.8252 38.853 45.3432 37.665C45.8612 36.477 45.9689 35.1504 45.6493 33.8944C45.3296 32.6384 44.6008 31.5247 43.5778 30.729C42.5548 29.9332 41.296 29.5008 40 29.4999H38.53C38.1769 28.1341 37.5187 26.866 36.605 25.7911C35.6912 24.7162 34.5457 23.8624 33.2545 23.294C31.9633 22.7255 30.56 22.4572 29.1502 22.5091C27.7403 22.5611 26.3606 22.932 25.1147 23.5939C23.8688 24.2558 22.7892 25.1916 21.9571 26.3308C21.1249 27.47 20.5618 28.7831 20.3102 30.1712C20.0585 31.5594 20.1248 32.9866 20.5041 34.3454C20.8834 35.7043 21.5658 36.9594 22.5 38.0166"
                    stroke="#206DC5"
                    stroke-width="2.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <rect
                  x="5"
                  y="5"
                  width="56"
                  height="56"
                  rx="28"
                  stroke="#EAF3FE"
                  stroke-width="10"
                />
                <defs>
                  <clipPath id="clip0_283_23993">
                    <rect
                      width="28"
                      height="28"
                      fill="white"
                      transform="translate(19 19)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <div className="button">
                <div className="drag-button">
                  <button className="upload-button" onClick={onButtonClick}>
                    Click to upload
                  </button>
                </div>
                <div className="drag-tag">
                  <p> or drag and drop</p>
                </div>
              </div>
              <div className="lower">
                <p>PDF, DOC, DOCX files are allowed</p>
              </div>
            </div>
          </div>
        </label>
        {dragActive && (
          <div
            id="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </form>
    </>
  );
}

export default DragDrop;
