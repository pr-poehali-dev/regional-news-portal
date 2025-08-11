import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Appeals = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    subject: '',
    message: '',
    district: ''
  });

  const recentAppeals = [
    {
      id: "2025001",
      title: "Ремонт дороги на ул. Садовой",
      category: "ЖКХ",
      status: "В работе",
      date: "10 августа",
      author: "А.Петров"
    },
    {
      id: "2025002",
      title: "Освещение в парке Победы",
      category: "Благоустройство",
      status: "Решено",
      date: "8 августа",
      author: "М.Сидорова"
    },
    {
      id: "2025003",
      title: "График работы поликлиники",
      category: "Здравоохранение",
      status: "Рассматривается",
      date: "7 августа",
      author: "В.Иванов"
    }
  ];

  const categories = [
    { value: "housing", label: "ЖКХ", icon: "Home" },
    { value: "transport", label: "Транспорт", icon: "Car" },
    { value: "education", label: "Образование", icon: "GraduationCap" },
    { value: "healthcare", label: "Здравоохранение", icon: "Heart" },
    { value: "environment", label: "Экология", icon: "TreePine" },
    { value: "social", label: "Социальная сфера", icon: "Users" },
    { value: "other", label: "Другое", icon: "MessageSquare" }
  ];

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Решено": return "default";
      case "В работе": return "secondary";
      case "Рассматривается": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Icon name="MessageSquare" size={32} className="text-primary" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Обращения граждан</h1>
                <p className="text-xs text-gray-500">Ваш голос важен</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-primary font-medium">Главная</a>
              <a href="/heritage" className="text-gray-700 hover:text-primary font-medium">О родном крае</a>
              <a href="/appeals" className="text-primary font-medium">Обращения граждан</a>
              <a href="/creativity" className="text-gray-700 hover:text-primary font-medium">Творчество</a>
            </nav>

            <Button variant="outline" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ваше мнение важно
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Здесь вы можете обратиться к местной администрации с вопросами, 
            предложениями и проблемами. Мы рассматриваем каждое обращение 
            и стремимся решить вопросы максимально оперативно.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Appeal Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Edit" size={24} className="text-primary" />
                  <span>Подать обращение</span>
                </CardTitle>
                <CardDescription>
                  Заполните форму ниже, и мы рассмотрим ваше обращение в установленные сроки
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя и фамилия *</Label>
                      <Input 
                        id="name"
                        placeholder="Введите ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input 
                        id="phone"
                        type="tel"
                        placeholder="+7 (000) 000-00-00"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="district">Район</Label>
                      <Select value={formData.district} onValueChange={(value) => setFormData({...formData, district: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите район" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="center">Центральный</SelectItem>
                          <SelectItem value="north">Северный</SelectItem>
                          <SelectItem value="south">Южный</SelectItem>
                          <SelectItem value="east">Восточный</SelectItem>
                          <SelectItem value="west">Западный</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Категория обращения *</Label>
                    <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat.value} value={cat.value}>
                            <div className="flex items-center space-x-2">
                              <Icon name={cat.icon} size={16} />
                              <span>{cat.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Тема обращения *</Label>
                    <Input 
                      id="subject"
                      placeholder="Кратко опишите суть вопроса"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Описание проблемы *</Label>
                    <Textarea 
                      id="message"
                      placeholder="Подробно опишите ситуацию, укажите адрес при необходимости"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    <Button type="submit" className="flex-1 md:flex-none">
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить обращение
                    </Button>
                    <Button type="button" variant="outline">
                      <Icon name="Paperclip" size={16} className="mr-2" />
                      Приложить файл
                    </Button>
                  </div>

                  <div className="text-sm text-gray-500 space-y-1">
                    <p>* Обязательные поля для заполнения</p>
                    <p>Срок рассмотрения обращения: до 30 рабочих дней</p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Appeals */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span>Последние обращения</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAppeals.map((appeal, index) => (
                    <div key={appeal.id}>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">#{appeal.id}</Badge>
                          <Badge variant={getStatusBadgeVariant(appeal.status)} className="text-xs">
                            {appeal.status}
                          </Badge>
                        </div>
                        <h4 className="font-medium text-sm leading-tight">{appeal.title}</h4>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{appeal.category}</span>
                          <span>{appeal.date}</span>
                        </div>
                      </div>
                      {index < recentAppeals.length - 1 && <Separator className="my-4" />}
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-4">
                  Все обращения
                  <Icon name="ArrowRight" size={14} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Categories Help */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="HelpCircle" size={20} className="text-primary" />
                  <span>Категории обращений</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categories.slice(0, 4).map((category) => (
                    <div key={category.value} className="flex items-center space-x-3">
                      <Icon name={category.icon} size={16} className="text-primary" />
                      <span className="text-sm">{category.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>Контакты</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-gray-400" />
                    <div>
                      <p className="font-medium">Приёмные часы:</p>
                      <p className="text-gray-600">Пн-Пт: 9:00-18:00</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} className="text-gray-400" />
                    <div>
                      <p className="font-medium">Телефон:</p>
                      <p className="text-gray-600">+7 (xxx) xxx-xx-xx</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={16} className="text-gray-400" />
                    <div>
                      <p className="font-medium">Адрес:</p>
                      <p className="text-gray-600">ул. Советская, 10</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Appeals;