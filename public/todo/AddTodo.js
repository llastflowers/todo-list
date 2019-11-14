import Component from '../Component.js';

class AddTodo extends Component {

    onRender(dom) {
        const onAdd = this.props.onAdd;
        const form = dom.querySelector('form');
        const input = dom.querySelector('input[name=todo]');
        
        form.addEventListener('submit', async event => {
            event.preventDefault();

            const todoItem = {
                task: input.value, 
                complete: false
            };

            try {
                await onAdd(todoItem);
                // this only runs if no error:
                form.reset();
                document.activeElement.blur();
            }
            catch (err) {
                // nothing to do as App will show error,
                // but will keep form from clearing...
            }
        });
    }

    renderHTML() {
        return /*html*/`
            <section class="todo-form-section">
                <form class="todo-form">
                    <input name="todo" required>
                    <button>Add</button>
                </form>
            </section>
        `;
    }
}

export default AddTodo;