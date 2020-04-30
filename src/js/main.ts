const h1:HTMLElement[] = [...document.querySelectorAll<HTMLElement>('h1')];
const h1Datas:string[] = [...new Set(h1.map(h => h.dataset.test))];


const test:HTMLElement[] = h1.filter(item => {
  const currentG1DatasIndex:number = h1Datas.indexOf(item.dataset.test);
  if(currentG1DatasIndex >= 0) {
    h1Datas.splice(currentG1DatasIndex,1);
    return item;
  }
});


console.log(test);
test.forEach(x => console.log(x.dataset.test));
