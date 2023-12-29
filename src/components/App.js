import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {addTodo,updtTodo,delTodo,toggleForm} from "../redux/todoSlice";
function SingleItem({val}){
    const dispatch = useDispatch();
    const editForm = () => {
        dispatch(toggleForm({val,isAddForm:false}));
    }
    return(
        <tr>
            <td>{val}</td>
            <td><button type="button" className="btn btn-success" onClick={editForm}>edit</button></td>
            <td><button type="button" className="btn btn-danger" onClick={() => dispatch(delTodo(val))}>delete</button></td>
        </tr>
    )
}
function AddEditForm(){
    const {isAddForm,editVal} = useSelector((state) => state.myTodo);
    const dispatch = useDispatch();
    const handelSubmit = (e) => {
        e.preventDefault();
        const inp = e.target.term.value.trim();
        if(inp.length < 2){
            alert("todo name must be more then 2 characters required.");
        }else{
            isAddForm ? dispatch(addTodo(inp)):dispatch(updtTodo(inp));
            e.target.reset();
        }
    }
    return(
        <form autoComplete="off" className="d-flex mb-2" onSubmit={handelSubmit}>
            <input defaultValue={editVal} className="form-control me-2" name="term" type="text" />
            <button className="btn btn-outline-success" type="submit">{isAddForm ? "Add":"update"}</button>
        </form>
    )
}
function App(){
    const {todo} = useSelector((state) => state.myTodo);
    return(
        <>
            <div className="container box">
                <h1>react redux todo app with localstorage</h1>
                <nav className="navbar navbar-light bg-light">
                    <div className="container">
                        <AddEditForm />
                    </div>
                </nav>
                <table className="table text-center table-hover text-capitalize">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>edit</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody id="box">
                        {todo.length > 0 ? todo.map((val,ind) => <SingleItem key={ind} val={val} />):<tr><td colSpan="3">No Data</td></tr>}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default App;