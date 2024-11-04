selector_to_html = {"a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u793a\u4f8b<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u8f93\u51fa\uff1a</p>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5b89\u88c5<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u9e23\u8c22<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#pystatpower\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">PyStatPower<a class=\"headerlink\" href=\"#pystatpower\" title=\"Link to this heading\">#</a></h1><p><a class=\"reference external\" href=\"https://github.com/PyStatPower/PyStatPower/actions/workflows/release.yml?query=branch:main\" rel=\"noreferer noopener\" target=\"_blank\"><img alt=\"build\" src=\"https://img.shields.io/github/actions/workflow/status/PyStatPower/PyStatPower/release.yml?branch=main&amp;label=build\"/></a>\n<a class=\"reference external\" href=\"https://github.com/PyStatPower/PyStatPower/actions/workflows/check.yml?query=branch:main\" rel=\"noreferer noopener\" target=\"_blank\"><img alt=\"test\" src=\"https://img.shields.io/github/actions/workflow/status/PyStatPower/PyStatPower/check.yml?branch=main&amp;label=test\"/></a>\n<a class=\"reference external\" href=\"https://github.com/PyStatPower/PyStatPower/actions/workflows/black.yml?query=branch:main\" rel=\"noreferer noopener\" target=\"_blank\"><img alt=\"lint\" src=\"https://img.shields.io/github/actions/workflow/status/PyStatPower/PyStatPower/black.yml?branch=main&amp;label=lint\"/></a>\n<a class=\"reference external\" href=\"https://badge.fury.io/py/pystatpower\" rel=\"noreferer noopener\" target=\"_blank\"><img alt=\"PyPI - Version\" src=\"https://img.shields.io/pypi/v/pystatpower\"/></a>\n<img alt=\"Python Version from PEP 621 TOML\" src=\"https://img.shields.io/python/required-version-toml?tomlFilePath=https%3A%2F%2Fraw.githubusercontent.com%2FPyStatPower%2FPyStatPower%2Fmain%2Fpyproject.toml\"/>\n<img alt=\"GitHub License\" src=\"https://img.shields.io/github/license/PyStatPower/PyStatPower\"/>\n<img alt=\"PyPI - Status\" src=\"https://img.shields.io/pypi/status/PyStatPower\"/>\n<img alt=\"PyPI - Downloads\" src=\"https://img.shields.io/pypi/dm/pystatpower\"/></p><p><a class=\"reference external\" href=\"https://github.com/psf/black\" rel=\"noreferer noopener\" target=\"_blank\"><img alt=\"Code style: black\" src=\"https://img.shields.io/badge/code%20style-black-000000.svg\"/></a>\n<a class=\"reference external\" href=\"https://codecov.io/gh/PyStatPower/PyStatPower\" rel=\"noreferer noopener\" target=\"_blank\"><img alt=\"codecov\" src=\"https://codecov.io/gh/PyStatPower/PyStatPower/graph/badge.svg?token=P9UWC8Q4P6\"/></a></p>"}
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
