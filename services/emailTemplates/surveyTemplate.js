const keys = require('../../config/keys');

module.exports = survey => {
    return `<html>
    <div style='text-align: center'>
        <h3>I'd like your input!</h3>
        <p>Please answer the following question:</p>
        <p>${survey}</p>
        <div>
            <a href="${keys.redirectDomain}/api/surveys/thank">Yes</a>
        </div>
        <div>
            <a href="${keys.redirectDomain}/api/surveys/thank">No</a>
        </div>
    </div>
</html>`
}
