//prompt nome
let nome = prompt ('Inserisci il tuo nome');

//prompt cognome
let cognome = prompt ('Inserisci il tuo cognome');

//prompt colore preferito
let colore_preferito = prompt ('Inserisci il tuo colore preferito');

//generazione password
let psw_gen = `${nome}${cognome}${colore_preferito}21`

//output password generata a schermo
document.getElementById('psw_gen').innerHTML = psw_gen