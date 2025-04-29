
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FriendCard } from "./FriendCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Friend {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  important?: boolean;
}

// Создаем список важных друзей - родители и члены Избранной рады
const importantFriends: Friend[] = [
  {
    id: 1,
    name: "Василий III",
    role: "Отец, Великий князь Московский",
    imageUrl: "https://source.unsplash.com/random/200x200?king,medieval,crown&sig=1",
    important: true
  },
  {
    id: 2,
    name: "Елена Глинская",
    role: "Мать, Великая княгиня",
    imageUrl: "https://source.unsplash.com/random/200x200?queen,medieval,noble&sig=2",
    important: true
  },
  {
    id: 3,
    name: "Алексей Адашев",
    role: "Окольничий, член Избранной рады",
    imageUrl: "https://source.unsplash.com/random/200x200?nobleman,medieval,advisor&sig=3",
    important: true
  },
  {
    id: 4,
    name: "Сильвестр",
    role: "Священник, духовник, член Избранной рады",
    imageUrl: "https://source.unsplash.com/random/200x200?priest,orthodox,medieval&sig=4",
    important: true
  },
  {
    id: 5,
    name: "Андрей Курбский",
    role: "Воевода, князь, член Избранной рады",
    imageUrl: "https://source.unsplash.com/random/200x200?prince,medieval,warrior&sig=5",
    important: true
  },
  {
    id: 6,
    name: "Митрополит Макарий",
    role: "Митрополит Московский, наставник",
    imageUrl: "https://source.unsplash.com/random/200x200?bishop,orthodox,medieval&sig=6",
    important: true
  },
  {
    id: 7,
    name: "Малюта Скуратов",
    role: "Глава опричников, верный слуга",
    imageUrl: "https://source.unsplash.com/random/200x200?warrior,medieval,dark&sig=7",
    important: true
  },
  {
    id: 8,
    name: "Анастасия Романовна",
    role: "Первая жена, царица",
    imageUrl: "https://source.unsplash.com/random/200x200?queen,medieval,crown&sig=8",
    important: true
  }
];

// Генерируем имена для 200 воинов
const generateWarriorName = (index: number): string => {
  const firstNames = [
    "Александр", "Богдан", "Вадим", "Глеб", "Добрыня", "Елисей", "Захар", "Игнат", 
    "Федор", "Лука", "Макар", "Никита", "Олег", "Петр", "Ратмир", "Святослав", 
    "Тимофей", "Фома", "Харитон", "Чеслав", "Ярополк", "Мстислав", "Всеволод", "Изяслав"
  ];
  
  const lastNames = [
    "Орлов", "Соколов", "Волков", "Медведев", "Зайцев", "Лисицын", "Барсуков", "Кречетов",
    "Воронов", "Беркутов", "Голубев", "Коршунов", "Дроздов", "Соловьев", "Грачев", "Ястребов",
    "Речной", "Озерный", "Лесной", "Полевой", "Горный", "Холмов", "Овражный", "Степной", "Луговой"
  ];
  
  const firstNameIndex = Math.floor(Math.random() * firstNames.length);
  const lastNameIndex = Math.floor(Math.random() * lastNames.length);
  
  return `${firstNames[firstNameIndex]} ${lastNames[lastNameIndex]}`;
};

// Создаем список воинов
const warriors: Friend[] = Array.from({ length: 200 }).map((_, index) => ({
  id: index + 100,
  name: generateWarriorName(index),
  role: ["Стрелец", "Опричник", "Дружинник", "Воевода", "Копейщик", "Лучник"][Math.floor(Math.random() * 6)],
  imageUrl: "" // У воинов нет аватарок
}));

// Объединяем всех друзей в один список
const allFriends = [...importantFriends, ...warriors];

export const FriendsList = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Друзья {allFriends.length}</h2>
        <Button variant="outline">Найти друзей</Button>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="all">Все друзья</TabsTrigger>
          <TabsTrigger value="important">Избранное</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <ScrollArea className="h-[500px] border rounded-md p-4">
            <div className="grid grid-cols-2 gap-4">
              {allFriends.map(friend => (
                <FriendCard key={friend.id} friend={friend} />
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
        
        <TabsContent value="important">
          <div className="grid grid-cols-2 gap-4">
            {importantFriends.map(friend => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
