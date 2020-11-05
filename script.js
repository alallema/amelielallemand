var random_image_array = [];
var random_color_array = ["#ef5fa7","#095a59", "#d6d4d5", "#971a5f", "#FF9500", 
"#ff9500", "#1ae7cf", "#542e8b", "#56c1fe", "#225b7b", "#617d8a", "#ff644e"];
var path = './images/';
for (let i = 1; i < 13; i++) {
	random_image_array.push(path + i + '.jpeg');
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
shuffle(random_image_array);
shuffle(random_color_array);
console.log(random_image_array);
console.log(random_color_array);

var container = document.querySelector("#container");
var body = document.querySelector("body");

var j = 0;
body.style.backgroundColor = random_color_array[j];
container.style.backgroundImage = 'url(' + random_image_array[j] + ')';

function displayImg() {
	if (j == 12)
		j = 0;
	body.style.backgroundColor = random_color_array[j];
	container.style.backgroundImage =  'url(' + random_image_array[j] + ')';
	j++;
	console.log(j);
}