const display = document.getElementById('display')

one.onclick   = () => display.innerHTML += '1'
two.onclick   = () => display.innerHTML += '2'
three.onclick = () => display.innerHTML += '3'
four.onclick  = () => display.innerHTML += '4'
five.onclick  = () => display.innerHTML += '5'
six.onclick   = () => display.innerHTML += '6'
seven.onclick = () => display.innerHTML += '7'
eight.onclick = () => display.innerHTML += '8'
nine.onclick  = () => display.innerHTML += '9'
zero.onclick  = () => display.innerHTML += '0'
dot.onclick   = () => display.innerHTML += '.'


add.onclick   = () => display.innerHTML += '+'
sub.onclick   = () => display.innerHTML += '-'
div.onclick   = () => display.innerHTML += '/'
multi.onclick = () => display.innerHTML += '*' 
per.onclick   = () => display.innerHTML += '%'
x.onclick     = () => display.innerHTML = eval(eval(display.innerHTML)+'**2')


equal.onclick = () => display.innerHTML = eval(display.innerHTML)
AC.onclick    = () => display.innerHTML = ''
del.onclick   = () => display.innerHTML = display.innerHTML.slice(0,-1)
