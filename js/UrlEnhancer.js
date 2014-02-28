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
        for (url in captured) {
            string = string.replace(url, '<a href="' + url + '" class="enhanced-url enhanced-"' + captured[url] +'">' + url + '</a>');
        }

        return string;
    },

    enhance : function(string) {
        if (!(this.options.link || this.options.email)) {
            return string;
        }

        var captured = {};

        if (this.options.link) {
            this.capture(string, LINK_REGEXP, 'link', captured);
        }

        if (this.options.email) {
            this.capture(string, EMAIL_REGEXP, 'email', captured);
        }

        return this.replace(string, captured);
    }

};