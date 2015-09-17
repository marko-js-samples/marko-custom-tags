var template = require('./template.marko');

module.exports = function(input, out) {
    var name = input.name;

    template.render({
            name: name
        }, out);
};