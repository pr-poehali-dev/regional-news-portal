import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const topNews = {
    title: "Региональный бюджет на 2025 год принят в первом чтении",
    description: "Депутаты областного собрания одобрили основные статьи расходов на будущий год. Особое внимание уделено социальным программам и развитию инфраструктуры.",
    image: "img/548533df-1735-459a-92ba-ba11241da355.jpg",
    category: "Власть",
    date: "11 августа 2025",
    readTime: "3 мин"
  };

  const regularNews = [
    {
      title: "Новый детский сад откроется в микрорайоне Северный",
      description: "Современное здание рассчитано на 120 детей. Открытие запланировано на сентябрь.",
      image: "img/07302a03-142b-4cb7-9147-1af59c9bc54d.jpg",
      category: "Общество",
      date: "11 августа",
      readTime: "2 мин"
    },
    {
      title: "Фестиваль народных ремёсел пройдёт в выходные",
      description: "Мастера со всего региона покажут свои работы на главной площади города.",
      image: "img/e26932b8-e7c0-4be0-8f73-840c80823c48.jpg",
      category: "Культура",
      date: "10 августа",
      readTime: "2 мин"
    },
    {
      title: "Ремонт дороги на улице Центральной завершён",
      description: "Работы по обновлению дорожного покрытия заняли три недели.",
      image: "img/548533df-1735-459a-92ba-ba11241da355.jpg",
      category: "ЖКХ",
      date: "10 августа",
      readTime: "1 мин"
    },
    {
      title: "Местная команда вышла в финал областного турнира",
      description: "Футбольная команда 'Регион' одержала победу в полуфинале со счётом 2:1.",
      image: "img/07302a03-142b-4cb7-9147-1af59c9bc54d.jpg",
      category: "Спорт",
      date: "9 августа",
      readTime: "2 мин"
    },
    {
      title: "Погода на выходные: солнечно и тепло",
      description: "Синоптики обещают комфортную погоду для отдыха на природе.",
      image: "img/e26932b8-e7c0-4be0-8f73-840c80823c48.jpg",
      category: "Погода",
      date: "9 августа",
      readTime: "1 мин"
    }
  ];

  const sections = [
    { name: "О родном крае", icon: "MapPin", description: "История и достопримечательности" },
    { name: "Обращения граждан", icon: "MessageSquare", description: "Ваш голос важен" },
    { name: "Творчество", icon: "Palette", description: "Искусство нашего региона" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Icon name="Newspaper" size={32} className="text-primary" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Региональные вести</h1>
                <p className="text-xs text-gray-500">Новости нашего края</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary font-medium">Главная</a>
              <a href="#heritage" className="text-gray-700 hover:text-primary font-medium">О родном крае</a>
              <a href="#appeals" className="text-gray-700 hover:text-primary font-medium">Обращения граждан</a>
              <a href="#creativity" className="text-gray-700 hover:text-primary font-medium">Творчество</a>
            </nav>

            <Button variant="outline" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top News */}
        <section className="mb-12">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={topNews.image} 
                  alt={topNews.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Badge variant="default">{topNews.category}</Badge>
                  <span className="text-sm text-gray-500">{topNews.date}</span>
                  <span className="text-sm text-gray-500">• {topNews.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-tight">
                  {topNews.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {topNews.description}
                </p>
                <Button>
                  Читать полностью
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Grid */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Последние новости</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regularNews.map((news, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary" className="text-xs">{news.category}</Badge>
                      <span className="text-xs text-gray-500">{news.date}</span>
                    </div>
                    <CardTitle className="text-lg leading-tight hover:text-primary cursor-pointer">
                      {news.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="mb-3">
                      {news.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{news.readTime}</span>
                      <Button variant="ghost" size="sm">
                        <Icon name="ArrowRight" size={14} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Star" size={20} className="text-yellow-500" />
                  <span>Разделы</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {sections.map((section, index) => (
                  <div key={index}>
                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <Icon name={section.icon} size={20} className="text-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900">{section.name}</h4>
                        <p className="text-sm text-gray-600">{section.description}</p>
                      </div>
                    </div>
                    {index < sections.length - 1 && <Separator className="my-2" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Calendar" size={20} className="text-primary" />
                  <span>События</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                      15 АВГ
                    </div>
                    <div>
                      <p className="text-sm font-medium">День города</p>
                      <p className="text-xs text-gray-500">Центральная площадь</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-gray-400 text-white text-xs font-bold px-2 py-1 rounded">
                      20 АВГ
                    </div>
                    <div>
                      <p className="text-sm font-medium">Ярмарка мёда</p>
                      <p className="text-xs text-gray-500">Парк культуры</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>Контакты</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} className="text-gray-400" />
                    <span>news@region.ru</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} className="text-gray-400" />
                    <span>+7 (xxx) xxx-xx-xx</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Icon name="MapPin" size={16} className="text-gray-400" />
                    <span>ул. Центральная, 1</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Newspaper" size={24} className="text-white" />
                <span className="font-bold">Региональные вести</span>
              </div>
              <p className="text-gray-300 text-sm">
                Оперативные новости и события нашего региона
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">О родном крае</a></li>
                <li><a href="#" className="hover:text-white">Обращения граждан</a></li>
                <li><a href="#" className="hover:text-white">Творчество</a></li>
                <li><a href="#" className="hover:text-white">Архив</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Власть</a></li>
                <li><a href="#" className="hover:text-white">Общество</a></li>
                <li><a href="#" className="hover:text-white">Культура</a></li>
                <li><a href="#" className="hover:text-white">Спорт</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <Icon name="Instagram" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 Региональные вести. Все права защищены.</p>
            <p>Сделано с ❤️ для нашего региона</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;