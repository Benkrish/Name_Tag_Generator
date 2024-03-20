const input = document.getElementById('name')
const tags = document.querySelector('.tags')
function tagGenerator() {
  const tag = input.value
  //   console.log(tag)
  const div = document.createElement('div')
  div.innerText = `Hi This is ${tag}`
  div.setAttribute('class', 'tag')
  tags.append(div)
}
