// # Chapter Three
/**********************************************************************************
 # Some Shorthand With AND, OR Oparator in javaScript
**********************************************************************************/

var name = ''

var firstName = ''

if (name.length == 0) {
    firstName = 'sAiFuL'
}

console.log(firstName)

// To Use Shorthand With OR Oparator

var lastName = 'bAppY'
var surName = lastName || 'SAIFUL ISLAM BAPPY'
console.log(surName)

var middleName = ''
var fullName = middleName || 'SAIFUL ISLAM BAPPY'
console.log(fullName)

// To Use Shorthand With AND Oparator

var isOk = true
isOk && console.log('Everything is OK')