// autobind decorator
function autobind(
    _: any, 
    _2: string, 
    descriptor: PropertyDescriptor,
    ) {
        const originalMethod = descriptor.value;
        const adjDescriptor: PropertyDescriptor = {
            configurable: true,
            get() {
                const boundFn = originalMethod.bind(this);
                return boundFn;
            }
        }
        return adjDescriptor;
    }

// ProjectInput Class
class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLElement;
    titleInputElement: HTMLInputElement;
    describeInputElement: HTMLInputElement;
    mandayInputElement: HTMLInputElement;

    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input'

        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.describeInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.mandayInputElement = this.element.querySelector('#manday') as HTMLInputElement;

        this.configure();
        this.attach();
    }

    private gatherUserInput(): [string, string, number] | void {
        const enteredTilte = this.titleInputElement.value;
        const enteredDescription = this.describeInputElement.value;
        const enteredManday = this.mandayInputElement.value;
        if (
            enteredTilte.trim().length === 0 ||
            enteredDescription.trim().length === 0 ||
            enteredManday.trim().length === 0 
        ) {
            alert('入力値が正しくありません。再度お試しください');
            return;
        } else {
            return [enteredTilte, enteredDescription, +enteredManday]
        }
    }

    private clearInputs() {
        this.titleInputElement.value = ''
        this.describeInputElement.value = ''
        this.mandayInputElement.value = ''
    }

    @autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        console.log(this.titleInputElement.value);
        const userInput =  this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, manday] = userInput;
            console.log(title, desc, manday)
            this.clearInputs();
        }
    }

    private configure() {
        this.element.addEventListener('submit', this.submitHandler)
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const prjInput = new ProjectInput();