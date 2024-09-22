const ALERT_STYLES = {
    info:'info',
    tip:'success',
    danger:'danger',
    working:'warning'
};

const ALLERT_STYLES_CLASS = {
    info: "fa fa-info-circle",
    tip: "fa fa-mortar-board",
    danger: "fa fa-exclamation-circle",
    working: "fa fa-wrench"
}

function wrapIfHint(body, hintStyle) {
    if (hintStyle) {
        return `<div class="alert alert-${ALERT_STYLES[hintStyle]} hints-alert">
            <div class="hints-icon"><i class="${ALLERT_STYLES_CLASS[hintStyle]}"></i></div>
            <div class="hints-container">${body}</div>
        </div>`
    }
    return body;
}

function doSplit(body, delimiter) {
    const list = body.split(delimiter);
    if (list.length === 0) {
        return {
            body: "",
            tooltipstext: "",
        }
    }
    if (list.length === 1) {
        return {
            body: list[0],
            tooltipstext: "EMPTY",
        }
    }
    return {
        body: list[0].trim(),
        tooltipstext: list[1].trim(),
    }
}

module.exports = {
    blocks: {
        tooltips: {
            process: async function (block) {
                const pluginConfig = this.config.get('pluginsConfig.tooltips');
                const delimiter = block.kwargs?.delimiter || pluginConfig?.delimiter || "@@";
                const direction = block.kwargs?.direction || "bottom";
                const hintStyle = block.kwargs?.hintStyle;
                const { body, tooltipstext } = doSplit(block.body.trim(), delimiter);

                const renderedBody = await this.book.renderBlock("markdown", body);
                const rendredTooltipsText = await this.book.renderBlock("markdown", tooltipstext);

                const wrappedBody = wrapIfHint(renderedBody, hintStyle);

                return `
                    <div class="tooltips">
                        ${wrappedBody}
                        <div class="tooltipstext-${direction}">${rendredTooltipsText}</div>
                    </div>
                `
            }
        }
    },
    website: {
        assets: './assets',
        css: [
            'plugin.css'
        ]
    }
}
