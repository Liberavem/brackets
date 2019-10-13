module.exports = function check(str, bracketsConfig) {

    let map = new Map();
    for (let i = 0; i < bracketsConfig.length; i++) {
        let element = bracketsConfig[i];
        map.set(element[1], element[0])
    }
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        let element = str[i];
        let values = Array.from(map.values());
        if (values.includes(element)) {
            if (element === map.get(element)) {
                let lastElement = stack.pop();
                if (lastElement !== element) {
                    if (lastElement) {
                        stack.push(lastElement);
                    }
                    stack.push(element);
                }
            } else {
                stack.push(element);
            }
        } else {
            let lastElement = stack.pop();
            let correctBracket = map.get(element);
            if (lastElement !== correctBracket) {
                return false;
            }
        }

    }
    return stack.length ? false : true;
}
