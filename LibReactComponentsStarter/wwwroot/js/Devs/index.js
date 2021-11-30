var reactDevs = (function () {
    var api = {
        renderReactDevs: function () { renderReactDevs(); }
    }

    function renderReactDevs() {
        var container = $("#reactTableContainer")[0];
        ClientApp.Components.renderDevsEditor(container, devsWebApi);
    }

    return api;
})();
