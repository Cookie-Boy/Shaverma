class Shaverma {

    name;
    imageSrc;
    description;
    weight;
    cost;
    composition;
    isSelected = false;

    constructor(name, imageSrc, description, weight, cost, composition) {
        this.name = name;
        this.imageSrc = imageSrc;
        this.description = description;
        this.weight = weight;
        this.cost = cost;
        this.composition = composition;
    }
}

black = new Shaverma('Шаурма "Black"', 'images/header_page/black_shaverma.jpeg', 'Вкусная чёрная шава, хороша для негров', 340, 400, 'Черный лаваш, свинина, картошка фри, маринованный огурчик, свежий помидор, чёрный фирменный соус, краситель: натуральные чернила осьминога');
gigant = new Shaverma('Шаурма Гигант', 'images/header_page/XXL_shaverma.png', 'Большая шаурма для больших мальчиков', 600, 600, 'Лаваш, говядина, куриное филе, картошка фри, перец халапеньо, свежий помидор, маринованный огурчик, корейская морковка, острый соус');
bigBro = new Shaverma('Шаурма Биг Бро', 'images/header_page/XXL.jpg','Новинка! Новый, свежий, многогранный вкус, который собрал в себе то, что понравится каждому! ТоЮ что мы все так сильно любим!!' , 450, 500,'Розовый лаваш, мясо креветок, горчичный соус, пекинская капуста, соус барбекю, сырный соус, перец халапеньо, свежая морковка, семена подсолнечника' )
localStorage.setItem('bigbro', JSON.stringify(bigBro));

localStorage.setItem('black', JSON.stringify(black));
localStorage.setItem('gigant', JSON.stringify(gigant));
