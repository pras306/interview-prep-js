// LEETCODE NO. 1268

/*

You are given an array of strings products and a string searchWord.

Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return a list of lists of the suggested products after each character of searchWord is typed.

*/

const suggestedProducts = (products, searchWord) => {
    const result = [];
    let prefix = '';

    for (const char of searchWord) {
        prefix += char;
        const suggestions = [];

        for (const product of products) {
            if (product.startsWith(prefix)) {
                suggestions.push(product);
            }
        }

        result.push(suggestions.sort().slice(0, 3));
    }

    return result;
};

console.log(suggestedProducts(["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mouse"));

console.log(suggestedProducts(["havana"], "havana"));