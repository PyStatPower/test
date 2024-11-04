selector_to_html = {"a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u793a\u4f8b<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p>pystatpower \u63d0\u4f9b\u4e86\u4e00\u4e9b\u6a21\u5757\u7528\u4e8e\u5bf9\u4e0d\u540c\u5047\u8bbe\u68c0\u9a8c\u573a\u666f\u4e0b\u7684\u5206\u6790\uff0c\u4e0b\u9762\u662f\u4e00\u4e9b\u5177\u4f53\u7684\u4ee3\u7801\u793a\u4f8b\uff1a</p>", "a[href=\"#id5\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">\u4f30\u7b97\u6837\u672c\u91cf<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h4><p>\u8f93\u51fa:</p>", "a[href=\"#id8\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">\u8ba1\u7b97\u68c0\u9a8c\u6548\u80fd<a class=\"headerlink\" href=\"#id8\" title=\"Link to this heading\">#</a></h4><p>\u8f93\u51fa:</p>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5feb\u901f\u5f00\u59cb<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><h2>\u5b89\u88c5<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u4f7f\u7528 PyStatPower \u524d\uff0c\u9700\u8981\u5148\u5b89\u88c5 <a class=\"reference external\" href=\"https://www.python.org/downloads/\" rel=\"noreferer noopener\" target=\"_blank\">Python \u89e3\u91ca\u5668</a>\uff0c\u652f\u6301 3.10 \u53ca\u4ee5\u4e0a\u7248\u672c\u3002</p><p>\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 pystatpower\uff1a</p>", "a[href=\"#id6\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u4e24\u72ec\u7acb\u6837\u672c\u7387\u5dee\u5f02\u6027\u68c0\u9a8c<a class=\"headerlink\" href=\"#id6\" title=\"Link to this heading\">#</a></h3><h4>\u4f30\u7b97\u6837\u672c\u91cf<a class=\"headerlink\" href=\"#id7\" title=\"Link to this heading\">#</a></h4><p>\u8f93\u51fa:</p>", "a[href=\"#id7\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">\u4f30\u7b97\u6837\u672c\u91cf<a class=\"headerlink\" href=\"#id7\" title=\"Link to this heading\">#</a></h4><p>\u8f93\u51fa:</p>", "a[href=\"#id4\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u5355\u6837\u672c\u7387\u5dee\u5f02\u6027\u68c0\u9a8c<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h3><h4>\u4f30\u7b97\u6837\u672c\u91cf<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h4><p>\u8f93\u51fa:</p>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5b89\u88c5<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u4f7f\u7528 PyStatPower \u524d\uff0c\u9700\u8981\u5148\u5b89\u88c5 <a class=\"reference external\" href=\"https://www.python.org/downloads/\" rel=\"noreferer noopener\" target=\"_blank\">Python \u89e3\u91ca\u5668</a>\uff0c\u652f\u6301 3.10 \u53ca\u4ee5\u4e0a\u7248\u672c\u3002</p><p>\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 pystatpower\uff1a</p>"}
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
