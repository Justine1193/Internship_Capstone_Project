import React from "react";
import styles from "./ResourceForm.module.css";

const ResourceForm = ({ newResource, setNewResource, handleUpload }) => {
  return (
    <div className={styles.resourceForm}>
      <h3>Upload New Resource</h3>
      <input
        type="text"
        placeholder="Enter resource title"
        value={newResource.title}
        onChange={(e) =>
          setNewResource({ ...newResource, title: e.target.value })
        }
      />
      <input
        type="file"
        onChange={(e) =>
          setNewResource({ ...newResource, file: e.target.files[0] })
        }
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ResourceForm;
