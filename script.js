class Article{
    constructor(id,name,brand,price,quantity,category){
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
    }
}
let article1 = new Article(1, 'S10', 'Samsung', 200, 1, 'Smartphone');
let article2 = new Article(2, 'Macbook', 'Apple', 2000, 1, 'PC');
let article3 = new Article(3, 'Zenpad', 'Asus', 300, 1, 'Tablet');
let article4 = new Article(4, 'S20', 'Samsung', 601, 1, 'Smartphone');
let article5 = new Article(5, 'P30', 'Huawei', 235, 1, 'Smartphone');
let article6 = new Article(6, 'Galaxy Tab A7', 'Samsung', 169, 1, 'Tablet');
let article7 = new Article(7, 'TUF A17', 'Asus', 1199, 1, 'PC');
/*let listArticle2=new Map();
listArticle2.set(1, new Article(1, 'S10', 'Samsung', 200, 1, 'Smartphone'));
listArticle2.set(2, {id:2,name: 'Macbook', brand: 'Apple', price: 2000, quantity: 1,category: 'PC'});
listArticle2.set(3, {id:3,name: 'Zenpad', brand: 'Asus', price: 300, quantity: 1,category: 'Tablet'});
listArticle2.forEach(tableContents => console.log(tableContents));*/
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
            row = document.createElement("tr");
            for (let j = 0; j < listArticle[i].length; j++) {
                tableContents += "<td>" + listArticle[i][j] + "</td>";
            }
            tableContents += "</tr>";
        }
        document.getElementById("Articles").innerHTML +=tableContents;
        listArticle.forEach(tableContents => console.log(tableContents));
 }
 
