require([
    'jquery',
    'mockup-patterns-base',
    'mockup-patterns-texteditor'
], function($, Base, TextEditor) {
    'use strict';
    var PlominoFormula = Base.extend({
        name: 'plominoformula',
        trigger: '.plomino-formula',
        defaults: {},
        init: function() {
            var self = this;
            var width = self.$el.width();
            self.$el.hide();
            var ed = $('<pre></pre>');
            ed.appendTo(self.$el.parent());
            self.ace = new TextEditor(ed);
            ed.css('width', width);
            self.ace.editor.resize();
            self.ace.setText(self.$el.val());
            self.ace.editor.on('change', function(){
                self.$el.val(self.ace.editor.getValue());
            });
        }
    });
    return PlominoFormula;
});