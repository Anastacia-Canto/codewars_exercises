function likes(names) {
    if (names.length == 0) return ("no one likes this");
    if (names.length == 1) return (`${names[0]} likes this`);
    if (names.length == 2 || names.length == 3){
        let last = names.pop();
        return (`${names.join(", ")} and ${last} like this`);
    };
    return (`${names.slice(0, 2).join(", ")} and ${names.length - 2} others like this`);
};

let array = ["Peter", "Jacob", "Alex", "Mark", "Jack", "Joe"];
console.log(likes(array));
