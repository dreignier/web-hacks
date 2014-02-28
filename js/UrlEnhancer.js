var EMAIL_REGEXP = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i,
    LINK_REGEXP = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;


var UrlEnhancer = function(options) {
    var _this = this;
    
    this.options = {
        email : true,
        link : true,
        filter : function(url) {
            return true;
        }
    };

    for (key in options) {
        this.options[key] = options[key];
    }
};

UrlEnhancer.prototype = {

    options : null,

    clean : function(string) {
        // Remove html tags. Keep only the text
        string = string.replace(/<[^\/]+\/>/g, ' ');
        string = string.replace(/<[^>]+>/g, ' ');
        string = string.replace(/<\/[^>]+>/g, ' ');

        return string;
    },

    capture : function(string, regexp, type, result) {
        var captured = regexp.exec(string);

        while (captured && captured.length) {
            var fragment = captured[0];

            if (this.options.filter.call(this, fragment)) {
                result[fragment] = type;
            }

            string = string.replace(fragment, '');
            captured = regexp.exec(string);
        }
    },

    replace : function(string, captured) {
        var index = 0;

        // First, remove every link for the string and put placeholders.
        for (url in captured) {
            while (string.contains(url)) {
                string = string.replace(url, '%%%PLACEHOLDER' + index + '%%%');
            }

            index = index + 1;
        }

        index = 0;

        // Then replace the placeholders
        for (url in captured) {
            var type = captured[url];
            string = string.replace(new RegExp('%%%PLACEHOLDER' + index + '%%%', 'g'), '<a href="' + (type == 'email' ? 'mailto:' : '') + url + '" class="enhanced-url enhanced-' + type +'">' + url + '</a>');

            index = index + 1;
        }

        return string;
    },

    enhance : function(string) {
        if (!(this.options.link || this.options.email)) {
            return string;
        }

        var copy = this.clean(string),
            captured = {};

        if (this.options.link) {
            this.capture(copy, LINK_REGEXP, 'link', captured);
        }

        if (this.options.email) {
            this.capture(copy, EMAIL_REGEXP, 'email', captured);
        }

        return this.replace(string, captured);
    }

};