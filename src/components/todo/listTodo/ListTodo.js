function ListTodo() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear()+3, today.getMonth(), today.getDay());

    const todos = [
        {id : 1, description : 'Learn AWS', isDone : false, targetDate : targetDate},
        {id : 2, description : 'Learn Full Stack', isDone : false, targetDate : targetDate},
        {id : 3, description : 'Learn Docker', isDone : false, targetDate : targetDate}
    ];

    return(

        <>
            <h1>Here's your todo list</h1>

            <table className="table">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Description</td>
                        <td>Is Done?</td>
                        <td>Target Date</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.isDone.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </>
    );
}

export default ListTodo;