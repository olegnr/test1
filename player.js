
// Конструктор 
function Racket(name, x, y, width, height, color) {
	this.name = name;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;
	this.drawing = function() // Метод рисующий элемент на канве
	{
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	this.clear = function() // Метод стирающий элемент на канве
	{
		ctx.clearRect(this.x, this.y, this.width, this.height);
	}	
	this.moveUp = function() // Метод движения вверх
	{
		this.y = this.y - 6;
	}
	this.moveDown = function() // Метод движения вниз
	{
		this.y = this.y + 6;
	}
}	



$(document).ready(function() 
{   
	var racket1 = new Racket('Left', 0, 10, 10, 60, 'green');
	var racket2 = new Racket('Right', 1014, 10, 10, 60, 'blue');
	
	var pong = document.getElementById("pingpong");
	pong.width  = 1024;
   pong.height = 480;
   ctx = pong.getContext('2d');
   
   //Рисуем ракетки
   racket1.drawing();
   racket2.drawing();
	
	var flagKeyS;
	var flagKeyW;
	var flagDown;
	var flagUp;	
	
	document.addEventListener('keyup', function(event) {
		
		if (event.code == 'KeyS') {
			flagKeyS = 0;
		}
		
		if (event.code == 'ArrowDown') {
			flagDown = 0;
		}
		
		if (event.code == 'KeyW') {
			flagKeyW = 0;
		}
		
		if (event.code == 'ArrowUp') {
			flagUp = 0;
		}
	});
	
	document.addEventListener('keydown', function(event) {
		
		if (event.code == 'KeyS') {
			flagKeyS = 1;
		}
		
		if (event.code == 'ArrowDown') {
			flagDown = 1;
		}
		
		if (event.code == 'KeyW') {
			flagKeyW = 1;
		}
		
		if (event.code == 'ArrowUp') {
			flagUp = 1;
		}
		
		//Игрок 1
		if (flagKeyS == 1) {
			if(racket1.y != 424 )  //Проверка на границу игрового поля
		  	{
		  		racket1.clear();     //Стираем ракетку
		  		racket1.moveDown();  //Задаем новые координаты
		  		racket1.drawing();   // Отображаем ракетку
		  	}
		}
	   if (flagKeyW == 1) {
	   	if(racket1.y != -2)  //Проверка на границу игрового поля
		  	{
			  	racket1.clear();
			  	racket1.moveUp();
			  	racket1.drawing();
			}
	   }
	   
	   //Игрок 2
		if (flagDown == 1) {
			if(racket2.y != 424 )  //Проверка на границу игрового поля
		  	{
		  		racket2.clear();     //Стираем ракетку
		  		racket2.moveDown();  //Задаем новые координаты
		  		racket2.drawing();   // Отображаем ракетку
		  	}
		}
	   if (flagUp == 1) {
	   	if(racket2.y != -2)  //Проверка на границу игрового поля
		  	{
		  		racket2.clear();
			  	racket2.moveUp();
			  	racket2.drawing();
			}
	   }
	});
		
	

});