webpackJsonp([1],[,,,,,,,,,,,,,function(t,e,o){"use strict";var n=o(6),i=o(1),s=o(16);n.a.use(i.c);var r={notes:[],activeNote:{}},a={ADD_NOTE:function(t){var e={text:"New note",favorite:!1};t.notes.push(e),t.activeNote=e},EDIT_NOTE:function(t,e){t.activeNote.text=e},DELETE_NOTE:function(t){t.notes.splice(t.notes.indexOf(t.activeNote),1),t.activeNote=t.notes[0]||{}},TOGGLE_FAVORITE:function(t){t.activeNote.favorite=!t.activeNote.favorite},SET_ACTIVE_NOTE:function(t,e){t.activeNote=e}},c={notes:function(t){return t.notes},activeNote:function(t){return t.activeNote},activeNoteText:function(t){return t.activeNote.text}};e.a=new i.c.Store({state:r,mutations:a,actions:s,getters:c})},function(t,e,o){var n=o(0)(o(17),o(55),null,null);t.exports=n.exports},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(6),i=o(14),s=o.n(i),r=o(13);n.a.config.productionTip=!1,new n.a({el:"#app",store:r.a,template:"<App/>",components:{App:s.a}})},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o.d(e,"addNote",function(){return n}),o.d(e,"editNote",function(){return i}),o.d(e,"deleteNote",function(){return s}),o.d(e,"updateActiveNote",function(){return r}),o.d(e,"toggleFavorite",function(){return a});var n=function(t){(0,t.commit)("ADD_NOTE")},i=function(t,e){(0,t.commit)("EDIT_NOTE",e.target.value)},s=function(t){(0,t.commit)("DELETE_NOTE")},r=function(t,e){(0,t.commit)("SET_ACTIVE_NOTE",e)},a=function(t){(0,t.commit)("TOGGLE_FAVORITE")}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(51),i=o.n(n),s=o(50),r=o.n(s),a=o(49),c=o.n(a);e.default={components:{Toolbar:i.a,NotesList:r.a,Editor:c.a}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(1);e.default={computed:o.i(n.a)(["activeNoteText"]),methods:o.i(n.b)(["editNote"])}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(7),i=o.n(n),s=o(1);e.default={data:function(){return{show:"all"}},computed:i()({filteredNotes:function(){return"all"===this.show?this.$store.state.notes:"favorites"===this.show?this.$store.state.notes.filter(function(t){return t.favorite}):void 0}},o.i(s.a)(["activeNote"])),methods:i()({},o.i(s.b)(["updateActiveNote"]))}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(7),i=o.n(n),s=o(1);e.default={computed:o.i(s.a)(["activeNote"]),methods:i()({},o.i(s.b)(["addNote","deleteNote","toggleFavorite"]))}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,o){var n=o(0)(o(18),o(53),null,null);t.exports=n.exports},function(t,e,o){var n=o(0)(o(19),o(52),null,null);t.exports=n.exports},function(t,e,o){var n=o(0)(o(20),o(54),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"notes-list"}},[o("div",{attrs:{id:"list-header"}},[o("h2",[t._v("Notes | coligo")]),t._v(" "),o("div",{staticClass:"btn-group btn-group-justified",attrs:{role:"group"}},[o("div",{staticClass:"btn-group",attrs:{role:"group"}},[o("button",{staticClass:"btn btn-default",class:{active:"all"===t.show},attrs:{type:"button"},on:{click:function(e){t.show="all"}}},[t._v("\n          All Notes\n        ")])]),t._v(" "),o("div",{staticClass:"btn-group",attrs:{role:"group"}},[o("button",{staticClass:"btn btn-default",class:{active:"favorites"===t.show},attrs:{type:"button"},on:{click:function(e){t.show="favorites"}}},[t._v("\n          Favorites\n        ")])])])]),t._v(" "),o("div",{staticClass:"container"},[o("div",{staticClass:"list-group"},t._l(t.filteredNotes,function(e){return o("a",{staticClass:"list-group-item",class:{active:t.activeNote===e},attrs:{href:"#"},on:{click:function(o){t.updateActiveNote(e)}}},[o("h4",{staticClass:"list-group-item-heading"},[t._v("\n          "+t._s(e.text.trim().substring(0,30))+"\n        ")])])}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"note-editor"}},[o("textarea",{staticClass:"form-control",domProps:{value:t.activeNoteText},on:{input:t.editNote}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"toolbar"}},[o("i",{staticClass:"glyphicon glyphicon-plus",on:{click:t.addNote}}),t._v(" "),o("i",{staticClass:"glyphicon glyphicon-star",class:{starred:t.activeNote.favorite},on:{click:t.toggleFavorite}}),t._v(" "),o("i",{staticClass:"glyphicon glyphicon-remove",on:{click:t.deleteNote}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("toolbar"),t._v(" "),o("notes-list"),t._v(" "),o("editor")],1)},staticRenderFns:[]}}],[15]);
//# sourceMappingURL=app.a1f5fb741eae0b565f07.js.map