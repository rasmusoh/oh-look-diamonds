const recordButton = document.getElementById("recordButton");

function record() {
  const stream = canvas.captureStream(); // create a stream from the canvas
  const chunks = [];

  // create a MediaRecorder instance and start recording
  const recorder = new MediaRecorder(stream);
  recorder.start();

  // collect the recorded data in an array of chunks
  recorder.addEventListener("dataavailable", (event) => {
    console.log("event.data",event.data);
    chunks.push(event.data);
  });

  recordButton.innerText = "Stop";
  // stop recording and save the video file when the button is clicked again
  recordButton.addEventListener("click", () => {
    recorder.stop();

    setTimeout(() => {
      const blob = new Blob(chunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "canvas-recording.webm";
      a.click();
      setTimeout(() => {
        // Clean up - see https://stackoverflow.com/a/48968694 for why it is in a timeout
        URL.revokeObjectURL(url);
        resetRecordButton()
      }, 0);
    },1000);
  
  }, { once: true });
};

function resetRecordButton() {
  recordButton.innerText = "Record";
  recordButton.addEventListener("click", record, { once: true} );
}

resetRecordButton();
