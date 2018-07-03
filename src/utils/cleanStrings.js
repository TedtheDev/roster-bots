const toPropertyValue = string => {
    return string.replace(/\s/g, '-');
}

const CleanString = {
    toPropertyValue: toPropertyValue
}

module.exports = CleanString;