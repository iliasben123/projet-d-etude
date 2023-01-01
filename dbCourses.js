var courses = [{
    path: 'courses/cssAnimation.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 5.5,
    category: 'HTML'
},
{
    path: 'courses/cssColors.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 2.3,
    category: 'HTML'
},
{
    path: 'courses/cssMesures.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 5.7,
    category: 'HTML'
},
{
    path: 'courses/cssProperties.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 5.0,
    category: 'HTML'
},
{
    path: 'courses/cssSelectors.jpg',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 5.5,
    category: 'HTML'
},
{
    path: 'courses/htmlAttrVal.jpg',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 8.5,
    category: 'CSS'
},
{
    path: 'courses/htmlElements.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 4.8,
    category: 'CSS'
},
{
    path: 'courses/htmlTags.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 7,
    category: 'CSS'
},
{
    path: 'courses/javascriptDef.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 1,
    category: 'HTML'
},
{
    path: 'courses/javascriptDOM.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 5.5,
    category: 'HTML'
},
{
    path: 'courses/javascriptEvents.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 5.5,
    category: 'JS'
},
{
    path: 'courses/javascriptFunctions.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 5.5,
    category: 'HTML'
},
{
    path: 'courses/javascriptFunctions2.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 5.5,
    category: 'PHP'
},
{
    path: 'courses/javascriptObjects.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 5,
    category: 'PHP'
},
{
    path: 'courses/javascriptOperators.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 9,
    category: 'PHP'
},
{
    path: 'courses/javascriptOverview.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 5.5,
    category: 'HTML'
},
{
    path: 'courses/javascriptVariables.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 5.5,
    category: 'JS'
},
{
    path: 'courses/phpBasics.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 3,
    category: 'HTML'
},
{
    path: 'courses/phpCRUD.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 1.2,
    category: 'PHP'
},
{
    path: 'courses/phpDataBase.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 3,
    category: 'HTML'
}

]
function remplir(){
    let x1 = Math.floor(Math.random() * 19);
    let x2= Math.floor(Math.random() * 19);
    let x3 = Math.floor(Math.random() * 19);

    let el1= courses[x1];
    let el2= courses[x2];
    let el3= courses[x3];

    document.getElementById(1).setAttribute("src",el1.path);
    document.getElementById(2).setAttribute("src",el2.path);
    document.getElementById(3).setAttribute("src",el3.path);
    

    


}
window.onload=remplir();

function filter_cat(btn_id){
    let cat=btn_id.toLowerCase();
    document.getElementById("content2").innerHTML="";
    for(let i=0; i<courses.length; i++){
        if(cat==courses[i].category.toLowerCase()){
            let el= courses[i];
            let fig=document.createElement("FIGURE");
            let img = document.createElement("img");
            img.setAttribute("src",el.path);
            fig.appendChild(img);
            var titre = document.createElement("figcaption");
            var t = document.createTextNode(el.title);
            titre.appendChild(t);
            fig.appendChild(titre);
            var prix = document.createElement("figcaption");
            var p = document.createTextNode(el.price+"§");
            prix.appendChild(p);
            fig.appendChild(prix);
    
            fig.setAttribute('class', 'card col-3 me-3 mb-3')  

           document.getElementById("content2").appendChild(fig);
        }
    }
}

function filter(){
    let key=document.getElementById("search").value.toLowerCase();
    document.getElementById("content2").innerHTML="";
    for(let i=0; i<courses.length; i++){
        let pattern="/"+courses[i].title.toLowerCase()+"/";
        if(pattern.match(key)!=null){
            let el= courses[i];
            let fig=document.createElement("FIGURE");
            let img = document.createElement("img");
            img.setAttribute("src",el.path);
            fig.appendChild(img);
            var titre = document.createElement("figcaption");
            var z = document.createTextNode(el.title);
            titre.appendChild(z);
            fig.appendChild(titre);
            var prix = document.createElement("figcaption");
            var p = document.createTextNode(el.price+"£");
            prix.appendChild(p);
            fig.appendChild(prix);
    
            fig.setAttribute('class', 'card col-3 me-3 mb-3')  

           document.getElementById("content2").appendChild(fig);
        }
    }
}

function filter_price(){
    let prix1=document.getElementById("hure").value;
    document.getElementById("put").innerHTML=prix1;
    document.getElementById("content2").innerHTML="";
    for(let i=0; i<courses.length; i++){
        if(prix1<=courses[i].price){
            let el= courses[i];
            let fig=document.createElement("FIGURE");
            let img = document.createElement("img");
            img.setAttribute("src",el.path);
            fig.appendChild(img);
            var titre = document.createElement("figcaption");
            var z = document.createTextNode(el.title);
            titre.appendChild(z);
            fig.appendChild(titre);
            var prix = document.createElement("figcaption");
            var p = document.createTextNode(el.price+"£");
            prix.appendChild(p);
            fig.appendChild(prix);
    
            fig.setAttribute('class', 'card col-3 me-3 mb-3')  

           document.getElementById("content2").appendChild(fig);
        }
    }
}