import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Heritage = () => {
  const landmarks = [
    {
      name: "Старинный особняк купца Иванова",
      description: "Памятник архитектуры XIX века, построенный в стиле русского модерна",
      image: "img/d991f696-ce5d-4870-88b6-be260cc9557c.jpg",
      year: "1895",
      status: "Охраняется государством"
    },
    {
      name: "Природный парк 'Зелёная долина'",
      description: "Уникальная экосистема с редкими видами растений и животных",
      image: "img/841fbbf3-4134-4ba8-a19a-ffa19b2fb126.jpg",
      year: "1978",
      status: "Заповедная зона"
    },
    {
      name: "Музей народных ремёсел",
      description: "Коллекция традиционных изделий местных мастеров",
      image: "img/548533df-1735-459a-92ba-ba11241da355.jpg",
      year: "1923",
      status: "Действующий музей"
    }
  ];

  const historyTimeline = [
    {
      year: "1147",
      event: "Первое упоминание в летописях",
      description: "Город впервые упоминается в исторических документах как торговое поселение"
    },
    {
      year: "1703",
      event: "Получение статуса города",
      description: "Указом Петра I поселение получило официальный статус города"
    },
    {
      year: "1856",
      event: "Строительство железной дороги",
      description: "Открытие железнодорожной ветки способствовало экономическому развитию"
    },
    {
      year: "1945",
      event: "Восстановление после войны",
      description: "Город был полностью восстановлен силами местных жителей"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Icon name="MapPin" size={32} className="text-primary" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">О родном крае</h1>
                <p className="text-xs text-gray-500">История и достопримечательности</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-primary font-medium">Главная</a>
              <a href="/heritage" className="text-primary font-medium">О родном крае</a>
              <a href="/appeals" className="text-gray-700 hover:text-primary font-medium">Обращения граждан</a>
              <a href="/creativity" className="text-gray-700 hover:text-primary font-medium">Творчество</a>
            </nav>

            <Button variant="outline" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наш родной край
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Земля с богатой историей, уникальными традициями и живописными 
              пейзажами. Здесь каждый камень хранит память о прошлых поколениях, 
              а каждая тропинка рассказывает свою историю.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Timeline */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            История нашего края
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/30"></div>
            
            <div className="space-y-8">
              {historyTimeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card>
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Badge variant="default">{item.year}</Badge>
                          {index % 2 !== 0 && <Icon name="Calendar" size={16} className="text-primary" />}
                        </div>
                        <CardTitle className="text-lg">{item.event}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{item.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative flex items-center justify-center w-8 h-8">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Landmarks */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Достопримечательности
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landmarks.map((landmark, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video">
                  <img 
                    src={landmark.image} 
                    alt={landmark.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{landmark.year}</Badge>
                    <Badge variant="outline">{landmark.status}</Badge>
                  </div>
                  <CardTitle className="text-lg">{landmark.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {landmark.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="w-full">
                    <Icon name="MapPin" size={16} className="mr-2" />
                    Показать на карте
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Наш край в цифрах</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">878</div>
                  <p className="text-sm text-gray-600">лет истории</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">125к</div>
                  <p className="text-sm text-gray-600">жителей</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">47</div>
                  <p className="text-sm text-gray-600">памятников архитектуры</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">12</div>
                  <p className="text-sm text-gray-600">природных заповедников</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Local Traditions */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Традиции и культура
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Music" size={24} className="text-primary" />
                  <span>Народные промыслы</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Гончарное дело</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Резьба по дереву</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Ткачество</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Кузнечное дело</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Calendar" size={24} className="text-primary" />
                  <span>Традиционные праздники</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Icon name="Sparkles" size={16} className="text-yellow-500" />
                    <span>Масленица (март)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Sparkles" size={16} className="text-yellow-500" />
                    <span>День города (август)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Sparkles" size={16} className="text-yellow-500" />
                    <span>Ярмарка мёда (сентябрь)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Sparkles" size={16} className="text-yellow-500" />
                    <span>Рождественские гуляния</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Heritage;