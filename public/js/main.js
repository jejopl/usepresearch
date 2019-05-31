const form = document.querySelector('#searchForm')
const input = document.querySelector('#searchInput')
const tryLink = document.querySelector('#tryLink')
const copyLink = document.querySelector('#copyLink')
const copyDiv = document.querySelector('#copyDiv')

copyLink.addEventListener('mousedown', e => {
  e.preventDefault()
  let query = encodeURIComponent(input.value.trim())
  query = query.replace(/%20/g, '-');
  copyToClipboard(`https://${window.location.host}/${query}`)
  copyDiv.innerHTML = 'COPIED!'
  setTimeout(() => {
    copyDiv.innerHTML = 'Copy link'
  }, 500)
})

form.addEventListener('submit', e => {
  e.preventDefault()
})

input.addEventListener('keyup', e => {
  let query = encodeURIComponent(input.value.trim())
  tryLink.href = `/${query}`
})

function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  textarea.value = text;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}
