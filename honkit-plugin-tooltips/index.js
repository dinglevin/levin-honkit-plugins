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
            process: function (block) {
                const pluginConfig = this.config.get('pluginsConfig.tooltips');
                const delimiter = block.kwargs?.delimiter || pluginConfig?.delimiter || "@@";
                const direction = block.kwargs?.direction || "bottom";
                const { body, tooltipstext } = doSplit(block.body.trim(), delimiter);
                return `
                    <div class="tooltips">
                        ${body}
                        <span class="tooltipstext-${direction}">${tooltipstext}</span>
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
