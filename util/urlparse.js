
module.exports = url => {

    if (!url)
        return '';

    if (url.indexOf('@') != -1)
        return '';

    if (url.indexOf(',') != -1)
        url = url.split(',')[0];

    if (!url.startsWith('http'))
        url = 'http://' + url;

    return url;
};
