import './TodoList.css'
function TodoList({ data, selectData, deleteData, editItem }) {
    return (
        <ul className='list'>
            {data && data.map((todo) => {
                return (
                    <li className='list-item' key={todo.id}>
                        <div className='item-text' onClick={() => { selectData(todo.id) }}>
                            {todo.selected ?
                                (<div className="circle select">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        x="0"
                                        y="0"
                                        version="1.1"
                                        viewBox="0 0 96 96"
                                        xmlSpace="preserve">
                                        <path
                                            fill="#6BBE66"
                                            fillRule="evenodd"
                                            d="M48 0c26.51 0 48 21.49 48 48S74.51 96 48 96 0 74.51 0 48 21.49 0 48 0zM26.764 49.277c.644-3.734 4.906-5.813 8.269-3.79.305.182.596.398.867.646l.026.025c1.509 1.446 3.2 2.951 4.876 4.443l1.438 1.291 17.063-17.898c1.019-1.067 1.764-1.757 3.293-2.101 5.235-1.155 8.916 5.244 5.206 9.155L46.536 63.366c-2.003 2.137-5.583 2.332-7.736.291-1.234-1.146-2.576-2.312-3.933-3.489-2.35-2.042-4.747-4.125-6.701-6.187-1.173-1.172-1.679-3.091-1.402-4.704z"
                                            clipRule="evenodd">
                                        </path>
                                    </svg>
                                </div>)
                                :
                                (<div className="circle"></div>
                                )}
                            <p>{todo.text}</p>
                        </div>
                        {/* delete */}
                        <button className='delete-btn' onClick={() => { deleteData(todo.id) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><mask id="a" width="32" height="32" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }}><path fill="#fff" d="M32 0H0v32h32V0Z"></path></mask><g fill="red" mask="url(#a)"><path d="M11 26.885h1.656a.925.925 0 0 0 .828-1v-13a.925.925 0 0 0-.828-1H11a.925.925 0 0 0-.828 1v13a.925.925 0 0 0 .828 1Zm.172-14h1.312v13h-1.312v-13ZM15.172 26.885h1.656a.925.925 0 0 0 .828-1v-13a.925.925 0 0 0-.828-1h-1.656a.925.925 0 0 0-.828 1v13a.925.925 0 0 0 .828 1Zm.172-14h1.312v13h-1.312v-13ZM19.344 26.885H21a.925.925 0 0 0 .828-1v-13a.925.925 0 0 0-.828-1h-1.656a.925.925 0 0 0-.828 1v13a.925.925 0 0 0 .828 1Zm.172-14h1.312v13h-1.312v-13Z"></path><path d="M25.395 3.855h-3.479v-.8a1.412 1.412 0 0 0-1.41-1.41h-9.012a1.412 1.412 0 0 0-1.41 1.41v.8H6.6a2.857 2.857 0 0 0-2.854 2.854v1.707a2 2 0 0 0 2 2v15.938a4 4 0 0 0 4 4h12.5a4 4 0 0 0 4-4V10.416a2 2 0 0 0 2-2V6.709a2.857 2.857 0 0 0-2.851-2.854Zm-14.311-.8a.41.41 0 0 1 .41-.41h9.012a.41.41 0 0 1 .41.41v.8h-9.832v-.8Zm13.166 23.3a2.006 2.006 0 0 1-2 2H9.75a2.006 2.006 0 0 1-2-2V10.416h16.5v15.939Zm2-18.791v.853H5.75V6.71a.853.853 0 0 1 .854-.854h18.791a.853.853 0 0 1 .855.854v.854Z"></path></g></svg>
                        </button>
                        {/* edit */}
                        <button className='edit-btn' onClick={(e) => { editItem(todo.id, todo); }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="44"
                                height="44"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="#464455"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 5H9c-1.886 0-2.828 0-3.414.586C5 6.172 5 7.114 5 9v6c0 1.886 0 2.828.586 3.414C6.172 19 7.114 19 9 19h6c1.886 0 2.828 0 3.414-.586C19 17.828 19 16.886 19 15v-3m-9.681.691 5.93-5.863a1.276 1.276 0 0 1 1.815 1.792l-5.831 6.05L9 15l.319-2.309Z"
                                />
                            </svg>
                        </button>
                    </li>
                )
            })}

        </ul >
    )
}

export default TodoList