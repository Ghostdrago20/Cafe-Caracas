import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: false,
})
export class MenuPage implements OnInit {
  selectedCategory: string = 'Cafés';

  categories = [
    { name: 'Cafés', icon: 'cafe', image: 'assets/images/cat_cafes.png' },
    { name: 'Postres', icon: 'pie-chart', image: 'assets/images/cat_postres.png' },
    { name: 'Panadería', icon: 'basket', image: 'assets/images/cat_pan.png' },
    { name: 'Helados', icon: 'ice-cream', image: 'assets/images/cafe_product.png' },
    { name: 'Jugos', icon: 'water', image: 'assets/images/cafe_product.png' },
    { name: 'Comidas', icon: 'restaurant', image: 'assets/images/cafe_hero.png' }
  ];

  menuItems = {
    'Cafés': [
      { name: 'Espresso', description: 'Intenso y aromático', price: '$2.00', image: 'assets/images/cat_cafes.png' },
      { name: 'Cappuccino', description: 'Espresso con leche vaporizada y espuma', price: '$3.50', image: 'assets/images/cat_cafes.png' },
      { name: 'Latte Macchiato', description: 'Leche manchada con un toque de espresso', price: '$3.80', image: 'assets/images/cat_cafes.png' },
      { name: 'Americano', description: 'Espresso diluido en agua caliente', price: '$2.50', image: 'assets/images/cat_cafes.png' },
      { name: 'Mocha', description: 'Espresso con chocolate y leche vaporizada', price: '$4.00', image: 'assets/images/cat_cafes.png' },
      { name: 'Flat White', description: 'Doble espresso con leche microespumada', price: '$3.50', image: 'assets/images/cat_cafes.png' },
      { name: 'Macchiato', description: 'Espresso cortado con una pizca de espuma', price: '$2.50', image: 'assets/images/cat_cafes.png' },
      { name: 'Frappuccino', description: 'Café helado batido con crema', price: '$4.50', image: 'assets/images/cat_cafes.png' },
      { name: 'Cold Brew', description: 'Extracción en frío, suave y refrescante', price: '$4.00', image: 'assets/images/cat_cafes.png' },
      { name: 'Irish Coffee', description: 'Café con whiskey irlandés y crema', price: '$6.00', image: 'assets/images/cat_cafes.png' }
    ],
    'Postres': [
      { name: 'Pastel de Chocolate', description: 'Doble chocolate con frambuesas', price: '$4.50', image: 'assets/images/cat_postres.png' },
      { name: 'Tartaleta de Frutas', description: 'Masa crujiente con crema y frutas', price: '$4.00', image: 'assets/images/cat_postres.png' },
      { name: 'Macarons', description: 'Surtido de macarons artesanales (3 un.)', price: '$5.00', image: 'assets/images/cat_postres.png' },
      { name: 'Tiramisú', description: 'Clásico italiano con café y mascarpone', price: '$5.50', image: 'assets/images/cat_postres.png' },
      { name: 'Cheesecake', description: 'Tarta de queso con sirope de fresa', price: '$4.50', image: 'assets/images/cat_postres.png' },
      { name: 'Brownie', description: 'Brownie caliente con helado de vainilla', price: '$4.80', image: 'assets/images/cat_postres.png' },
      { name: 'Alfajores', description: 'Rellenos de abundante dulce de leche', price: '$3.00', image: 'assets/images/cat_postres.png' },
      { name: 'Tarta de Limón', description: 'Lemon pie con merengue suizo', price: '$4.00', image: 'assets/images/cat_postres.png' },
      { name: 'Volcán de Chocolate', description: 'Centro líquido de chocolate caliente', price: '$5.00', image: 'assets/images/cat_postres.png' },
      { name: 'Red Velvet', description: 'Bizcocho rojo suave con frosting de queso', price: '$4.50', image: 'assets/images/cat_postres.png' }
    ],
    'Panadería': [
      { name: 'Croissant', description: 'Recién horneado, crujiente de mantequilla', price: '$2.00', image: 'assets/images/cat_pan.png' },
      { name: 'Pan de Masa Madre', description: 'Hogaza artesanal de fermentación lenta', price: '$6.00', image: 'assets/images/cat_pan.png' },
      { name: 'Baguette Rústica', description: 'Tradicional francesa, corteza crujiente', price: '$3.00', image: 'assets/images/cat_pan.png' },
      { name: 'Pan de Queso', description: 'Bollo suave relleno de queso blanco', price: '$1.50', image: 'assets/images/cat_pan.png' },
      { name: 'Focaccia', description: 'Pan italiano con romero y aceite de oliva', price: '$4.00', image: 'assets/images/cat_pan.png' },
      { name: 'Trenza Dulce', description: 'Pan dulce trenzado con azúcar', price: '$2.50', image: 'assets/images/cat_pan.png' },
      { name: 'Cachito de Jamón', description: 'Masa suave rellena de jamón ahumado', price: '$2.50', image: 'assets/images/cat_pan.png' },
      { name: 'Roles de Canela', description: 'Roles glaseados con canela y pasas', price: '$3.00', image: 'assets/images/cat_pan.png' },
      { name: 'Empanada Horneada', description: 'Rellena de carne, pollo o queso', price: '$2.00', image: 'assets/images/cat_pan.png' },
      { name: 'Pan Campesino', description: 'Pan grande ideal para compartir', price: '$5.00', image: 'assets/images/cat_pan.png' }
    ],
    'Helados': [
      { name: 'Vainilla', description: 'Helado artesanal con vaina de vainilla', price: '$3.00', image: 'assets/images/cafe_product.png' },
      { name: 'Fresa', description: 'Refrescante sabor a fresas naturales', price: '$3.00', image: 'assets/images/cafe_product.png' },
      { name: 'Chocolate Oscuro', description: 'Helado cremoso de cacao al 70%', price: '$3.50', image: 'assets/images/cafe_product.png' },
      { name: 'Pistacho', description: 'Helado premium de pistacho tostado', price: '$4.00', image: 'assets/images/cafe_product.png' },
      { name: 'Mantecado', description: 'El sabor clásico y cremoso', price: '$3.00', image: 'assets/images/cafe_product.png' },
      { name: 'Ron con Pasas', description: 'Con un toque de ron añejo', price: '$3.50', image: 'assets/images/cafe_product.png' },
      { name: 'Stracciatella', description: 'Helado de nata con chispas de chocolate', price: '$3.50', image: 'assets/images/cafe_product.png' },
      { name: 'Sorbete de Limón', description: 'Sorbete cítrico sin lácteos', price: '$2.50', image: 'assets/images/cafe_product.png' },
      { name: 'Mango', description: 'Helado tropical refrescante', price: '$3.00', image: 'assets/images/cafe_product.png' },
      { name: 'Dulce de Leche', description: 'Helado extra cremoso de arequipe', price: '$3.50', image: 'assets/images/cafe_product.png' }
    ],
    'Jugos': [
      { name: 'Zumo de Naranja', description: '100% natural, recién exprimido', price: '$2.50', image: 'assets/images/cafe_product.png' },
      { name: 'Detox Verde', description: 'Manzana, apio, espinaca y limón', price: '$3.50', image: 'assets/images/cafe_product.png' },
      { name: 'Jugo de Fresa', description: 'Jugoso y dulce, hecho en agua o leche', price: '$3.00', image: 'assets/images/cafe_product.png' },
      { name: 'Jugo de Mora', description: 'Rico en antioxidantes', price: '$3.00', image: 'assets/images/cafe_product.png' },
      { name: 'Jugo de Piña', description: 'Refrescante y digestivo', price: '$2.50', image: 'assets/images/cafe_product.png' },
      { name: 'Parchita (Maracuyá)', description: 'El auténtico sabor de la pasión', price: '$3.00', image: 'assets/images/cafe_product.png' },
      { name: 'Guanábana', description: 'Espeso, cremoso y natural', price: '$3.50', image: 'assets/images/cafe_product.png' },
      { name: 'Limonada con Menta', description: 'Limonada frapé con hojas de menta', price: '$2.50', image: 'assets/images/cafe_product.png' },
      { name: 'Jugo de Melón', description: 'Suave y dulce', price: '$2.50', image: 'assets/images/cafe_product.png' },
      { name: 'Batido Proteico', description: 'Banano, avena, mantequilla de maní y leche', price: '$4.50', image: 'assets/images/cafe_product.png' }
    ],
    'Comidas': [
      { name: 'Avocado Toast', description: 'Tostada, aguacate y huevo pochado', price: '$7.50', image: 'assets/images/cafe_hero.png' },
      { name: 'Ensalada César', description: 'Con aderezo casero y crutones', price: '$8.00', image: 'assets/images/cafe_hero.png' },
      { name: 'Sándwich de Pavo', description: 'Pavo ahumado, queso suizo y vegetales', price: '$6.50', image: 'assets/images/cafe_hero.png' },
      { name: 'Club House', description: 'Pollo, tocino, jamón, queso y papas', price: '$9.00', image: 'assets/images/cafe_hero.png' },
      { name: 'Wrap de Pollo', description: 'Pollo a la plancha, lechuga y salsa ranch', price: '$7.00', image: 'assets/images/cafe_hero.png' },
      { name: 'Hamburguesa Clásica', description: 'Carne de res, queso cheddar y papas', price: '$10.00', image: 'assets/images/cafe_hero.png' },
      { name: 'Ración de Tequeños', description: '6 deditos de queso con salsa tártara', price: '$5.00', image: 'assets/images/cafe_hero.png' },
      { name: 'Pasta Bolognesa', description: 'Pasta fresca con salsa de carne', price: '$8.50', image: 'assets/images/cafe_hero.png' },
      { name: 'Sopa del Día', description: 'Pregunta por nuestra crema del día', price: '$4.00', image: 'assets/images/cafe_hero.png' },
      { name: 'Tacos de Carne', description: '3 tacos suaves con guacamole', price: '$7.00', image: 'assets/images/cafe_hero.png' }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  get currentItems() {
    return this.menuItems[this.selectedCategory as keyof typeof this.menuItems] || [];
  }
}
