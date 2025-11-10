import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

interface MeterReading {
  date: string;
  coldWater: number;
  hotWater: number;
}

interface Payment {
  date: string;
  amount: number;
  status: string;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [coldWater, setColdWater] = useState('');
  const [hotWater, setHotWater] = useState('');

  const meterReadings: MeterReading[] = [
    { date: '01.10.2024', coldWater: 125, hotWater: 85 },
    { date: '01.09.2024', coldWater: 118, hotWater: 78 },
    { date: '01.08.2024', coldWater: 112, hotWater: 72 },
  ];

  const payments: Payment[] = [
    { date: '05.10.2024', amount: 1250, status: 'Оплачено' },
    { date: '05.09.2024', amount: 1180, status: 'Оплачено' },
    { date: '05.08.2024', amount: 1320, status: 'Оплачено' },
  ];

  const handleSubmitReadings = (e: React.FormEvent) => {
    e.preventDefault();
    if (coldWater && hotWater) {
      toast.success('Показания успешно переданы!');
      setColdWater('');
      setHotWater('');
    } else {
      toast.error('Заполните все поля');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary rounded-full p-2">
                <Icon name="Droplet" className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Водоканал</h1>
                <p className="text-sm text-gray-500">Личный кабинет</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <Button
                variant={activeTab === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('home')}
                className="gap-2"
              >
                <Icon name="Home" size={18} />
                Главная
              </Button>
              <Button
                variant={activeTab === 'services' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('services')}
                className="gap-2"
              >
                <Icon name="Wrench" size={18} />
                Услуги
              </Button>
              <Button
                variant={activeTab === 'readings' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('readings')}
                className="gap-2"
              >
                <Icon name="Gauge" size={18} />
                Показания
              </Button>
              <Button
                variant={activeTab === 'account' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('account')}
                className="gap-2"
              >
                <Icon name="User" size={18} />
                Кабинет
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center py-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Добро пожаловать в личный кабинет
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Управляйте своими услугами водоснабжения онлайн: передавайте показания, оплачивайте счета и просматривайте историю
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab('readings')}>
                <CardHeader>
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="Gauge" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Передать показания</CardTitle>
                  <CardDescription>Быстрая передача показаний счётчиков</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab('services')}>
                <CardHeader>
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="CreditCard" className="text-green-600" size={24} />
                  </div>
                  <CardTitle>Оплата услуг</CardTitle>
                  <CardDescription>Оплатите услуги водоснабжения онлайн</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab('account')}>
                <CardHeader>
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="FileText" className="text-purple-600" size={24} />
                  </div>
                  <CardTitle>История</CardTitle>
                  <CardDescription>Просмотр платежей и показаний</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Info" size={20} />
                  Информация о тарифах
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Холодная вода</h3>
                    <p className="text-3xl font-bold text-primary">35 ₽/м³</p>
                    <p className="text-sm text-gray-600">Действует с 01.01.2024</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Горячая вода</h3>
                    <p className="text-3xl font-bold text-primary">180 ₽/м³</p>
                    <p className="text-sm text-gray-600">Действует с 01.01.2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900">Услуги</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Droplet" className="text-primary" size={24} />
                    Водоснабжение
                  </CardTitle>
                  <CardDescription>Холодное и горячее водоснабжение</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-600" size={16} />
                      Круглосуточная подача воды
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-600" size={16} />
                      Качество соответствует СанПиН
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-600" size={16} />
                      Аварийная служба 24/7
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Wrench" className="text-primary" size={24} />
                    Водоотведение
                  </CardTitle>
                  <CardDescription>Приём и очистка сточных вод</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-600" size={16} />
                      Современные очистные сооружения
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-600" size={16} />
                      Качество соответствует СанПиН
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-600" size={16} />
                      Аварийная служба 24/7
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Phone" className="text-primary" size={24} />
                    Техподдержка
                  </CardTitle>
                  <CardDescription>Помощь и консультации</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-gray-600">Единая справочная служба:</p>
                  <p className="text-2xl font-bold text-primary">8-800-123-45-67</p>
                  <p className="text-sm text-gray-500">Звонок бесплатный, круглосуточно</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="AlertCircle" className="text-primary" size={24} />
                    Аварийная служба
                  </CardTitle>
                  <CardDescription>Сообщить об аварии</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-gray-600">Диспетчерская служба:</p>
                  <p className="text-2xl font-bold text-red-600">112</p>
                  <p className="text-sm text-gray-500">Круглосуточно, без выходных</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'readings' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900">Передача показаний счётчиков</h2>
            
            <Card className="max-w-2xl">
              <CardHeader>
                <CardTitle>Введите текущие показания</CardTitle>
                <CardDescription>
                  Показания принимаются с 20 по 25 число каждого месяца
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitReadings} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="coldWater" className="flex items-center gap-2">
                      <Icon name="Droplet" className="text-blue-500" size={18} />
                      Холодная вода (м³)
                    </Label>
                    <Input
                      id="coldWater"
                      type="number"
                      placeholder="Введите показания"
                      value={coldWater}
                      onChange={(e) => setColdWater(e.target.value)}
                      min="0"
                      step="0.001"
                    />
                    <p className="text-sm text-gray-500">
                      Предыдущие показания: {meterReadings[0].coldWater} м³
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hotWater" className="flex items-center gap-2">
                      <Icon name="Droplet" className="text-red-500" size={18} />
                      Горячая вода (м³)
                    </Label>
                    <Input
                      id="hotWater"
                      type="number"
                      placeholder="Введите показания"
                      value={hotWater}
                      onChange={(e) => setHotWater(e.target.value)}
                      min="0"
                      step="0.001"
                    />
                    <p className="text-sm text-gray-500">
                      Предыдущие показания: {meterReadings[0].hotWater} м³
                    </p>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Передать показания
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="max-w-2xl">
              <CardHeader>
                <CardTitle>История показаний</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {meterReadings.map((reading, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <Icon name="Calendar" className="text-gray-400" size={20} />
                        <span className="font-medium">{reading.date}</span>
                      </div>
                      <div className="flex gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <Icon name="Droplet" className="text-blue-500" size={16} />
                          <span>{reading.coldWater} м³</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Droplet" className="text-red-500" size={16} />
                          <span>{reading.hotWater} м³</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'account' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900">Личный кабинет</h2>

            <Tabs defaultValue="payments" className="space-y-6">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="payments">История платежей</TabsTrigger>
                <TabsTrigger value="info">Информация</TabsTrigger>
              </TabsList>

              <TabsContent value="payments" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>История платежей</CardTitle>
                    <CardDescription>Последние операции по вашему лицевому счёту</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {payments.map((payment, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center gap-4">
                            <div className="bg-green-100 p-2 rounded-full">
                              <Icon name="Check" className="text-green-600" size={20} />
                            </div>
                            <div>
                              <p className="font-medium">{payment.date}</p>
                              <p className="text-sm text-gray-500">{payment.status}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-gray-900">
                              {payment.amount} ₽
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Текущая задолженность</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-6">
                      <p className="text-5xl font-bold text-green-600 mb-2">0 ₽</p>
                      <p className="text-gray-500">Задолженность отсутствует</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="info" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Данные лицевого счёта</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Номер лицевого счёта</span>
                        <span className="font-medium">123456789</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Адрес</span>
                        <span className="font-medium">г. Москва, ул. Примерная, д. 1, кв. 10</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Владелец</span>
                        <span className="font-medium">Иванов Иван Иванович</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Количество прописанных</span>
                        <span className="font-medium">3 человека</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Установленные счётчики</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon name="Droplet" className="text-blue-500" size={24} />
                          <div>
                            <p className="font-medium">Холодная вода</p>
                            <p className="text-sm text-gray-500">№ВС123456</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Поверка до</p>
                          <p className="font-medium">15.06.2026</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon name="Droplet" className="text-red-500" size={24} />
                          <div>
                            <p className="font-medium">Горячая вода</p>
                            <p className="text-sm text-gray-500">№ГС789012</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Поверка до</p>
                          <p className="font-medium">22.08.2025</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </main>

      <footer className="bg-gray-50 border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Контакты</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  8-800-123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@vodokanal.ru
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Время работы</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Пн-Пт: 8:00 - 20:00</p>
                <p>Сб-Вс: 9:00 - 18:00</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Адрес</h3>
              <p className="text-sm text-gray-600">
                г. Москва, ул. Водопроводная, д. 1
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
            © 2024 Водоканал. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
