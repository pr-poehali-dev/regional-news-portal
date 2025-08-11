import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Creativity = () => {
  const [activeTab, setActiveTab] = useState("gallery");

  const artworks = [
    {
      id: 1,
      title: "Пейзажи родного края",
      author: "Анна Петрова",
      category: "Живопись",
      description: "Серия картин, посвящённая красоте наших мест",
      image: "img/0b550048-3b8f-42fb-94d0-2032dca73ddc.jpg",
      date: "Август 2025",
      views: 147,
      likes: 23
    },
    {
      id: 2,
      title: "Народные промыслы",
      author: "Мастерская 'Умелые руки'",
      category: "Ремёсла",
      description: "Традиционная керамика и изделия из дерева",
      image: "img/657aa6aa-6c7f-4acd-b0b0-136971f39bfb.jpg",
      date: "Июль 2025",
      views: 89,
      likes: 31
    },
    {
      id: 3,
      title: "Фольклорный ансамбль",
      author: "Группа 'Золотые голоса'",
      category: "Музыка",
      description: "Исполнение традиционных песен нашего региона",
      image: "img/7f4c74d7-8006-40b1-bb94-ef07e0fc7585.jpg",
      date: "Июль 2025",
      views: 203,
      likes: 45
    }
  ];

  const events = [
    {
      title: "Выставка 'Краски осени'",
      date: "15-30 сентября",
      location: "Дом культуры",
      description: "Персональная выставка местных художников",
      status: "Предстоящее"
    },
    {
      title: "Мастер-класс по гончарному делу",
      date: "22 августа",
      location: "Центр ремёсел",
      description: "Обучение традиционным техникам работы с глиной",
      status: "Запись открыта"
    },
    {
      title: "Концерт народной музыки",
      date: "28 августа",
      location: "Центральная площадь",
      description: "Выступление местных музыкальных коллективов",
      status: "Предстоящее"
    }
  ];

  const contests = [
    {
      title: "Конкурс 'Моя малая родина'",
      category: "Фотография",
      deadline: "30 августа 2025",
      prize: "50 000 руб.",
      participants: 23,
      description: "Фотоконкурс на лучший снимок родного края"
    },
    {
      title: "Литературный конкурс 'Слово о родном крае'",
      category: "Поэзия и проза",
      deadline: "15 сентября 2025",
      prize: "30 000 руб.",
      participants: 15,
      description: "Конкурс стихов и рассказов о нашем регионе"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Icon name="Palette" size={32} className="text-primary" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Творчество</h1>
                <p className="text-xs text-gray-500">Искусство нашего региона</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-primary font-medium">Главная</a>
              <a href="/heritage" className="text-gray-700 hover:text-primary font-medium">О родном крае</a>
              <a href="/appeals" className="text-gray-700 hover:text-primary font-medium">Обращения граждан</a>
              <a href="/creativity" className="text-primary font-medium">Творчество</a>
            </nav>

            <Button variant="outline" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Творческое наследие региона
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Откройте для себя удивительные таланты нашего края. 
            Поддержите местных художников, мастеров и музыкантов.
          </p>
          <div className="flex justify-center space-x-4">
            <Button>
              <Icon name="Upload" size={16} className="mr-2" />
              Поделиться творчеством
            </Button>
            <Button variant="outline">
              <Icon name="Award" size={16} className="mr-2" />
              Участвовать в конкурсе
            </Button>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="gallery" className="flex items-center space-x-2">
              <Icon name="Image" size={16} />
              <span>Галерея</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center space-x-2">
              <Icon name="Calendar" size={16} />
              <span>События</span>
            </TabsTrigger>
            <TabsTrigger value="contests" className="flex items-center space-x-2">
              <Icon name="Award" size={16} />
              <span>Конкурсы</span>
            </TabsTrigger>
            <TabsTrigger value="submit" className="flex items-center space-x-2">
              <Icon name="Plus" size={16} />
              <span>Добавить</span>
            </TabsTrigger>
          </TabsList>

          {/* Gallery Tab */}
          <TabsContent value="gallery">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artworks.map((artwork) => (
                <Card key={artwork.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{artwork.category}</Badge>
                      <span className="text-sm text-gray-500">{artwork.date}</span>
                    </div>
                    <CardTitle className="text-lg">{artwork.title}</CardTitle>
                    <CardDescription>
                      <span className="font-medium">Автор:</span> {artwork.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{artwork.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <Icon name="Eye" size={14} />
                          <span>{artwork.views}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Icon name="Heart" size={14} />
                          <span>{artwork.likes}</span>
                        </span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Icon name="Share" size={14} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline">
                Загрузить ещё
                <Icon name="ArrowDown" size={16} className="ml-2" />
              </Button>
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant={event.status === 'Запись открыта' ? 'default' : 'outline'}>
                          {event.status}
                        </Badge>
                        <Icon name="Calendar" size={16} className="text-primary" />
                      </div>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <CardDescription>
                        <div className="space-y-1">
                          <p className="flex items-center space-x-2">
                            <Icon name="Clock" size={14} />
                            <span>{event.date}</span>
                          </p>
                          <p className="flex items-center space-x-2">
                            <Icon name="MapPin" size={14} />
                            <span>{event.location}</span>
                          </p>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <Button className="w-full" variant={event.status === 'Запись открыта' ? 'default' : 'outline'}>
                        {event.status === 'Запись открыта' ? 'Записаться' : 'Узнать больше'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Contests Tab */}
          <TabsContent value="contests">
            <div className="space-y-6">
              {contests.map((contest, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{contest.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <Badge variant="outline">{contest.category}</Badge>
                          <span className="flex items-center space-x-1">
                            <Icon name="Users" size={14} />
                            <span>{contest.participants} участников</span>
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary mb-1">{contest.prize}</div>
                        <div className="text-sm text-gray-500">призовой фонд</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{contest.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Icon name="Clock" size={14} />
                        <span>До {contest.deadline}</span>
                      </div>
                      <Button>
                        <Icon name="Trophy" size={16} className="mr-2" />
                        Участвовать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Lightbulb" size={24} className="text-primary" />
                    <span>Предложите свой конкурс</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Есть идея для творческого конкурса? Поделитесь ей с нами!
                  </p>
                  <Button variant="outline">
                    <Icon name="MessageSquare" size={16} className="mr-2" />
                    Предложить идею
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Submit Tab */}
          <TabsContent value="submit">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Upload" size={24} className="text-primary" />
                    <span>Поделиться творчеством</span>
                  </CardTitle>
                  <CardDescription>
                    Загрузите свою работу, чтобы поделиться ей с сообществом
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="author">Имя автора *</Label>
                        <Input id="author" placeholder="Ваше имя или псевдоним" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Категория *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите категорию" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="painting">Живопись</SelectItem>
                            <SelectItem value="crafts">Ремёсла</SelectItem>
                            <SelectItem value="music">Музыка</SelectItem>
                            <SelectItem value="photography">Фотография</SelectItem>
                            <SelectItem value="literature">Литература</SelectItem>
                            <SelectItem value="other">Другое</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="title">Название работы *</Label>
                      <Input id="title" placeholder="Как называется ваша работа?" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Описание</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Расскажите о своей работе, технике, идее..."
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="file">Файл работы</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                        <Icon name="Upload" size={48} className="mx-auto text-gray-400 mb-4" />
                        <p className="text-gray-600 mb-2">Перетащите файл сюда или нажмите для выбора</p>
                        <p className="text-sm text-gray-500">Поддерживаются: JPG, PNG, PDF, MP3, MP4 до 10 МБ</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Button type="submit" className="flex-1">
                        <Icon name="Send" size={16} className="mr-2" />
                        Опубликовать работу
                      </Button>
                      <Button type="button" variant="outline">
                        <Icon name="Eye" size={16} className="mr-2" />
                        Предварительный просмотр
                      </Button>
                    </div>

                    <div className="text-sm text-gray-500">
                      <p>* Обязательные поля</p>
                      <p>Работа будет опубликована после модерации</p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Creativity;