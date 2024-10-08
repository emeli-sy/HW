// Даден е масив, който съдържа информация за български владетели, и периода на тяхното управление.
// Всеки елемент на масива е масив със следните данни:
// 	[<име>, <начална година на управление>, <крайна година на управление>]

// ЗАДАЧА: Изпишете в конзолата имената на онези български владетели, които са управлявали повече от 15 години.
// Разбира се, искаме да видим имената изписани според конвенциите за имена на съществителни-собствени: за целта може да използвате върху всяко име функцията toCamelCaseCyr(), която връща подадения й низ в скобите конвертиран до CamelCase
// Например:
	// console.log( toCamelCaseCyr('асПАРуХ') ); // Аспарух

// >>>>>>>>>>НАЧАЛО НА ВАШИЯ КОД >>>>>>>>>>


let rulers = [
	["асПАРуХ",681, 700 ],
	["тЕРвеЛ", 700,718 ],
	["СеВаР", 738,753],
	["телЕРИГ", 766,777],
	["каРДАм", 777, 803],
	["крум", 803,814 ],
	["ОмурТАг",814,831],
];



for (let i = 0; i < rulers.length; i++) {
    let beginningOfReign = rulers[i][1];
    let endOfReign = rulers[i][2];
    let reign = endOfReign - beginningOfReign;

    if (reign>15) {
    console.log(`${rulers[i][0]} е управлявал ${reign} години.`);
    }
};



// <<<<<<<<<< КРАЙ НА ВАШИЯ КОД <<<<<<<<<<<<<

// Очакван резултат,в конзолата:
// Аспарух е управлявал 19 години.
// Тервел е управлявал 18 години.
// Кардам е управлявал 26 години.
// Омуртаг е управлявал 17 години.








// do not modify!
function toCamelCaseCyr(str) {
	return str.toLowerCase()
			    	.replace(/(?:\b|^|[^а-яА-Я])([а-яА-Я])/g, (all, chr) => chr.toUpperCase());
}