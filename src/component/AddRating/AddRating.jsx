import "./AddRating.css";
import { useContext } from "react";
import { DataContext } from "../../";

export function AddRating() {
  const { showModal, setShowModal } = useContext(DataContext);

  const handleSubmit=(event)=>{
    event.preventDefault();

    const rating = event.target.elements.rating.value;
    const comment = event.target.elements.comment.value;
  
    // Store the form data in local storage
    const reviewData = { rating, comment };
    localStorage.setItem("reviewData", JSON.stringify(reviewData));
  
    // Close the modal or reset the form
    setShowModal(false);
    
  }

  return (
    <>
      {showModal && (
        <div className="add-rating-page">
          <button className="close-btn" onClick={()=>setShowModal(false)}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
          <h1>Add Your Review</h1>
          <hr />
          <form onSubmit={handleSubmit}>
            <label>
              <p>Rating:</p>
              <select name="rating">
                <option disabled selected value="">
                  Select Rating
                </option>
                <option value="1"> 1</option>
                <option value="2"> 2</option>
                <option value="3"> 3</option>
                <option value="4"> 4</option>
                <option value="5"> 5</option>
              </select>
            </label>
            <label>
              <p>Comment: </p>
              <input type="text" name="comment"/>
            </label>
            <div className="submit-btn-container">
              <button className="btn submit-review-btn" type="submit" >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
