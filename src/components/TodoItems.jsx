/* eslint-disable react/prop-types */



export default function TodoItems({
    title, descripation, isCompleted,
    updateHandlers, deleteHandler,id }) {
    return (
        <div className='container bg-success text-light py-2  my-2 d-flex justify-content-between rounded-2 align-items-center'>
            <div>
                <h5>{title}</h5>
                <p>{descripation}</p>
            </div>
            <div className="">
                <input type="checkbox" onChange={()=>{updateHandlers(id)}} checked={isCompleted} className="mx-5" style={{ height: "2em", width: '3em' }} />
                <button type="submit" onClick={()=>{deleteHandler(id)}} className="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}
