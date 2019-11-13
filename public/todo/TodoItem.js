import Component from '../Component.js';

class TodoItem extends Component {

    onRender(dom) {
        const todo = this.props.todo;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;

        const completeButton = dom.querySelector('.complete-button');
        completeButton.addEventListener('click', () => {
            todo.complete = !todo.complete;
            onUpdate(todo);
        });

        const removeButton = dom.querySelector('.remove-button');
        removeButton.addEventListener('click', () => {
            const confirmed = confirm(`Remove this task?`);
            if (confirmed) {
                onRemove(todo);
            }
        });
    }

    renderHTML() {
        const todo = this.props.todo;

        return /*html*/`
           <li class="todo-item">
                <span class="${todo.complete ? 'complete' : ''}">${todo.task}</span>
                <div>
                    <button class="complete-button">
                        Mark ${todo.complete ? 'Open' : 'Done'}
                    </button>
                    
                    <button class="remove-button">
                    x    
                    </button>
                </div>
            </li>
        `;
    }
}

export default TodoItem;