const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')
const pieces = document.querySelectorAll('img')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragsend', dragEnd)

for(const empty of empties){
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart () {
    this.className += ' hold'
        // ^ += appends
    setTimeout(() => this.classname = 'invisible', 0)
}

function dragEnd () {
    this.className = 'fill'
}

function dragOver (e) {
    e.preventDefault()
}

function dragEnter (e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave () {
    this.className = 'empty'
}

function dragDrop () {
    this.className = 'empty'
    this.appendChild(fill)
}