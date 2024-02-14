let dataSlider = [
	{
		img: "image/piple.png",
		name: "Хозе-Рауль Капабланка"
	},
	{
		img: "image/piple.png",
		name: "Эммануил Ласкер"
	},
	{
		img: "image/piple.png",
		name: "Александр Алехин"
	},
	{
		img: "image/piple.png",
		name: "Арон Нимцович"
	},
	{
		img: "image/piple.png",
		name: "Рихард Рети"
	},
	{
		img: "image/piple.png",
		name: "Остап Бендер"
	}
]
let container = document.querySelector(".slider__wrapp")
let slider = document.querySelector(".slider")
let btnLeft = document.querySelector(".left")
let btnRight = document.querySelector(".right")
let countCurrent = document.querySelector(".current")

let count = slider.clientWidth > 1000 ? 3 : 1
countCurrent.textContent = count
function generateDom(){
	if(!dataSlider.length)return

	let str = ``
	for(let key of dataSlider){
		let stingItem = `
			<div class="slider-item">
				<img src=${key.img} alt="none">
				<h6 class="name-piple">${key.name}</h6>
				<p>Чемпион мира по шахматам</p>
				<button>Подробнее</button>
			</div>
		`
		str += stingItem
	}
	container.innerHTML = str
}
generateDom()

function nextLeft(){
	if(count === 1) count = 7
	count--
	dataSlider = [dataSlider.pop(), ...dataSlider]
	countCurrent.textContent = count
	generateDom()
}

function nextRight(){
	if(count === 6) count = 0
	count++
	dataSlider = [dataSlider.pop(), ...dataSlider]
	countCurrent.textContent = count
	generateDom()
}

// последний на место первого
btnLeft.addEventListener('click', () => {
	nextLeft()
})

setInterval(() => {
nextRight()
}, 4000)

// первый на место последнего
btnRight.addEventListener('click', () => {
nextRight()
})




let position = 0;

const slidesToScroll = 1;
const contain = document.querySelector(".slider");

const track = document.querySelector(".card");
const btnPrev = document.querySelector(".back");
const btnNext = document.querySelector(".next");
const btnPrevDis = document.querySelector(".back circle");
const btnNextDis = document.querySelector(".next circle");

const item = document.querySelector(".card-el");

let dotList = document.querySelectorAll('.circle-slider')
console.log(item.clientWidth);
let count1 = 0

btnNext.addEventListener('click', (e) => {
	e.preventDefault()
	e.stopPropagation()
	if(count1 >= 4)return
	
	if(count1 === 3){
		count1++
		position -= item.clientWidth + 40 
		setPosition()
		dotList[count1 - 1].classList.remove('activ')
		dotList[count1].classList.add('activ')
		btnNextDis.classList.add('none')
	}else{
		count1++
		position -= item.clientWidth + 40 
		setPosition()
		dotList[count1 - 1].classList.remove('activ')
		dotList[count1].classList.add('activ')
		btnPrevDis.classList.remove('none')
	}
});
btnPrev.addEventListener('click', (e) => {
	e.preventDefault()
	e.stopPropagation()
	if(count1 <= 0)return
	
	if(count1 === 1){
		count1--
		position += item.clientWidth + 40 
		setPosition()
		dotList[count1 + 1].classList.remove('activ')
		dotList[count1].classList.add('activ')
		btnPrevDis.classList.add('none')
	}else{
		count1--
		position += item.clientWidth + 40 
		setPosition()
		dotList[count1 + 1].classList.remove('activ')
		dotList[count1].classList.add('activ')
		btnNextDis.classList.remove('none')
	}
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
}
