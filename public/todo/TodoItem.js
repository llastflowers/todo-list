import Component from '../Component.js';

class TodoItem extends Component {

    onRender(dom) {
        const todo = this.props.todo;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;

        const completedButton = dom.querySelector('.completed-button');
        completedButton.addEventListener('click', () => {
            todo.completed = !todo.completed;
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
                <span class="${todo.completed ? 'completed' : ''}">${todo.name}</span>
                <div>
                    <button class="completed-button">
                        Make ${todo.completed ? 'Uncompleted' : 'Completed'}
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