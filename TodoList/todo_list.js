// Captura os elementos do HTML para que possamos manipulá-los pelo JavaScript.
const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

// Array que armazenará todas as tarefas.
// Cada posição do array será um objeto como:
// { text: "Estudar JavaScript", completed: false }
let tasks = [];

/*
 * Função responsável por adicionar uma nova tarefa.
 * Ela é executada quando o usuário clica no botão "Add Task".
 */
function addTask() {
    // Remove espaços no início e no final do texto digitado.
    const taskText = taskInput.value.trim();

     // Verifica se o usuário realmente digitou alguma coisa.
    if (taskText !== "") {
        // Adiciona um novo objeto dentro do array.
        tasks.push({ 
            text: taskText // Texto da tarefa
        });
        // Limpa a caixa de texto para facilitar a próxima digitação.
        taskInput.value = "";

         // Atualiza a lista exibida na tela.
        displayTasks();
    }
}

/*
 * Responsável por desenhar (renderizar) todas as tarefas na tela.
 *
 * Sempre que uma tarefa é:
 * - adicionada
 * - concluída
 * - removida
 *
 * esta função é chamada novamente.
 */
function displayTasks() {
     // Limpa completamente a lista antes de recriá-la.
    // Isso evita tarefas duplicadas na tela.
    taskList.innerHTML = "";
    // Percorre todas as tarefas do array.
    tasks.forEach((task, index) => {
        // Cria um novo elemento <li>.
        const li = document.createElement("li");
         /*
         * Monta o conteúdo do <li>.
         *
         * Exemplo gerado:
         *
         * <input type="checkbox" id="task-0">
         * <label for="task-0">Estudar JS</label>
         */
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        
          /*
         * Procura o checkbox recém-criado.
         *
         * Sempre que ele for marcado ou desmarcado,
         * chamamos a função toggleTask().
         */
            li.querySelector("input").addEventListener("change", () => toggleTask(index));
         // Adiciona o <li> dentro da lista (<ul>).
            taskList.appendChild(li);
    });
}

/*
 * Alterna o estado da tarefa.
 *
 * Se estava:
 * completed = false
 *
 * passa para:
 * completed = true
 *
 * e vice-versa.
 */
function toggleTask(index) {

    // O operador ! significa "inverter".
    //
    // false -> true
    // true -> false
    tasks[index].completed = !tasks[index].completed;

     // Atualiza a lista para mostrar a mudança.
    displayTasks();
}


/*
 * Remove todas as tarefas concluídas.
 *
 * O método filter cria um novo array contendo
 * apenas as tarefas cujo completed é false.
 */
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
     // Atualiza a tela após remover as tarefas.
    displayTasks();
    
}

/*
 * Registro dos eventos.
 *
 * Estas linhas são executadas apenas UMA VEZ,
 * quando o JavaScript é carregado.
 *
 * A partir desse momento:
 *
 * - clicar em "Add Task"
 *      ↓
 *   chama addTask()
 *
 * - clicar em "Clear Completed"
 *      ↓
 *   chama clearCompletedTasks()
 */
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);




