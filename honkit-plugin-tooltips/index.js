module.exports = {
    blocks: {
        tooltips: {
            process: (block) => {
                const body = block.body.trim();
                const title = block.kwargs.title;
                return `
                    <div class="tooltips">
                        ${body}
                        <span class="tooltipstext">${title}</span>
                    </div>
                `
            }
        }
    },
    website: {
        asserts: './assets',
        cass: [
            'plugin.css'
        ]
    }
}