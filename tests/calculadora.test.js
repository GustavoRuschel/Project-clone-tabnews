

// test("nome do teste", callbackFunction );

// function callbackFunction(){
//   console.log("Essa função está sendo chamada?")
// };

// test("nome do teste", function(){
//   console.log("e assim, funciona?")
// }); 

// test("com arrow function", () =>{
//   console.log("e agora?")
// });

// test("testando uma outra condição do meu sistema", () => {
//   console.log("Outro teste")
// });

// test("espero que 1 seja 1", () => {
//   expect(1).toBe(1);
// })

// test("vai dar erro", () =>{
//   expect(2).toBe(1);
// })

const calculadora = require("../models/calculadora.js")

test("somar 2 + 2 deveria retornar 4", () =>{
  const resultado = calculadora.somar(2,2)
  expect(resultado).toBe(4)
});

test("multiplicando 2 + 2 deveria retornar 4", () =>{
  const resultado = calculadora.multiplicar(2,2)
  expect(resultado).toBe(4)
});