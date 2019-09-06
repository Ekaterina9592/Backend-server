
const random = require('randomstring');


class StringUtils {
    /**
     * Генерация Токена
     * @param {integer} length
     */
    static generateRandomAlphanumericToken(length) {
        return random.generate({
            length: length,
            charset: 'alphanumeric',
            readable: true
        });
    }

    /**
     * Удаляет в строке все лишние пробелы по бокам и внутри
     * @param {string} str
     * @returns {string}
     */
    static trimStr(str) {
        return str.replace(/\s{2,}/g, ' ').trim();
    }
}


module.exports = StringUtils;
