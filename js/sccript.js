function getValue(id,index) {
    const x = parseFloat(id.parentNode.previousSibling.previousSibling.childNodes[index].value);
    id.parentNode.previousSibling.previousSibling.childNodes[index].value = '';
    return x;
}

const resultArea = document.querySelector('#result');

// triangle

document.querySelector('#triangle').addEventListener('click', function (e) {
    const b = getValue(e.target,1);
    const h = getValue(e.target,5);
    const result = 0.5 * b * h;
    p = document.createElement('p');
    p.innerText = 'Triangle Area : ' + result;
    e.target.parentNode.insertBefore(p, e.target);
    resultArea.appendChild(p);
});

// rectangle

document.querySelector('#rectangle').addEventListener('click', function (e) {
    const w = getValue(e.target,1);
    const l = getValue(e.target,5);
    const result = w * l;
    p = document.createElement('p');
    p.innerText = 'Rectangle Area : ' + result;
    e.target.parentNode.insertBefore(p, e.target);
    resultArea.appendChild(p);
});

// parallelogram

document.querySelector('#parallelogram').addEventListener('click', function (e) {
    const b = getValue(e.target,1);
    const h = getValue(e.target,5);
    const result = b * h;
    p = document.createElement('p');
    p.innerText = 'Parallelogram Area : ' + result;
    e.target.parentNode.insertBefore(p, e.target);
    resultArea.appendChild(p);
});

// rhombus

document.querySelector('#rhombus').addEventListener('click', function (e) {
    const d1 = getValue(e.target,1);
    const d2 = getValue(e.target,5);
    const result = 0.5 * d1 * d2;
    p = document.createElement('p');
    p.innerText = 'Rhombus Area : ' + result;
    e.target.parentNode.insertBefore(p, e.target);
    resultArea.appendChild(p);
});

// pentagon

document.querySelector('#pentagon').addEventListener('click', function (e) {
    const P = getValue(e.target,1);
    const d = getValue(e.target,5);
    const result = 0.5 * P * d;
    p = document.createElement('p');
    p.innerText = 'Pentagon Area : ' + result;
    e.target.parentNode.insertBefore(p, e.target);
    resultArea.appendChild(p);
});

// ellipse

document.querySelector('#ellipse').addEventListener('click', function (e) {
    const a = getValue(e.target,1);
    const b = getValue(e.target,5);
    let result = 3.14 * a * b;
    result = result.toFixed(2);
    p = document.createElement('p');
    p.innerText = 'Pentagon Area : ' + result;
    e.target.parentNode.insertBefore(p, e.target);
    resultArea.appendChild(p);
});
