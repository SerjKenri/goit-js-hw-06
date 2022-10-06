const categories = document.querySelectorAll('.item');
console.log('');
console.log(`Number of categories: ${categories.length}`);
console.log('');


categories.forEach(element => {
    const group = [...element.children];

    group.forEach(element => {
        if (element.tagName === 'H2') {
            console.log(`Category: ${element.textContent}`);
        }else if(element.tagName === 'UL'){
            console.log(`Elements: ${element.children.length}`);
            console.log('');
        }
    })
})