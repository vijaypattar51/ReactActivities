import { useState } from "react";

export default function CommentsForm() {
  const [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: "",
  });

  let handleInput = (e) => {
    // const [name, value] = e.target;

    setFormData((currVal) => {
      return {
        ...currVal, 
        [e.target.name]: e.target.value,
      };
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted:", formData);
    setFormData({
      username: "",
      remarks: "",
      rating: "",
    });
  };
  return (
    <div>
      <h4>Give a comment</h4>

      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Username: </label>
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleInput}
          name="username"
        />
        <br />
        <br />

        <label htmlFor="textarea">Remarks: </label>
        <textarea
          placeholder="add remarks"
          value={formData.remarks}
          onChange={handleInput}
          name="remarks"
        >
          Remarks
        </textarea>
        <br />
        <br />

        <label htmlFor="number">Rating: </label>
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInput}
          name="rating"
        />
        <br />
        <br />
        <button>Add comment</button>
      </form>
    </div>
  );
}
