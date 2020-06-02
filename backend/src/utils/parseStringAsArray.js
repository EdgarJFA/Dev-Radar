module.exports = function parseStrinsAsArray (arrayAsString) {
   return arrayAsString.split(',').map(tech => tech.trim());
}