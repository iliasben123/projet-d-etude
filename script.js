var el = document.querySelector('#content2');

function creationCourses(image, titre, prix) {
    let div = document.createElement('div'),
        img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');
    img.src = image;
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);
    span.appendChild(document.createTextNode(prix));
    div.setAttribute('class', 'card col-3 me-3 mb-3');

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);

    el.append(div);
}

courses.forEach((v) => {
    creationCourses(v.path, v.title, v.price);
})

