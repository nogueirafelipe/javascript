// function myFunction(a=[]) {
//     let arrOrdenado = [`${a.address},`, `${a.city} - ``${a.state}, ``${a.zipcode}, ``${a.country}.`]
//     return arrOrdenado
// }

// console.log(myFunction([
//     {
//         address: "Rua Geracina",
//         city: "São Paulo",
//         state: "SP",
//         country: "Brasil",
//         zipcode: "08062-060",
//     },
//     {
//         address: "Av. do Imperador",
//         city: "São Paulo",
//         state: "SP",
//         country: "Brasil",
//         zipcode: "02658-082",
//     },
// ]))
function convertToFrases(someArray){
    return someArray.map(i => `${i.address}, ${i.city} - ${i.state}, ${i.zipcode}, ${i.country}`);
    };

    console.log(convertToFrases([
            {
                address: "Rua Geracina",
                city: "São Paulo",
                state: "SP",
                country: "Brasil",
                zipcode: "08062-060",
            },
            {
                address: "Av. do Imperador",
                city: "São Paulo",
                state: "SP",
                country: "Brasil",
                zipcode: "02658-082",
            },
        ]))

//NÃO CONSEGUI RESOLVER - COPIEI A RESOLUÇÃO, MAS NÃO ENTENDI