function TodoCounter( { total, completed } ) {
    return (
        <h1>
            You have completed {completed} of {total} ToDos
        </h1>
    );
}

export { TodoCounter };