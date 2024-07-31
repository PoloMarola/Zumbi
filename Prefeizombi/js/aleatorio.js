const nomes = ["Ricardo Pallamardo", "Cleyton Playstation", "João Emannuel Papai Noel", "Geraldino", "Claudia", "Aryton Senna", "Gabriel Baitola"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)