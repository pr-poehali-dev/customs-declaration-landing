import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="FileText" className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900">
                ТаможенПро
              </span>
            </div>
            <div className="flex space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                О нас
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Электронное декларирование
                <span className="text-blue-600"> без стресса</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональное оформление таможенных деклараций с гарантией
                качества. Экономьте время и деньги с нашими экспертами.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Получить консультацию
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Узнать стоимость
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 animate-scale-in">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mr-3"
                    />
                    <span className="text-sm text-gray-600">
                      Декларация готова
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-sm text-gray-600">
                      Обработка: 2 часа
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Shield"
                      className="h-5 w-5 text-blue-500 mr-3"
                    />
                    <span className="text-sm text-gray-600">
                      Гарантия качества
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг электронного декларирования для вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileText" className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Подача деклараций
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Быстрое и точное оформление таможенных деклараций через
                  электронную систему
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calculator" className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Расчет пошлин
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Точный расчет таможенных пошлин, налогов и сборов для вашего
                  товара
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Консультации
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Экспертные консультации по таможенному законодательству и
                  процедурам
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Сопровождение грузов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Полное сопровождение грузов через таможенную границу от А до Я
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileCheck" className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Проверка документов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Тщательная проверка и подготовка всех необходимых документов
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Headphones" className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Поддержка 24/7
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Круглосуточная поддержка клиентов для решения любых вопросов
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Как мы работаем
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Простой и понятный процесс от заявки до получения готовой
              декларации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Заявка</h3>
              <p className="text-gray-600">
                Оставляете заявку и отправляете документы
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Анализ</h3>
              <p className="text-gray-600">
                Изучаем документы и рассчитываем стоимость
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Оформление</h3>
              <p className="text-gray-600">
                Подготавливаем и подаём декларацию
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Результат</h3>
              <p className="text-gray-600">
                Получаете готовую декларацию и поддержку
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Свяжитесь с нами
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Готовы помочь с вашими таможенными вопросами. Оставьте заявку и
                получите консультацию в течение часа.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <Icon name="Phone" className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Icon name="Mail" className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@tamozhenpro.ru</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Icon name="MapPin" className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-gray-600">
                      Москва, ул. Таможенная, д. 15
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Получить консультацию</CardTitle>
                <CardDescription>
                  Оставьте заявку и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Имя
                    </label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Компания
                    </label>
                    <Input placeholder="Название компании" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Телефон
                  </label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Сообщение
                  </label>
                  <Textarea
                    placeholder="Опишите ваш вопрос или задачу"
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="FileText" className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-2xl font-bold">ТаможенПро</span>
              </div>
              <p className="text-gray-400">
                Профессиональные услуги электронного декларирования для вашего
                бизнеса
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Подача деклараций
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Расчет пошлин
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Консультации
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Сопровождение
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Лицензии
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Отзывы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Блог
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@tamozhenpro.ru</p>
                <p>Москва, ул. Таможенная, д. 15</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ТаможенПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
