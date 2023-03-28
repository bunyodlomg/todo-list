import './Form.css'
function Form({ setTodo, handleSubmit, todo }) {
    return (
        <form className='form' onSubmit={handleSubmit}>
            <input id='input' className='input' type="text"
                placeholder="Add new list item"
                required
                autoComplete='off'
                onChange={(e) => {
                    setTodo(e.target.value)
                }}
                value={todo}
            />
            <button className='btn' type='submit'>Add</button>
        </form >
    )
}
export default Form