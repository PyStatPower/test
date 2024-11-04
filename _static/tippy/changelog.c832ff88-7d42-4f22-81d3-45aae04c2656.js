selector_to_html = {"a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\ud83c\udff7 0.0.1 (2024-09-26)<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#a1-2024-09-05\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\ud83c\udff7 0.0.1a1 (2024-09-05)<a class=\"headerlink\" href=\"#a1-2024-09-05\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#a3-2024-09-06\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\ud83c\udff7 0.0.1a3 (2024-09-06)<a class=\"headerlink\" href=\"#a3-2024-09-06\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u66f4\u65b0\u65e5\u5fd7<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#changelog\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Changelog<a class=\"headerlink\" href=\"#changelog\" title=\"Link to this heading\">#</a></h1><h2>\ud83c\udff7 0.0.2 (2024-09-27)<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\ud83c\udff7 0.0.2 (2024-09-27)<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#a2-2024-09-05\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\ud83c\udff7 0.0.1a2 (2024-09-05)<a class=\"headerlink\" href=\"#a2-2024-09-05\" title=\"Link to this heading\">#</a></h2>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false, theme: 'light',

            });
        };
    };
    console.log("tippy tips loaded!");
};
