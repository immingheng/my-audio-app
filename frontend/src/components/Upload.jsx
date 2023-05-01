import React from "react";
  
const Upload = () => {
  return (
    <div class="container-xs">
        <form class="form">
        <label class="form-label" for="Files"><strong>Select Files:</strong></label>
            <div class="input-group">
                <input type="file" class="form-control" name="files"/>
                <button class="btn btn-outline-dark" type="submit">Submit</button>
            </div>
        </form>
    </div>
  );
};
  
export default Upload;