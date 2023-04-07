let article1 ={id:1, name: "S10", brand: "Samsung", price: 200, quantity: 1,category: "Smartphone"};
let article2 ={id:2,name: "Macbook", brand: "Apple", price: 2000, quantity: 1,category: "PC"};
let article3 ={id:3,name: "Zenpad", brand: "Asus", price: 300, quantity: 1,category: "Tablet"};
let article4 ={id:4,name: "S20", brand: "Samsung", price: 601, quantity: 1,category: "Smartphone"};
let article5 ={id:5,name: "P30", brand: "Huawei", price: 235, quantity: 1,category: "Smartphone"};
let article6 ={id:6,name: "Galaxy Tab A7", brand: "Samsung", price: 169, quantity: 1,category: "Tablet"};
let article7 ={id:7,name: "TUF A17", brand: "Asus", price: 1199, quantity: 1,category: "PC"};
/*let listArticle=new Map();
listArticle.set(1, {id:1,name: 'S10', brand: 'Samsung', price: 200, quantity: 1,category: 'Smartphone'});
listArticle.set(2, {id:2,name: 'Macbook', brand: 'Apple', price: 2000, quantity: 1,category: 'PC'});
listArticle.set(3, {id:3,name: 'Zenpad', brand: 'Asus', price: 300, quantity: 1,category: 'Tablet'});
listArticle.forEach(tableContents => console.log(tableContents));*/
let listArticle=new Array();
    listArticle.push([article1.id, article1.name, article1.brand, article1.price, article1.quantity, article1.category]);
    listArticle.push([article2.id, article2.name, article2.brand, article2.price, article2.quantity, article2.category]);
    listArticle.push([article3.id, article3.name, article3.brand, article3.price, article3.quantity, article3.category]);
    listArticle.push([article4.id, article4.name, article4.brand, article4.price, article4.quantity, article4.category]);
    listArticle.push([article5.id, article5.name, article5.brand, article5.price, article5.quantity, article5.category]);
    listArticle.push([article6.id, article6.name, article6.brand, article6.price, article6.quantity, article6.category]);
    listArticle.push([article7.id, article7.name, article7.brand, article7.price, article7.quantity, article7.category]);
function createTable() {
    let tableContents = "";
        for (let i = 0; i < listArticle.length; i++) {
            tableContents += "<tr>";
            for (let j = 0; j < listArticle[i].length; j++) {
                tableContents += "<td>" + listArticle[i][j] + "</td>";
            }
            tableContents += "</tr>";
        }
        document.getElementById("Articles").innerHTML +=tableContents;
        listArticle.forEach(tableContents => console.log(tableContents));
 }
