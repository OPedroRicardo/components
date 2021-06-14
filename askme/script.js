const textArea = document.querySelector('textarea')
const form = document.querySelector('.container')
const button = document.querySelector('button')

function verify() {
    if(textArea.value != "") {
        button.style.backgroundColor = "#7585b6"
        button.style.cursor = "pointer"
        return
    } 
    if (textArea.value == ""){
        button.style.backgroundColor = "gray"
        button.style.cursor = "no-drop"
        return
    }
}

textArea.addEventListener('focus', () => {
    form.classList.add('selected')
    verify()

    document.addEventListener('keypress', () => {
        verify()
    })
})
textArea.addEventListener('blur', () => {
    form.classList.remove('selected')
    verify()
})