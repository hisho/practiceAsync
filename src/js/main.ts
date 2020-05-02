const myAsyncFunction = async () => {
  const response = await fetch('https://hishohub.github.io/practiceAsync/test.json');
  return await response.json();
}

const data = myAsyncFunction();

const app = document.getElementById('app');
data.then(value => {
  console.log(value)
  value.forEach(x => {
    app.innerHTML += `
<h1 style="font-size: 2rem">${x.title}</h1>
<div style="font-size: 1rem">${x.body}</div>
`
  })
})