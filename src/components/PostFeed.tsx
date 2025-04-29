
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share, MapPin, MoreHorizontal } from "lucide-react";

interface Post {
  id: number;
  date: string;
  text: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  location?: string;
}

const posts: Post[] = [
  {
    id: 1,
    date: "16 января 1547",
    text: "Сегодня великий день! Венчался на царство и стал первым Царём всея Руси! 👑 Теперь официально - не просто великий князь, а ЦАРЬ!",
    image: "https://source.unsplash.com/random/800x600?coronation,tsar,ceremony",
    likes: 1547,
    comments: 328,
    shares: 543,
    location: "Успенский собор, Москва"
  },
  {
    id: 2,
    date: "9 октября 1552",
    text: "Казань взята! Наконец покорил Казанское ханство! Три осады и вот результат. Строим собор Василия Блаженного в честь победы. #ПокорениеКазани #РасширяемГраницы",
    image: "https://source.unsplash.com/random/800x600?kazan,castle,victory",
    likes: 2893,
    comments: 412,
    shares: 745,
    location: "Казань"
  },
  {
    id: 3,
    date: "2 марта 1556",
    text: "Астраханское ханство теперь часть России! Волга от истока до устья - наша русская река! 💪🇷🇺 #РусскиеРеки #НоваяТерритория",
    image: "https://source.unsplash.com/random/800x600?river,volga,conquest",
    likes: 1865,
    comments: 231,
    shares: 352,
  },
  {
    id: 4,
    date: "3 декабря 1564",
    text: "Устал от бояр и их вечных интриг! Покидаю Москву и еду в Александровскую слободу. Пусть поймут, кто тут настоящий хозяин. #ДостойныйОтвет #ОпричнинаСкоро",
    image: "https://source.unsplash.com/random/800x600?winter,sleigh,snow,forest",
    likes: 4251,
    comments: 827,
    shares: 923,
    location: "Александровская слобода"
  },
  {
    id: 5,
    date: "12 февраля 1565",
    text: "Объявил о создании опричнины! Теперь у меня есть личная гвардия, преданная только мне! Чёрные одежды, мётлы и собачьи головы - наши символы. Выметем измену из страны! 🧹🐺 #Опричнина #ВернаяСтража",
    image: "https://source.unsplash.com/random/800x600?black,horse,dark,army",
    likes: 3654,
    comments: 754,
    shares: 1122,
  },
  {
    id: 6,
    date: "5 мая 1571",
    text: "Крымский хан Девлет-Гирей сжёг Москву! 😤 Клянусь отомстить! Никто не смеет нападать на наши земли! #МыВернёмся #МщениеБудетСтрашным",
    image: "https://source.unsplash.com/random/800x600?fire,city,destruction",
    likes: 2735,
    comments: 892,
    shares: 675,
    location: "Москва"
  },
  {
    id: 7,
    date: "7 августа 1572",
    text: "Разгромили крымско-турецкое войско при Молодях! Это наш ответ на прошлогоднее нападение. Девлет-Гирей, получил по заслугам! 💪 #БитваПриМолодях #Возмездие",
    image: "https://source.unsplash.com/random/800x600?battle,victory,field",
    likes: 4123,
    comments: 593,
    shares: 871,
    location: "Молоди"
  },
  {
    id: 8,
    date: "24 ноября 1572",
    text: "Отменил опричнину. Она выполнила свою задачу. Теперь время сильной единой державы! #НоваяЭра",
    likes: 2187,
    comments: 334,
    shares: 542
  },
  {
    id: 9,
    date: "15 марта 1573",
    text: "Начал переписку с английской королевой Елизаветой I. Развиваем торговые связи! 📜✍️ #МеждународныеОтношения #Дипломатия",
    image: "https://source.unsplash.com/random/800x600?parchment,letter,crown",
    likes: 1854,
    comments: 286,
    shares: 431
  },
  {
    id: 10,
    date: "22 июня 1581",
    text: "Тяжелые времена. Сын мой Иван сильно болен после нашей ссоры. Молюсь за его здоровье. Не хочу его потерять... 😢",
    likes: 3462,
    comments: 1247,
    shares: 982
  },
  {
    id: 11,
    date: "18 марта 1584",
    text: "Чувствую себя неважно... Всё чаще задумываюсь о быстротечности жизни и о том, что оставлю после себя. Надеюсь, потомки поймут меня.",
    likes: 4582,
    comments: 1653,
    shares: 1247
  }
];

export const PostFeed = () => {
  return (
    <div className="space-y-4">
      <div className="rounded-md border p-4 bg-white">
        <div className="flex items-center">
          <Avatar className="w-10 h-10 mr-3">
            <img src="https://source.unsplash.com/random/200x200?tsar,crown,medieval" alt="Иван Грозный" />
          </Avatar>
          <textarea 
            placeholder="Что у вас нового, Иван?" 
            className="w-full rounded-md border border-gray-300 p-2 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
            rows={2}
          />
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm">
              <Camera className="w-4 h-4 mr-1 text-gray-600" />
              Фото
            </Button>
            <Button variant="ghost" size="sm">
              <MapPin className="w-4 h-4 mr-1 text-gray-600" />
              Отметить место
            </Button>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Опубликовать
          </Button>
        </div>
      </div>

      {posts.map(post => (
        <div key={post.id} className="border rounded-md p-4 bg-white">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <Avatar className="w-10 h-10 mr-3">
                <img src="https://source.unsplash.com/random/200x200?tsar,crown,medieval" alt="Иван Грозный" />
              </Avatar>
              <div>
                <p className="font-bold">Иван IV Грозный</p>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
          
          {post.location && (
            <div className="flex items-center mb-2 text-xs text-gray-500">
              <MapPin className="w-3 h-3 mr-1" />
              {post.location}
            </div>
          )}
          
          <p className="mb-3 text-sm">{post.text}</p>
          
          {post.image && (
            <img 
              src={post.image} 
              alt="Фото к посту" 
              className="w-full h-72 sm:h-96 object-cover rounded-md mb-3"
            />
          )}
          
          <div className="flex justify-between text-gray-500 text-xs py-2 border-t border-b">
            <span>❤️ {post.likes}</span>
            <span>📝 {post.comments} комментариев</span>
          </div>
          
          <div className="flex py-1 mt-1">
            <Button variant="ghost" className="flex-1 text-sm">
              <Heart className="w-4 h-4 mr-1" />
              Нравится
            </Button>
            <Button variant="ghost" className="flex-1 text-sm">
              <MessageCircle className="w-4 h-4 mr-1" />
              Комментировать
            </Button>
            <Button variant="ghost" className="flex-1 text-sm">
              <Share className="w-4 h-4 mr-1" />
              Поделиться
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
