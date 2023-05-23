function createNote() {
    note_name.value = ''
    note_textArea.value = ''
    note_name.removeAttribute('disabled')
    note_textArea.removeAttribute('disabled')
    save_btn.removeAttribute('disabled')
    delete_btn.setAttribute('disabled','')
}

function saveNote() {
    note_name.setAttribute('disabled','')
    note_textArea.setAttribute('disabled','')
    save_btn.setAttribute('disabled','')
    notes_arr.push({name: note_name.value, text: note_textArea.value, id: notes_arr.length })
    const note_element = document.createElement('li')
    note_element.id = notes_arr.length - 1
    note_element.name = note_name.value
    note_element.text = note_textArea.value
    note_element.innerHTML = note_name.value
    document.querySelector('.notes').appendChild(note_element)
    note_element.onclick = () => showNote(note_element)
    note_name.value = ''
    note_textArea.value = ''
    delete_btn.setAttribute('disabled','')
}

function showNote(note_element) {
    note_name.value = note_element.name
    note_textArea.value = note_element.text
    delete_btn.removeAttribute('disabled')
    delete_btn.onclick = () => deleteNote(note_element)
}

function deleteNote(note_element) {
    document.querySelector('.notes').removeChild(note_element)
    delete_btn.setAttribute('disabled','')
    note_name.value = ''
    note_textArea.value = ''
}

const save_btn = document.querySelector('.save_btn')
const note_name = document.querySelector('.note_name')
const note_textArea = document.querySelector('.note_textArea')
const delete_btn = document.querySelector('.delete_btn')


let notes_arr = []
save_btn.onclick = () => saveNote()
document.querySelector('.create_btn').onclick = () => createNote()
