import React from "react";

const Form = ({setInputText, todos , setTodos}) => {

    const inputTextHandler = (e)=>{
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitHandler =(e)=>{
        e.preventDefault();
setTodos([
    ... todos, {text: inputText, completed: false, id:Math.random()*1000}
])
    }

    return (
        <div className="modal-body text-center">

            <form >
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label for="validationCustom01">Title</label>
                        <input onChange={inputTextHandler} type="text" className="form-control" name="user_first_name"
                            placeholder="Title" required />
                            <a onClick={submitHandler} className="btn btn-primary" id="submit" href=""> <i  className="fa fa-plus"> add</i></a>

                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="validationCustom02">Tag</label>
                        <select className="form-control" name="tag" id="tags">
                            <option value="" selected>Filter Needs Base on category </option>

                            <option value="clothings">Clothings</option>
                            <option value="housing">Room &#92; Apartment</option>
                            <option value="Home-services"> Home services </option>
                            <option value="outdoor-services">Outdoor services </option>
                            <option value="others"> Others</option>
                        </select>
                    </div>
                </div>


            </form>
        </div>
    );
};
export default Form;