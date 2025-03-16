// Array com os links que serão inseridos na página
const links = [
    { text: "GitHub", url: "https://github.com/filipeandr" },
    { text: "Curriculo Lattes", url: "https://lattes.cnpq.br/5091983824854974" },
    { text: "Web-Portfólio [EM BREVE]", url: "#" },
]

// Seleciona a div onde os links serão adicionados
const container = document.getElementById("link-container");

// Função para criar e adicionar os links dinamicamente
function gerarLinks() {
    links.forEach(link => {
        const a = document.createElement("a"); // Cria um elemento <a>
        a.classList.add("button"); // Adiciona a classe "button" ao elemento
        a.textContent = link.text; // Define o texto do link
        a.href = link.url; // Define o URL do link
        a.target = "_self"; // Abre em nova aba
        container.appendChild(a); // Adiciona o link ao container
    });
}

// Chama a função ao carregar a página
gerarLinks();
