// noinspection JSUnresolvedFunction,JSUnresolvedVariable,DuplicatedCode

function wip() {
    mdui.snackbar(translate("wip.main"), {
        buttonText: translate("wip.ok")
    })
}

function switchTheme() {
    const clazz = document.body.classList;
    if (clazz.contains("mdui-theme-layout-dark")) {
        clazz.remove("mdui-theme-layout-dark");
        mdui.snackbar(translate("more-menu.switch-to-day"), {
            buttonText: translate("more-menu.ok")
        })
    } else {
        clazz.add("mdui-theme-layout-dark");
        mdui.snackbar(translate("more-menu.switch-to-night"), {
            buttonText: translate("more-menu.ok")
        })
    }
}