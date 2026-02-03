const formTarefas = document.querySelector('.formTarefas');
const inputTarefa = document.querySelector('#inputTarefa');
const listaTarefas = document.querySelector('#listaTarefas');
const formulario = document.querySelector('form');

// Resetando o formulário para não recarregar a página
formulario.addEventListener('submit', function(event) {
	event.preventDefault();
});

// Função para adicionar uma nova tarefa
function adicionarTarefa(event) {
	// Pega o texto do input
	const tarefaTexto = inputTarefa.value;

	// Cria um novo elemento <li>
	const novaTarefa = document.createElement('span');
	novaTarefa.className = 'itemTarefa';

	const textoSpan = document.createElement('span');
	textoSpan.innerText = tarefaTexto;

	// Cria o botão de remover
	const botaoRemover = document.createElement('button');
	botaoRemover.className = 'button-delete';
	botaoRemover.innerText = 'Remover';

	// Adiciona à lista
	novaTarefa.appendChild(textoSpan);
	novaTarefa.appendChild(botaoRemover);
	listaTarefas.appendChild(novaTarefa);

	// Limpa o input
	inputTarefa.value = '';
}

// Adiciona o evento ao formulário
formTarefas.addEventListener('submit', adicionarTarefa);

// Função para remover uma tarefa
function removerTarefa(event) {
	// Verifica se o elemento clicado é um botão de remoção
	if (event.target.classList.contains('button-delete')) {
		// Remove o elemento pai (a tarefa)
		const tarefaParaRemover = event.target.parentElement;
		listaTarefas.removeChild(tarefaParaRemover);
	}
}

// Adiciona o evento de remoção à lista de tarefas
listaTarefas.addEventListener('click', removerTarefa);

// Função de concluir tarefa
function concluirTarefa(event) {
	// Verifica se o elemento clicado é uma tarefa
	if (event.target.classList.contains('itemTarefa')) {
		// Alterna a classe 'concluida'
		event.target.classList.toggle('concluida');
	}
}

// Adiciona o evento de concluir tarefa à lista de tarefas
listaTarefas.addEventListener('click', concluirTarefa);

