var fs = require('fs');
var glob = require('glob');
var matter = require('gray-matter');
var removeMd = require('remove-markdown');
var striptags = require('striptags');
var path = require('path');

module.exports = indexer;


function indexer(input, output) {
    var self = this;
    var stream;
    this.list = [];

    //defaults
    this.input = 'content/**';
    this.output = 'static/site-index.json';

    this.baseDir = path.dirname(this.input);
}

indexer.prototype.setInput = function(input) {
    this.input = input;
}

indexer.prototype.setOutput = function(output) {
    this.output = output;
}

indexer.prototype.index = function(input, output) {
    var self = this;

    if (input) {
        self.input = input;
    }

    if (output) {
        self.output = output;
    }

    self.list = [];
    self.stream = fs.createWriteStream(self.output);
    self.readDirectory(self.input);
    self.stream.write(JSON.stringify(self.list, null, 4));
    self.stream.end();
}


indexer.prototype.readDirectory = function(path) {
    var self = this;
    var files = glob.sync(path);
    var len = files.length;
    for (var i = 0; i < len; i++) {
        var stats = fs.lstatSync(files[i]);
        if (!stats.isDirectory()) {
            self.readFile(files[i]);
        }
    }
    return true;
}

indexer.prototype.readFile = function(filePath) {
    var self = this;
    var ext = path.extname(filePath);
    var meta = matter.read(filePath, {
        delims: '---',
        lang: 'yaml'
    });
    
    if (meta.data.draft === true || meta.data.excludeFromIndex === true) {
        return;
    }

    if (ext == '.md') {
        var plainText = removeMd(meta.content);
    } else {
        var plainText = striptags(meta.content);
    }

    var uri = '/' + filePath.substring(0, filePath.lastIndexOf('.'));
    uri = uri.replace(self.baseDir + '/', '');
    uri = uri.replace(/\/_index$/, '')

    if (meta.data.slug != undefined) {
        uri = path.dirname(uri) + meta.data.slug;
    }

    if (meta.data.url != undefined) {
        uri = meta.data.url
    }

    let description = meta.content.substring(0, 144);

    if (meta.data.description != undefined) {
        description = meta.data.description
    }

    var tags = [];

    if (meta.data.tags != undefined) {
        tags = meta.data.tags;
    }

    var item = {
        'uri': uri,
        'title': meta.data.title,
        'content': plainText,
        'rawContent': meta.content,
        'tags': tags,
        'description': description
    };
    self.list.push(item);
}
