selector_to_html = {"a[href=\"models/one_proportion.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">pystatpower.models.one_proportion<a class=\"headerlink\" href=\"#pystatpower-models-one-proportion\" title=\"Link to this heading\">#</a></h1>", "a[href=\"models/two_proportion.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">pystatpower.models.two_proportion<a class=\"headerlink\" href=\"#pystatpower-models-two-proportion\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#api\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">API \u53c2\u8003<a class=\"headerlink\" href=\"#api\" title=\"Link to this heading\">#</a></h1>", "a[href=\"models/index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">pystatpower.models<a class=\"headerlink\" href=\"#pystatpower-models\" title=\"Link to this heading\">#</a></h1>", "a[href=\"numeric.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">pystatpower.numeric<a class=\"headerlink\" href=\"#pystatpower-numeric\" title=\"Link to this heading\">#</a></h1>", "a[href=\"option.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">pystatpower.option<a class=\"headerlink\" href=\"#pystatpower-option\" title=\"Link to this heading\">#</a></h1>"}
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
