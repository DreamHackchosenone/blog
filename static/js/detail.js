$(document).ready(function () {
    var testEditormdView;
    testEditormdView = editormd.markdownToHTML("test-editormd-view", {
    htmlDecode      : "style,script,iframe",  // you can filter tags decode
    tocm            : true,    // Using [TOCM]
    emoji           : true,
  });
})
